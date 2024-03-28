import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({ data, showItems, setShowIndex, dummy }) =>{

    if (!data || !data.title) {
        return null; 
    }
    const handleClick = () => {
        showItems ? setShowIndex(null): setShowIndex();
    }
    
    return(
        <>
        <div className="w-6/12 mx-auto flex justify-between items-center p-3 bg-gray-300 rounded-md mb-4 cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>
        {showItems && <ItemList dummy={dummy} items = {data.itemCards} />}
        
        </>
        
        
    )
}
export default RestaurentCategory;