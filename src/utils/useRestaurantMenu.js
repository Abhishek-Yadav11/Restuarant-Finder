import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        const fetchMenu = async () => {
            const data = await fetch(MENU_API + resId);
            const json = await data.json();
            setResInfo(json.data);
        };
        fetchMenu();
    }, [resId]);
    return { resInfo };
}; 
export default useRestaurantMenu;