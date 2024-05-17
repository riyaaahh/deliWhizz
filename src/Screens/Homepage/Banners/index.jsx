import React, { useState } from 'react'
import Card from "../../../assets/Card.png";
import { homeBannerList } from '../../../constants';
import placeHolderImage from '../../../assets/placeholder.jpg'
import Slider from "react-slick";
import ProgressiveImage from "react-progressive-image";

const CustomDot = ({ isActive, size }) => {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        background: isActive ? '#cb202d' : '#D9D9D9',
        margin: '0 2px',
        display: 'inline-block',
      }}
    />
  );
};


const Banner = () => {

  const [length, setlength] = useState(5)
  const [slide, setSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: homeBannerList?.length > 1,
    slidesToShow: 1.0002,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 400,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: '1px',
    appendDots: dots => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // padding: "10px",
        }}
      >
        {dots.map((dot, index) => {
          let size = 8 - (Math.abs(index - slide) * 2);
          size = Math.max(size, 0);

          return (
            <CustomDot
              key={index}
              isActive={index === slide}
              size={size}
            />
          );
        })}
      </div>
    ),
    afterChange: (current, next) => (setSlide(current))
  };

  return (
    <div className="mt-4 h-full mb-8">
      {homeBannerList?.length > 0 ?
        <Slider {...settings} className="">
          {homeBannerList?.map((ban, index) => (
            <div className="pr-3" key={index}>
              <ProgressiveImage
                delay={20}
                src={ban.image}
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
                    className="rounded-md max-h-[120px] w-full"
                    alt="ddelibixz"
                  />
                )}
              </ProgressiveImage>
            </div>
          ))}
        </Slider>
        : null}
    </div>
  )
}

export default Banner