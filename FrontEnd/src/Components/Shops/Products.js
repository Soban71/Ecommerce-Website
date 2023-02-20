import React, { useState , useEffect } from 'react'
import { add } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';
import './Shops.css';
const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch =  useDispatch()
  useEffect(()=>{
    const fetchProducts = async ()=>{
      const responce= await fetch("https://fakestoreapi.com/products")
      const data  = await responce.json();
      console.log(data)
      setProducts(data)
    }
    fetchProducts();
  },[])
  const handleAdd = (product)=>{
    dispatch(add(product))
  }
  var ShopHeaders={
    marginTop:"90px"
  }
  return (
    
    <div className='productsWrapper' style={ShopHeaders}>
     
      {products.map((product)=>(
        <div className='card' data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
          

          <img src={product.image} alt={product.title}/>
          <h4 >{product.title}</h4>
          <h5>{product.price}$</h5>
       
           
          
          
          
          <button className='btn' onClick={()=>handleAdd(product)}><i class="fa-solid fa-cart-shopping"></i></button>
        </div>
      ))}
    </div>
  )
}

export default Products