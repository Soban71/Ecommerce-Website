import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Nav = () => {
  const items = useSelector((state)=>state.cart)
 
  return (
    <>
       
        <nav class="navbar navbar-expand-lg sticky-top bg-light">
  <div class="container-fluid">
    <a class="navbar-brand"><img src="http://wahabali.com/work/empor/images/logo.png" alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav NavbarStyle mx-auto">
    
      <Link className="navLink nav-link" to="/" >Home</Link>
      <Link className="navLink nav-link" to="/Home" >Shop</Link>
      <Link className="navLink navBa nav-link" to="/Components/Blogger">Blogs</Link>
        <Link className="navLink navBa nav-link" to="/Components/AboutPage">About</Link>
       <Link className="navLink navBa nav-link" to="/Components/ContactUS">Contact</Link>
        <Link className="navLink navBa nav-link" to="/src/Pages/Login">Login</Link>
        <Link className="navLink nav-link" to="/cart" ><i class="fas fa-shopping-bag NavbarCart" ></i>{items.length}</Link>
        <span style={{marginLeft:"15px" , marginTop: "13px"}}><i class="fa-solid fa-heart NavbarCart NavbarCarts NavbarCarts"></i></span>
       <span style={{marginLeft:"25px", marginTop: "13px"}}><i class="fa-solid fa-magnifying-glass NavbarCart NavbarSCart" ></i></span>
       
      
      </div>
    </div>
  </div>
</nav>
        
    </>
  )
}

export default Nav


{/**<span className='logo' ></span>
            <div   id="navbars">
            <Link className="navLink " to="/" >Home</Link>
                <Link className="navLink " to="/Home" >Shop</Link>
                <Link className="navLink navBa" to="/Components/Blogger">Blogs</Link>
                <Link className="navLink navBa" to="/Components/AboutPage">About</Link>
                <Link className="navLink navBa" to="/Components/ContactUS">Contact</Link>
                <Link className="navLink navBa" to="/src/Pages/Login">Login</Link>
                <Link className="navLink " to="/cart" ><i class="fas fa-shopping-bag NavbarCart" ></i>{items.length}</Link>
                <span style={{marginLeft:"15px"}}><i class="fa-solid fa-heart NavbarCart"></i></span>
                <span style={{marginLeft:"15px"}}><i class="fa-solid fa-magnifying-glass NavbarCart" ></i></span>
            </div> */}