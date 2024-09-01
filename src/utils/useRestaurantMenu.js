import { useEffect, useState } from "react"
import { MENU_URL } from "./constants"

const useRestaurantMenu=(resId)=>{
const [restaurantInfo,setRestaurantInfo]=useState(null)
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        const data=await fetch(MENU_URL+resId)
        const json=await data.json()
        setRestaurantInfo(json.data)
    }
    return restaurantInfo;
}
export default useRestaurantMenu;