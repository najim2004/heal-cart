"use client";
import Container from "@/components/ui/Container";
import HeroSection from "./home/herosection/HeroSection";
import HowToOrder from "./home/howtoorder/HowToOrder";
import ProductSlider from "@/components/productslider/Productslider";
import Categories from "./home/categories/Categories";

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
