import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body=()=>{
  const [listOfRestaurant,setListOfRestaurant]=useState(resList)
    return(
      <div className="body">
        <div className="search">
          <button className="button" onClick={()=>{const filterdList=listOfRestaurant.filter((res)=>res.info.avgRating>=4.5);
            console.log(filterdList);
            setListOfRestaurant(filterdList)
          }
        }>
            Top Rated Restaurants
            </button>

          <button onClick={()=>{const dishList=listOfRestaurant.filter((res)=>{
            const costForTwoString=res.info.costForTwo

            const costForTwoPrice=parseInt(costForTwoString.replace(/[^0-9]/g,''),10)
            return costForTwoPrice>=450
          })
            console.log(dishList);
            setListOfRestaurant(dishList)
            
          }}>
            Dishes from 450
            </button>

           </div>
        <div className="res-container">
          {
            listOfRestaurant.map((restaurant=>(
              <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            )))
          }
  
          
  
        </div>
      </div>
    )
  }
  export default Body;