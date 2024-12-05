import React from 'react';

const Category = ({category, handleCategories}) => {
    const {_id, categoryName} = category;

    return (
        <div
          onClick={() => handleCategories(categoryName)}
          className="p-3 bg-white border rounded-lg shadow-sm cursor-pointer hover:shadow-md transition"
        >
          <h3 className="text-gray-800 font-medium">{categoryName}</h3>
        </div>
      );
};

export default Category;