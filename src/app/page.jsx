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
      <ProductSlider title={"OTC Medicine"} />
      <ProductSlider title={"Women's Choice"} />
      <ProductSlider title={"Sexual Wellness"} />
      <ProductSlider title={"Diabetic Care"} />
      <ProductSlider title={"Baby Care"} />
      <ProductSlider title={"Dental Care"} />
      <ProductSlider title={"Supplement"} />
    </Container>
  );
};

export default Home;
