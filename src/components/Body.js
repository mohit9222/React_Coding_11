import React, { useState, useEffect, useContext } from "react";
import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Search from "./Search";
import UserContext from "../utils/UserContext";

const Body = () => {
  // local state variable - super powerful variable
  // we use Hooks - useState();
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  //Creating a resturant card component with Promoted Label
  const ResturantCardPromoted = withPromotedLabel(ResturantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    console.log(json);
    console.log(json?.data);
    setListOfResturants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // setListOfResturants(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    // setFilteredResturant(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
    );

  return (
    <div className="body">
      {/* <Search /> */}
      {listOfResturants?.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          {/* User Name:{" "}
          <input
            className="border border-solid border-black p-1 rounded-lg"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input> */}
          <div className="flex flex-wrap">
            {filteredResturant?.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/resturants/" + restaurant.info.id}
              >
                {/* {console.log("T", restaurant.info.veg)} */}

                {restaurant.info.veg ? (
                  <ResturantCardPromoted resData={restaurant} />
                ) : (
                  <ResturantCard resData={restaurant} />
                )}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
