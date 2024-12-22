import {CDN_URL} from "../utils/constants";

const RestaurantCard =(props)=>{
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating, sla } = resData?.card.card.info
    return (
        <div className="res-card">
            <img 
            src={CDN_URL+cloudinaryImageId}
            alt="food-image1"
            className="food-image1"
            />
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{sla?.deliveryTime} minutes</h5>

        </div>
    );
};

export default RestaurantCard;