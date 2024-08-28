import ProductCard from "../ui/ProductCard";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const ProductSlider = ({ title, products, to = "#" }) => {
  return (
    <div className="mt-10 z-10">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        <Link href={to} className="text-blue-500 hover:underline">
          See All
        </Link>
      </div>
      <div className="mt-5 relative">
        <Swiper
          slidesPerView={1} // Default to 1 slide per view for small screens
          spaceBetween={20}
          freeMode={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
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
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>

          {/* Navigation buttons */}
        </Swiper>
        <button className="z-20 absolute top-1/2 -translate-y-[50%] left-0 swiper-button-prev bg-gradient-to-r from-primary to-primary/70 text-white shadow-md rounded-full p-3 size-10">
          <FaArrowLeft />
        </button>
        <button className="z-20 absolute top-1/2 -translate-y-[50%] right-0 swiper-button-next bg-gradient-to-l from-primary to-primary/70 shadow-md text-white rounded-full p-3 size-10">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
