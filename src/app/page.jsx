"use client";
import Container from "@/components/ui/Container";
import HeroSection from "./home/herosection/HeroSection";
import HowToOrder from "./home/howtoorder/HowToOrder";
import ProductSlider from "@/components/productslider/ProductSlider";
import Categories from "./home/categories/Categories";
import { useSelector } from "react-redux";

const Home = () => {
  const categoriesData = useSelector((state) => state?.categories?.categories);
  return (
    <Container className="">
      <HeroSection />
      <Categories />
      <HowToOrder />
      {categoriesData?.map((category) => (
        <ProductSlider key={category?._id} category_name={category?.slug} />
      ))}
    </Container>
  );
};

export default Home;
