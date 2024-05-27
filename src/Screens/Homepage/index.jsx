import React from "react";
import Footer from "../../Components/Common/Footer";
import HomeHeader from "./HomeHeader";
import Banner from "./Banners";
import Brands from "./Brands";
import PopularItems from "./PopularItems";
import Categories from "./Categories";
import Recommended from "./Recommended";
import Sliders from "./Sliders";
import DiscountBanner from "./DiscountBanner";
import Suggestions from "./Suggestions";
import Stores from "./Stores";
import Api from "./Apis";

const Home = () => {
  return (
    <div className="">
      <div className="m-5">
        <HomeHeader />
        <Banner />
        {/* <Api /> */}
        <Brands />
        {/* <PopularItems /> */}
        {/* <Categories /> */}
        <DiscountBanner />
        <Recommended />
        <Sliders />
        <Suggestions />
      </div>
      <Stores />
      <Footer />
    </div>
  );
};

export default Home;
