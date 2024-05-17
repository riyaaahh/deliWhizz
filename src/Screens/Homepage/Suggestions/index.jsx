import React from 'react'

import Tacos from "../../../assets/Tacos.png";
import Burger from "../../../assets/Burger.png";
import SectionHeading from '../../../Components/Common/SectionHeading';

const Suggestions = () => {
    return (
        <div className="mt-4">
            <div className="flex justify-between mb-2">

                <SectionHeading
                    text={"Suggestions for you"}
                />
            </div>
            <div className="flex">
                <div className="justify-center flex flex-col items-center text-center bg-whisper-500  rounded-xl px-4 pb-8  ">
                    <div className="mt-6">
                        <img src={Burger} />
                    </div>
                    <div>
                        <div className="font-bold text-xl">Hamburger</div>
                        <div className="text-xs">Chicken patty hamburger</div>
                        <div className="text-black font-bold text-xl">$15.99</div>
                    </div>
                </div>
                <div className="justify-center flex flex-col items-center text-center bg-whisper-500  rounded-xl px-4 pb-8  ml-4">
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
    )
}

export default Suggestions