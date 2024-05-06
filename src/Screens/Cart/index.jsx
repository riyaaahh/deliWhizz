import { ChevronLeftIcon, MapPinIcon } from '@heroicons/react/16/solid'
import { MapIcon } from '@heroicons/react/24/solid'
import { Bars3BottomLeftIcon, Cog8ToothIcon, PencilSquareIcon, ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Burger from './../../assets/Burger.png'
import Noodles from './../../assets/Noodles.png'
import Wrap from './../../assets/Wrap.png'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
const Cart = () => {
  return (
    <div className='mx-3'> 
    <div className="flex items-center  justify-between mx-2">
    <div className=" p-2 py-3   border border-gray-300 rounded-2xl w-16 h-16">
        <div className='ml-1'>
      <ChevronLeftIcon className="text-gray-300 w-9 h-9" />
      </div>
    </div>

    <div className="h-16  w-20 mt-8 text-center items-center font-bold text-xl whitespace-nowrap">
     MY CART
    </div>

    <div className=" p-2   border bg-orangee-300 rounded-2xl  w-16 h-16 text-center">
        <div className='ml-1'>
      <ShoppingBagIcon className="text-black w-9 h-9 " />
      </div>
    </div>
  </div>
  <div className="flex mt-4 items-center justify-between">
    <div className='flex'>
            <div>
              <MapPinIcon className="w-10 h-10" />
            </div>
            <div className="text-sm font-semibold ml-2 text-nowrap">
            Adi Sucipto St. No. 23, Solo, Central <br/>Java, Indonesia
            </div>
            </div>
            <div>
           
              <PencilSquareIcon className="w-9 h-9 text-red-500" />
            </div>
          </div>
          <div className='flex flex-col mt-4'>
            <div className='flex justify-between items-center bg-whisper-500 rounded-md'>
              <div className='flex items-center'>
                <div className='w-20 h-20 items-cente mt-4 ml-4'><img src={Burger}/></div>
                <div className='flex flex-col ml-2'>
                    <div className=''>Chef’s Burger</div>
                    <div className='font-bold text-lg text-red-500'>$15.99</div>
                </div>
                </div>
                <div className='flex mr-3 bg-white p-2 rounded-lg px-6 py-2 pb-3 gap-4 font-bold'>
                    <div className='text-red-500 text-2xl'>-</div>
                    <div className=' text-xl mt-1'>2</div>
                    <div className='text-red-500 text-2xl'>+</div>
                </div>
            </div>
          </div>
          <div className='flex flex-col mt-4'>
            <div className='flex justify-between items-center bg-whisper-500 rounded-md'>
              <div className='flex items-center'>
                <div className='w-20 h-20 items-cente mt-4 ml-4'>
                  <img src={Noodles}/></div>
                <div className='flex flex-col ml-2'>
                    <div className=''>Chef’s Burger</div>
                    <div className='font-bold text-lg text-red-500'>$15.99</div>
                </div>
                </div>
                <div className='flex mr-3 bg-white p-2 rounded-lg px-6 py-2 pb-3 gap-4 font-bold'>
                    <div className='text-red-500 text-2xl'>-</div>
                    <div className=' text-xl mt-1'>1</div>
                    <div className='text-red-500 text-2xl'>+</div>
                </div>
            </div>
          </div>
          <div className='flex flex-col mt-4'>
            <div className='flex justify-between items-center bg-whisper-500 rounded-md'>
              <div className='flex items-center'>
                <div className='w-20 h-20 items-cente mt-4 ml-4'>
                  <img src={Wrap}/></div>
                <div className='flex flex-col ml-2'>
                    <div className=''>Sandwich</div>
                    <div className='font-bold text-lg text-red-500'>$15.99</div>
                </div>
                </div>
                <div className='flex mr-3 bg-white p-2 rounded-lg px-6 py-2 pb-3 gap-4 font-bold'>
                    <div className='text-red-500 text-2xl'>-</div>
                    <div className=' text-xl mt-1'>2</div>
                    <div className='text-red-500 text-2xl'>+</div>
                </div>
            </div>
          </div>
          <div className='flex flex-col mt-4'>
            <div className='flex justify-between items-center bg-whisper-500 rounded-md'>
              <div className='flex items-center'>
                <div className='w-20 h-20 items-cente mt-4 ml-4'>
                  <img src={Burger}/></div>
                <div className='flex flex-col ml-2'>
                    <div className=''>Chef’s Burger</div>
                    <div className='font-bold text-lg text-red-500'>$15.99</div>
                </div>
                </div>
                <div className='flex mr-3 bg-white p-2 rounded-lg px-6 py-2 pb-3 gap-4 font-bold'>
                    <div className='text-red-500 text-2xl'>-</div>
                    <div className=' text-xl mt-1'>2</div>
                    <div className='text-red-500 text-2xl'>+</div>
                </div>
            </div>
          </div>
          <div className="mt-4">
          <div className="flex justify-between  ">
            <div className="font-bold text-base">Add Coupon</div>
          </div>
          <div className=" border bg-white flex items-center rounded-md    mt-2 ">
          <div className='flex  justify-between gap-28'>
            <div className='p-3'>
            <input
              type="text"
              placeholder=" Coupon Code "
              className="  py-2 text-gray-700 = "
            />
           </div>
           <div className='px-4 py-3 bg-red-500 rounded-r-md'>
  <Cog6ToothIcon className='text-white w-10 h-10  '/>
  </div>
  </div>
        </div>
        </div>
        <div className='mt-32  rounded-t-xl  pt-8 '>
<div className='flex flex-col gap-2 mx-2 border-b pb-4'>
<div className='flex justify-between'>
  <div   className='font-bold text-sm'>Subtotal</div>
  <div className='font-bold text-sm'>$63.96</div>
  </div>
  <div className='flex justify-between'>
  <div   className='font-bold text-sm'>Shipping fee</div>
  <div className='font-bold text-sm'>$0.00</div>
  </div>
  <div className='flex justify-between'>
  <div   className='font-bold text-sm text-lime-500'>Total Discount</div>
  <div className='font-bold text-sm text-lime-500'>$63.96</div>
  </div>
  <div className='flex justify-between'>
  <div   className='font-bold text-sm'>Sale Tax</div>
  <div className='font-bold text-sm'>$63.96</div>
  </div>

</div>
<div className='w-full bg-gray-300'></div>
<div className='flex justify-between mx-2 mt-4'>
  <div   className='font-bold text-base'>Subtotal</div>
  <div className='font-bold text-base'>$63.96</div>
  </div>
        </div>
        <div className='flex p-4 bg-red-500 rounded-2xl justify-between mt-16 mb-4 shadow-red-500'>
          <div className='flex flex-col ml-2' > 
            <div className='text-xl text-white'>4 Items</div>
            <div className='text-2xl font-bold text-white'>$63.96</div>
          </div>
          <div className='flex bg-white rounded-full px-8 py-2 gap-2 items-center mr-2 '> 
            <div className='text-xl text-red-500'><ShoppingCartIcon className='text-red-500 w-8 h-8'/></div>
            <div className='text-2xl font-bold'>Checkout</div>
          </div>
        </div>
  </div>
  )
}

export default Cart