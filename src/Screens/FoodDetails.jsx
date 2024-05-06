import React from "react";
import item from "../assets/vegbiriyani.png";
// import BackgroundImage from "../assets/Background.png";
import BackgroundImage from "../assets/Frame.jpg";

const FoodDetails = () => {
  const sizes = [
    { qty: "0.5", measure: "kg" },
    { qty: "1", measure: "kg" },
    { qty: "1.5", measure: "kg" },
    { qty: "2", measure: "kg" },
  ];
  return (
    <>
      <div
        className="rounded-xl p-4 mt-4 flex justify-between items-center"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <button className="bg-white hover:bg-red-500 border rounded-full px-4 py-2 flex items-center">
          <i className="fa fa-angle-left text-gray-500 px-2 py-2"></i>
        </button>
        <button className="bg-white rounded-full px-4 py-2 flex items-center">
          <span className="text-black text-2xl font-bold">DETAILS</span>
        </button>
        <button className="bg-red-200 border rounded-full px-4 py-2 flex items-center">
          <i className="fa fa-shopping-bag text-gray-500 px-2 py-2"></i>
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="product-card mx-4 my-4 p-4 border bg-gray-50 rounded-xl shadow-md w-full">
          <div className="flex flex-wrap justify-center">
            <img
              src={item}
              className="rounded-t-md rounded-b-2xl"
            />
          </div>
        </div>
      </div>
      <div className="rounded-xlpx-4 py-2 p-4 mt-4 flex justify-between items-center">
        <div>
          <span className="text-black text-2xl font-bold">
            Vegetable Biriyani
          </span>
        </div>
        <div>
          <span className="text-black text-2xl font-bold">$15.99/kg</span>
        </div>
      </div>
      <div>
        <p className="m-4">
          A popular spice and vegetables mixed favoured rice dish which is
          typically prepared by layering the biryani gravy and basmati rice in
          flat bottom vessel.
        </p>
      </div>
      {/* <div className="overflow-x-auto overflow-y-hidden m-5"> */}
        <div className="row flex space-x-4 mt-8 mb-8 m-2">
          <button className="font-bold text-xl"> Sizes: </button>
          {sizes.map((item, index) => (
            <button
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
      {/* </div> */}
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
      <div className="space-x-4 flex flex-wrap justify-center">
        <div className="bg-grey-300 rounded-lg mt-8">
          <button className="m-4 text-xl">
            <i className="fa fa-minus"></i>
          </button>
          <button className="m-4 text-xl"> 1</button>
          <button className="m-4 text-xl">
            <i className="fa fa-plus text-red-500"></i>
          </button>
        </div>
        <div className="bg-red-500 rounded-lg mt-8">
          <button className="m-4 text-xl font-bold text-white">
            Add to cart
          </button>
          <button className="m-4 text-xl font-bold text-white">$15.99</button>
        </div>
      </div>
      <div className="flex justify-center items-center h-full mt-6">
        <div className="bg-black h-2 w-1/4 rounded-full w-3/4"></div>
      </div>
    </>
  );
};

export default FoodDetails;
