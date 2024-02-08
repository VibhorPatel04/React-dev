import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState(resList);
  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData = async () =>{
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    console.log(json);

    //optional Chaining
    setListOfRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurent.filter((res) => res.info.avgRating > 4.2);
            setListOfRestaurent(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="restaurent-container">
        {listOfRestaurent.map((restaurent) => {
          return (
            <RestaurentCard key={restaurent.info.id} resData={restaurent} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
