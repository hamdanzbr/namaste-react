import { foodImage, styleCard } from "../utils/constants.js";
const RestaurantCard=(props)=>{
    const {resData}=props
    const {name,cuisines,avgRating,costForTwo}=resData?.info;
    
    return(
      <div className="res-card" style={styleCard}>
        <img src={foodImage} alt="no"  className="biriyani-img"/>
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h5>{avgRating}</h5>
        <h6>{costForTwo}</h6>
      </div>
    )
  
  }

  export default RestaurantCard;