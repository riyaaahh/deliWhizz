import React from 'react'
import Vegetable from "../../../assets/Vegetable.png";
import Seafood from "../../../assets/Seafood.png";
import Meat from "../../../assets/Meat.png";
import Sweet from "../../../assets/Sweet.png";
import Driedfood from "../../../assets/Driedfood.png";
import More from "../../../assets/More.png";
import Fruit from "../../../assets/Fruit.png";
import Burger from "../../../assets/Burger.png";

const Categories = () => {
  return (
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
  )
}

export default Categories