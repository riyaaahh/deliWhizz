import React, { useEffect, useState } from "react";
import axios from "axios";

const Api = () => {
  const [banners, setBanners] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://admin.corelabs.work/api/banners"
      );
      setBanners(response.data.banners);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {banners.map((banner) => (
        <div key={banner.id}>
          <h2>{banner.name}</h2>
          <img
            src={`https://admin.corelabs.work/public/public/${banner.image}`}
            alt={banner.name}
          />
          <p>Start Date: {banner.start_date}</p>
          <p>End Date: {banner.end_date}</p>
          <p>Status: {banner.status}</p>
          {/* Parse linked_products */}
          <ul>
            {banner.linked_products &&
              JSON.parse(banner.linked_products).map((product) => (
                <li key={product.id}>{product.name}</li>
              ))}
          </ul><br />
        </div>
      ))}
    </div>
  );
};

export default Api;
