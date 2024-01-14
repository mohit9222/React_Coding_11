import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useResturantMenu from "../utils/useResturantMenu";

const ResturantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);

  console.log(resId);
  //   console.log(MENU_URL);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // // hotels - 74629 , 793891, 23353
  // const fetchMenu = async () => {
  //   try {
  //     const data = await fetch(MENU_URL + resId);
  //     const json = await data.json();
  //     console.log(json);
  //     setResInfo(json.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h5>
        {cuisines?.join(" , ")}-{costForTwoMessage}
      </h5>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item?.card?.info?.name} - {"Rs."}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
        {/* <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li> */}
      </ul>
    </div>
  );
};

export default ResturantMenu;
