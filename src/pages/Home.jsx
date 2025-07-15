import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import FeaturedFoods from "../components/FeaturedFoods";
import HowItWorks from "../components/HowItWorks";
import WhoWeServe from "../components/WhoWeServe";
import Footer from "../components/Footer";

const Home = () => {
  const foods = useLoaderData();
  return (
    <div>
      <Banner />
      <FeaturedFoods foods={foods} />
      <HowItWorks></HowItWorks>
      <WhoWeServe></WhoWeServe>
      <Footer></Footer>
    </div>
  );
};

export default Home;
