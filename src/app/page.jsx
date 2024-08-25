"use client";
import Container from "@/components/ui/Container";
import HeroSection from "./home/herosection/HeroSection";
import Categories from "./home/categories/categories";

const Home = () => {
  return (
    <Container className="">
      <HeroSection />
      <Categories />
    </Container>
  );
};

export default Home;
