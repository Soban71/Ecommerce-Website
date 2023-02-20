import React from 'react'
import {useNavigate} from 'react-router-dom';
export default function OrderDetail() {
    const navigate = useNavigate();
    const BackMenu=(e)=>{
navigate("/Home");
    }
  return (
    <div>
      <div class="card">
  <div class="card-header">
    Congrats
  </div>
  <div class="card-body">
    <h5 class="card-title">Your Order Has Been Placed</h5>
    <p class="card-text">You will Receive Your Order Soon Stay Tunned</p>
    <a href="#" class="btn btn-primary" onClick={BackMenu}>Continue Shopping</a>
    <br />
    <img src="/images/Deliverytaking.gif" alt=""  style={{width:"490px" , height:"300px"}}/>
  </div>

</div>
    </div>
  )
}
