import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";

const RestaurantMenu = () =>{

const {resId} = useParams();

const resInfo = useRestaurantMenu(resId);

const [showIndex, setShowIndex] = useState(null);

if(resInfo === null ) return  <Shimmer/>;

const {name, cuisines} = resInfo?.cards[0]?.card?.card?.info;

const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

const categories =
 resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>
    c.card?.card?.["@type"] === 
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return  (
        <div className="text-center">
            <h1 className="  text-orange-800 font-bold my-6 text-2xl">{name} </h1>
           
            <h3 className="  text-orange-800 font-bold text-lg">{cuisines.join(", ")} 🍽️</h3>
           {categories.map((category,index)=>(
            <ResCategory 
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={()=> setShowIndex(index)}

            />))}
        </div>
    )
}

export default RestaurantMenu;