import React,{lazy ,Suspense, useEffect} from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter , RouterProvider ,Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";


const About = lazy(()=> import("./components/About"));


const AppLayout = () => {
  const [userName , setUserName] = useState();
  useEffect(()=>{
    const data ={
      name:"",
    }
    setUserName(data.name)
  }, []);
  
  return(
    <Provider store={appStore}>
    <UserContext.Provider
     value={{loggedInUser: userName ,setUserName}}>
        <div className="app">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
    </UserContext.Provider>
    </Provider>
  
  )
}

const appRouter = createBrowserRouter(
  [
    {
      path:"/",
  element:<AppLayout/>,
  children:[
    {
      path:"/",
    element:<Body/>
      },
    {
      path:"/about",
    element:(    <Suspense fallback={<h1> loding...</h1> }> <About/></Suspense>
    )
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
  ],
  errorElement:<Error/>,
    },

   
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter}/>)