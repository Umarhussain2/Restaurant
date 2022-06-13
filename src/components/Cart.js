import React,{useContext,useState} from 'react'
import { Foodcontext } from '../App'
import {Link} from 'react-router-dom'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


function Cart() {
    let context = useContext(Foodcontext);
    let [cartPrice]=useState(0)
    let handleRemove = (e)=>{
        context.cart.splice(context.cart.indexOf(e),1);
        context.setcartvalue(context.cart.length)
    }
    return (
        <div className='product-wrapper'>
            {
                context.cart.length?<>
                <h2>You have ordered:</h2>
            {
                context.cart.map((e,i)=>{
                    cartPrice+=Number(e.price)
                    return <div className='product-item-wrapper' key={i}>
                        <div className='product-details'>
                            <h4>{e.name}</h4>
                            <div className='product-price'> &#x20B9; {e.price} </div>
                            
                            <button className='product-btn' onClick={()=>handleRemove(e)}>Remove</button>
                        </div>
                        <div className='product-image'>
                            <img src={e.image} alt={e.name}></img>
                        </div>

                    </div>
                })
            }
                
            <div className='placeholder-wrapper'>
                <div className='product-price'>Total Price:{cartPrice}</div>
                <Link to='/sucessfull'><button className='product-btn-placeholder' onClick={()=>{
                    context.setCart([]);
                    context.setcartvalue(0);
                }}>Place Order</button></Link>
                        <PayPalScriptProvider options={{ "client-id": "AUiVmkjTPT4OCAWY13fEVZcXkLEACwDXcR3wSLprIoMxFu1Le5_GMc3922GeCnDt98_GbhTuVs2ehprF" }}>
                          <PayPalButtons style={{ layout: "horizontal" }} />
                        </PayPalScriptProvider>
            </div></>:<h2>Your Cart is Empty</h2>

          
            }
        </div>


    )
}

export default Cart