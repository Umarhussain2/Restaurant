import React, { Fragment, useContext } from 'react'
import {Foodcontext} from '../App'
import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Order() {
    let context = useContext(Foodcontext);
    
    return (
    <div className='home-wrapper'>
{
    context.data.map((e,i)=>{
        return <Fragment key={i}>
        <Link to={`/` +e.name.toLowerCase()} className='item-link'>
            <div className='item-wrapper'>
                <img src={e.image} className='item-image' alt ={e.name}></img>
                <div className='item-name'>{e.name}</div>
            </div>
        </Link>

        
        </Fragment>   
    })
}

<div>
        <Link className='cart' to = '/cart'><ShoppingCartIcon/></Link>    
      <span className='count'>{context.cartvalue}</span></div>
    </div>
  )
}
export default Order