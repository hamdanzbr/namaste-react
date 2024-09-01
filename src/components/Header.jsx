import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
   const [btnName,setBtnName] = useState("Login")
   const onlineStatus=useOnlineStatus()
   console.log('Header rendered');
   
   useEffect(() => {
    console.log('useEffect rendered');
     
   },[btnName])
   
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
            <li>Cart</li>
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