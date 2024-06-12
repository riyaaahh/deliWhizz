import React, { useState, useEffect } from "react";
import SectionHeading from "../../../Components/Common/SectionHeading";
import { homeSlidersList } from "../../../constants";
import placeHolderImage from "../../../assets/placeholder.jpg";
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-image";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchSliders } from "../../../redux/Slices/sliderSlice";

const ApiSliders = () => {
  const dispatch = useDispatch();

  // Accessing state slices
  const sliders = useSelector((state) => state.sliders.sliders);
  const sliderStatus = useSelector((state) => state.sliders.status);
  const error = useSelector((state) => state.sliders.error);

  useEffect(() => {
    if (sliderStatus === "idle") {
      dispatch(fetchSliders());
    }
  }, [sliderStatus, dispatch]);

  let content;

  if (sliderStatus === "loading") {
    content = <div>Loading...</div>;
  } else if (sliderStatus === "succeeded") {
    content = (
      <div className="mt-6">
        {sliders?.length > 0 ? (
          <React.Fragment>
            <div className="flex justify-between mb-2">
              <SectionHeading text={"Offers for you"} />
              <div className="text-deli-red-500 text-sm">Show all</div>
            </div>
            <div
              style={{ overflowX: "hidden", WebkitOverflowScrolling: "touch" }}
              className="hidden-scroll-bar"
            >
              <div className="flex overflow-y-auto gap-6 mt-3 hidden-scroll-bar">
                {sliders?.map((slider, index) => (
                  <div
                    className="flex flex-col items-center justify-center text-center"
                    key={index}
                  >
                    {/* <Link key={index} to={`/single-product/${slider.id}`}> */}
                    <ProgressiveImage
                      delay={20}
                      // src={Sdeal}
                      src={
                        "https://admin.corelabs.work/public/public/" +
                        slider.image
                      }
                      placeholder={placeHolderImage}
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
                            backgroundSize: "cover",
                          }}
                          className=""
                          alt="slider.name"
                        />
                      )}
                    </ProgressiveImage>
                    {/* </Link> */}
                  </div>
                ))}
              </div>
            </div>
          </React.Fragment>
        ) : null}
      </div>
    );
  } else if (sliderStatus === "failed") {
    content = <div>{error}</div>;
  }

  return content;
};

export default ApiSliders;
