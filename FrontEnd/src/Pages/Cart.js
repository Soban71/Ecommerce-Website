import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';
import "./cart.css"
import DeliveryItems from './DeliveryItems';

const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart)
  const handleRemove = (productId) => {
    dispatch(remove(productId))
  }
  const navigate = useNavigate();
  let total = 0;
  let title=0;
  const handleSubmit = () => {
    // e.preventDefault();

    navigate("/DeliveryItems?total=" + total + "&title="+title);

  }

  var AboutHeaders = {
    background:
      "url('/images/shoppingcart.gif')",
    marginBottom: "30px",
    height: "400px"
  }

  var cartCard = {
    
}



    return(
    <>
    <section id="Shopping_hero" style={AboutHeaders}>
        <h2 style={{color: "black"}}>#Cart</h2>
        <p style={{color: "black"}}> Buy More get more discount </p>


    </section>  
    <div className='cartWrapper'>
      {
        products.map((product)=>{
          total += product.price;
          title += product.title;
          // <DeliveryItems PriceTotal={total} />
          return(
            <>
           
           
<div>
           
<hr />
             <div className='cartCard' >
              <div className='row'>
                <div className='col-lg-4 '>
           <img src={product.image} alt={product.title}  /> 
          
           </div>

              <div className='col-lg-4'>
            <div style={cartCard}> <h5>{product.title}</h5></div>
            </div>

            <div className='col-lg-4'>
            <h5 style={cartCard}>{product.price}$</h5> 
            </div>


            </div>
           <td style={cartCard}>  <button className='btn btn-Primary' onClick={()=>handleRemove(product.id)}><i class="fa fa-trash" aria-hidden="true"></i></button> </td>

            
             </div>
             
           
          
<div>
 

</div>
<div>


</div>
</div>

            </>
          )
        })
      }
      <hr className='priceHr' />
    <h3 className='PriceCalculator'>Total Price= <b>{total}$</b></h3>
      <button className="Button"  onClick={handleSubmit}>Checkout</button>
    </div>

    </>
  )
}

export default Cart