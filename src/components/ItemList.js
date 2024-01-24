import { rupee } from "../utils/Icon";
import { CDN_URL } from "../utils/constants";
import noImage from "../../assets/images/noImage.jpeg";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items, dummy }) => {
  // console.log(items);
  // console.log("dummy data with child2", dummy);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //Dispatching an action
    dispatch(addItems(item));
  };
  return (
    <div>
      <div>
        {/* for each item we will return line item and for each li (should include a
        key) */}
        {items.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 border-gray-200 border-b-2 justify-between flex"
          >
            <div className="w-10/12">
              <div className="py-2">
                <span className="font-normal">{item?.card?.info?.name}</span>
                <span className="flex font-extralight">
                  ₹{" "}
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs text-gray-400">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="w-2/12 pb-8 justify-end ">
              <div className="absolute pt-[80px]">
                <button
                  className="p-2 bg-white text-green-500 w-24 border-black shadow-lg mx-3 rounded-md"
                  onClick={() => handleAddItem(item)}
                >
                  Add
                </button>
              </div>
              {item?.card?.info?.imageId === undefined ||
              item?.card?.info?.imageId === null ? (
                <img src={noImage} className="w-full h-24 rounded-md" /> // Render nothing if imageId is not present
              ) : (
                <img
                  src={CDN_URL + item?.card?.info?.imageId}
                  className="w-full h-24 rounded-md"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
