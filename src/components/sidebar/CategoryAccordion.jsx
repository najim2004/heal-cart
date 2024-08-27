"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const CategoryAccordion = ({ categories }) => {
  const [openCategoryId, setOpenCategoryId] = useState(null);

  const handleCategoryClick = (category) => {
    if (category.subcategories.length <= 0) console.log(category.name);
    if (category?.id)
      setOpenCategoryId(openCategoryId === category?.id ? null : category?.id);
  };

  return (
    <div className="space-y-1 text-lg font-medium">
      {categories.map((category) => (
        <div key={category.id} className="">
          <button
            onClick={() => handleCategoryClick(category)}
            className="flex items-center justify-between w-full px-4 py-1"
          >
            <span className="flex items-center gap-4">
              <Image src={category?.image} alt="" width={30} height={40} />
              {category.name}
            </span>
            <MdOutlineKeyboardArrowRight />
          </button>
          {openCategoryId === category.id && (
            <div className="px-4">
              {category.subcategories.length > 0 && (
                <ul className="space-y-1 text-base">
                  {category.subcategories.map((sub) => (
                    <li
                      key={sub.id}
                      className="flex ml-5 items-center space-x-2"
                    >
                      <span className="">{sub.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryAccordion;
