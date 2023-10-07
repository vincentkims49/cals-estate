import React from "react";
import { featured } from "../Data/Data";

const FeaturedCard = () => {
  return (
    <>
      <div className="flex flex-row justify-center gap-3 sm:flex-wrap ">
        {featured.map((items, index) => (
          <div key={index}>
            <img className="mb-1 sm:w-[65px]sm:h-[65px]  md:w-[100px] md:h-[100px] " src={items.cover} alt="" />
            <p className="text-center font-semibold ml-2">{items.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedCard;
