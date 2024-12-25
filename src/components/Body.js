import RestaurantCard from "./RestaurantCard"; 
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import  useOnlineStatus  from "../utils/useOnlineStatus";

const Body = () =>{

    const [listOfRestuarant, setListOfRestuarant] = useState([]); 
    const [filteredRestaurant, setFilteredRestaurant] =  useState([]);
    const [ searchText , setSearchText] =useState("");


    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2403305&lng=73.1305395&collection=80424&tags=layout_CCS_Dosa&sortBy=&filters=&type=rcv2&offset=0");

        const json =await data.json();
        
        //console.log(json.data.cards.slice(4,15));
        setListOfRestuarant(json.data.cards.slice(4,15));
        setFilteredRestaurant(json.data.cards.slice(4,15));
    }


    const onlineStatus = useOnlineStatus();
    if(!onlineStatus){
        return <div className="offline">
            <h1>Looks like you're offline!! Check your internet</h1>
            <div className="game-container">
            <div className="ball"></div>
            </div>
        </div>
    }

    return listOfRestuarant.length===0 ? <Shimmer></Shimmer> : (
        <div className="body">
            <div className="seach-filter-container">
                <div className="search">
                <input 
                    type="text" 
                    className="search-box" 
                    value={searchText} 
                    onChange={(e)=>setSearchText(e.target.value)}></input>
                <button onClick={()=>{
                    

                    const filteredRestaurant = listOfRestuarant.filter((res)=>res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));

                    setFilteredRestaurant(filteredRestaurant);

                }}>Search</button>
                </div>
             <div className="filter">
                <button 
                    className="filter-btn"
                    onClick={()=>{  
                        const filterList = listOfRestuarant.filter(
                            (res) => res.card.card.info.avgRating > 4.5
                        );
                        setListOfRestuarant(filterList);
                    }}
                >
                    Top Rated Restaurants
                </button>
             </div>
            </div>
            <div className="res-container"> 
                {
                  filteredRestaurant.map((restuarant) => (
                    <Link className="link-no-underline"
                    key={restuarant.card.card.info.id} 
                    to={"/restaurants/"+restuarant.card.card.info.id}>
                  <RestaurantCard  
                    resData={restuarant}/>
                    </Link>
                    ))  
                }

            </div>
           
        </div>
    );
};

export default Body;