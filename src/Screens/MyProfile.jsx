import React from "react";
import item from "../assets/Item4.png";

const MyProfile = () => {
  return (
    <div className="bg-gray-50">
      <div className="m-3 border bg-white">
        <div className="rounded-xl px-1 py-2 mt-4 flex justify-between items-center">
          <button className="bg-white rounded-full px-2 py-2 flex items-center">
            <span className="text-black text-2xl font-bold">Account</span>
          </button>
          <i className="fa fa-heart-o text-red-500 text-2xl px-4 py-2"></i>
          <i className="fa fa-heart-o text-red-500 text-2xl px-4 py-2"></i>
          <i className="fa fa-heart-o text-red-500 text-2xl px-4 py-2"></i>
          <i className="fa fa-heart text-red-500 text-2xl px-4 py-2"></i>
          <i className="fa fa-bell text-yellow-500 text-2xl px-4 py-2"></i>

          <div></div>
        </div>
        <div className="border m-6 border rounded-3xl">
          <div className="p-4 flex flex-col justify-center items-center">
            <img src={item} alt="" className="border rounded-full w-16 h-16 mt-6" />
            <div className="mt-6 mb-6">
              <h1 className="text-2xl font-bold">John Doe</h1>
            </div>
            <div>
              <h1 className="text-xl text-gray-300 font-bold">
                Phone: +9199956743278
              </h1>
            </div>
          </div>
          <hr />
          <div className="m-4 flex  justify-between">
            <div>
              <i className="fa fa-bell text-black-500 text-3xl px-4 py-2"></i>
              <p className="font-bold font-xl">My order</p>
            </div>
            <div>
              <i className="fa fa-wallet text-black-500 text-3xl px-4 py-2"></i>
              <p className="font-bold font-xl">Wallet</p>
            </div>
            <div>
              <i className="fa fa-location text-black-500 text-3xl px-4 py-2"></i>
              <p className="font-bold font-xl">Address</p>
            </div>
          </div>
        </div>
      </div>

      <div class="m-3 border p-3 rounded-lg bg-white">
        <div class="rounded-xl px-1 py-2 mt-4 flex justify-between items-center">
          <i class="fa fa-user text-gray-400 text-2xl px-4 py-2"></i>
          <div class="w-full mt-2 text-xl">Profile</div>
          <i class="fa fa-angle-right text-gray-400 text-2xl"></i>
        </div>
        <div class="rounded-xl px-1 py-2 mt-4 flex justify-between items-center">
          <i class="fa fa-bell text-gray-400 text-2xl px-4 py-2"></i>
          <div class="w-full mt-2 text-xl">Notifications</div>
          <i class="fa fa-angle-right text-gray-400 text-2xl"></i>
        </div>
        <div class="rounded-xl px-1 py-2 mt-4 flex justify-between items-center">
          <i class="fa fa-phone text-gray-400 text-2xl px-4 py-2"></i>
          <div class="w-full mt-2 text-xl">Help Center</div>
          <i class="fa fa-angle-right text-gray-400 text-2xl"></i>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
