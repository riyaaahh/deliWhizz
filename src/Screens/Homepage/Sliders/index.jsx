import React from 'react'
import Sdeal from "../../../assets/Sdeal.png";
import Fship from "../../../assets/Fship.png";
import SectionHeading from '../../../Components/Common/SectionHeading';
import { homeSlidersList } from '../../../constants';
import placeHolderImage from '../../../assets/placeholder.jpg'
import { Link } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-image';

const Sliders = () => {
  return (
    <div className="mt-6">
      {homeSlidersList?.length > 0 ?
        <React.Fragment>

          <div className="flex justify-between mb-2">

            <SectionHeading
              text={"Offers for you"}
            />
            <div className="text-deli-red-500 text-sm">Show all</div>
          </div>
          <div style={{ overflowX: "hidden", WebkitOverflowScrolling: "touch" }} className="hidden-scroll-bar"   >
        <div
          className="flex overflow-y-auto gap-6 mt-3 hidden-scroll-bar"
        >
          {homeSlidersList?.map((category, index) => (
            <div className="flex flex-col items-center justify-center text-center" key={index}>
              <Link to={`/single-grocery/${category.id}`}>
                <ProgressiveImage
                  delay={20}
                  src={Sdeal}
                  placeholder={
                    placeHolderImage
                  }
                >
                  {(src) => (
                    <img
                      src={src}
                      style={{
                        height: "38vw",
                        minWidth: "38vw",
                        width: "38vw",
                        borderRadius: "10%",
                        objectFit: "cover",
                        backgroundRepeat: "round",
                        // padding: "3px",
                        backgroundSize: 'cover',
                      }}
                      className=""
                      alt="category.name"
                    />
                  )}
                </ProgressiveImage>
              </Link>
            </div>
          ))}

          </div>
          </div>
          {/* <div className="flex gap-4 mx-4 mt-4">
            <div className="justify-center items-center text-center rounded-lg">
              <div className="">
                <img src={Sdeal} />
              </div>
              <div className=" text-xl">Super Deal</div>
            </div>
            <div className="justify-center items-center text-center  rounded-lg">
              <div>
                <img className="" src={Fship} />
              </div>
              <div className=" text-xl">Freeship</div>
            </div>
          </div> */}
        </React.Fragment>
        : null}
    </div>
  )
}

export default Sliders