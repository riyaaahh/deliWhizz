import React from "react";
import item from "../assets/Item4.png";
import ProceedCartButton from "./ProceedCartButton";
import { Link } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

const ProductsList = () => {
  //   const history = useHistory();
  const handleClick = () => {
    history.push("/food-details");
  };
  const products = [
    {
      no: "1",
      name: "Shrimp Pastha",
      time: "25 min",
      rating: "4.4",
      amount: "4.7",
    },
    {
      no: "2",
      name: "Reddish Pastha",
      time: "20 min",
      rating: "4.5",
      amount: "3.0",
    },
    {
      no: "3",
      name: "Malabar Porotta",
      time: "21 min",
      rating: "4.2",
      amount: "4.5",
    },
    {
      no: "4",
      name: "Chicken Biriyani",
      time: "10 min",
      rating: "4.2",
      amount: "4.7",
    },
    { no: "5", name: "Al faham", time: "8 min", rating: "4.2", amount: "4.0" },
    { no: "6", name: "Shawarma", time: "7 min", rating: "4.0", amount: "7.0" },
  ];
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {products.map((product, index) => (
          <div
            key={index}
            onClick={handleClick}
            className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2"
          >
            <div className="product-card border rounded-xl shadow-md">
              <div className="relative">
                <i className="fa fa-heart absolute top-0 right-0 mt-2 mr-2 text-red-500"></i>
              </div>
              <img
                src={item}
                className="rounded-t-md rounded-b-2xl"
                style={{ height: "200px", width: "100%" }}
              />
              <div className="p-4 flex flex-col justify-center items-center">
                <div className="font-bold text-2xl text-center">{product.name}</div>
                <div className="flex justify-between">
                  <span className="mr-2">{product.time} </span>
                  <strong> . </strong>
                  <span className="ml-2">
                    <i className="fa fa-star text-yellow-500"></i>{" "}
                    {product.rating}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="font-bold text-2xl ml-6 flex-grow text-center">
                  ${product.amount}
                </div>
                <button className="bg-red-600 text-white px-4 py-2 m-2 rounded-lg">
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to='/cart'>
      <div className="flex flex-wrap justify-center">
        <ProceedCartButton />
      </div>
      </Link>
    </>
  );
};

export default ProductsList;
