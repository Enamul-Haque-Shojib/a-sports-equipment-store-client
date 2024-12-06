import { createUserWithEmailAndPassword, deleteUser, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.init';


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    
    const [loading, setLoading] = useState(true);
   
    const [categories, setCategories] = useState([]);
    const [equipments, setEquipments] = useState([]);


    useEffect(() => {
        const fetchData = async()=>{
          const response = await fetch(`https://a-sports-equipment-store-server-side.vercel.app/api/categories`);
          const data = await response.json();
          setCategories(data.data);
        
      }
      fetchData();
      const fetchData2 = async () => {
        const response = await fetch('https://a-sports-equipment-store-server-side.vercel.app/api/equipments/');
        const data = await response.json();
        setEquipments(data.data);
    };
    fetchData2();
      },[])

    
    

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const passwordReset = (email) =>{
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }
    const updateUserProfile = (newUser,displayName=null, photoURL=null) =>{
            return updateProfile(newUser, {displayName, photoURL});
    }
    const deleteUserProfile = () =>{
            return deleteUser(auth.currentUser);
    }

    const signInWithGoogle =()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser =()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            if(currentUser){
                // console.log('current user logged in', currentUser)
                setUser(currentUser);
                setLoading(false)
            }else{
                // console.log('current user not logged in')
                setUser(null);
                setLoading(false)
            }
        });
        return ()=>{
            unSubscribe();
        }
    },[]);

    
    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signInUser,
        passwordReset,
        updateUserProfile,
        signInWithGoogle,
        signOutUser,
        deleteUserProfile,
        categories,
        setCategories,
        equipments,
        setEquipments

        

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;