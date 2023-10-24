import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({data,showItems, setShowIndex})=>{
    //const [showItems, setShowItems] =useState(false);
const handleClick=()=>{
//setShowItems(!showItems);
setShowIndex();
}
    return(
        <div >
<div className="  w-6/12 mx-auto my-4  bg-yellow-100 shadow-lg p-4 ">
  <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
  <span className=" text-orange-800 font-bold text-lg">{data.title}({data.itemCards.length})</span>
    <span>⬇️</span>
  </div>
    {showItems&& <ItemList items={data.itemCards}/>}
    
</div>


        </div>
    )
}

export default ResCategory;