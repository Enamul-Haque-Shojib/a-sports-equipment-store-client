
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    
    if(loading){
        return <div className='w-[5%] mx-auto'><span className="loading loading-bars loading-lg"></span></div>
    }
    if(user){
        return children;
    }
    return (
        <>
            <Navigate to='/login'></Navigate>
        </>
    );
};

export default PrivateRoutes;