import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import FeaturedFoods from "../components/FeaturedFoods";

const Home = () => {
  const foods = useLoaderData();
  return (
    <div>
      <Banner />
      <FeaturedFoods foods={foods} />
    </div>
  );
};

export default Home;
