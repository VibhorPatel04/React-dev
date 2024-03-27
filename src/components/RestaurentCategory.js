import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({ data }) =>{

    const [showItem, setShowItem] = useState(false); 

    if (!data || !data.title) {
        return null; 
    }
    const handleClick = () =>{
        setShowItem(!showItem);
    }
    return(
        <>
        <div className="w-6/12 mx-auto flex justify-between items-center p-3 bg-gray-300 rounded-md mb-4 cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>{showItem ? "⬆️" : "⬇️"}</span>
        </div>
        {showItem && <ItemList items = {data.itemCards} />}
        
        </>
        
        
    )
}
export default RestaurentCategory;