"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProductCard = ({ product }) => {
  const router = useRouter();
  const {
    medicine_name,
    category_name,
    manufacturer_name,
    strength,
    generic_name,
    medicine_image,
    is_available,
    unit_prices,
    discount_value,
    discount = [],
  } = product;
  const price = unit_prices?.length > 0 ? parseFloat(unit_prices[0]?.price) : 0;
  const discountPrice =
    discount?.value || discount_value
      ? price *
        (parseFloat(discount?.value ? discount?.value : discount_value) / 100)
      : price;
  const discountedPrice = (price - discountPrice).toFixed(2);
  const handleClick = () => {
    router.push(`/medicine/${product._id}`);
  };
  const handleAddToCart = (e) => {
    e.stopPropagation();
    console.log("add to cart");
  };
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer h-[335px] max-w-[224px] mx-auto bg-gray-50 p-2 rounded-lg flex flex-col"
    >
      <div className="w-full h-[150px] bg-primary/10 rounded-md overflow-hidden">
        <Image
          src={`https://api.medeasy.health${medicine_image}`}
          alt=""
          width={500}
          height={150}
          className="size-full"
        />
      </div>
      <div className="mt-2 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="font-semibold">{medicine_name}</h3>
          <p className="mt-2 mb-1 text-sm text-primary">{generic_name}</p>
          <p className="text-sm text-gray-500">{manufacturer_name}</p>
        </div>
        <div className="mt-3 flex justify-between">
          <div className="flex flex-col">
            <span className="font-semibold text-base">ট {discountedPrice}</span>
            <span className="text-sm line-through">ট {price}</span>
          </div>
          {is_available ? (
            <button
              onClick={handleAddToCart}
              className="active:scale-95 duration-500 px-1 font-semibold rounded-lg text-primary h-8 bg-primary/5 border-primary border text-xs"
            >
              Add to Cart
            </button>
          ) : (
            <span className="px-1 font-semibold rounded-lg text-primary h-8 bg-primary/5 border-primary border text-xs flex justify-center items-center">
              Unavailable
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
