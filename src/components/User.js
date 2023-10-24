import { useEffect, useState } from "react";

const User = ()=>{

    const [profile,setProfile] = useState([]);

useEffect(()=>{
    fetchData();
},[]);

const fetchData =async () =>{
    const data = await fetch("https://api.github.com/users/daminimehra");
    const json = await data.json();
    setProfile(json);
    console.log(json)

}

    return(

      <div      
      className="bg-yellow-100  mx-60  p-6">
      <h1 className=" text-center text-orange-800 font-bold my-2 text-2xl">About Me</h1>
      <div className=" flex  justify-center space-x-5">
      <div
      ><img className="w-52 rounded-2xl" src={profile?.avatar_url}/>
        </div>
       
        <div className=" text-orange-700 font-bold">
        <h2>👧Name: {profile?.name}</h2>
         <h3>🇮🇳 Location: {profile?.location}</h3>
         <h3>👩‍🎓Education: BTech IT</h3>
         <h3>🖊️Bio: {profile?.bio}</h3>
         <h3>📧Email: daminimehra450@gmail.com</h3>
         <h3>👩‍💻Github: daminimehra</h3>
        </div> 
       </div></div>
       
    )
}

export default User;