import {
  Bars3BottomLeftIcon,
  BellIcon,
  ClockIcon,
  HomeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import Logo2 from "./../../assets/Logo2.png";
import Card from "./../../assets/Card.png";
import Groceries from "./../../assets/Groceries.png";
import Stationaries from "./../../assets/Stationaries.png";
import Petstore from "./../../assets/Petstore.png";
import Restaurants from "./../../assets/Restaurants.png";
import Mcdonalds from "./../../assets/Mcdonalds.png";
import Vegetable from "./../../assets/Vegetable.png";
import Hottacos from "./../../assets/Hottacos.png";
import Tacos from "./../../assets/Tacos.png";
import Burger from "./../../assets/Burger.png";
import Sdeal from "./../../assets/Sdeal.png";
import Fship from "./../../assets/Fship.png";
import Viceroy from "./../../assets/Viceroy.png";
import Seafood from "./../../assets/Seafood.png";
import Meat from "./../../assets/Meat.png";
import Sweet from "./../../assets/Sweet.png";
import Driedfood from "./../../assets/Driedfood.png";
import More from "./../../assets/More.png";
import Fruit from "./../../assets/Fruit.png";
import Wrap from "./../../assets/Wrap.png";
import Card2 from "./../../assets/Card2.png";

import { Cog8ToothIcon, HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon, StarIcon } from "@heroicons/react/20/solid";
import { AdjustmentsHorizontalIcon, HomeModernIcon } from "@heroicons/react/16/solid";
const homepage = () => {
  return (
    <div className="mx-3">
      <div className="justify-center items-center ">
        <div className="flex  mx-2">
          <div className=" p-2 py-3  mt-8 border border-red-500 rounded-xl w-20 h-16">
            <Bars3BottomLeftIcon className="text-red-500 w-10 h-10" />
          </div>

          <div className="h-16">
            <img className="mt-6 " src={Logo2} />
          </div>

          <div className=" p-2  mt-8 border border-red-500 rounded-xl  w-20 h-16">
            <Cog8ToothIcon className="text-red-500 w-10 h-10 " />
          </div>
        </div>
        <div>
          <div className="text-red-500 text-xl font-semibold mx-3 mt-6">
            DELIVERY TO
          </div>
          <div className="flex  items-center">
            <div>
              <MapPinIcon className="w-10 h-10" />
            </div>
            <div className="text-xl font-semibold ml-2">
              300 Post Street San Francisco, CA
            </div>
            <div>
              {" "}
              <ChevronDownIcon className="w-6 h-6 text-red-500" />
            </div>
          </div>
        </div>
        <div className=" p-1 bg-whisper-500 flex items-center rounded-md  justify-between mt-6 mx-2">
          <div className="flex items-center justify-between">
            <div>
              <button className="p-1 focus:outline-none focus:bg-gray-300 rounded-full">
                <MagnifyingGlassIcon className="h-6 w-6 text-black" />
              </button>
            </div>
            <input
              type="text"
              placeholder="search items.."
              className="  py-2 text-gray-700 bg-whisper-500 "
            />
            <div className="ml-32">
              <AdjustmentsHorizontalIcon className="h-6 w-6 text-black" />
            </div>
          </div>
        </div>
        <div className="mx-2 mt-6 h-full">
          <img src={Card} />
        </div>
        <div className="flex mt-4 mx-4 gap-2">
          <div className="flex flex-col items-center">
            <div>
              <img className="" src={Restaurants} />
            </div>
            <div className="text-xl">Restaurants</div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <img className="" src={Groceries} />
            </div>
            <div className="text-xl">Groceries</div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <img className="" src={Stationaries} />
            </div>
            <div className="text-xl">Stationaries</div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <img className="" src={Petstore} />
            </div>
            <div className="text-xl">Petstore</div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between mx-2 ">
            <div className="font-bold text-xl">
              Popular Restaurants Near You
            </div>
            <div className="text-red-500">Show all</div>
          </div>

          <div className="flex gap-4 mx-4 mt-4">
            <div className="justify-center items-center text-center bg-whisper-500 py-6 pb-16 rounded-lg">
              <div className="mx-8">
                <img src={Mcdonalds} />
              </div>
              <div className="font-bold text-xl">Mcdonalds</div>
              <div className="text-sm">Chicken patty hamburger</div>
            </div>
            <div className="justify-center items-center text-center bg-whisper-500 py-6 pb-16 rounded-lg">
              <div>
                <img className="mx-8" src={Hottacos} />
              </div>
              <div className="font-bold text-xl">Hot Tacos</div>
              <div className="text-sm">Mexican tortilla & tacos</div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="mt-4 mx-2">
          <div className="flex justify-between mx-2 ">
            <div className="font-bold text-xl">Categories</div>
            <div className="text-red-500">Show all</div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between  ">
              <div className="justify-center items-center text-center rounded-lg">
                <div className=" ">
                  <img className="" src={Vegetable} />
                </div>
                <div className="">Mcdonalds</div>
              </div>
              <div className="justify-center items-center text-center  rounded-lg">
                <div>
                  <img className="" src={Meat} />
                </div>
                <div className="">Hot Tacos</div>
              </div>
              <div className="justify-center items-center text-center rounded-lg">
                <div className="">
                  <img src={Seafood} />
                </div>
                <div className="">Mcdonalds</div>
              </div>
              <div className="justify-center items-center text-center rounded-lg">
                <div className="">
                  <img src={Sweet} />
                </div>
                <div className="">Mcdonalds</div>
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="justify-center items-center text-center rounded-lg">
                <div className="">
                  <img src={Driedfood} />
                </div>
                <div className="">Mcdonalds</div>
              </div>
              <div className="justify-center items-center text-center  rounded-lg">
                <div className="bg-havelock-200 p-1 rounded-md items-center">
                  <img className=" w-16 h-16 pt-2 " src={Burger} />
                </div>
                <div className="">Hot Tacos</div>
              </div>
              <div className="justify-center items-center text-center rounded-lg">
                <div className="">
                  <img src={Fruit} />
                </div>
                <div className="">Mcdonalds</div>
              </div>
              <div className=" items-center text-center rounded-lg">
                <div className=" items-center">
                  <div className="p-7">
                  <img src={More} />
                  </div>
                </div>
                <div className="">Mcdonalds</div>
              </div>
            </div>

            <div></div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between mx-2 ">
            <div className="font-bold text-xl">Recommended Items</div>
            <div className="text-red-500">Show all</div>
          </div>

          <div className="justify-center flex items-center text-center bg-whisper-500  rounded-lg mt-4 mx-3">
            <div className="mt-6">
              <img src={Wrap} />
            </div>
            <div>
              <div className="font-bold text-xl">Wrap Sandwich</div>
              <div className="text-sm">Grilled vegetables sandwich</div>
              <div className="text-black font-bold text-xl">$10.99</div>
            </div>
          </div>
        </div>
        <div>
          <img className="mx-2 mt-4" src={Card2} />
        </div>
        <div className="mt-4">
          <div className="flex justify-between mx-2 ">
            <div className="font-bold text-xl">
              Popular Restaurants Near You
            </div>
            <div className="text-red-500">Show all</div>
          </div>

          <div className="flex gap-4 mx-4 mt-4">
            <div className="justify-center items-center text-center rounded-lg">
              <div className="">
                <img src={Sdeal} />
              </div>
              <div className=" text-xl">Super Deal</div>
            </div>
            <div className="justify-center items-center text-center  rounded-lg">
              <div>
                <img className="" src={Fship} />
              </div>
              <div className=" text-xl">Freeship</div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between mx-2 ">
            <div className="font-bold text-xl">Suggestions For You</div>
          </div>
          <div className="flex">
            <div className="justify-center flex flex-col items-center text-center bg-whisper-500  rounded-xl px-4 pb-8 mt-4 mx-2">
              <div className="mt-6">
                <img src={Burger} />
              </div>
              <div>
                <div className="font-bold text-xl">Hamburger</div>
                <div className="text-xs">Chicken patty hamburger</div>
                <div className="text-black font-bold text-xl">$15.99</div>
              </div>
            </div>
            <div className="justify-center flex flex-col items-center text-center bg-whisper-500  rounded-xl px-4 pb-8 mt-4 mx-2">
              <div className="mt-6">
                <img src={Tacos} />
              </div>
              <div>
                <div className="font-bold text-xl">Hot Tacos</div>
                <div className="text-xs">Mexican tortilla & tacos</div>
                <div className="text-black font-bold text-xl">$10.99</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between mx-2 ">
            <div className="font-bold text-xl">Restaurants Near You</div>
          </div>
          <div className="flex mx-2 mt-8">
            <div>
              <img className=" h-48" src={Viceroy} />
            </div>
            <div className="ml-2">
              <div className="flex flex-col pb-2 border-b ">
                <div className="font-bold text-xl">Viceroy Restaurant</div>
                <div className="text-base">Lorem ipsum dolor dolo...</div>
                <div className="text-sm">New Bus Stand, Kasaragod</div>
              </div>
              <div className="mr-2 flex mt-2 mb-5">
                <div className="flex items-center mr-2">
                  <div>
                    <StarIcon className="h-5 w-5 text-tulip-500" />
                  </div>
                  <div className="ml-1 text-base text-black font-semibold">
                    4.5
                  </div>
                </div>
                <div className="flex items-center mr-2">
                  <div>
                    <ClockIcon className="h-5 w-5 text-black" />
                  </div>
                  <div className="ml-1 text-base text-black font-semibold">
                    45 mins
                  </div>
                </div>
                <div className="flex items-center mr-2">
                  <div>
                    <MapPinIcon className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="ml-1 text-base text-black font-semibold">
                    5 Km
                  </div>
                </div>
              </div>
              <div className="flex mt-2  gap-2">
                <div className="px-2 py-1 border border-red-500 rounded-md">
                  {" "}
                  BUY1GET1
                </div>
                <div className="px-2 py-1 border border-red-500 rounded-md">
                  {" "}
                  10% OFF
                </div>
              </div>
            </div>
          </div>
          <div className="flex mx-2 mt-4">
            <div>
              <img className=" h-48" src={Viceroy} />
            </div>
            <div className="ml-2">
              <div className="flex flex-col pb-2 border-b ">
                <div className="font-bold text-xl">Viceroy Restaurant</div>
                <div className="text-base">Lorem ipsum dolor dolo...</div>
                <div className="text-sm">New Bus Stand, Kasaragod</div>
              </div>
              <div className="mr-2 flex mt-2 mb-5">
                <div className="flex items-center mr-2">
                  <div>
                    <StarIcon className="h-5 w-5 text-tulip-500" />
                  </div>
                  <div className="ml-1 text-base text-black font-semibold">
                    4.5
                  </div>
                </div>
                <div className="flex items-center mr-2">
                  <div>
                    <ClockIcon className="h-5 w-5 text-black" />
                  </div>
                  <div className="ml-1 text-base text-black font-semibold">
                    45 mins
                  </div>
                </div>
                <div className="flex items-center mr-2">
                  <div>
                    <MapPinIcon className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="ml-1 text-base text-black font-semibold">
                    5 Km
                  </div>
                </div>
              </div>
              <div className="flex mt-2  gap-2">
                <div className="px-2 py-1 border border-red-500 rounded-md">
                  {" "}
                  BUY1GET1
                </div>
                <div className="px-2 py-1 border border-red-500 rounded-md">
                  {" "}
                  10% OFF
                </div>
              </div>
            </div>
          </div>
          <div className="flex mx-2 mt-4">
            <div>
              <img className=" h-48" src={Viceroy} />
            </div>
            <div className="ml-2">
              <div className="flex flex-col pb-2 border-b ">
                <div className="font-bold text-xl">Viceroy Restaurant</div>
                <div className="text-base">Lorem ipsum dolor dolo...</div>
                <div className="text-sm">New Bus Stand, Kasaragod</div>
              </div>
              <div className="mr-2 flex mt-2 mb-5">
                <div className="flex items-center mr-2">
                  <div>
                    <StarIcon className="h-5 w-5 text-tulip-500" />
                  </div>
                  <div className="ml-1 text-base text-black font-semibold">
                    4.5
                  </div>
                </div>
                <div className="flex items-center mr-2">
                  <div>
                    <ClockIcon className="h-5 w-5 text-black" />
                  </div>
                  <div className="ml-1 text-base text-black font-semibold">
                    45 mins
                  </div>
                </div>
                <div className="flex items-center mr-2">
                  <div>
                    <MapPinIcon className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="ml-1 text-base text-black font-semibold">
                    5 Km
                  </div>
                </div>
              </div>
              <div className="flex mt-2  gap-2">
                <div className="px-2 py-1 border border-red-500 rounded-md">
                  {" "}
                  BUY1GET1
                </div>
                <div className="px-2 py-1 border border-red-500 rounded-md">
                  {" "}
                  10% OFF
                </div>
              </div>
            </div>
          </div>
          <div className="flex mx-2 mt-4">
            <div>
              <img className=" h-48" src={Viceroy} />
            </div>
            <div className="ml-2">
              <div className="flex flex-col pb-2 border-b ">
                <div className="font-bold text-xl">Viceroy Restaurant</div>
                <div className="text-base">Lorem ipsum dolor dolo...</div>
                <div className="text-sm">New Bus Stand, Kasaragod</div>
              </div>
              <div className="mr-2 flex mt-2 mb-5">
                <div className="flex items-center mr-2">
                  <div>
                    <StarIcon className="h-5 w-5 text-tulip-500" />
                  </div>
                  <div className="ml-1 text-base text-black font-semibold">
                    4.5
                  </div>
                </div>
                <div className="flex items-center mr-2">
                  <div>
                    <ClockIcon className="h-5 w-5 text-black" />
                  </div>
                  <div className="ml-1 text-base text-black font-semibold">
                    45 mins
                  </div>
                </div>
                <div className="flex items-center mr-2">
                  <div>
                    <MapPinIcon className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="ml-1 text-base text-black font-semibold">
                    5 Km
                  </div>
                </div>
              </div>
              <div className="flex mt-2  gap-2">
                <div className="px-2 py-1 border border-red-500 rounded-md">
                  {" "}
                  BUY1GET1
                </div>
                <div className="px-2 py-1 border border-red-500 rounded-md">
                  {" "}
                  10% OFF
                </div>
              </div>
            </div>
          </div>
          <div className="flex mx-2 mt-4">
            <div>
              <img className=" h-48" src={Viceroy} />
            </div>
            <div className="ml-2">
              <div className="flex flex-col pb-2 border-b ">
                <div className="font-bold text-xl">Viceroy Restaurant</div>
                <div className="text-base">Lorem ipsum dolor dolo...</div>
                <div className="text-sm">New Bus Stand, Kasaragod</div>
              </div>
              <div className="mr-2 flex mt-2 mb-5">
                <div className="flex items-center mr-2">
                  <div>
                    <StarIcon className="h-5 w-5 text-tulip-500" />
                  </div>
                  <div className="ml-1 text-base text-black font-semibold">
                    4.5
                  </div>
                </div>
                <div className="flex items-center mr-2">
                  <div>
                    <ClockIcon className="h-5 w-5 text-black" />
                  </div>
                  <div className="ml-1 text-base text-black font-semibold">
                    45 mins
                  </div>
                </div>
                <div className="flex items-center mr-2">
                  <div>
                    <MapPinIcon className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="ml-1 text-base text-black font-semibold">
                    5 Km
                  </div>
                </div>
              </div>
              <div className="flex mt-2  gap-2">
                <div className="px-2 py-1 border border-red-500 rounded-md">
                  {" "}
                  BUY1GET1
                </div>
                <div className="px-2 py-1 border border-red-500 rounded-md">
                  {" "}
                  10% OFF
                </div>
              </div>
            </div>
          </div>
          <div className="fixed bottom-0 w-full justify-between bg-white py-3 items-center px-2  flex gap-1">
            <div className="bg-red-500 pl-6 py-2 px-8 rounded-full h-30 w-20 text-center">        
                      <HomeIcon className="h-8 w-8 text-white" />
</div>
<div className=" pl-6 py-2 px-8 rounded-full h-30 w-20 text-center">        
                      <HeartIcon className="h-8 w-8 text-black" />
</div>
<div className=" pl-6 py-2 px-8 rounded-full h-30 w-20 text-center">        
                      <MagnifyingGlassIcon className="h-8 w-8 text-black" />
</div>
<div className=" pl-6 py-2 px-8 rounded-full h-30 w-20 text-center">        
                      <BellIcon className="h-8 w-8 text-black" />
</div>
<div className=" pl-6 py-2 px-8 rounded-full h-30 w-20 text-center ">        
                      <ShoppingCartIcon className="h-8 w-8  text-black" />
</div>
            <div></div>

            <div></div>

            <div></div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homepage;
