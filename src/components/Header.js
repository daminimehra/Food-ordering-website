import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () =>{

const [btnName , setBtnName] = useState("login");
const onlineStatus =useOnlineStatus();
const {loggedInUser} = useContext(UserContext);

const cartItems = useSelector((store)=>store.cart.items);
return(
      <div className="flex sm:text- bg-yellow-100 justify-between shadow-md mb-2" >
        <div className="flex" >
        <h3 className="py-4 m-4 font-bold text-5xl text-orange-600 italic">namaste<span
        className="text-orange-700 left-0">foodie</span></h3></div>
        <div className="flex items-center text-orange-800 ">
          <ul className="flex p-4 font-semibold  ">
            <li className="px-4 hover:bg-yellow-200 rounded-lg"><Link to={"/"}>Home</Link></li>
            <li className="px-4 hover:bg-yellow-200 rounded-lg"><Link to={"/about"}>About</Link></li>
            <li className="px-4 hover:bg-yellow-200 rounded-lg"><Link to="/contact">Contact</Link></li>
            <li className="px-4 hover:bg-yellow-200 rounded-lg"><Link to="/cart">Cart - ({cartItems.length})</Link></li>
            <button className=" px-4 hover:bg-yellow-200 rounded-lg" onClick={
              ()=>{
                   btnName === "login" ? setBtnName("logout") : setBtnName("login");
              }
            }>{btnName}</button>
              <li className="px-4 text-xs" >{onlineStatus ?"🟢":"🔴"}</li>
            <li className="px-4">{loggedInUser}</li>

          </ul>
        </div>
      </div>
    )
  }
  
  export default Header;