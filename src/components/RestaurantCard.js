import { CON_URL } from "../utils/constants";


const RestaurantCard=  (props) =>{
    const {restaurantList} = props;
    const{
  cloudinaryImageId,
  name,
  cuisines,
  aggregatedDiscountInfoV3,
  costForTwo,
  avgRating,} = restaurantList?.info; 

  const { deliveryTime} = restaurantList?.info?.sla;
  return(
    <div className="p-4 m-4 w-[300px] bg-slate-200 rounded-lg hover:bg-gray-300" >
    <img className="rounded-lg" src={CON_URL + cloudinaryImageId}/>
      <h3 className="font-bold py-3 pb-0 text-lg">{name}</h3>
      <h4 className="font-bold">⭐{avgRating} • {deliveryTime} mins</h4>
       <h4 >{costForTwo} </h4>
       <h4>{cuisines.join(", ")}</h4>
       
    </div>
  )
}

 export const withPromotedLabel = (RestaurantCard)=>{


  return(props)=>{
    const {restaurantList} = props;
    const {aggregatedDiscountInfoV3 } = restaurantList?.info;
    return(
      <div>
        <label className=" absolute font-extrabold text-2xl text-white mx-7 my-36 p-2 rounded-lg">{aggregatedDiscountInfoV3.header }
 <label>  { aggregatedDiscountInfoV3.subHeader}</label>     </label>
       
        <RestaurantCard {...props}/>
      </div>
    )
  }
}


export default RestaurantCard;