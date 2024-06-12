import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBanners } from "../../../redux/Slices/bannerSlice";

const BannersList = () => {
  const dispatch = useDispatch();

  // Accessing state slices
  const banners = useSelector((state) => state.banners.banners);
  const bannerStatus = useSelector((state) => state.banners.status);
  const error = useSelector((state) => state.banners.error);

  // Log state for debugging
  //   console.log('Banner status:', bannerStatus);
  //   console.log('Banners state:', banners);
  //   console.log('Error:', error);

  // Fetching banners if the status is idle
  useEffect(() => {
    if (bannerStatus === "idle") {
      dispatch(fetchBanners());
    }
  }, [bannerStatus, dispatch]);

  let content;

  // Conditional rendering based on the status
  if (bannerStatus === "loading") {
    content = <div>Loading...</div>;
  } else if (bannerStatus === "succeeded") {
    content = (
      <div>
        <ol>
          {banners.map((banner) => (
            <li key={banner.id}>{banner.name}</li>
          ))}
        </ol>
      </div>
    );
  } else if (bannerStatus === "failed") {
    content = <div>{error}</div>;
  }

  return <div>{content}</div>;
};

export default BannersList;
