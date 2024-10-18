import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../pages/css/style.css";
import "../pages/css/responsive.css";
import "../pages/css/jquery.mCustomScrollbar.min.css";
import '../pages/css/bootstrap.min.css';
import toggle from "../pages/images/toggle-icon.png";
import logo from "../pages/images/logo.png";
import flag from "../pages/images/flag-france.png";
import france from "../pages/images/flag-france.png";
import angel from "../pages/images/angle-left.png";
import angel2 from "../pages/images/right-arrow-angle.png";
import b2 from "../pages/images/1.jpg";
import OurTeam from "./OurTeam";
import Location from "./Location";

// Sample product data (could come from API or context)
const products = [
  {
    id: 1,
    title: 'Fashionable Banner 1',
    price: 1000,
    description: 'Stylish and trendy banner.',
    imgSrc: b2,
  },
  {
    id: 2,
    title: 'Fashionable Banner 2',
    price: 500,
    description: 'Modern and elegant banner.',
    imgSrc: b2,
  },
  {
    id: 3,
    title: 'Fashionable Banner 3',
    price: 1500,
    description: 'Unique design for all occasions.',
    imgSrc: b2,
  }
  // Additional product data can be added here
];

function Fashion() {
  const [sidenavWidth, setSidenavWidth] = useState("0");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const openNav = () => {
    setSidenavWidth("250px");
  };

  const closeNav = () => {
    setSidenavWidth("0");
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Redirect to search results page with the query
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <>
      {/* Banner Section */}
      <div className="banner_bg_main">
        {/* Header Top Section */}
        <div className="container">
          <div className="header_section_top">
            <div className="row">
              <div className="col-sm-12">
                <div className="custom_menu">
                  <ul>
                    <li><a href="/">HOME</a></li>
                    <li><Link to="/electronics">Banner</Link></li>
                    <li><a href="/fastune">Fastune</a></li>
                    <li><a href="/wallboard">Wallboard</a></li>
                    <li><a href="/login">Login</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Logo Section */}
        <div className="logo_section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="logo">
                  <a href="index.html">
                    <img src={logo} alt="Logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header Section */}
        <div className="header_section">
          <div className="container">
            <div className="containt_main">
              {/* Sidebar */}
              <div id="mySidenav" className="sidenav" style={{ width: sidenavWidth }}>
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <Link to="/">Home</Link>
                <Link to="/fashion">Fashion</Link>
                <Link to="/electronics">Electronics</Link>
                <Link to="/jewellery">Jewellery</Link>
              </div>
              <span className="toggle_icon" onClick={openNav}>
               
              </span>
              {/* Category Dropdown */}
              <div className="dropdown">
               
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link className="dropdown-item" to="/banner">Banner</Link>
                  <Link className="dropdown-item" to="/tshirt">T-shirt</Link>
                  <Link className="dropdown-item" to="/fastune">Fastune</Link>
                  <Link className="dropdown-item" to="/artboard">Artboard</Link>
                  <Link className="dropdown-item" to="/canvas">Canvas</Link>
                  <Link className="dropdown-item" to="/creast">Creast</Link>
                  <Link className="dropdown-item" to="/pinbadge">Pinbadge</Link>
                  <Link className="dropdown-item" to="/mog">Mog</Link>
                </div>
              </div>
             
              {/* Language and Cart */}
             
            </div>
          </div>
        </div>

        {/* Banner Section */}
        <div className="banner_section layout_padding">
          <div className="container">
            <div id="my_slider" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-sm-12">
                      <h1 className="banner_taital">Get Start <br />Your favorite Design</h1>
                      <div className="buynow_bt"> <a href="/electronics">Buy Now</a></div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-sm-12">
                      <h1 className="banner_taital">Get Start <br />Your favorite Design</h1>
                      <div className="buynow_bt"><a href="/electronics">Buy Now</a></div>
                    </div>
                  </div>
                </div>
                {/* Add more carousel items as needed */}
              </div>
              <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                <img src={angel} alt="" />
              </a>
              <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                <img src={angel2} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* OurTeam and Location components */}
      <OurTeam />
      <Location />
    </>
  );
}

export default Fashion;
