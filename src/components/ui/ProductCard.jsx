import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div className="min-h-[100px] bg-gray-50 p-2 rounded-lg">
      <div className="w-full h-[150px] bg-primary/10 rounded-md overflow-hidden">
        <Image src={""} alt="" width={500} height={200} />
      </div>
      <div className="mt-2 flex flex-col">
        <div className="flex-grow">
          <h3 className="font-semibold">Napa</h3>
          <p className="mt-2 mb-1 text-sm text-primary">Paracetamol</p>
          <p className="text-sm text-gray-500">Baximco Pharmaceuticals Ltd</p>
        </div>
        <div className="mt-3 flex justify-between">
          <div className="flex flex-col">
            <span className="font-semibold text-base">ট 100</span>
            <span className="text-sm line-through">ট 150</span>
          </div>
          <button className="px-1 font-semibold rounded-lg text-primary h-8 bg-primary/5 border-primary border text-xs">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
