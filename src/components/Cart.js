import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

    const Cart= ()=>{     
        const cartItems = useSelector((store)=>store.cart.items);
         const dispatch = useDispatch();
          const handleclearCart = ()=>{ 
            dispatch (clearCart()); } 
          return(    
             <div className="text-center">  
             <div>       
               <h1 className="text-orange-600 text-center py-10 italic bg-slate-50 font-bold  text-5xl" >Your Food is waiting, checkout fast</h1>       
             </div>
             <button className=" items-center justify-center rounded-lg m px-6 py-3 bg-yellow-100  text-orange-800 font-medium mt-2 " onClick={handleclearCart}>Clear Cart</button>    
                  <div className="w-6/12 m-auto">                             
                       {cartItems.length ===0 && <h1 className="text-orange-600 text-center mt-6 italic bg-slate-50 font-bold  text-2xl">Your Cart is Empty,Add items</h1>}       
                        <ItemList items={cartItems}/>    
                  </div> 
            </div> 
                    ) }   
export default Cart;