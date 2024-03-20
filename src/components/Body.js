import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
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
  
  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return <div>
      <h1>Looks like you are offLine. Please check your internet connection.</h1>
    </div>
  }

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
            <Link key={restaurent.info.id} to={"/restaurents/"+restaurent.info.id} > <RestaurentCard  resData={restaurent} /></Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
