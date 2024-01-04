import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RastaurentContainer
 *   - RestaurentCard
 *     -  img, res name, rating, cuisine, delivery time
 * Footer 
 * - Copyright
 * - Links
 * - Contact
**/
const Header = () => {
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
      </div>
      <div className="nav-Items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}
// const StyleCard = {
//   backgroundColor: "#f0f0f0"
// }
const RestaurentCard = (props) => {
  const {resData} = props;
  return(
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
      <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+(resData.info.cloudinaryImageId)} />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.locality}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.sla.deliveryTime} min</h4>
      <h4>{resData.info.costForTwo}</h4>
    </div>
  )
}

const resObj =   {
  "info": {
      "id": "30199",
      "name": "Shri Ram Corner Paharghanj Ke Mashoor Choley Bhature (Shalimar Bagh)",
      "cloudinaryImageId": "rb091alr5ye61q4yocsd",
      "locality": "Shalimar Bagh",
      "areaName": "Ashok vihar",
      "costForTwo": "₹150 for two",
      "cuisines": [
          "Street Food"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "16671",
      "avgRatingString": "4.6",
      "totalRatingsString": "5K+",
      "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 7.7,
          "serviceability": "SERVICEABLE",
          "slaString": "31 mins",
          "lastMileTravelString": "7.7 km",
          "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
          "nextCloseTime": "2024-01-04 15:45:00",
          "opened": true
      },
      "badges": {
          "imageBadges": [
              {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
              }
          ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
          "entityBadges": {
              "imageBased": {
                  "badgeObject": [
                      {
                          "attributes": {
                              "description": "pureveg",
                              "imageId": "v1695133679/badges/Pure_Veg111.png"
                          }
                      }
                  ]
              },
              "textBased": {},
              "textExtendedBadges": {}
          }
      },
      "aggregatedDiscountInfoV3": {
          "header": "₹120 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
      },
      "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
          }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
  },
  "analytics": {
      "context": "seo-data-da77b5af-def2-49ed-98b8-41a29662cb57"
  },
  "cta": {
      "link": "https://www.swiggy.com/restaurants/shri-ram-corner-paharghanj-ke-mashoor-choley-bhature-shalimar-bagh-shalimar-bagh-ashok-vihar-delhi-30199",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}

const Body = () => {
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurent-container">
        <RestaurentCard resData={resObj} />
      </div>
    </div>
  )
}

const AppLayout = () => {
  return(
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
