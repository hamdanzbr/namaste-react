  import React, { lazy, Suspense, useEffect, useState } from "react"
  import ReactDOM from 'react-dom/client'
  import Header from "./components/Header"
  import Body from "./components/Body"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Contact from "./components/Contact"
import About from "./components/About"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import UserContext from "./utils/UserContext.js"
import { Provider } from "react-redux"
import appStore from "./utils/appStore.js"
import Cart from "./components/Cart.jsx"
// import Grocery from "./components/Grocery"

const Grocery=lazy(()=>{
  return(
  import('./components/Grocery')
  )
})

const App=()=>{
const [username,setUsername]=useState('')

  useEffect(()=>{
    // api call to fetch data
    const data={
      name:"Alan walker"
    };
    setUsername(data.name)
  },[])
  return(
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:username,setUsername}}> 
         <div className="app">
  <Header/>
  <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>

  )
}

const appRouter= createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'grocery',
        element:<Suspense fallback={<h1>loading.............</h1>}><Grocery/></Suspense>  
      },
      {
        path:'/resinfo/:resId',
        element:<RestaurantMenu/>
      }
    ]
  },
  
  
])
  const root= ReactDOM.createRoot(document.getElementById("root"))

  root.render(<RouterProvider router={appRouter}/>)