import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login1 = () => {
  const [current, setcurrent] = useState(1)

  const handleCurrent = () => {
    setcurrent(current + 1)
  }
  return (
    <div className='px-5'>
      <Link to={'/onboarding'}>
        <div className='rounded-full p-1 border mt-20 object-cover w-9 ml-4 h-9'>
          <ChevronLeftIcon className="h-6 w-6 text-black  " />
        </div>
      </Link>
      {current == 1 &&

        <React.Fragment>
          <div className='font-bold text-2xl ml-6 mt-5 '>Enter your phone number</div>
          <div className='ml-6 mt-2 text-lg text-gray-400'>You’ll receive 4 digit code to verify account
          </div>
          <div>
            <div class="mb-6">
              <input placeholder='Enter Your Phone Number' maxLength={10} id="phone" name="phone" class=" text-center border border-deli-red-500 outline-none rounded-full w-full h-16 mt-6 text-gray-700 flex items-center justify-center py-4 font-bold text-xl"></input>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div onClick={() => handleCurrent()} className='bg-deli-red-500 rounded-full  px-6 py-5 text-white font-bold text-lg  text-center '><button>GET OTP</button></div>
          </div>
        </React.Fragment>
      }
      {current == 2 &&
        <React.Fragment>
          <div className='font-bold text-2xl ml-6 mt-5 '>Enter your full name</div>
          <div className='ml-6 mt-2 text-lg text-gray-400'>Enter your full name
          </div>
          <div>
            <div class="mb-6">
              <input placeholder='Enter Your Full Name' name="name" class=" text-center border border-deli-red-500 outline-none rounded-full w-full h-16 mt-6 text-gray-700 flex items-center justify-center py-4 font-bold text-xl"></input>
            </div>
          </div>
          <Link to={'/homepage'}>

            <div className='flex flex-col gap-2'>
              <div className='bg-deli-red-500 rounded-full  px-6 py-5 text-white font-bold text-lg  text-center '><button>GET STARTED</button></div>
            </div>
          </Link>
        </React.Fragment>
      }
    </div>
  )
}

export default Login1;