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
const RestaurentCard = ({resName,rating}) => {
  return(
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
      <img className="res-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d96267738c19ec62acb5390e52faba41" />
      <h3>{resName}</h3>
      <h4>Third Wave Coffee</h4>
      <h4>{rating}</h4>
      <h4>38 min</h4>
      <h4>249 Rs</h4>
    </div>
  )
}

const Body = () => {
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurent-container">
        <RestaurentCard resName="Meghana Foods" rating={"4.3*"} />
        <RestaurentCard resName="KFC" rating={"4.0*"} />
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
