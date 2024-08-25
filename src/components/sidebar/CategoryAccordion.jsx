"use client";
import React, { useState } from "react";
const CategoryAccordion = ({ categories }) => {
  const [openCategoryId, setOpenCategoryId] = useState(null);

  const handleCategoryClick = (id) => {
    setOpenCategoryId(openCategoryId === id ? null : id);
  };

  return (
    <div className="space-y-1 text-xl font-medium">
      {categories.map((category) => (
        <div key={category.id} className="">
          <button
            onClick={() => handleCategoryClick(category.id)}
            className="flex items-center justify-between w-full px-4 py-1"
          >
            <span className="">{category.name}</span>
          </button>
          {openCategoryId === category.id && (
            <div className="px-4">
              {category.subcategories.length > 0 ? (
                <ul className="space-y-1 text-lg">
                  {category.subcategories.map((sub) => (
                    <li
                      key={sub.id}
                      className="flex ml-5 items-center space-x-2"
                    >
                      <span className="">{sub.name}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="">No subcategories available</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryAccordion;
