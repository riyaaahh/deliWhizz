import React from "react";
import backgroundImage from "../assets/Frame.jpg";
import successImg from "../assets/XMLID 1840.png";

const PaymentSuccess = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="flex flex-col justify-center items-center flex-grow">
        <div
          className="flex items-center justify-center mb-8"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img src={successImg} alt="" />
        </div>
        <div className="flex flex-wrap justify-center">
          <span className="text-black text-2xl font-bold">
            Congratulations!
          </span>
        </div>
        <div className="flex flex-wrap justify-center mt-4">
          <p className="mx-auto text-center ml-14 mr-14 text-gray-400">
            You successfully made a payment. Enjoy our service!
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-red-500 rounded-lg mt-8 m-6 h-16 text-xl font-bold text-white w-full">
          Track Your Order
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
