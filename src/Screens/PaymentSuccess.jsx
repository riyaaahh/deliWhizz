import React from "react";
import backgroundImage from "../assets/Frame.jpg";
import successImg from "../assets/XMLID 1840.png";

const PaymentSuccess = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div
          className="flex items-center justify-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <img src={successImg} alt="" className="mt-40" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-8">
        <span className="text-black text-2xl font-bold">Congratulations!</span>
      </div>
      <div className="flex flex-wrap justify-center mt-4">
        <p>You successfully maked a payment,enjoy our service!</p>
      </div>
      <div className="flex justify-center">
          <button className="bg-red-500 rounded-lg mt-8 m-6 h-16 text-xl font-bold text-white w-full">
            Track Your Order
          </button>
      </div>
    </>
  );
};

export default PaymentSuccess;
