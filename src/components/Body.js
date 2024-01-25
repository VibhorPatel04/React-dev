import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
const Body = () => {
  let ratingList = [
    {
      info: {
        id: "30199",
        name: "Shri Ram Corner Paharghanj Ke Mashoor Choley Bhature (Shalimar Bagh)",
        cloudinaryImageId: "rb091alr5ye61q4yocsd",
        locality: "Shalimar Bagh",
        areaName: "Ashok vihar",
        costForTwo: "₹150 for two",
        cuisines: ["Street Food"],
        avgRating: 4.6,
        veg: true,
        parentId: "16671",
        avgRatingString: "4.6",
        totalRatingsString: "5K+",
      },
    },
    {
      info: {
        id: "15846",
        name: "Faasos - Wraps, Rolls & Shawarma",
        cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
        locality: "Sector 8",
        areaName: "Rohini",
        costForTwo: "₹200 for two",
        cuisines: [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.3,
        parentId: "21809",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
      },
    },
  ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            ratingList = ratingList.filter((res) => res.info.avgRating > 4.2);
            console.log(ratingList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="restaurent-container">
        {resList.map((restaurent) => {
          return (
            <RestaurentCard key={restaurent.info.id} resData={restaurent} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
