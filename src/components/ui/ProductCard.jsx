"use client";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const router = useRouter();
  const { data } = useSession();
  const axiosSecure = useAxiosPublic();
  const queryClient = useQueryClient();

  const {
    _id,
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
      : 0;
  const discountedPrice = (price - discountPrice).toFixed(2);

  /*
userId:"66e7114d070d34787932b79b"
items:[
  {
  quantity:3,
  unit:'pieces',
  price:999.99
  generic_name:"Latest model with A15 Bionic chip",
  medicine_image:"https://example.com/images/iphone14.jpg",
  medicine_name:"Apple iPhone 14",
  product_id:"66e7114d070d34787932b79c"
  }
]
*/

  const { mutateAsync } = useMutation({
    mutationFn: async (productId) => {
      const product = {
        quantity: 1,
        unit: unit_prices[0]?.unit || null,
        price: discountedPrice,
        generic_name,
        medicine_image,
        medicine_name,
        product_id: productId,
      };
      try {
        const response = await axiosSecure.post(`api/cart/${data?.user?.id}`, {
          product,
        });
        return response.data;
      } catch (error) {
        console.error("Error adding item:", error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["cart", data?.user?.id, axiosSecure]);
      toast.success("successfully added to the cart!");
    },
  });
  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (data?.user?.id) mutateAsync(_id);
    else toast.error("Please login first!");
  };
  return (
    <div
      onClick={() => router.push(`/medicine/${product._id}`)}
      className="cursor-pointer h-[300px] max-w-[224px] mx-auto bg-gray-50 p-2 rounded-lg flex flex-col"
    >
      <div className="w-full max-h-[150px] bg-primary/10 rounded-md overflow-hidden">
        <Image
          src={`https://api.medeasy.health${medicine_image}`}
          alt=""
          width={500}
          height={150}
          className="w-full h-full"
        />
      </div>
      <div className="mt-2 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="font-semibold line-clamp-2">{medicine_name}</h3>
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
