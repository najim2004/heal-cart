import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ProductCard from "../ui/ProductCard";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ProductSlider = ({ category_name }) => {
  const axiosPublic = useAxiosPublic();
  const { data } = useQuery({
    queryKey: [category_name],
    queryFn: async () => {
      const response = await axiosPublic.get("api/products", {
        params: { category_name: `${category_name}` },
      });
      return response.data;
    },
  });
  return (
    <div className="mt-10 z-10">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">{data?.category_name}</h2>
        <Link
          href={`/category/${category_name}`}
          className="text-blue-500 hover:underline"
        >
          See All
        </Link>
      </div>
      <div className="mt-5 relative">
        <Swiper
          slidesPerView={1} // Default to 1 slide per view for small screens
          spaceBetween={20}
          freeMode={true}
          navigation={{
            nextEl: `.${category_name}-next`,
            prevEl: `.${category_name}-prev`,
            disabledClass: "opacity-0 pointer-events-none",
          }}
          modules={[FreeMode, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2, // 2 slides for screens >= 640px
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3, // 3 slides for screens >= 768px
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4, // 4 slides for screens >= 1024px
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5, // 5 slides for screens >= 1280px
              spaceBetween: 20,
            },
          }}
        >
          {data?.products?.map((product) => (
            <SwiperSlide key={product?._id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}

          {/* Navigation buttons */}
        </Swiper>
        <button
          className={`z-20 absolute top-1/2 -translate-y-[50%] left-0 ${category_name}-prev bg-gradient-to-r from-primary to-primary/70 text-white shadow-md rounded-full p-3 size-10`}
        >
          <FaArrowLeft />
        </button>
        <button
          className={`z-20 absolute top-1/2 -translate-y-[50%] right-0 ${category_name}-next bg-gradient-to-l from-primary to-primary/70 shadow-md text-white rounded-full p-3 size-10`}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
