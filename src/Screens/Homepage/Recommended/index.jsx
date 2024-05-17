import React, { useState } from 'react'
import { homeBannerList, homeRecommendedItemList } from '../../../constants';
import placeHolderImage from '../../../assets/placeholder.jpg'
import ProgressiveImage from "react-progressive-image";
import SectionHeading from '../../../Components/Common/SectionHeading';


const Recommended = () => {



  return (
    <div className="mt-6 ">
      {homeRecommendedItemList?.length > 0 ?
        <>
          <div className="flex justify-between mb-2">

            <SectionHeading
              text={"Recommended Items"}
            />
            <div className="text-deli-red-500 text-sm">Show all</div>
          </div>
          <div style={{ overflowX: "hidden", WebkitOverflowScrolling: "touch" }} className="hidden-scroll-bar"   >

          <div
            className="flex overflow-y-auto gap-6 mt-3 hidden-scroll-bar"
          >

            {homeRecommendedItemList?.map((item, index) => (
              <div className="px-3 py-4 gap-5 flex flex-row items-center  bg-whisper-500  rounded-lg min-w-[90vw] max-h-[180px]">
                <div className="">
                  <ProgressiveImage
                    delay={20}
                    src={item.image}
                    placeholder={
                      placeHolderImage
                    }
                  >
                    {(src) => (
                      <img
                        src={src}
                        style={{
                          objectFit: "cover ",
                        }}
                        className="rounded-md max-h-[100px] "
                        alt="ddelibixz"
                      />
                    )}
                  </ProgressiveImage>
                </div>
                <div className='flex flex-col'>
                  <div className="font-bold text-xl">{item?.name}</div>
                  <div className="text-sm">Grilled vegetables sandwich</div>
                  <div className="text-black font-bold text-xl">${item?.price}</div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </>
        : null}
    </div>
  )
}

export default Recommended