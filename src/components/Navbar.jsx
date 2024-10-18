import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../pages/css/nav.css";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="navbar">
            <div className="container">
                <div className="header_section_top">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="custom_menu">
                                <ul className={isMobileMenuOpen ? "nav_links active" : "nav_links"}>
                                    <li><Link to="/">HOME</Link></li>
                                    <li><Link to="/fashion">Banner</Link></li>
                                    <li><Link to="/Fastune">Fastune</Link></li>
                                    <li><Link to="/wallboad">Wallboad</Link></li>
                                    <li><Link to="#">Login</Link></li>
                                </ul>
                                {/* Mobile Menu Button */}
                                <button className="mobile-menu-icon" onClick={handleMobileMenuToggle}>
                                    <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
