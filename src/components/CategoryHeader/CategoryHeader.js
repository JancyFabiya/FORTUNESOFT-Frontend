import React from 'react';
import './CategoryHeader.css';

const CategoryHeader = ({ category }) => {
  return (
    <div className="category-header">
      <h2>{category}</h2>
    </div>
  );
};

export default CategoryHeader;
