import React, { useContext, useEffect, useState } from 'react';
import Category from '../Category/Category';
import { AuthContext } from '../../Provider/AuthProvider';

const Categories = ({handleCategories}) => {

    const {categories} = useContext(AuthContext);


  
return (
    <div className="bg-gray-100 p-5 rounded-lg shadow-lg lg:w-[20%] w-full">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Categories</h2>
      <div className="flex flex-col gap-4">
        {categories.map((category) => (
          <Category
            key={category._id}
            category={category}
            handleCategories={handleCategories}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;