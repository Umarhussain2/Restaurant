
import React,{useContext,useEffect,useState} from 'react'
import { Foodcontext } from '../App'
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



function Nonveg() {
    let context = useContext(Foodcontext)
    let [products,setProducts]=useState([]);
    let navigate = useNavigate();
    let getData = ()=>{
        if(context.data.length>0)
            setProducts(context.data[0].subItems)
        else
            navigate('/')
    }

    useEffect(()=>{
        getData () ;
    },[])
    return (
        <div className='product-wrapper'>
            
            {
                products.map((e,i)=>{
                    return <div className='product-item-wrapper' key={i}>
                        <div className='product-details'>
                            <h4>{e.name}</h4>
                            <div className='product-price'> &#x20B9; {e.price} </div>
                            
                            <button className='product-btn' onClick={()=>{
                                context.cart.push(e);
                                context.setcartvalue(context.cart.length)
                            }}
                            
                            >Order Now</button>
                        </div>
                        <div className='product-image'>
                            <img src={e.image} alt={e.name}></img>
                        </div>



                    </div>
                })
            }
{/* <div>
        <Link className='cart' to = '/cart'><ShoppingCartIcon/></Link>    
      <span className='count'>{context.cartvalue}</span></div> */}
    

        </div>

        
    )
}

export default Nonveg