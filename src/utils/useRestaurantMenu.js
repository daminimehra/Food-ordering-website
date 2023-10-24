import {  useState,useEffect } from "react";
const useRestaurantMenu = (resId)=>{

const [resInfo, setResMenu]= useState(null);

useEffect(()=>{
fetchData();
},[]);

const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.3260152&lng=75.57618289999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    console.log(json);
    setResMenu(json.data);
}

    return resInfo;
}

export default useRestaurantMenu;