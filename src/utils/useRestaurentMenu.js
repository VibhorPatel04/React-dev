import { useEffect, useState } from "react";
import {MENU_API} from "../utils/constant"
const useRestaurentMenu = (resId) => {

    const [resMenu, setResMenu] = useState(null);

    // fetch data
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
            const data = await fetch(MENU_API+resId);
            const json = await data.json();
            setResMenu(json);
    }

    return resMenu;
}
export default useRestaurentMenu;