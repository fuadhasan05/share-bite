import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import FeaturedFoods from "../components/FeaturedFoods";
import HowItWorks from "../components/HowItWorks";
import WhoWeServe from "../components/WhoWeServe";

const Home = () => {
  const foods = useLoaderData();
  return (
    <div>
      <Banner />
      <FeaturedFoods foods={foods} />
      <HowItWorks></HowItWorks>
      <WhoWeServe></WhoWeServe>
    </div>
  );
};

export default Home;
