import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatogories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurantMenu(resId);
  const[showIndex,setShowIndex]=useState(null)

  if (restaurantInfo === null) return <div className="text-center py-20">Loading...</div>;

  const { name, costForTwoMessage, cuisines, avgRatingString } =
    restaurantInfo?.cards[2]?.card?.card?.info;

  const categories = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Restaurant Information */}
      <div className="text-center mb-8">
        <h1 className="font-bold text-3xl text-gray-800">{name}</h1>
        <p className="text-lg text-gray-600 mt-2">{costForTwoMessage}</p>
        <p className="text-lg text-gray-600">{cuisines.join(" , ")}</p>
        <p className="text-sm text-gray-500 mt-1">{avgRatingString}</p>
      </div>

      {/* Categories */}
      <div className="space-y-6">
        {categories.map((category,index) => 
           (
            <RestaurantCatogories
              key={category.card.card.itemCards.map((c) => c.card.info.id)}
              data={category.card.card} showItems={index===showIndex}
              setShowIndex={()=>setShowIndex(index===showIndex?null:index)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
