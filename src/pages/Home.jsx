import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import FeaturedFoods from "../components/FeaturedFoods";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  const foods = useLoaderData();
  return (
    <div>
      <Banner />
      <FeaturedFoods foods={foods} />
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
