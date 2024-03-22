import { useState } from "react";
import { LOGO_url } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  
  console.log("header Render");
    return (
      <div className="flex items-center  justify-between px-6 bg-gray-100 drop-shadow-md">
        <div className="logo-container">
          <img
            className="logo w-32 p-3 rounded-full"
            src={LOGO_url}
          />
        </div>
        <div className="nav-Items ">
          <ul className="flex flex-wrap gap-8">
            <li className="text-xl">Online Status: {onlineStatus ? '✅' : '🔴'}</li>
            <li className="text-xl"><Link to="/">Home</Link></li>
            <li className="text-xl"><Link to="/about">About Us</Link></li>
            <li className="text-xl"><Link to="/contact">Contact Us</Link></li>
            <li className="text-xl"><Link to="/grocery">Grocery</Link></li>
            <li className="text-xl">Cart</li>
            <li className="text-xl"><button className="login-btn"   onClick={()=> btnName =="Login"? setBtnName('Logout'): setBtnName('Login')}>{btnName}</button></li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;