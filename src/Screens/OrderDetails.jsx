import React from "react";
import successImg from "../assets/XMLID 1840.png";

const OrderDetails = () => {
  return (
    <>
      <div className="m-3">
        <div className="rounded-xl px-1 py-1 mt-4 flex">
          <button className="bg-white hover:bg-red-500 border rounded-lg px-1 py-2 flex items-center">
            <i className="fa fa-angle-left text-gray-300 px-4 py-2"></i>
          </button>
          <button className="bg-white rounded-full px-4 py-2 flex items-center">
            <span className="text-black text-xl font-bold">Order Details</span>
          </button>
          <div></div>
        </div>
        <div className="rounded-xl px-2 py-2 mt-4 mb-6 flex">
          <div>
            <span className="text-xl font-bold">Order Status</span>
          </div>
        </div>
        <div className="rounded-xl border px-4 py-2 mt-4 mb-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="m-2">
                <div>
                  <span className="font-bold">Completed</span>
                </div>

                <div>
                  <span className="text-gray-400">10:25 AM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <i className="fa fa-check-square text-green-600 text-4xl mr-2"></i>
          </div>
        </div>
        <div className="rounded-xl px-2 py-2 mb-6 flex">
          <div>
            <span className="text-xl font-bold">Overview</span>
          </div>
        </div>

        <div className="rounded-xl border px-4 py-2 mb-6">
          <div class="flex mb-4 px-2 py-2 mt-4 mb-6">
            <div class="w-1/3">
              <span className="text-gray-300">Order ID</span>
            </div>
            <div class="w-1/3">:</div>
            <div class="w-1/2">
              <span className="font-bold">543123234</span>
            </div>
          </div>
          <div class="flex mb-4 px-2 py-2 p-4 mt-4 mb-6">
            <div class="w-1/3">
              <span className="text-gray-300">Shopname</span>
            </div>
            <div class="w-1/3">:</div>
            <div class="w-1/2">
              <span className="font-bold">ABC Supermarket</span>
            </div>
          </div>
          <div class="flex mb-4 px-2 py-2 mt-4 mb-6">
            <div class="w-1/3">
              <span className="text-gray-300">Date</span>
            </div>
            <div class="w-1/3">:</div>
            <div class="w-1/2">
              <span className="font-bold">23 Apr 2024</span>
            </div>
          </div>
          <div class="flex mb-4 px-2 py-2 mt-4 mb-6">
            <div class="w-1/3">
              <span className="text-gray-300">Notes</span>
            </div>
            <div class="w-1/3">:</div>
            <div class="w-1/2">
              <span className="font-bold">
                Please check the products befor packaging
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-xl px-4 py-2 p-4 mt-4 mb-6 flex">
          <div>
            <span className="text-xl font-bold">Order Summary</span>
          </div>
        </div>
        <div className="rounded-xl border px-4 py-2 p-4 mb-6">
          <div className="overflow-x-auto overflow-y-hidden m-5">
            <div className="row flex space-x-4 justify-left">
              <div className="px-2 py-2 bg-red-100 rounded-lg">
                <img className="w-10 h-10" src={successImg} alt="" />
              </div>
              <div className="px-2 py-2 bg-yellow-100 rounded-lg">
                <img className="w-10 h-10" src={successImg} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl px-4 py-2 p-4 mt-4 mb-6 flex">
          <div>
            <span className="text-xl font-bold">Delivery</span>
          </div>
        </div>
        <div className="rounded-xl border px-2 py-2 mt-4 mb-6">
          <div>
            <i className="fa fa-location text-2xl p-2"></i>
            <span className="text-md">4517 Washinton Ave,Newyork 675231</span>
          </div>
          <div>
            <i className="fa fa-map text-2xl p-3"></i>
            <span className="text-md">Home</span>
          </div>
        </div>
        <div className="rounded-xl px-4 py-2 p-4 mt-4 mb-6 flex">
          <div>
            <span className="text-xl font-bold">Coupon</span>
          </div>
        </div>
        <div className="rounded-xl border px-4 py-2 mt-4 mb-6">
          <button className="bg-red-500 rounded m-2">
            <i className="fa fa-gift p-2 text-2xl text-white"></i>
          </button>

          <span className="text-md text-xl font-bold">Free Shipping</span>
        </div>
        <div className="rounded-xl px-2 py-2 mt-4 mb-4 flex">
          <div>
            <span className="text-xl font-bold">Payment Method</span>
          </div>
        </div>
        <div className="rounded-xl border px-4 py-2 mt-4 mb-6">
          <button className="bg-red-500 rounded m-2">
            <i className="fa fa-credit-card p-2 text-2xl text-white"></i>
          </button>

          <span className="text-md text-xl font-bold">Credit Card</span>
        </div>
       
        <div className="px-2 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <div>
                  <span className="font-bold text-gray-400">Subtotal</span>
              </div>
            </div>
          </div>
          <div>
            <span className="text-gray-400">$9.98</span>
          </div>
        </div>
        <div className="px-2 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <div>
                  <span className="font-bold text-gray-400">Delivery charge</span>
              </div>
            </div>
          </div>
          <div>
            <span className="text-gray-400">$1</span>
          </div>
        </div>
        <div className="px-2 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <div>
                  <span className="font-bold text-gray-400">Coupon</span>
              </div>
            </div>
          </div>
          <div>
            <span className="text-gray-400">-$1</span>
          </div>
        </div>
        <div className="px-2 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <div>
                  <span className="font-bold text-gray-400">Total</span>
              </div>
            </div>
          </div>
          <div>
            <span className="text-gray-400">$9.98</span>
          </div>
        </div>
        <div className="bg-red-500 rounded-full mt-8 w-full flex justify-center items-center rounded-full">
          <button className="m-4 text-xl font-bold text-white">
            Order again
          </button>
        </div>
        <div className="border-red-500 border mt-8 rounded-full justify-between w-full">
          <button className="m-4 text-xl font-bold text-red-500 block mx-auto">
            Rate now
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
