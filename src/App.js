import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";

// lazy loading (lazy, Suspense)-> this is used to load the component only when it is required and created separate bundle for that component.suspense is used to show the loader till the component is loaded. 
const About = lazy(()=>import("./components/About"));


const root = ReactDOM.createRoot(document.getElementById("root"));


const AppLayout = () => {
    return (<div className="app-layout">
        <Header/>
        <Outlet/>
    </div>);
}

const appRouter = createBrowserRouter([
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
                element:<Suspense fallback={<Shimmer/>}><About/></Suspense>,   
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>,
            }
        ],
        errorElement:<Error/>
    },
    
]);


  
  

root.render( <RouterProvider router={appRouter}/>);