import React, { useState, useEffect } from "react";
import ProgressiveImage from "react-progressive-image";
import { Link, useParams } from "react-router-dom";
import {
  MapPinIcon,
  ClockIcon,
  StarIcon,
  CurrencyRupeeIcon,
} from "@heroicons/react/24/solid";
import HomeHeader from "../HomeHeader";
import Footer from "../../../Components/Common/Footer";

const SingleProduct = () => {
  const { productId } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const sizes = [
    { qty: "0.5", measure: "kg" },
    { qty: "1", measure: "kg" },
    { qty: "1.5", measure: "kg" },
    { qty: "2", measure: "kg" },
  ];

  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count == 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://admin.corelabs.work/api/product-details/3/${productId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [productId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4 overflow-y-auto">
      <HomeHeader />
      {data && (
        <>
          <div className="border border-gray-200 p-4 rounded-lg mb-4">
            <ProgressiveImage src={`${data[0].image_url}`} placeholder="">
              {(src, loading) => (
                <img
                  src={src}
                  alt="Store Logo"
                  className={`w-full rounded-lg ${
                    loading ? "opacity-0" : "opacity-100"
                  }`}
                />
              )}
            </ProgressiveImage>

            <div className="flex items-center justify-center mt-2">
              <div className="border h-2 w-8 rounded-full bg-red-500"></div>
              <div className="border h-2 w-8 rounded-full bg-red-500"></div>
              <div className="border h-2 w-8 rounded-full bg-red-500"></div>
            </div>
            <div className="flex mt-2 justify-between gap-2 m8-4 p-4">
              <div className="flex items-center">
                <h2 className="text-2xl font-semibold mb-4 mt-4">
                  {data[0].name}
                </h2>
              </div>

              <div className="flex items-center">
                <div>
                  <CurrencyRupeeIcon className="h-4 w-4 text-black-500" />
                </div>
                <div className="text-base text-deli-black-500 font-semibold">
                  {parseFloat(data[0].variations[0].default_sell_price).toFixed(
                    2
                  )}
                </div>
              </div>
            </div>
            <p className="">{data[0].product_description}</p>
            <div className="row flex space-x-4 mt-8 mb-8 m-2">
              <button className="font-bold text-xl"> Sizes: </button>
              {sizes.map((item, index) => (
                <button
                  key={index}
                  className={`${
                    item.qty === "1"
                      ? "bg-red-600 text-white"
                      : "bg-white text-gray-400"
                  } hover:bg-red-500 rounded p-2 w-full border rounded-lg`}
                >
                  <strong>
                    {item.qty} {item.measure}
                  </strong>
                </button>
              ))}
            </div>
            <hr />
            <div className="space-x-4 flex flex-wrap justify-center">
              <button className="text-xl">
                <i className="fa fa-clock text-white-800"></i> 30 Mins
              </button>
              <button className="m-12 text-xl">
                <i className="fa fa-usd"></i> Free Shipping
              </button>
              <button className="text-xl">
                <i className="fa-solid fa-droplet text-orange-400"></i> 348Kcal
              </button>
            </div>
            <hr />
          </div>
          <div className="space-x-4 flex flex-wrap justify-center">
            <div className="bg-grey-300 rounded-lg mt-8">
              <button onClick={decrement} className="m-4 text-xl">
                <i className="fa fa-minus"></i>
              </button>
              <button className="m-4 text-xl"> {count} </button>
              <button onClick={increment} className="m-4 text-xl">
                <i className="fa fa-plus text-red-500"></i>
              </button>
            </div>
            <div className="bg-red-500 rounded-lg mt-8">
              <Link to="/cart">
                <button className="m-4 text-xl font-bold text-white">
                  Add to cart
                </button>
              </Link>
              <button className="m-4 text-xl font-bold text-white">
                ₹
                {parseFloat(data[0].variations[0].default_sell_price * count).toFixed(
                  2
                )}
              </button>
            </div>
          </div>
          <br />
          <br /> <br />
          <br />
        </>
      )}
      <Footer />
    </div>
  );
};

export default SingleProduct;
