import { useContext, useState } from "react";
import { LOGO_url } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  // subscribing to the store using a selector 
 const cartItems = useSelector((store)=> store.cart.items);
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
            <li className="text-xl font-bold"><Link to="/cart">Cart ({cartItems.length})</Link></li>
            <li className="text-xl"><button className="login-btn"   onClick={()=> btnName =="Login"? setBtnName('Logout'): setBtnName('Login')}>{btnName}</button></li>
            <li className="text-xl">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;