import { useContext } from "react";
import { foodImage } from "../utils/constants.js";
import UserContext from "../utils/UserContext.js";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo } = resData?.info;

  const {loggedInUser}=useContext(UserContext)

  return (
    <div className="res-card bg-white h-96 w-64 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-wrap">
      <img
        src={foodImage}
        alt="food"
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <h4 className="text-sm text-gray-500 mt-1">{cuisines.join(", ")}</h4>
        <div className="flex items-center justify-between mt-2">
          <h5 className="text-yellow-500 font-bold">{avgRating} ★</h5>
          <h6 className="text-sm text-gray-600">{costForTwo}</h6>
          <h6>{loggedInUser}</h6>
        </div>
      </div>
    </div>
  );
};

export const withOpenLabel=(RestaurantCard)=>{
  return(props)=>{
    return(
      <>
        <label>Top</label>
        <RestaurantCard {...props} /> 
      </>
    )
  }
}

export default RestaurantCard;
