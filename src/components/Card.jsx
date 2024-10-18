import React from 'react'
import c1 from "./img/01.jpg"
import c2 from "./img/2.png"
import "./css/card.css"



const Card = () => {
  return (
    <div >


    <div class="card" >

  <img src={c2} class="card-img-top"  alt="" />

  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go Picture</a>
  </div>

 </div>

    </div>
    
  )
}

export default Card