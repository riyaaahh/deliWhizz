import React, { useState, useEffect } from "react";
import Tacos from "../../../assets/Tacos.png";
import Burger from "../../../assets/Burger.png";
import SectionHeading from "../../../Components/Common/SectionHeading";
import { homeSuggestedItems } from "../../../constants";
import ProgressiveImage from "react-progressive-image";
import placeHolderImage from "../../../assets/placeholder.jpg";
import axios from "axios";

const ApiSuggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  const fetchSliders = async () => {
    try {
      const response = await axios.get(
        "https://admin.corelabs.work/api/home-recommented-items"
      );
      setSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    }
  };

  useEffect(() => {
    fetchSliders();
  }, []);

  return (
    <div className="mt-4">
      {homeSuggestedItems?.length > 0 ? (
        <>
          <div className="flex justify-between mb-2">
            <SectionHeading text={"Suggestions for you"} />
          </div>

          <div className="flex overflow-y-auto gap-4 mt-3 hidden-scroll-bar">
            {homeSuggestedItems?.map((item, index) => (
              <div
                key={index}
                className="justify-center flex flex-col items-center text-center bg-whisper-500 rounded-xl px-4"
              >
                <div
                  className="mt-6"
                  style={{ height: "100px", width: "100px" }}
                >
                  <img
                    src={`https://admin.corelabs.work/uploads/img/${item.image}`}
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                    className="rounded-md"
                    alt={item.name}
                    onError={(e) => {
                      e.target.src = placeHolderImage;
                    }} 
                  />
                </div>
                <div>
                  <div className="font-bold text-xl mt-2">{item.name}</div>
                  <div className="text-xs">{item.desc}</div>
                  <div className="text-black font-bold text-xl">$15.99</div>
                </div>
              </div>
            ))}

            {/* <div className="justify-center flex flex-col items-center text-center bg-whisper-500  rounded-xl px-4 pb-8  ml-4">
              <div className="mt-6">
                <img src={Tacos} />
              </div>
              <div>
                <div className="font-bold text-xl">Hot Tacos</div>
                <div className="text-xs">Mexican tortilla & tacos</div>
                <div className="text-black font-bold text-xl">$10.99</div>
              </div>
            </div> */}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ApiSuggestions;
