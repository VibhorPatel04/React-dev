import { CDN_URl } from "../utils/constant";

const RestaurentCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines, avgRating,deliveryTime, costForTwo} = resData?.info;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-img"
          src={
            CDN_URl +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}*</h4>
        {/* <h4>{deliveryTime} min</h4> */}
        <h4>{costForTwo}</h4>
      </div>
    );
  };
  export default RestaurentCard;