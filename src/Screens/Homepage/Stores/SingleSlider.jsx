// Import dependencies
import React, { useState, useEffect } from "react";
import ProgressiveImage from "react-progressive-image";
import { useParams } from "react-router-dom";
import { MapPinIcon, ClockIcon, StarIcon } from "@heroicons/react/24/solid";
import HomeHeader from "../HomeHeader";
import Footer from "../../../Components/Common/Footer";

const SingleSlider = () => {
  // Get storeId from URL params
  const { storeId } = useParams();
  // State for data and error handling
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Fetch data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://admin.corelabs.work/api/business/${storeId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [storeId]);
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render content when data is available
  return (
    <div className="container mx-auto p-4">
      <HomeHeader />
      {data && (
        <>
          <h2 className="text-2xl font-semibold mb-4 mt-4">
            Store: {data[0].name}
          </h2>
          <div className="border border-gray-200 p-4 rounded-lg mb-4">
            <ProgressiveImage
              src={`https://admin.corelabs.work/uploads/business_logos/${data[0].logo}`}
              placeholder=""
            >
              {(src, loading) => (
                <img
                  src={src}
                  alt="Store Logo"
                  className={`w-full rounded-lg ${
                    loading ? "opacity-0" : "opacity-100"
                  }`}
                />
              )}
            </ProgressiveImage>
            <div className="flex mt-2 justify-between gap-2 m-4 p-4">
              <div className="flex items-center ">
                <div>
                  <StarIcon className="h-4 w-4 text-tulip-500" />
                </div>
                <div className=" text-sm text-black font-semibold">
                  {data[0]?.rating ?? "4.5"}
                </div>
              </div>
              <div className="flex items-center ">
                <div>
                  <ClockIcon className="h-4 w-4 text-black" />
                </div>
                <div className=" text-sm text-black font-semibold">
                  {data[0]?.time ?? "30 Min"}
                </div>
              </div>
              <div className="flex items-center ">
                <div>
                  <MapPinIcon className="h-4 w-4 text-deli-red-500" />
                </div>
                <div className=" text-base text-deli-black-500 font-semibold">
                  {data[0]?.distance ?? "5km"}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default SingleSlider;
