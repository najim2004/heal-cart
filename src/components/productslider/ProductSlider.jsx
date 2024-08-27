import React from "react";
import ProductCard from "../ui/ProductCard";

const ProductSlider = () => {
  return (
    <div className="grid grid-cols-5 gap-4 mt-10">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductSlider;
