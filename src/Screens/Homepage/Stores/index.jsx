import React, { useState, useEffect } from "react";
import Viceroy from "../../../assets/Viceroy.png";
import { ClockIcon, MapPinIcon, StarIcon } from "@heroicons/react/24/solid";
import SectionHeading from "../../../Components/Common/SectionHeading";
import { storesList } from "../../../constants";
import placeHolderImage from "../../../assets/placeholder.jpg";
import ProgressiveImage from "react-progressive-image";
import axios from "axios";
import { Link } from "react-router-dom";

const Stores = () => {
  const [stores, setStores] = useState([]);

  const fetchStores = async () => {
    try {
      const response = await axios.get(
        "https://admin.corelabs.work/api/list-all-shops"
      );
      setStores(response.data);
      // console.log(response);
    } catch (error) {
      console.error("Error fetching stores:", error);
      setStores([]);
    }
  };

  useEffect(() => {
    fetchStores();
  }, []);

  return (
    <div className="w-full px-5">
      {storesList?.length > 0 ? (
        <div className="mt-4">
          <div className="flex justify-between mb-2">
            <SectionHeading
              text={"Stores near you" + " (" + storesList?.length + ")"}
            />
          </div>
          <div className="flex flex-col gap-3 mb-[100px]">
            {storesList?.map((store, index) => (
              <Link to={`/single-store/${store.id}`}  key={index}>
                <div key={index} className="flex mt-3 gap-5 items-center">
                  <div>
                    <ProgressiveImage
                      delay={20}
                      src={
                        "https://admin.corelabs.work/uploads/business_logos/" +
                        store.logo
                      }
                      placeholder={placeHolderImage}
                    >
                      {(src) => (
                        <img
                          src={src}
                          style={{
                            objectFit: "cover ",
                          }}
                          className="h-36 max-h-36 min-h-36 w-32 rounded-xl shadow-lg"
                          alt="ddelibixz"
                        />
                      )}
                    </ProgressiveImage>
                  </div>
                  <div className="">
                    <div className="flex flex-col pb-2 border-b ">
                      <div className="font-bold text-md">{store?.name}</div>
                      <div className="text-sm">
                        {store?.desc ?? "Spicy and tasty food"}
                      </div>
                      <div className="text-sm">
                        {store?.adress ?? "Perinthalmanna"}
                      </div>
                    </div>
                    <div className="mr-2 flex mt-2  gap-2">
                      <div className="flex items-center ">
                        <div>
                          <StarIcon className="h-4 w-4 text-tulip-500" />
                        </div>
                        <div className=" text-sm text-black font-semibold">
                          {store?.rating ?? "4.5"}
                        </div>
                      </div>
                      <div className="flex items-center ">
                        <div>
                          <ClockIcon className="h-4 w-4 text-black" />
                        </div>
                        <div className=" text-sm text-black font-semibold">
                          {store?.time ?? "30 Min"}
                        </div>
                      </div>
                      <div className="flex items-center ">
                        <div>
                          <MapPinIcon className="h-4 w-4 text-deli-red-500" />
                        </div>
                        <div className=" text-base text-deli-black-500 font-semibold">
                          {store?.distance ?? "5km"}
                        </div>
                      </div>
                    </div>
                    {store?.offers && store?.offers?.length > 0 && (
                      <div className="flex mt-2 gap-2">
                        {store?.offers?.map((offer, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-center px-2 py-1 border border-red-500 rounded-md text-xs"
                          >
                            {" "}
                            {offer}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Stores;
