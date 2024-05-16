import React from 'react'
import Delivery from '../../.././assets/Delivery.png';
const Onboarding3 = ({ handleCurrent }) => {
  return (
    <div className='flex flex-col justify-center h-screen '>
      <div className='flex justify-center items-center gap-2 '>
        <div className='bg-red-500 p-1 px-3 rounded-full '></div>
        <div className='bg-red-300 p-1 rounded-full '></div>
        <div className='bg-red-300 p-1 rounded-full '></div>
      </div>
      <div className='font-bold text-2xl mt-5 ml-10'>Pickup dlivery <br />
        at door step and enjoy <br />
        your vegetables & <br />
        groceries.</div>

      <div><img className=" mx-10 mt-16 " src={Delivery} /></div>
      <div className='flex flex-col gap-2 mt-28'>
        <div onClick={() => handleCurrent(2)} className='bg-red-500 rounded-3xl  px-6 py-5 text-white  mx-6 text-center '><button>Get Started</button></div>
      </div>
    </div>
  )
}

export default Onboarding3