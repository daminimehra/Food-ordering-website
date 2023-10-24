import { useDispatch } from "react-redux";
import { CON_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) =>{

  const dispatch = useDispatch();

  const handleclick = (item) =>{
  dispatch(addItem(item));
  }
  return(
        <div>
                {items.map((item)=>
                 <div
                 className="  bg-gray-50 justify-between text-left flex p-2 m-2 border-2 border-gray-200 rounded-md"
                 key={item.card.info.id}>
                 <div className="w-9/12">
                    <div className="py-2" >
                    <span className="  text-lg font-bold" >{item.card.info.name}</span>
                    <span className= "text-md font-semibold"> - ₹{item.card.info.price/100}</span>
                    </div> 
                    <p className="text-xs ">
                    {item.card.info.description}
                    </p>
                    </div>
                    <div className="w-3/12 p-4 ">
                    <div className="absolute">
                    <button onClick={()=>handleclick(item)} className="p-2 bg-white my-1 mx-14 rounded-lg shadow-lg" >add +</button>
                    </div>
                    <img className="w-full rounded-md" src={CON_URL + item.card.info.imageId} />
                  </div>
                </div>
                )}
            
        </div>
    )
}


export default ItemList;
