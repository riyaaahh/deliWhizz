import React from "react";
import Homebg from "../assets/Homebg.png";
import Logo from "../assets/Logo.png";
import Food from "../assets/Food.png";
import Item1 from "../assets/Item1.png";
import Item2 from "../assets/Item2.png";

import Item3 from "../assets/Item3.png";
import Item4 from "../assets/Item4.png";
import Item5 from "../assets/Item5.png";
import menuicon from "../assets/menuicon.png";

import {
  BeakerIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PencilSquareIcon,
  ReceiptPercentIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { ShareIcon, ShoppingBagIcon } from "@heroicons/react/20/solid";

const Home = () => {
  return (
    <div className="font-poppins relative style={{ fontFamily: 'Poppins, sans-serif' }}">
      <div className="font-poppins">
        <div
          className="bg-cover bg-center w-full h-60 rounded-b-2xl rounded-t-md"
          style={{ backgroundImage: 'url("src/assets/Homebg.png")' }}
        >
          <div className="flex flex-col font-poppins">
            <div className="flex items-center  justify-between  font-poppins relative style={{ fontFamily: 'Poppins, sans-serif' }}   ">
              <div className="flex items-center py-4 px-3 bg-white rounded-r-full mt-2">
                <div>
                  <MapPinIcon className="h-6 w-6 text-red-500" />
                </div>
                <div className="font-bold">Oud Metha...</div>
                <div>
                  {" "}
                  <PencilSquareIcon className="h-6 w-6 text-red-500" />
                </div>
              </div>
              <div className="flex gap-4 pr-2">
                <div className="bg-white p-2 rounded-full">
                  <MagnifyingGlassIcon className="h-6 w-6 text-black" />
                </div>

                <div className="bg-white p-2 rounded-full">
                  <ShareIcon className="h-6 w-6 text-black" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="pt-4">
                <img src={Logo} />
              </div>
              <div className="bg-white border border-gray-700 rounded-2xl mt-2 mx-12">
                <div className="p-2">
                  <div className="flex flex-col border-b border-gray-400">
                    <div className="flex items-center justify-between gap-32 ">
                      <div className="text-2xl font-bold">Desi Wings</div>
                      <div className="bg-lime-200 p-1 rounded-full">
                        <div className="bg-lime-500 p-1 rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-gray-500 text-sm">
                      16B 8th Street, Oud Metha, Dubai
                    </div>
                  </div>
                  <div className="flex pt-2 -mb-1 ">
                    <div className="border-r-2 text-xs px-1 font-bold ">
                      Distance: 4km
                    </div>
                    <div className="border-r-2 text-xs px-1 font-bold ">
                      Delivery Time: 45mins
                    </div>
                    <div className="border-r-2 text-xs pl-1 font-bold ">
                      More Info
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 justify-between mt-12 items-center mx-4">
          <div className="flex flex-col bg-white border px-2 mt-4 py-2 rounded-md">
            <div className="flex">
              <div className="">
                <ReceiptPercentIcon className="h-6 w-6 text-orange-500" />
              </div>
              <div className="font-bold">GET FLAT 30% OFF</div>
            </div>
            <div className="text-gray-500 pl-1">Use code GET30</div>
          </div>
          <div className="flex flex-col bg-white border px-2 mt-4 py-2 rounded-md">
            <div className="flex">
              <div className="">
                {" "}
                <ReceiptPercentIcon className="h-6 w-6 text-orange-500" />
              </div>
              <div className="font-bold">GET FLAT 30% OFF</div>
            </div>
            <div className="text-gray-500 pl-1">Use code GET30</div>
          </div>
        </div>
        <div className=" p-1 bg-white flex items-center rounded-md border border-gray-400 justify-between mt-3 mx-4">
          <div>
            <input
              type="text"
              placeholder="search menu"
              className="  py-2 text-gray-700 "
            />
          </div>
          <div>
            <button className="p-1 focus:outline-none focus:bg-gray-300 rounded-full">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>
        <div className="mt-4 mx-4">
          <img src={Food} className="object-cover" />
        </div>
        <div className="p-2 w-full bg-gray-200 mt-4"></div>
        <div className="flex items-center pt-4 justify-between mx-4">
          <div className="flex items-center gap-2">
            <div className="font-bold text-gray-400 pt-2">VEG</div>
            <div className=" bg-gray-300  rounded-full  pr-6">
              <div className="p-3  bg-white border border-gray-300 rounded-full"></div>
            </div>
          </div>

          <div className="flex border rounded-md items center">
            <div className="bg-trinidad-500 rounded-l-md border-r p-2 px-4 text-white font-medium">
              Delivery
            </div>
            <div className=" p-2 px-4 font-medium">Pickup</div>
          </div>
        </div>
        <div>
          <div className="font-bold  mt-2 mx-4">Best Sellers</div>
          <div className="flex  gap-8   justify-between mr-8 ml-4">
            <div className="">
              <img src={Item1} className="absolute" />
              <div className="relative shadow-md mx-10 mt-44 px-8 text-sm py-2 bg-white border rounded-md flex ">
                <div className="text-totem-500 bg-white">ADD</div>
              </div>
              <div className="text-lg font-semibold">Sumac Wings</div>
              <div className="text-xs">
                Lipsmacking ginger and
                <br /> fresh green spicy marinade.
              </div>
              <div className="text-base">AED 250</div>
            </div>
            <div className="">
              <img src={Item2} className="absolute  " />
              <div className="relative shadow-md mx-14 mt-44 px-6 text-sm py-2 items-center bg-white border rounded-md flex ">
                <div className="text-totem-500 bg-white text-center ml-2">ADD</div>
              </div>
              <div className="text-lg font-semibold whitespace-nowrap pr-2">
                Ginger Soy Chilli Wings
              </div>
              <div className="text-xs">
                Devilled wings baked with
                <br /> spicy hot chilli sauce.
              </div>
              <div className="text-sm text-totem-500 ">Add Options</div>
            </div>
          </div>
        </div>
        <div className="items-center mx-4">
          <div className="border-b">
            <div className="font-bold  mt-2 mb-2  text-xl ">Wings</div>
          </div>

          <div className="flex justify-between border-b pb-2 mt-4">
            <div>
              <div className="flex items-center">
                <div className=" border border-lime-500 p-0.5  ">
                  <div className="bg-lime-500 p-1  rounded-full"></div>
                </div>
                <div className="flex ml-3  ">
                  <div className="mr-1">
                    <StarIcon className="h-3 w-3 text-tulip-500" />
                  </div>
                  <div className="text-tulip-500 text-xs">Bestseller</div>
                </div>
              </div>
              <div className="text-lg font-semibold">Fiery Sriracha Wings</div>
              <div className="text-sm text-totem-500 ">Add Options</div>
              <div className="text-gray-500 text-sm">Fast food, Arabic</div>
            </div>
            <div className=" ">
              <img src={Item3} className="absolute items-center" />
              <div className="relative shadow-md mx-5 mt-16 bg-white border px-4 rounded-md flex ">
                <div className="text-totem-500 bg-white">ADD</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between border-b pb-2 mt-4">
            <div>
              <div className="flex items-center">
                <div className=" border border-lime-500 p-0.5  ">
                  <div className="bg-lime-500 p-1  rounded-full"></div>
                </div>
                <div className="flex ml-3  ">
                  <div className="mr-1">
                    <StarIcon className="h-3 w-3 text-tulip-500" />
                  </div>
                  <div className="text-tulip-500 text-xs">Bestseller</div>
                </div>
              </div>
              <div className="text-lg font-semibold">Pickled Paprika Wings</div>
              <div className="font-medium">AED 150</div>
              <div className="text-gray-500 text-sm">Fast food, Arabic</div>
            </div>
            <div className=" ">
              <img src={Item4} className="absolute items-center" />
              <div className="relative shadow-md mx-5 mt-16 bg-white border px-4 rounded-md flex ">
                <div className="text-totem-500 bg-white">ADD</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between border-b pb-2 mt-4">
            <div>
              <div className="flex items-center">
                <div className=" border border-lime-500 p-0.5  ">
                  <div className="bg-lime-500 p-1  rounded-full"></div>
                </div>
                <div className="flex ml-3  ">
                  <div className="mr-1">
                    <StarIcon className="h-3 w-3 text-tulip-500" />
                  </div>
                  <div className="text-tulip-500 text-xs">Bestseller</div>
                </div>
              </div>
              <div className="text-lg font-semibold">Mango Peri Wings</div>
              <div className=" ">AED 110</div>
              <div className="text-gray-500 text-sm">Fast food, Arabic</div>
            </div>
            <div className=" ">
              <img src={Item5} className="absolute items-center" />
              <div className="relative shadow-md mx-5 mt-16 bg-white border px-4 rounded-md flex ">
                <div className="text-totem-500 bg-white">ADD</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between border-b pb-2 mt-4">
            <div>
              <div className="flex items-center">
                <div className=" border border-lime-500 p-0.5  ">
                  <div className="bg-lime-500 p-1  rounded-full"></div>
                </div>
                <div className="flex ml-3  ">
                  <div className="mr-1">
                    <StarIcon className="h-3 w-3 text-tulip-500" />
                  </div>
                  <div className="text-tulip-500 text-xs">Bestseller</div>
                </div>
              </div>
              <div className="text-lg font-semibold">Smoked Biriyani Spice Wings</div>
              <div className=" ">AED 250</div>
              <div className="text-gray-500 text-sm ">Fast food, Arabic</div>
            </div>
            <div className=" ">
            <div className="relative shadow-md mx-5 mt-6 bg-white border px-4 rounded-md flex ">
                <div className="text-totem-500 bg-white">ADD</div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="fixed bottom-0 w-full flex items-center justify-between px-4 py-2 bg-lima-500 text-white">
          <div className="flex flex-col">
            <div className="flex font-bold text-xl">
              <div className="border-r pr-2 mr-2">250.00</div>
              <div>2 Items</div>
            </div>
            <div className="text-sm">Delivery Charges and Tax May Apply</div>
          </div>
          <div className="flex items-center ">
            <div className="pr-4">VIEW CART</div>
            <div className="mb-1">
              <ShoppingBagIcon className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
  
      </div>
      <div className="fixed text-white bottom-20 left-0 right-0 mx-32 bg-black px-2 py-3 rounded-full flex items-center justify-center gap-4">
       <div>
        <img src={menuicon}/>
       </div>
       <div>
        Browse Menu

       </div>
      </div>
    </div>
  );
};

export default Home;
