import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = ()=>{

    const[ resInfo , setResInfo ] = useState(null);

    const {resId} = useParams();

    

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async() =>{
        const data = await fetch(MENU_API + resId);

        const json = await data.json();

        // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards[3].card.info.name);
        //console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards[3]);
        setResInfo(json.data);
    };

    if(resInfo===null){
        return <Shimmer/>
    }
    
    const { name, cuisines , costForTwoMessage ,avgRating} = resInfo?.cards?.[2]?.card?.card?.info || {};
    const {itemCards } = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card || {};
    
    return (
        <div className="res-details">
            <h1>{name}</h1>
            <h3>{Array.isArray(cuisines) ? cuisines.join(", ") : "No cuisines available"}</h3>
            <h3>{avgRating}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2> 
            <ul>
                {itemCards.map(item=>
                <li key={item.card.info.id}>
                  {item.card.info.name} - {"Rs "} {item.card.info.price/100 || item.card.info.defaultprice/100 }
                  </li>)}
            </ul>
            
        </div>
    );
};

export default RestaurantMenu;