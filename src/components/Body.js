import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filterRes, setFilterRes] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurentCardPromoted = withPromotedLabel(RestaurentCard);

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
    setFilterRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional Rendering
  // if(listOfRestaurent.length == 0){
  //   return <Shimmer />;
  // };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div>
        <h1>
          Looks like you are offLine. Please check your internet connection.
        </h1>
      </div>
    );
  }

  return listOfRestaurent.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="p-6 bg-gray-100">
      <div className="btn_group">
        <div className="search-div">
          <input
            type="search"
            placeholder="Search for anything..."
            className="placeholder:italic placeholder:text-slate-400  bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => {
              const filterRes = listOfRestaurent.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRes(filterRes);
            }}
          >
            search
          </button>
          <div className="inline ps-10">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
      </div>
      <div className="mt-5 grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-5">
        {filterRes.map((restaurent) => {
          return (
            <Link
              key={restaurent.info.id}
              to={"/restaurents/" + restaurent.info.id}
            >
              {/* if the restaurent is promoted then add a promoted lable to it */}
              {
                restaurent.info.avgRating > 3.9 ? <RestaurentCardPromoted resData={restaurent} /> : <RestaurentCard resData={restaurent} />
              }
              
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
