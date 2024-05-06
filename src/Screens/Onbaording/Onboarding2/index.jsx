import React from 'react'
import Deliveryboy from '../../.././assets/Deliveryboy.png'

const Onboarding2 = ({handleCurrent}) => {
  return (
    <div className='flex flex-col justify-center  '>
    <div className='flex justify-center items-center gap-2 mt-24'>
      <div className='bg-red-500 p-1 px-3 rounded-full '></div>
      <div className='bg-red-300 p-1 rounded-full '></div>
      <div className='bg-red-300 p-1 rounded-full '></div>
    </div>
    <div className='font-bold text-2xl mt-5 ml-10'>Track your delivery in<br/> realtime.</div>
    <div>
    </div>
    <div><img className=" mx-10 mt-10 " src={Deliveryboy}/></div>
    <div className='flex flex-col gap-2 mt-20'>
    <div className='flex flex-col gap-2 mt-32'>
        <div onClick={() => handleCurrent(1)} className='bg-red-500 rounded-3xl  px-6 py-5 text-white  mx-6 text-center '><button>Next</button></div>
        <div onClick={() => handleCurrent(2)} className='text-red-500 rounded-3xl  px-6 py-5 bg-white  mx-6 text-center '> <button>Skip</button></div>
      </div>
    </div>
  </div>
  )
}

export default Onboarding2