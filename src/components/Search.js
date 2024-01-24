import React, { useState } from "react";

function filteredData(searchText, listOfResturants) {
  return listOfResturants.filter((res) =>
    res?.info?.name?.toUpperCase()?.includes(searchText?.toUpperCase())
  );
}

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
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
  return (
    <div className="search m-2 p-2 text-center">
      <input
        className="border border-solid border-black p-1 rounded-lg"
        placeholder="Search Resturant"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="px-4 py-1 bg-green-100 m-4 rounded-lg"
        onClick={() => searchData(searchText, listOfResturants)}
      >
        Search
      </button>
      {errorMsg && (
        <div className="erro-msg">
          <h5>{errorMsg}</h5>
        </div>
      )}
      <button
        className="px-2 py-1 bg-gray-200 rounded-lg"
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
    </div>
  );
};

export default Search;
