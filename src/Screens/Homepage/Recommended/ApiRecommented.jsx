import React, { useState, useEffect } from "react";
import { homeRecommendedItemList } from "../../../constants";
import placeHolderImage from "../../../assets/placeholder.jpg";
import ProgressiveImage from "react-progressive-image";
import SectionHeading from "../../../Components/Common/SectionHeading";
import axios from "axios";

const ApiRecommented = () => {
  const [recomments, setRecomments] = useState([]);

  const fetchSliders = async () => {
    try {
      const response = await axios.get(
        "https://admin.corelabs.work/api/home-recommented-items"
      );
      setRecomments(response.data);
    } catch (error) {
      console.error("Error fetching recomments:", error);
      setRecomments([]);
    }
  };

  useEffect(() => {
    fetchSliders();
  }, []);
  return (
    <div className="mt-6 ">
      {homeRecommendedItemList?.length > 0 ? (
        <>
          <div className="flex justify-between mb-2">
            <SectionHeading text={"Recommended Items"} />
            <div className="text-deli-red-500 text-sm">Show all</div>
          </div>
          <div
            style={{ overflowX: "hidden", WebkitOverflowScrolling: "touch" }}
            className="hidden-scroll-bar"
          >
            <div className="flex overflow-y-auto gap-6 mt-3 hidden-scroll-bar">
              {homeRecommendedItemList?.map((item, index) => (
                <div
                  key={index}
                  className="px-3 py-4 gap-5 flex flex-row items-center  bg-whisper-500  rounded-lg min-w-[90vw] max-h-[180px]"
                >
                  <div className="">
                    <ProgressiveImage
                      delay={20}
                      src={
                        "https://admin.corelabs.work/uploads/img/" + item.image
                      }
                      placeholder={placeHolderImage}
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
                  <div className="flex flex-col">
                    <div className="font-bold text-xl">{item?.name}</div>
                    <div className="text-sm">{item?.desc}</div>
                    <div className="text-black font-bold text-xl">
                      ${item?.price ?? 5}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ApiRecommented;
