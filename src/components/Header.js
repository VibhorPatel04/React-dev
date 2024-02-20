import { useEffect, useState } from "react";
import { LOGO_url } from "../utils/constant";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  useEffect(() => {
    console.log("UseEffect Called");
  },[btnName])
  console.log("header Render");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_url}
          />
        </div>
        <div className="nav-Items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <li><button className="login-btn"   onClick={()=> btnName =="Login"? setBtnName('Logout'): setBtnName('Login')}>{btnName}</button></li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;