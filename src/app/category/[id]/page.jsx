"use client";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/ui/ProductCard";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";

const Products = () => {
  const isOpenSidebar = useSelector((state) => state?.sidebar?.isOpen);
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data } = useQuery({
    queryKey: [`all-${id}-products`],
    queryFn: async () => {
      const response = await axiosPublic.get("api/products", {
        params: { category_name: `${id}` },
      });
      return response.data;
    },
  });

  return (
    <Container>
      <div
        className={`transition-all duration-500 ${
          isOpenSidebar ? "ml-64 max-w-[956px]" : "ml-0 w-full"
        }`}
      >
        <h2 className="text-xl font-semibold flex items-center gap-4 my-4">
          <Link href={"/"}>Home</Link> <MdOutlineKeyboardArrowRight />
          Category
          <MdOutlineKeyboardArrowRight />
          <span className="text-gray-500">{data?.category_name}</span>
        </h2>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 transition-all duration-500 ${
            isOpenSidebar ? "lg:grid-cols-4" : "lg:grid-cols-5"
          }`}
        >
          {data?.products?.map((product) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Products;
