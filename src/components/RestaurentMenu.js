import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
const RestaurentMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurentMenu(resId);

  if (resMenu === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } = resMenu?.data?.cards[2]?.card?.card?.info;
  const categories =
    resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="p-5 text-center">
      <h1 className="font-bold text-2xl">{name}</h1>
      <p className="text-lg py-3 font-bold">
        {cuisines.map((e) => {
          return <span>{e +", "}</span>
        })}
         <span className="font-bold"> - </span>
        <span className=" text-green-600">{costForTwoMessage}</span>
      </p>
      <p className="font-bold pb-3"></p>
      <RestaurentCategory />
      <ul>
        { categories.map((category) => {
          return (
            <RestaurentCategory key={category?.card?.card?.title} data={category?.card?.card} />
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
