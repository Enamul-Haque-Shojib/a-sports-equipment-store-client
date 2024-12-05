import React, { useContext, useEffect, useState } from 'react';
import Category from '../Category/Category';
import { AuthContext } from '../../Provider/AuthProvider';

const Categories = () => {
    // const {} = useContext(AuthContext);
    const [categories, setCategories] = useState([]);


useEffect(() =>{
    const fetchData = async()=>{
        const response = await fetch('http://localhost:5000/api/categories/');
        const data = await response.json();
        setCategories(data.data);
    }
    fetchData();

   
},[]);


const handleCategories=(category)=>{
        

      
}
  
  




    return (
        <div className='border lg:w-[20%] w-full p-3 flex flex-col gap-y-5 rounded-xl'>


      {
      categories.map((category) => (
            <Category 
            key={category._id}
            category={category}
            handleCategories = {handleCategories}
            ></Category>
        ))
      }
  

  

     

        </div>
    );
};

export default Categories;