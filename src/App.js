import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Order from "./components/order";
import Signup from "./components/signup";
import Signin from "./components/signin";
import Nonveg from "./components/Nonveg";
import Veg from "./components/veg";
import Sucessfull from "./components/sucessfull";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";



const url = "https://62625159d5bd12ff1e7b451c.mockapi.io/umar"

export const Foodcontext = React.createContext();



function App() {

  
  let [data, setdata] = useState([]);
  let [cart, setcart] = useState([0]);
  let [cartvalue, setcartvalue] = useState(cart.length);
  
  

  useEffect(() => {
    getdata();
  }, []);

  let getdata = async () => {
    let res = await axios.get(url);
    console.log(res.data);
    setdata(res.data);
  };

  return (
    <>
      <BrowserRouter>
         <Foodcontext.Provider
          value={{ data, cart, setcart, cartvalue, setcartvalue }} > 
          <>
            <Header />
          </>
          <Routes>
            <Route path="/order" element={<Order />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Nonveg" element={<Nonveg />} />
            <Route path="/veg" element={<Veg />} />
            <Route path="/" element={<Home />} />
            <Route path="/sucessfull" element={<Sucessfull />} />
            {/* <Route path="/Paypal" element={<Paypal />} /> */}
          </Routes>
        </Foodcontext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
