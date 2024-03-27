import { Link } from "react-router-dom";
import { CDN_URl } from "../utils/constant";

const RestaurentCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines, avgRating,deliveryTime, costForTwo} = resData?.info;
    return (
      <div className="bg-white hover:bg-green-200 rounded-sm p-4">
        <img
          className="h-80 rounded-sm"
          src={
            CDN_URl +
            cloudinaryImageId
          }
        />
        <h3 className="text-xl font-semibold mt-3 mb-2">{name}</h3>
        <h4 className="text-lg mb-2">{cuisines.join(", ")}</h4>
        <h4 className="text-lg font-semibold mb-2">{avgRating}*</h4>
        {/* <h4>{deliveryTime} min</h4> */}
        <h4 className="text-lg font-semibold mb-2 text-green-600">{costForTwo}</h4>
      </div>
    );
  };

  // Hingher order function

  export const withPromotedLabel = (RestaurentCard) =>{
    return (props)=>{
      return(
        <div className="relative">
          <label className="absolute bg-black text-white left-4 top-3 p-1">Promoted</label>
          <RestaurentCard {...props} />
        </div>
      )
    }
  }

  export default RestaurentCard;