import React, { useState, useEffect } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

function filteredData(searchText, listOfResturants) {
  return listOfResturants.filter((res) =>
    res?.info?.name?.toUpperCase()?.includes(searchText?.toUpperCase())
  );
}

const Body = () => {
  // local state variable - super powerful variable
  // we use Hooks - useState();
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0632293&lng=77.58211849999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    const data = await fetch(API_URL);
    //console.log(data);
    const json = await data.json();
    console.log(json);
    // console.log(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setListOfResturants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //console.log("Body Rendered");

  const searchData = (searchText, listOfResturants) => {
    if (searchText !== "") {
      const data = filteredData(searchText, listOfResturants);
      setFilteredResturant(data);
      if (data.length === 0) {
        setErrorMsg("No Match Found!");
      } else {
        setErrorMsg("");
      }
    } else {
      setFilteredResturant(listOfResturants);
      setErrorMsg("");
    }
  };

  // if(listOfResturants?.length === 0){
  //   return ;
  // }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
    );

  return (
    <div className="body">
      <div className="search">
        <input
          className="search-btn"
          placeholder="Search Resturant"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-button"
          onClick={() => searchData(searchText, listOfResturants)}
        >
          Search
        </button>
        {errorMsg && (
          <div className="erro-msg">
            <h5>{errorMsg}</h5>
          </div>
        )}
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = filteredResturant.filter(
            (res) => res.info.avgRating >= 4
          );
          console.log(filteredList);
          setFilteredResturant(filteredList);
        }}
      >
        Top Rated Resturant
      </button>
      {listOfResturants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="resto-container">
          {filteredResturant?.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/resturants/" + restaurant.info.id}
            >
              <ResturantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
