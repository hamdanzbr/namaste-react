import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header=()=>{
   const [btnName,setBtnName] = useState("Login")
   const onlineStatus=useOnlineStatus()
   console.log('Header rendered');
   
   useEffect(() => {
    console.log('useEffect rendered');
     
   },[btnName]) 

   const cartItems=useSelector((store)=>store.cart.items)
   console.log(cartItems);
   

   const {loggedInUser}=useContext(UserContext)
   
    return(
      <div className="flex justify-between border-2 shadow-md bg-pink-200">
        <div className="logo">
          <img className="w-20" src={LOGO_URL} alt="No img" />
        </div>
        <div className="mr-12 pt-8">
          <ul className="flex gap-2 text-lg text-green-900">
            <li>{onlineStatus?'online':'offline'} </li>
           <Link to={'/'}> <li>Home</li></Link>  
            <Link to={'/about'}><li>About Us</li></Link>
            <li><Link to={'/contact'}>Contact Us</Link></li>
            <li><Link to={'/cart'}>Cart({cartItems.length})</Link> </li>
            <li>{loggedInUser}</li>
            <button onClick={()=>{
              if(btnName==='Login'){
                setBtnName("Logout")
              }else{
                setBtnName('Login')
              }
              
              }}>{btnName}</button>
          </ul>
        </div>
      </div>
    )
  }
  
  export default Header;