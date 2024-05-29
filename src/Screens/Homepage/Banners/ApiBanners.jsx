import React, { useState, useEffect } from "react";
import axios from "axios";
import { homeBannerList } from "../../../constants";
import placeHolderImage from "../../../assets/placeholder.jpg";
import Slider from "react-slick";
import ProgressiveImage from "react-progressive-image";

const CustomDot = ({ isActive, size }) => {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: isActive ? "#cb202d" : "#D9D9D9",
        margin: "0 2px",
        display: "inline-block",
      }}
    />
  );
};

const ApiBanners = () => {
  const [banners, setBanners] = useState([]);

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
    centerPadding: "1px",
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // padding: "10px",
        }}
      >
        {dots.map((dot, index) => {
          let size = 8 - Math.abs(index - slide) * 2;
          size = Math.max(size, 0);

          return (
            <CustomDot key={index} isActive={index === slide} size={size} />
          );
        })}
      </div>
    ),
    afterChange: (current, next) => setSlide(current),
  };

  const fetchBanners = async () => {
    try {
      const response = await axios.get(
        "https://admin.corelabs.work/api/banners"
      );
      setBanners(response.data.banners);
    } catch (error) {
      console.error("Error fetching banners:", error);
      setBanners([]); 
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  return (
    <div className="mt-4 h-full mb-8">
      {homeBannerList?.length > 0 ? (
        <Slider {...settings} className="">
          {homeBannerList?.map((ban, index) => (
            <div className="pr-3" key={index}>
              <ProgressiveImage
                delay={20}
                src={"https://admin.corelabs.work/public/public/" + ban.image}
                placeholder={placeHolderImage}
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
      ) : null}
    </div>
  );
};

export default ApiBanners;
