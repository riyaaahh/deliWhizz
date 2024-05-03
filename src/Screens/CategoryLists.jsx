import React from "react";

const CategoryLists = () => {
  const categories = [
    { name: "Fast Foods", icon: "fa fa-food" },
    { name: "Fruits", icon: "fa fa-food" },
    { name: "Vegetables", icon: "fa fa-food" },
    { name: "Salads", icon: "fa fa-food" },
    { name: "Starters", icon: "fa fa-food" },
    { name: "Juices", icon: "fa fa-food" },
  ];
  return (
    <div className="overflow-x-auto overflow-y-hidden m-5">
      <div className="row flex space-x-4">
        {categories.map((item, index) => (
          <button className={`${
            item.name === "Fast Foods" ? "bg-red-600 text-white" : "bg-white text-black "
          } hover:bg-red-700 rounded p-3 w-full`}>
            <strong>{item.name}</strong>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryLists;
