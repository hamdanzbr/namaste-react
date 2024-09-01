import { useEffect, useState } from "react";
// import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const {listOfRestaurant,filteredRestaurant, setFilteredRestaurant, search,  setSearch,} = useRestaurant();

  const onlineStatus=useOnlineStatus()

  if(onlineStatus===false) return <div><h1>Connection problem</h1> </div>  

  return (
    <div className="body">
      <div className="search">
        <button
          className="bg-yellow-300 rounded-lg text-red-500 m-5 text-lg p-2"
          onClick={() => {
            const filterdList = listOfRestaurant.filter(
              (res) => res.info.avgRating >= 4.5
            );
            console.log(filterdList);
            setFilteredRestaurant(filterdList);
          }}
        >
          <b className="animate-pulse">Top Rated Restaurants</b>
        </button>

        <button className="bg-red-500 p-2 rounded-lg text-yellow-400 text-lg"
          onClick={() => {
            const dishList = listOfRestaurant.filter((res) => {
              const costForTwoString = res.info.costForTwo;

              const costForTwoPrice = parseInt(
                costForTwoString.replace(/[^0-9]/g, ""),
                10
              );
              return costForTwoPrice >= 450;
            });
            console.log(dishList);
            setFilteredRestaurant(dishList);
          }}
        >
          <b>Dishes from 450</b>
        </button>
        <div className="pb-2 px-8">
          <input className="border-2 border-black rounded ml-12 mx-1  py-1"
          placeholder="Search here"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button className="border-2 bg-green-200 rounded  px-3 py-1"
            onClick={() => {
              console.log(search);
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap px-20 py-6 gap-x-4 gap-y-8">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/resinfo/" + restaurant.info.id}>
            {" "}
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
