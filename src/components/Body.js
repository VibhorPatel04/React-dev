import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filterRes, setFilterRes] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    //optional Chaining
    setListOfRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  //conditional Rendering
  // if(listOfRestaurent.length == 0){
  //   return <Shimmer />;
  // };
  console.log("hello");
  return listOfRestaurent.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="btn_group">
        <div className="search-div">
          <input
            type="search"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="login-btn"
            onClick={() => {
              const filterRes = listOfRestaurent.filter(
                (res) =>
                  res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRes(filterRes);
            }}
          >
            search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurent.filter(
                (res) => res.info.avgRating > 4.2
              );
              setListOfRestaurent(filteredList);
            }}
          >
            Top Rated Restaurents
          </button>
        </div>
      </div>
      <div className="restaurent-container">
        {filterRes.map((restaurent) => {
          return (
            <RestaurentCard key={restaurent.info.id} resData={restaurent} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
