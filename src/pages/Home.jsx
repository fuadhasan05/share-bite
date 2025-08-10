import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import FeaturedFoods from "../components/FeaturedFoods";
import HowItWorks from "../components/HowItWorks";
import WhoWeServe from "../components/WhoWeServe";
import { useEffect } from "react";
import Blog from "../components/Blog";

const Home = () => {
  // Set dynamic title
  useEffect(() => {
    document.title = "Share Bite - Home";
  }, []);

  const foods = useLoaderData();
  return (
    <div className="bg-gradient-to-br from-[#E6F4EA] via-[#F0FFF4] to-[#E6F4EA] max-w-full">
      <Banner />
      <HowItWorks></HowItWorks>
      <FeaturedFoods foods={foods} />
      <WhoWeServe></WhoWeServe>
      <Blog></Blog>
    </div>
  );
};

export default Home;
