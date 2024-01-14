import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  // console.log(resData);
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.info;
  // console.log(resData);
  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4>{name}</h4>
      <h5>{cuisines.join(" , ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{sla.slaString}</h5>
    </div>
  );
};

export default ResturantCard;
