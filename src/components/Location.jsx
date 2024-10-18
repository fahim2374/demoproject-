// src/Location.js
import React from 'react';
import "../pages/css/location.css";

const Location = () => {
    return (
        <section className="location-section">
            <div className="container">
                <h2 className="location-title">Our Location</h2>
                <div className="location-content">
                    <div className="location-details">
                        <h3 className="shop-name">Printing Shop</h3>
                        <p>New Market</p>
                        <p>Boda,Panchagarh</p>
                        <p>Bangladesh</p>
                        <p><strong>Phone:</strong> 0172-4545758</p>
                        <p><strong>Email:</strong> <a href="">artpolash@gmail.com</a></p>
                    </div>
                    <div className="location-map">
                        <iframe
                            title="location-map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11038.248344040863!2d88.53759532482763!3d26.197574922780003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e493b47d89a23d%3A0x1cbc74e758f5c0fb!2sPolash%20Digital%20Pena%20printer.!5e1!3m2!1sen!2sbd!4v1728896107667!5m2!1sen!2sbd"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
