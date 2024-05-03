import React from "react";
import HeadBanner from "../assets/banner.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ProductsList from "./ProductsList";
import CategoryLists from "./CategoryLists";
import ProceedCartButton from "./ProceedCartButton";

const Categories = () => {
  return (
    <div className="bg-gray-300">
      <>
        <div className="mt-5 ml-5 mr-5 mb-5 bg-gray-100">
          <div>
            <img
              src={HeadBanner}
              className="rounded-t-md rounded-b-2xl"
              style={{ height: "200px", width: "100%" }}
            />
          </div>
          <CategoryLists />
          <ProductsList />
        </div>
      </>
    </div>
  );
};

export default Categories;
