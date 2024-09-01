import { useEffect, useState } from "react"
import { RESTAURANT_API } from "./constants"



const useRestaurant=()=>{
const [listOfRestaurant,setListOfRestaurant]=useState([])
const [filteredRestaurant,setFilteredRestaurant]=useState([])
const [search,setSearch]=useState('')

    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async()=>{
        const data=await fetch(RESTAURANT_API)
        const json=await data.json()
        setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

    }
    return {listOfRestaurant,filteredRestaurant,setFilteredRestaurant,search,setSearch}
}

export default useRestaurant

