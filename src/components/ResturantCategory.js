import { useState } from "react";
import { downArrow, upArrow } from "../utils/Icon";
import ItemList from "./ItemList";

const ResturantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  //const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    //setShowItems(showItems);
    setShowIndex();
  };
  //console.log(data.title);
  //console.log(dummy);
  return (
    <div>
      <div className="w-full mx-auto my-4 bg-gray-50 shadow-lg p-4">
        {/* Accordion Header*/}
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-sm">
            {data?.title} ({data?.itemCards?.length})
          </span>
          {showItems == false ? (
            <span>{downArrow}</span>
          ) : (
            <span>{upArrow}</span>
          )}
        </div>
        {/* Accordion Body  */}
        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default ResturantCategory;
