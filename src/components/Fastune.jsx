import React from "react";
import FastuneImage1 from "../pages/images/1.jpg"; // Replace with your actual images
import FastuneImage2 from "../pages/images/2.jpg"; // Replace with your actual images
// import FastuneImage3 from "./pages/images/"; // Replace with your actual images
import angel from "../pages/images/angle-left.png";
import angel2 from "../pages/images/right-arrow-angle.png";
import Navbar from "./Navbar";

// FastuneSection.js
const Fastune = () => {
  const products = [
    {
      id: 1,
      title: 'Fastune Product 1',
      price: 150,
      imgSrc: FastuneImage1,
    },
    {
      id: 2,
      title: 'Fastune Product 2',
      price: 200,
      imgSrc: FastuneImage2,
    },
    {
      id: 3,
      title: 'Fastune Product 3',
      price: 250,
      imgSrc: FastuneImage2,
    },
    // Add more products as needed
  ];

  const handleBuyNow = (id) => {
    // Open a new tab with the product details page
    window.open(`/product/${id}`, '_blank');
  };

  return (
    <>
      <Navbar />

      <div className="fastune_section">
        <div id="fastune_main_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div className="container">
                  <h1 className="fastune_taital">Fastune Collection</h1>
                  <div className="fastune_section_2">
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
          <a className="carousel-control-prev" href="#fastune_main_slider" role="button" data-slide="prev">
            <img src={angel} alt="Previous" />
          </a>
          <a className="carousel-control-next" href="#fastune_main_slider" role="button" data-slide="next">
            <img src={angel2} alt="Next" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Fastune;
