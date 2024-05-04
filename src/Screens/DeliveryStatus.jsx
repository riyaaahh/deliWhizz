import React from "react";

const DeliveryStatus = () => {
  return (
    <>
      <div className="m-6">
        <div className="rounded-xl px-4 py-2 p-4 mt-4 flex justify-between items-center">
          <button className="bg-white hover:bg-red-500 border rounded-lg px-2 py-2 ml-4 flex items-center">
            <i className="fa fa-angle-left text-gray-300 px-4 py-2"></i>
          </button>
          <button className="bg-white rounded-full px-4 py-2 flex items-center">
            <span className="text-black text-2xl font-bold">
              DELIVERY STATUS
            </span>
          </button>
          <div></div>
        </div>
        <div className="rounded-xl px-4 py-2 p-4 mt-4 mb-6 flex justify-center">
          <div className="flex items-center flex-col">
            <div>
              <span className="text-gray-400">Estimated Delivery</span>
            </div>
            <div>
              <span className="text-2xl font-bold">
                04 Apr, 2024 / 12:30 PM
              </span>
            </div>
          </div>
        </div>
        <div className="border bg-gray-50 rounded-md">
          <div className="flex flex-wrap justify-between items-center rounded-full px-4 py-2 mb-4">
            <button className="rounded-md text-xl font-bold">
              Track Order
            </button>
            <button className="font-bold text-gray-400">NY01234</button>
          </div>
          <div className="rounded-xl px-4 py-2 p-4 flex justify-between items-center">
            <div className="flex items-center">
              <i className="fa fa-check-circle text-red-600 text-2xl"></i>
              <div className="m-4">
                <div>
                  <span className="font-bold">Order Confirmed</span>
                </div>

                <div>
                  <span className="text-gray-400">
                    Your order has been received
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl px-4 py-2 p-4 flex justify-between items-center">
            <div className="flex items-center">
              <i className="fa fa-check-circle text-red-600 text-2xl"></i>
              <div className="m-4">
                <div>
                  <span className="font-bold">Order Prepared</span>
                </div>

                <div>
                  <span className="text-gray-400">
                    Your order has been prepared
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl px-4 py-2 p-4 flex justify-between items-center">
            <div className="flex items-center">
              <i className="fa fa-check-circle text-red-600 text-2xl"></i>
              <div className="m-4">
                <div>
                  <span className="font-bold">Delivery in Progress</span>
                </div>

                <div>
                  <span className="text-gray-400">
                    Hang On! Your food is on the way
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl px-4 py-2 p-4 flex justify-between items-center">
            <div className="flex items-center">
              <i className="fa fa-check-circle text-gray-300 text-2xl"></i>
              <div className="m-4">
                <div>
                  <span className="font-bold">Delivered</span>
                </div>

                <div>
                  <span className="text-gray-400">
                    Wish you have interesting experiences
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl px-4 py-2 p-4 flex justify-between items-center">
            <div className="flex items-center">
              <i className="fa fa-check-circle text-gray-300 text-2xl"></i>
              <div className="m-4">
                <div>
                  <span className="font-bold">Rate Us</span>
                </div>

                <div>
                  <span className="text-gray-400">
                    Help us to improve our service by rating
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl px-4 py-2 p-4 mt-4 mb-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <i className="fa fa-clock text-red-600 text-2xl mr-2"></i>
              <div className="m-4">
                <div>
                  <span className="text-gray-400 font-bold">Estimate Time</span>
                </div>

                <div>
                  <span className="font-bold">30 minutes</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <i className="fa fa-map-marker text-red-600 text-2xl mr-2"></i>
            <div className="m-4">
              <div>
                <span className="text-gray-400 font-bold">Distance</span>
              </div>

              <div>
                <span className="font-bold">2.5km</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="hover:border-red-500 border bg-gray-100 rounded-lg mt-8 justify-between w-1/4">
            <button className="m-4 text-xl font-bold text-red-600 block mx-auto">
              Cancel
            </button>
          </div>

          <div className="bg-red-500 rounded-lg mt-8 ml-2 w-3/4 flex justify-center items-center">
            <button className="m-4 text-xl font-bold text-white">
              <i className="fa fa-phone"></i> Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryStatus;
