import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import {MENU_API} from "../utils/constant"
const RestaurentMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const {resId} = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API+resId);
    const json = await data.json();
    setResMenu(json);
  };
  
  if (resMenu === null) {
    return <Shimmer />
  }

  const {name, cuisines, costForTwoMessage} = resMenu?.data?.cards[0]?.card?.card?.info;
  const {itemCards} = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const {offers} = resMenu?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle;
 
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines[0]},{cuisines[1]}
      </p>
      <p>{costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
      {
        itemCards.map((e) =>{
          return(
            
              <li key={e.card.info.id}>{e.card.info.name}:- Rs.{e.card?.info?.price || e.card?.info?.defaultPrice} <br /> {e.card?.info?.description}</li>
            
          )
        })
      }
      </ul>
      <ul>
      {
        offers.map((e) =>{
          return(
            
              <li key={e.info.offerIds}>{e.info.description}</li>
            
          )
        })
      }
      </ul>
      
    </div>
  )
    
};

export default RestaurentMenu;
