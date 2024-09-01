  import React, { lazy, Suspense } from "react"
  import ReactDOM from 'react-dom/client'
  import Header from "./components/Header"
  import Body from "./components/Body"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Contact from "./components/Contact"
import About from "./components/About"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
// import Grocery from "./components/Grocery"

const Grocery=lazy(()=>{
  return(
  import('./components/Grocery')
  )
})

const App=()=>{
  return(
    <div className="app">
  <Header/>
  <Outlet/>
    </div>
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