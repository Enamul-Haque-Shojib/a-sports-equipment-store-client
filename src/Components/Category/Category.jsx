import React from 'react';

const Category = ({category}) => {
    const {_id, categoryName} = category;

    return (
        <div onClick={()=>{handleCategories(name)}} className='border '>
            <h1>{categoryName}</h1>
        </div>
    );
};

export default Category;