import { useEffect, useState } from "react"
import { RES_URL } from "./constants";

const useRestaurantList = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState ([]);
    const [filteredResult , setFilteredResult]= useState([]);

    useEffect(()=>{ fetchData()}, []);

    const fetchData = async()=>{
      const data =  await fetch(RES_URL);
  
      const json = await data.json();
      console.log(json);
      setListOfRestaurants(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredResult(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    }
  
 

  return [listOfRestaurants, setListOfRestaurants, filteredResult, setFilteredResult];
}


export default useRestaurantList;