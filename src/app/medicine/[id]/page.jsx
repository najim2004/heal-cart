"use client";
import Container from "@/components/ui/Container";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";

const ProductDetails = () => {
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
      <div className={`mt-7 flex justify-between`}>
        <div className="bg-primary/10 w-[700px] h-[400px] rounded-lg"></div>
        <div className="">
          <h3>{product?.medicine_name}</h3>
          <p className="mt-2 mb-1 text-sm text-primary">
            {product?.generic_name}
          </p>
          <p className="text-sm text-gray-500">{product?.manufacturer_name}</p>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
