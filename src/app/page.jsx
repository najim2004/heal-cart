"use client";
import Container from "@/components/ui/Container";
import HeroSection from "./home/herosection/HeroSection";
import Categories from "./home/categories/Categories";
import HowToOrder from "./home/howtoorder/HowToOrder";
import ProductSlider from "@/components/productslider/productslider";

const Home = () => {
  return (
    <Container className="">
      <HeroSection />
      <Categories />
      <HowToOrder />
      <ProductSlider />
    </Container>
  );
};

export default Home;
