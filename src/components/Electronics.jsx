
import React from "react";
// import "/bootstrap/dist/css/bootstrap.min.css";

import Leaptop from "../pages/images/computer-img.png"
import Mobile from "../pages/images/mobile-img.png"
import Computers from "../pages/images/computer-img.png"
import b1 from "../pages/images/1.jpg"
import b2 from "../pages/images/2.jpg"
import b3 from "../pages/images/3.jpg"

import Navbar from "./Navbar";



// ElectronicSection.js
const ElectronicSection = () => {
  const products = [
    {
      id: 1,
      title: 'ব্যানার',
      price: 100,
      imgSrc: b1,
    },
    {
      id: 2,
      title: 'Banner',
      price: 100,
      imgSrc: b1,
    },
    {
      id: 3,
      title: 'Banner',
      price: 100,
      imgSrc: b3,
    }, {
      id: 1,
      title: 'ব্যানার',
      price: 100,
      imgSrc: b1,
    },
    {
      id: 2,
      title: 'Banner',
      price: 100,
      imgSrc: b1,
    },
    {
      id: 3,
      title: 'Banner',
      price: 100,
      imgSrc: b3,
    }, {
      id: 1,
      title: 'ব্যানার',
      price: 100,
      imgSrc: b1,
    },
    {
      id: 2,
      title: 'Banner',
      price: 100,
      imgSrc: b1,
    },
    {
      id: 3,
      title: 'Banner',
      price: 100,
      imgSrc: b3,
    }, {
      id: 1,
      title: 'ব্যানার',
      price: 100,
      imgSrc: b3,
    },
    {
      id: 2,
      title: 'Banner',
      price: 100,
      imgSrc: b1,
    },
    {
      id: 3,
      title: 'Banner',
      price: 100,
      imgSrc: b3,
    },
    // Add more products as needed
  ];

  const handleBuyNow = (id) => {
    // Open a new tab with the product details page
    window.open(`/product/${id}`, '_blank');
  };

  return (

    <>

    <Navbar/>


    <div className="fashion_section">
      <div id="electronic_main_slider" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {Array.from({ length: 3 }).map((_, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="container">
                <h1 className="fashion_taital">ব্যানার</h1>
                <div className="fashion_section_2">
                  <div className="row">
                    {products.map((product) => (
                      <div className="col-lg-4 col-sm-4" key={product.id}>
                        <div className="box_main">
                          <h4 className="shirt_text">{product.title}</h4>
                          <p className="price_text">
                            Start Price <span style={{ color: '#262626' }}>${product.price}</span>
                          </p>
                          <div className="electronic_img">
                            <img src={product.imgSrc} alt={product.title} />
                          </div>
                          <div className="btn_main">
                            <div className="buy_bt" onClick={() => handleBuyNow(product.id)}>
                              <a href="#">Buy Now</a>
                            </div>
                            <div className="seemore_bt"><a href="#">See More</a></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </div>
    </>
  );
};


export default ElectronicSection;
