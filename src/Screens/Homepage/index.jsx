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
import { homeBannerList } from "../../constants";
import ApiBanners from "./Banners/ApiBanners";
import ApiSliders from "./Sliders/ApiSliders";
import ApiRecommented from "./Recommended/ApiRecommented";
import ApiSuggestions from "./Suggestions/ApiSuggestions";

const Home = () => {
  return (
    <div className="">
      <div className="m-5">
        <HomeHeader />
        {/* <Banner /> */}
        <ApiBanners />
        {/* <Api /> */}
        <Brands />
        {/* <PopularItems /> */}
        {/* <Categories /> */}
        <DiscountBanner />
        {/* <Recommended /> */}
        <ApiRecommented />
        {/* <Sliders /> */}
        <ApiSliders />
        {/* <Suggestions /> */}
        <ApiSuggestions />
      </div>
      <Stores />
      <Footer />
    </div>
  );
};

export default Home;
