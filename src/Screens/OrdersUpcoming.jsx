import React from "react";
import successImg from "../assets/XMLID 1840.png";

const OrdersUpcoming = () => {
  return (
    <>
      <div className="m-3">
        <div className="rounded-xl px-1 py-2 mt-4 flex justify-between items-center">
          <button className="bg-white hover:bg-red-500 border rounded-lg px-1 py-2 flex items-center">
            <i className="fa fa-angle-left text-gray-300 px-4 py-2"></i>
          </button>
          <button className="bg-white rounded-full px-4 py-2 flex items-center">
            <span className="text-black text-2xl font-bold">MY ORDERS</span>
          </button>
          <div></div>
        </div>

        <div className="flex justify-center">
          <div className="hover:border-red-500 ml-2 border bg-red-100 rounded-lg mt-8 w-1/2">
            <button className="m-4 text-xl font-bold text-red-600 block mx-auto">
              History
            </button>
          </div>
          <div className="bg-red-500 rounded-lg mt-8 mr-2  ml-2 w-1/2 flex justify-center items-center">
            <button className="m-4 text-xl font-bold text-white">
              Upcoming
            </button>
          </div>
        </div>
        <div className="border bg-gray-50 rounded mt-6">
          <div className="overflow-x-auto overflow-y-hidden m-5">
            <div className="row flex space-x-4 justify-center">
              <div className="px-2 py-2 bg-red-100 rounded-lg">
                <img className="w-6 h-6" src={successImg} alt="" />
              </div>
              <div className="px-2 py-2 bg-yellow-100 rounded-lg">
                <img className="w-6 h-6" src={successImg} alt="" />
              </div>
              <div className="px-2 py-2 bg-orange-100 rounded-lg">
                <img className="w-6 h-6" src={successImg} alt="" />
              </div>
              <div className="px-2 py-2 bg-blue-100 rounded-lg">
                <img className="w-6 h-6" src={successImg} alt="" />
              </div>
              <div className="px-2 py-2 bg-red-200 rounded-lg">
                <span className="font-bold text-red-600">+2</span>
              </div>
            </div>
            <div className="row flex space-x-4 mt-3 justify-center">
              <i className="fa fa-check-square mt-1 text-green-600"></i>
              <span className="text-green-600">Shipped</span>
              <span className="">#324786</span>
              <span className="">26 Jan,11:15</span>
            </div>
            <div className="row flex space-x-4 mt-3 justify-center">
              <div className="bg-red-500 rounded-lg mt-8 mr-2  ml-2 w-1/2 flex justify-center items-center">
                <button className="m-4 text-md text-white">Re-Order</button>
              </div>
              <div className="hover:border-red-500 ml-2 border bg-red-100 rounded-lg mt-8 w-1/2">
                <button className="m-4 text-md text-red-600 block mx-auto">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border bg-gray-50 rounded mt-6">
          <div className="overflow-x-auto overflow-y-hidden m-5">
            <div className="row flex space-x-4 justify-center">
              <div className="px-2 py-2 bg-red-100 rounded-lg">
                <img className="w-6 h-6" src={successImg} alt="" />
              </div>
              <div className="px-2 py-2 bg-yellow-100 rounded-lg">
                <img className="w-6 h-6" src={successImg} alt="" />
              </div>
              <div className="px-2 py-2 bg-orange-100 rounded-lg">
                <img className="w-6 h-6" src={successImg} alt="" />
              </div>
              <div className="px-2 py-2 bg-blue-100 rounded-lg">
                <img className="w-6 h-6" src={successImg} alt="" />
              </div>
              <div className="px-2 py-2 bg-red-200 rounded-lg">
                <span className="font-bold text-red-600">+2</span>
              </div>
            </div>
            <div className="row flex space-x-4 mt-3 justify-center">
              <i className="fa fa-check-square mt-1 text-yellow-400"></i>
              <span className="text-yellow-400">Shipped</span>
              <span className="">#324786</span>
              <span className="">26 Jan,11:15</span>
            </div>
            <div className="row flex space-x-4 mt-3 justify-center">
              <div className="bg-red-500 rounded-lg mt-8 mr-2  ml-2 w-1/2 flex justify-center items-center">
                <button className="m-4 text-md text-white">Re-Order</button>
              </div>
              <div className="hover:border-red-500 ml-2 border bg-red-100 rounded-lg mt-8 w-1/2">
                <button className="m-4 text-md text-red-600 block mx-auto">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <span className="m-8 ml-4 text-xl font-bold block mx-auto">
            Latest Orders
          </span>
        </div>
        <div className="border bg-gray-50 rounded mt-6">
          <div className="overflow-x-auto overflow-y-hidden m-5">
            <div className="row flex space-x-4 justify-center">
              <div className="px-2 py-2 bg-red-100 rounded-lg">
                <img className="w-6 h-6" src={successImg} alt="" />
              </div>
              <div className="px-2 py-2 bg-yellow-100 rounded-lg">
                <img className="w-6 h-6" src={successImg} alt="" />
              </div>
              <div className="px-2 py-2 bg-orange-100 rounded-lg">
                <img className="w-6 h-6" src={successImg} alt="" />
              </div>
              <div className="px-2 py-2 bg-blue-100 rounded-lg">
                <img className="w-6 h-6" src={successImg} alt="" />
              </div>
              <div className="px-2 py-2 bg-red-200 rounded-lg">
                <span className="font-bold text-red-600">+2</span>
              </div>
            </div>
            <div className="row flex space-x-4 mt-3 justify-center">
              <i className="fa fa-check-square mt-1 text-green-600"></i>
              <span className="text-green-600">Delivered</span>
              <span className="">#324786</span>
              <span className="">26 Jan,11:15</span>
            </div>
            <div className="row flex space-x-4 mt-3 justify-center">
              <div className="bg-red-500 rounded-lg mt-8 mr-2  ml-2 w-1/2 flex justify-center items-center">
                <button className="m-4 text-md text-white">Re-Order</button>
              </div>
              <div className="hover:border-red-500 ml-2 border bg-red-100 rounded-lg mt-8 w-1/2">
                <button className="m-4 text-md text-red-600 block mx-auto">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border bg-gray-50 rounded mt-6">
          <div className="overflow-x-auto overflow-y-hidden m-5">
            <div className="row flex space-x-4 justify-center">
              <div className="px-2 py-2 bg-red-100 rounded-lg">
                <img className="w-6 h-6" src={successImg} alt="" />
              </div>
              <div className="px-2 py-2 bg-yellow-100 rounded-lg">
                <img className="w-6 h-6" src={successImg} alt="" />
              </div>
              <div className="px-2 py-2 bg-orange-100 rounded-lg">
                <img className="w-6 h-6" src={successImg} alt="" />
              </div>
              <div className="px-2 py-2 bg-blue-100 rounded-lg">
                <img className="w-6 h-6" src={successImg} alt="" />
              </div>
              <div className="px-2 py-2 bg-red-200 rounded-lg">
                <span className="font-bold text-red-600">+2</span>
              </div>
            </div>
            <div className="row flex space-x-4 mt-3 justify-center">
              <i className="fa fa-check-square mt-1 text-green-600"></i>
              <span className="text-green-600">Delivered</span>
              <span className="">#324786</span>
              <span className="">26 Jan,11:15</span>
            </div>
            <div className="row flex space-x-4 mt-3 justify-center">
              <div className="bg-red-500 rounded-lg mt-8 mr-2  ml-2 w-1/2 flex justify-center items-center">
                <button className="m-4 text-md text-white">Re-Order</button>
              </div>
              <div className="hover:border-red-500 ml-2 border bg-red-100 rounded-lg mt-8 w-1/2">
                <button className="m-4 text-md text-red-600 block mx-auto">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersUpcoming;
