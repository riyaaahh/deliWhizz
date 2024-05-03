import React from "react";

const ProceedCartButton = () => {
  return (
    <div className="rounded-xl bg-red-500 text-white p-4 flex justify-between items-center w-full ml-40 mr-40">
      <div>
        <p className="">4 items</p>
        <p className="font-bold">$63.96</p>
      </div>
      <button className="bg-white rounded-full px-4 py-2 flex items-center">
        <i className="fa fa-shopping-cart text-red-500 mr-2"></i>
        <span className="text-black font-bold">Proceed to Cart</span>
      </button>
    </div>
  );
};

export default ProceedCartButton;
