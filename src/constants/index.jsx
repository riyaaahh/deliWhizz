import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";

import rolls from "../assets/categories/rolls.png";
import biriyani from "../assets/categories/biriyani.png";
import burgers from "../assets/categories/burgers.png";
import chinese from "../assets/categories/chinese.png";
import juices from "../assets/categories/juices.png";
import pizza from "../assets/categories/pizza.png";
import south from "../assets/categories/south.png";

import axios from "axios";

export const homeBannerList = [];

const fetchData = async () => {
  try {
    const response = await axios.get("https://admin.corelabs.work/api/banners");
    if (response.data && Array.isArray(response.data.banners)) {
      response.data.banners.forEach((banner) => {
        const formattedBanner = {
          id: banner.id,
          image: banner.image,
        };
        homeBannerList.push(formattedBanner);
      });
    } else {
      console.error("Error: Unexpected response format or empty data");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData();

// export const homeBannerList = [
//   {
//     id: 1,
//     image: banner1,
//     itemName: "Eggwhite Frozen",
//     size: 295,
//     price: 7.09,
//     category: "breakfast",
//   },
//   {
//     id: 2,
//     image: banner2,
//     itemName: "Wine - Montecillo Rioja Crianza",
//     size: 171,
//     price: 4.18,
//     category: "night",
//   },

// ];

export const homeCategoryList = [
  {
    id: 1,
    image: rolls,
    name: "Rolls",
  },
  {
    id: 2,
    image: biriyani,
    name: "Biriyani",
  },
  {
    id: 3,
    image: burgers,
    name: "Burgers",
  },
  {
    id: 4,
    image: chinese,
    name: "Chinese",
  },
  {
    id: 5,
    image: juices,
    name: "Juices",
  },
  {
    id: 5,
    image: pizza,
    name: "Pizza",
  },
  {
    id: 5,
    image: south,
    name: "Indian",
  },
];

export const homeRecommendedItemList = [];

const fetchRecommendedItemData = async () => {
  try {
    const response = await axios.get(
      "https://admin.corelabs.work/api/home-recommented-items"
    );
    if (response.data && Array.isArray(response.data)) {
      response.data.forEach((recommented) => {
        const formattedItems = {
          id: recommented.id,
          name: recommented.name,
          image: recommented.image,
          desc: recommented.product_description,
          rate: 12,
        };
        homeRecommendedItemList.push(formattedItems);
      });
    } else {
      console.error("Error: Unexpected response format or empty data");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchRecommendedItemData();
// export const homeRecommendedItemList = [
//   {
//     id: 1,
//     image: south,
//     name: "Sadhya",
//     size: 295,
//     price: 7.09,
//     category: "breakfast",
//   },
//   {
//     id: 2,
//     image: pizza,
//     name: "Pizza",
//     size: 171,
//     price: 4.18,
//     category: "night",
//   },
//   {
//     id: 3,
//     image: juices,
//     name: "Apple Juice",
//     size: 513,
//     price: 3.43,
//     category: "evening",
//   },
//   {
//     id: 4,
//     image: chinese,
//     name: "Chicken Noodles",
//     size: 279,
//     price: 8.6,
//     category: "breakfast",
//   },
//   {
//     id: 5,
//     image: burgers,
//     name: "Cheese Burger",
//     size: 419,
//     price: 9.16,
//     category: "evening",
//   },
// ];

export const homeSlidersList = [];

const fetchSliderData = async () => {
  try {
    const response = await axios.get("https://admin.corelabs.work/api/sliders");
    if (response.data && Array.isArray(response.data.sliders)) {
      response.data.sliders.forEach((slider) => {
        const linkedProducts = JSON.parse(slider.linked_products || "[]");
        const formattedSlider = {
          id: slider.id,
          image: slider.image,
          linkedProducts: linkedProducts.map((product) => ({
            id: product.id,
            name: product.name,
          })),
        };
        homeSlidersList.push(formattedSlider);
      });
      // console.log(homeSlidersList);
    } else {
      console.error("Error: Unexpected response format or empty data");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchSliderData();
// export const homeSlidersList = [
//   {
//     id: 1,
//     image: south,
//     name: "Sadhya",
//     size: 295,
//     price: 7.09,
//     category: "breakfast",
//   },
//   {
//     id: 2,
//     image: pizza,
//     name: "Pizza",
//     size: 171,
//     price: 4.18,
//     category: "night",
//   },
//   {
//     id: 3,
//     image: juices,
//     name: "Apple Juice",
//     size: 513,
//     price: 3.43,
//     category: "evening",
//   },
//   {
//     id: 4,
//     image: chinese,
//     name: "Chicken Noodles",
//     size: 279,
//     price: 8.6,
//     category: "breakfast",
//   },
//   {
//     id: 5,
//     image: burgers,
//     name: "Cheese Burger",
//     size: 419,
//     price: 9.16,
//     category: "evening",
//   },
// ];

export const storesList = [];

const fetchStoresData = async () => {
  try {
    const response = await axios.get(
      "https://admin.corelabs.work/api/list-all-shops"
    );
    if (response && Array.isArray(response.data)) {
      response.data.forEach((shop) => {
        const formattedShop = {
          id: shop.id,
          name: shop.name,
          logo: shop.logo,
          deliveryRadius: shop.delivery_radius,
          latitude: shop.latitude,
          longitude: shop.longitude,
          googleMapsKey: shop.google_maps_key,
          isActive: shop.is_active,
        };
        storesList.push(formattedShop);
      });
      // console.log(storesList);
    } else {
      console.error("Error: Unexpected response format or empty data");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchStoresData();

// export const storesList = [
//   {
//     id: 1,
//     image:
//       "https://b.zmtcdn.com/data/pictures/7/20287/9410759d611db9c62c3acc23c1f27e06.jpg?fit=around|750:500&crop=750:500;*,*",
//     name: "KFC",
//     desc: "Lorem ipsum dolor dolo...",
//     adress: "New Bus Stand, Kasaragod",
//     offers: ["BUY1 GET 1", "10% OFF"],
//     rating: "4.5",
//     time: "30 Mins",
//     distance: "5 Km",
//   },
//   {
//     id: 2,
//     image:
//       "https://www.tastingtable.com/img/gallery/13-most-expensive-starbucks-drinks-youll-find-across-the-world/intro-1701810007.webp",
//     name: "Starbucks",
//     desc: "Lorem ipsum dolor dolo...",
//     adress: "New Bus Stand, Kasaragod",
//     offers: ["BUY1 GET 1"],
//     rating: "4.5",
//     time: "30 Mins",
//     distance: "5 Km",
//   },
//   {
//     id: 3,
//     image:
//       "https://play-lh.googleusercontent.com/_lq2HX0YJNDrr0EeUebLAB2JsGbRGyoFY-XOnuUFTPfeEqaHNIyMOGqLx-oq4mUWPpn0",
//     name: "Dominos Pizza",
//     desc: "Lorem ipsum dolor dolo...",
//     adress: "New Bus Stand, Kasaragod",
//     offers: [],
//     rating: "4.5",
//     time: "30 Mins",
//     distance: "5 Km",
//   },
// ];
export const homeItemsList = [
  {
    id: 1,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Eggwhite Frozen",
    size: 295,
    price: 7.09,
    category: "breakfast",
  },
  {
    id: 2,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Wine - Montecillo Rioja Crianza",
    size: 171,
    price: 4.18,
    category: "night",
  },
  {
    id: 3,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Halibut - Steaks",
    size: 513,
    price: 3.43,
    category: "evening",
  },
  {
    id: 4,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Orange - Blood",
    size: 279,
    price: 8.6,
    category: "breakfast",
  },
  {
    id: 5,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Crush - Orange, 355ml",
    size: 419,
    price: 9.16,
    category: "evening",
  },
  {
    id: 6,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Steampan Lid",
    size: 739,
    price: 5.66,
    category: "night",
  },
  {
    id: 7,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Bread - French Baquette",
    size: 984,
    price: 2.34,
    category: "night",
  },
  {
    id: 8,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Cookies - Assorted",
    size: 679,
    price: 0.01,
    category: "breakfast",
  },
  {
    id: 9,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Baking Powder",
    size: 591,
    price: 1.86,
    category: "night",
  },
  {
    id: 10,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Wine - White, French Cross",
    size: 753,
    price: 9.13,
    category: "night",
  },
  {
    id: 11,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Syrup - Chocolate",
    size: 826,
    price: 2.15,
    category: "night",
  },
  {
    id: 12,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Currants",
    size: 205,
    price: 1.53,
    category: "evening",
  },
  {
    id: 13,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Salmon Steak - Cohoe 8 Oz",
    size: 947,
    price: 1.11,
    category: "night",
  },
  {
    id: 14,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Water - Green Tea Refresher",
    size: 614,
    price: 6.16,
    category: "night",
  },
  {
    id: 15,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Baking Powder",
    size: 430,
    price: 7.41,
    category: "night",
  },
  {
    id: 16,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Chips - Potato Jalapeno",
    size: 717,
    price: 2.82,
    category: "evening",
  },
  {
    id: 17,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Lettuce - Iceberg",
    size: 996,
    price: 4.24,
    category: "evening",
  },
  {
    id: 18,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Parsley - Dried",
    size: 901,
    price: 3.14,
    category: "night",
  },
  {
    id: 19,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Wine - Casillero Deldiablo",
    size: 264,
    price: 1.58,
    category: "night",
  },
  {
    id: 20,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Veal - Provimi Inside",
    size: 1000,
    price: 2.34,
    category: "night",
  },
  {
    id: 21,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Triple Sec - Mcguinness",
    size: 188,
    price: 9.93,
    category: "evening",
  },
  {
    id: 22,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Parsley - Dried",
    size: 195,
    price: 4.95,
    category: "night",
  },
  {
    id: 23,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Beer - True North Strong Ale",
    size: 431,
    price: 10.0,
    category: "night",
  },
  {
    id: 24,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Rum - Spiced, Captain Morgan",
    size: 629,
    price: 5.87,
    category: "night",
  },
  {
    id: 25,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Beer - Blue Light",
    size: 204,
    price: 9.85,
    category: "night",
  },
  {
    id: 26,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Muffin - Carrot Individual Wrap",
    size: 494,
    price: 0.44,
    category: "evening",
  },
  {
    id: 27,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Clams - Canned",
    size: 411,
    price: 9.34,
    category: "evening",
  },
  {
    id: 28,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Lotus Root",
    size: 125,
    price: 1.86,
    category: "night",
  },
  {
    id: 29,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Bacardi Limon",
    size: 641,
    price: 7.01,
    category: "night",
  },
  {
    id: 30,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Bread - Pumpernickle, Rounds",
    size: 533,
    price: 6.58,
    category: "night",
  },
  {
    id: 31,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName:
      "Pork - Loin, Boneless Pork - Loin, Boneless Pork - Loin, Boneless Pork - Loin, Boneless",
    size: 700,
    price: 4.23,
    category: "night",
  },
  {
    id: 32,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Smirnoff Green Apple Twist",
    size: 440,
    price: 8.69,
    category: "night",
  },
  {
    id: 33,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Salmon - Fillets",
    size: 586,
    price: 9.95,
    category: "noon",
  },
  {
    id: 34,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Jicama",
    size: 600,
    price: 4.04,
    category: "night",
  },
  {
    id: 35,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Island Oasis - Mango Daiquiri",
    size: 740,
    price: 3.98,
    category: "evening",
  },
  {
    id: 36,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Oil - Grapeseed Oil",
    size: 460,
    price: 2.92,
    category: "noon",
  },
  {
    id: 37,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Vector Energy Bar",
    size: 279,
    price: 8.86,
    category: "night",
  },
  {
    id: 38,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Trout - Smoked",
    size: 575,
    price: 9.41,
    category: "evening",
  },
  {
    id: 39,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Cranberry Foccacia",
    size: 968,
    price: 6.18,
    category: "night",
  },
  {
    id: 40,
    image: "https://loremflickr.com/320/240/food,recipe,breakfast,lunch",
    itemName: "Flower - Dish Garden",
    size: 641,
    price: 2.0,
    category: "night",
  },
];

export const homeSuggestedItems = [];

const fetchSuggestedData = async () => {
  try {
    const response = await axios.get(
      "https://admin.corelabs.work/api/home-recommented-items"
    );
    if (response.data && Array.isArray(response.data)) {
      response.data.forEach((suggested) => {
        const formattedSuggestions = {
          id: suggested.id,
          name: suggested.name,
          image: suggested.image,
          desc: suggested.product_description,
        };
        homeSuggestedItems.push(formattedSuggestions);
      });
    } else {
      console.error("Error: Unexpected response format or empty data");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchSuggestedData();
