import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu=()=>{

    const{resId}=useParams()
    const restaurantInfo=useRestaurantMenu(resId)

    
    if(restaurantInfo===null) return <div>hello</div>


    const {name,costForTwoMessage,cuisines,avgRatingString }=restaurantInfo?.cards[2]?.card?.card?.info;

    const {itemCards}=restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{costForTwoMessage} </p>
        <p>{cuisines.join(' , ')}</p>
        <p>{avgRatingString}</p>
        <h2>Menu</h2>
            <ol>
                {
                    itemCards.map((item)=>{
                        return(
                    <li key={item.card.info.id}> {item.card.info.name} {item.card.info.price/100 || item.card.info.defaultPrice/100} </li>
                        )
                })
                }
            </ol>
        </div>
    )
}

export default RestaurantMenu;