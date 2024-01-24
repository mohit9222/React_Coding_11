import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link, useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useResturantMenu from "../utils/useResturantMenu";
import { clock, grocery, rupee, star } from "../utils/Icon";
import ResturantCategory from "./ResturantCategory";

const ResturantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  //console.log(resId);

  const dummy = "dummy data";

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    areaName,
    avgRating,
    totalRatingsString,
    feeDetails,
    sla,
  } = resInfo?.cards[0]?.card?.card?.info;

  //console.log(resInfo?.cards[0]?.card?.card?.info);

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);

  // filter out all the itemCategories
  const itemCategories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(itemCategories);

  return (
    <div className="px-80">
      <div className="flex py-8 ">
        <Link
          to="/"
          className="font-extralight text-[10px] hover:text-orange-600"
        >
          Home
        </Link>
        <span className="font-extralight text-[10px]"> / {name}</span>
      </div>
      <div>
        <div className="flex">
          <div className="flex-1">
            <h1 className="text-lg overflow-hidden py-2 font-extrabold">
              {name}
            </h1>
            <div className="font-extralight text-xs text-gray-500 overflow-hidden pb-4">
              <h5>{cuisines?.join(" , ")}</h5>
              <h5>
                {areaName}, {sla.lastMileTravelString}
              </h5>
              {/* <h5 className="py-6">{feeDetails.message}</h5> */}
            </div>
          </div>
          <div className="flex-none p-2 bg-white-200 border border-gray-300 text-center rounded-lg">
            {/* Assuming avgRating is the variable holding the average rating */}
            <h2 className="text-md font-semibold flex text-orange-400">
              {star} {avgRating}
            </h2>
            <div className="border border-solid my-2"></div>
            <p className="text-[10px] text-gray-500 font-semibold">
              {totalRatingsString}
            </p>
          </div>
        </div>
        <h5 className="py-2 text-xs flex text-gray-500">
          {feeDetails.message}
        </h5>
      </div>
      <div className="border solid md:border-dotted"></div>
      <div className="pt-2 pr-2 flex font-bold text-md">
        {clock}
        <p className="px-2">{sla.slaString}</p>
        {rupee}
        <p className="px-2">{costForTwoMessage}</p>
      </div>
      {/* <div className="border solid"></div> */}
      {/* categories Accordion */}
      {itemCategories.map((category, index) => (
        // Controlled Component
        <ResturantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index == showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default ResturantMenu;
