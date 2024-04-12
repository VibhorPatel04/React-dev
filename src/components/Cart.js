import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const handleRemoveitem = () => {
    dispatch(removeItem());
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center mt-5">
      <h1 className="text-3xl font-bold">Cart</h1>
      {
        cartItems.length === 0 && <h2 className="mt-8 font-semibold text-xl">Cart is empty. Add the item to the cart!</h2>
      }
      
      {
        cartItems.length != 0 && <button
        onClick={handleRemoveitem}
        className="  me-2 mb-0  bottom-1 bg-black px-2.5 py-1 text-white hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm  focus:outline-none dark:focus:ring-blue-800"
      >
        Remove item 
      </button>
      }
      {
        cartItems.length != 0 && <button
        onClick={handleClearCart}
        className="  me-2 mb-0  bottom-1 bg-black px-2.5 py-1 text-white hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm  focus:outline-none dark:focus:ring-blue-800"
      >
        Clear cart
      </button>
      }
      <div className="mt-5">
        <ItemList  items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
