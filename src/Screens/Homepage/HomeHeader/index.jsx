import React from 'react'
import { Bars3BottomLeftIcon, MagnifyingGlassIcon, MapPinIcon, PencilSquareIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Logo2 from "../../../assets/Logo2.png";

const HomeHeader = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="  ">
                    <Bars3BottomLeftIcon className="text-deli-red-500 w-8 h-8" />
                </div>

                <div className="text-deli-red-500">
                    <h6 className='font-bold text-xl'> DeliBizz</h6>
                </div>

                <div className="  ">
                    <UserCircleIcon className="text-deli-red-500 w-8 h-8 " />
                </div>
            </div>
            <div className='mt-5'>
                <div className="text-deli-red-500 text-md font-semibold ">
                    DELIVERY TO
                </div>
                <div className="flex  items-center justify-between">
                    <div className='flex items-center'>
                        <MapPinIcon className="w-4 h-4" />
                        <div className="text-sm font-semibold ml-2 text-deli-black-500">
                            300 Post Street San Francisco, CA
                        </div>
                    </div>
                    <div>
                        <PencilSquareIcon className="w-6 h-6 text-deli-red-500" />
                    </div>
                </div>
            </div>
            <div className=" p-1 bg-whisper-500 flex items-center rounded-md  justify-between mt-6 ">
                <div className="flex items-center justify-between">
                    <div>
                        <button className="p-1 focus:outline-none focus:bg-gray-300 rounded-full">
                            <MagnifyingGlassIcon className="h-6 w-6 text-deli-black-500" />
                        </button>
                    </div>
                    <input
                        type="text"
                        placeholder="Search items.."
                        className="outline-none w-full  py-2 text-deli-black-500 bg-whisper-500 "
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeHeader