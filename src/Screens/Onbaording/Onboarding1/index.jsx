import React, { useState } from 'react';
import Women from '../../.././assets/Women.png'
const Onboarding1 = ({ handleCurrent }) => {

  return (
    <div className='flex flex-col justify-center h-screen '>
      <div className='flex justify-center items-center gap-2 '>
        <div className='bg-red-500 p-1 px-3 rounded-full '></div>
        <div className='bg-red-300 p-1 rounded-full '></div>
        <div className='bg-red-300 p-1 rounded-full '></div>
      </div>
      <div className='font-bold text-2xl mt-5 ml-10'>Brow the largest variety <br />
        of fruits, vegetables,<br /> groceries, drink <br />
        and more.</div>
      <div>
      </div>
      <div><img className=" mx-10  " src={Women} /></div>
      <div className='flex flex-col gap-2 mt-32'>
        <div onClick={() => handleCurrent(1)} className='bg-red-500 rounded-3xl  px-6 py-5 text-white  mx-6 text-center '><button>Next</button></div>
        <div onClick={() => handleCurrent(2)} className='text-red-500 rounded-3xl  px-6 py-5 bg-white  mx-6 text-center '> <button>Skip</button></div>
      </div>
    </div>
  );
};

export default Onboarding1;
