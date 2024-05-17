import React from 'react'
import Mcdonalds from "../../../assets/Mcdonalds.png";
import Hottacos from "../../../assets/Hottacos.png";
const Popular = () => {
  return (
    <div>
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
    </div>
  )
}

export default Popular