import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import Shimmer from "./components/shimmer";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

// Chunking 
// Code Splitting
// Dynamic Bundling
// Lazy Loding
// on Demand Loading

const Grocery = lazy (()=> import("./components/Grocery"));
const About = lazy (()=> import("./components/About"));


const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(()=>{
    const data = {
      name : "vibhor",
    }
    setUserName(data.name)
  },[])
  return (
    <UserContext.Provider value={{loggedInUser: userName, setUserName}} >
      <div className="app">
          <Header />
          <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    errorElement : <Error />,
    children : [
      {
        path : "/",
        element : <Body />,
      },
      {
        path : "/about",
        element :<Suspense fallback={<>🔃 Loading</>}> <About /> </Suspense>
      },
      {
        path : "/contact",
        element : <Contact />
      },
      {
        path : "/restaurents/:resId",
        element : <RestaurentMenu />
      },
      {
        path : "/grocery",
        element : <Suspense fallback={<>🔃 Loading</>}> <Grocery /> </Suspense>,
      },
    ]
  },
  
])

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
