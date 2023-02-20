import React, { useState } from 'react';
import './DeliveryDetail.css';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';


export default function DeliveryItems(props) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [MobileNo, setMobileNo] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  const [Address , setAddress] = useState("");
  const [searchParams] =useSearchParams()
    let total=searchParams.get("total");
    var title=searchParams.get("title");
    const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/register", {
      email: email,
      username: username,
      MobileNo: MobileNo,
      Address : Address,
      total,
      title,
    }).then((response) => {
      if(response.data.message){
        setRegisterStatus(response.data.message);
      }else{
        setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
        navigate("/OrderDetail");

      }
    });
  };




  
  return (
    
    <div className="loginForm">
    <form>
      <h3 className='DeliveryDetailHeading'>Provide Accurate Information <br /> For Faster Delivery</h3>
      <label htmlFor="email">Name*</label>
      <input className="textInput" type="text" name="username" onChange={(e) => {setUsername(e.target.value)}} placeholder="Enter your Name" required />
      <label htmlFor="username">Email*</label>
      <input className="textInput" type="username" name="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Enter your Email" required />
      <label htmlFor="password">Mobile-No*</label>
      <input className="textInput" type="text" name="MobileNo" onChange={(e) => {setMobileNo(e.target.value)}} placeholder="Enter your Mobileno" required />
      <label htmlFor="password">Permanent Address*</label>
      <input className="textInput" type="text" name="Address"  onChange={(e) => {setAddress(e.target.value)}} placeholder="Enter your Address" required />
      <label htmlFor="password">Price*</label>
      <input className="textInput" type="text" name="total"   value={total} readOnly  required />
      <label htmlFor="title">CartItem Tittle*</label>
      <input className="textInput" type="text" name="title"   value={title} readOnly  required />
<br />
<br />
      <input className="buttonDelivery" type="submit" onClick={register} value="Order Now" />
      <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1>
     
    </form>
  </div>
 
 
  
  ) 
}
