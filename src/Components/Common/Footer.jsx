import { BellIcon, HeartIcon, HomeIcon, MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Footer = () => {
    return (
        <div className="fixed bottom-0 w-full justify-between bg-white py-2 items-center px-2  flex gap-1 border-t shadow-md">
            <div className="bg-deli-red-500 rounded-full h-12 w-12 flex items-center justify-center text-center">
                <HomeIcon className="h-5 w-5 text-white" />
            </div>
            <div className=" rounded-full h-12 w-12 flex items-center justify-center text-center">
                <HeartIcon className="h-5 w-5 text-black" />
            </div>
            <div className=" rounded-full h-12 w-12 flex items-center justify-center text-center">
                <MagnifyingGlassIcon className="h-5 w-5 text-black" />
            </div>
            <div className=" rounded-full h-12 w-12 flex items-center justify-center text-center">
                <BellIcon className="h-5 w-5 text-black" />
            </div>
            <div className=" rounded-full h-12 w-12 flex items-center justify-center text-center ">
                <ShoppingCartIcon className="h-5 w-5  text-black" />
            </div>
        </div>
    )
}

export default Footer