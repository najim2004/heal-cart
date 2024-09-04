"use client";
import Container from "@/components/ui/Container";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const ProductDetails = () => {
  const [MRP, setMRP] = useState(0);
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data: product } = useQuery({
    enabled: !!id,
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await axiosPublic.get(`api/product/${id}`);
      return response.data.product;
    },
  });
  console.log(product);
  return (
    <Container>
      <div className={`mt-7 flex justify-between gap-10`}>
        <div className="bg-primary/10 w-[700px] h-[400px] rounded-lg overflow-hidden">
          <Image
            src={`https://api.medeasy.health${product?.medicine_image}`}
            alt=""
            width={500}
            height={150}
            className="size-full"
          />
        </div>
        <div className="border border-primary flex-grow rounded-lg p-6 max-w-[460px]">
          <div className="space-y-2">
            <h3 className="text-xl font-bold pb-1">{product?.medicine_name}</h3>
            <p className="text-gray-400 text-sm">{product?.category_name}</p>
            <p className="mt-2 text-sm text-primary">{product?.generic_name}</p>
            <p className="text-sm text-gray-500">
              {product?.manufacturer_name}
            </p>
            <p className="text-lg font-semibold text-gray-500">MRP ট {MRP}</p>
            <p className="text-lg font-semibold">
              Best Price <span className="text-xl">TK</span>
              {}
            </p>
          </div>
          <div className="space-y-3 mt-6">
            <select
              className="w-full h-12 border border-primary bg-primary/10 rounded-lg p-2 outline-none text-center text-lg font-semibold text-gray-500"
              name=""
              id=""
            >
              {product?.unit_prices?.map((unit_price, idx) => (
                <option key={idx} value="idx">
                  {unit_price?.unit}
                </option>
              ))}
            </select>
            <div className="flex justify-center items-center gap-10 w-full h-12 border border-primary bg-primary/10 rounded-lg text-xl font-semibold text-gray-500">
              <button
                onClick={() => setCount(count === 1 ? 1 : count - 1)}
                className="px-2"
              >
                -
              </button>
              <span className="min-w-10 flex justify-center items-center">
                {count}
              </span>
              <button onClick={() => setCount(count + 1)} className="px-2">
                +
              </button>
            </div>
            <button className="w-full h-12  bg-primary rounded-lg text-xl font-semibold text-white">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
