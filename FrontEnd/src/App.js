import React from "react";
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import { store } from "./store/store";
import MainPage from "./Components/MainPage";
import Nav from "./Components/Nav";
import AboutPage from './Components/AboutPage.jsx'
import Blogger from './Components/Blogger.jsx'
import ContactUs from './Components/ContactUs.jsx'
import Login from "./Pages/Login.jsx"
import DeliveryItems from "./Pages/DeliveryItems";
import OrderDetail from "./Pages/OrderDetail";



const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>

      <Routes>
   <Route path="" element={<><Nav/><Outlet /></>}>
      <Route path="/" element={<MainPage/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Components/Blogger" element={<Blogger/>}/>     
        <Route path="/Components/AboutPage" element={<AboutPage/>}/>
        <Route path="/Components/ContactUS" element={<ContactUs/>}/>
        <Route path="/Login" element={<Login/>}/>  
        <Route path="/cart" element={<Cart/>}/>       
         </Route>
         
         <Route path="/DeliveryItems" element={<DeliveryItems/>}/>
         <Route path="/OrderDetail" element={<OrderDetail/>}/>
         <Route path="/Home" element={<Home/>}/>
         

       

      </Routes>
    </BrowserRouter>
    </Provider>
  )
}



export default App