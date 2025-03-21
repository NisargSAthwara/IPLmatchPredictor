// src/components/Categories/Categories.jsx
import React from "react";
import "./Categories.css"; // Import regular CSS

function Categories() {
  const categories = ["IPL", "ICC", "ODI", "Test Matches", "T20"];

  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="categoryList">
        {categories.map((category, index) => (
          <span key={index} className="category">
            {category}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Categories;
