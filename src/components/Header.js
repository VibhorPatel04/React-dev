import { useState } from "react";
import { LOGO_url } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  
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
            <li>Online Status: {onlineStatus ? '✅' : '🔴'}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li>Cart</li>
            <li><button className="login-btn"   onClick={()=> btnName =="Login"? setBtnName('Logout'): setBtnName('Login')}>{btnName}</button></li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;