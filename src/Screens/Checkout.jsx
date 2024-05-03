import React from "react";

const Checkout = () => {
  return (
    <>
      <div className="m-6">
        <div className="rounded-xlpx-4 py-2 p-4 mt-4 flex justify-between items-center">
          <button className="bg-white hover:bg-red-500 border rounded-lg px-2 py-2 ml-4 flex items-center">
            <i className="fa fa-angle-left text-gray-300 px-4 py-2"></i>
          </button>
          <button className="bg-white rounded-full px-4 py-2 flex items-center">
            <span className="text-black text-2xl font-bold">CHECKOUT</span>
          </button>
          <div></div>
        </div>
        <div className="rounded-xl px-4 py-2 p-4 mt-4 mb-6 flex justify-between items-center">
          <div className="flex items-center">
            <i className="fa fa-clock text-white-800 text-2xl mr-2"></i>
            <div>
              <span className="text-black text-2xl font-bold">
                Do you want to schedule your order?
              </span>
            </div>
          </div>

          <button className="text-xl border border-red-400 rounded-lg px-4 py-2 bg-white-400 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 focus:ring-opacity-50">
            Select
          </button>
        </div>

        <div className="space-x-4 flex flex-wrap justify-center border border-dashed border-red-500 bg-red-100">
          <div className="h-20">
            <br />
            <span className="text-2xl font-bold text-red-500">
              Total Amount to pay AED 1,399
            </span>
          </div>
        </div>
        <hr />
        <div className="space-x-4 flex flex-wrap justify-center">
          <div className="rounded-md border mt-10  hover:border-red-500">
            <button className="m-6 border border-gray-100 rounded-md">
              <i className="fa fa-credit-card text-2xl p-3"></i>
            </button>
            <button className="text-xl font-bold mr-12">Online Payment</button>
            <input
              className="m-4 w-5 h-5 checked:bg-red-500 checked:border-transparent"
              type="radio"
              name="payment"
              id=""
            />
          </div>
        </div>
        <div className="space-x-4 flex flex-wrap justify-center">
          <div className="rounded-md border mt-10  hover:border-red-500">
            <button className="m-6 border border-gray-100 rounded-md">
              <i className="fa fa-credit-card-alt text-2xl p-3"></i>
            </button>
            <button className="text-xl font-bold mr-12">
              Cash On Delivery
            </button>
            <input
              className="m-4 w-5 h-5 checked:bg-red-500 checked:border-transparent"
              type="radio"
              name="payment"
              id=""
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-red-500 rounded-lg mt-8">
            <button className="m-8 ml-24 mr-24 text-xl font-bold text-white">
              Place your Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
