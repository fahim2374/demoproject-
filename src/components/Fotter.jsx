import { Link } from 'react-router-dom';
import fotter from "../pages/images/logo2.png"

const Footer = () => {
  return (
    <div className="footer_section layout_padding">
      <div className="container">
        <div className="footer_logo">
          <Link to="/">
            <img src={fotter} alt="Footer Logo" />
          </Link>
        </div>
        <div className="input_bt">
          <input
            type="text"
            className="mail_bt"
            placeholder="Your Email"
            name="Your Email"
          />
          <span className="subscribe_bt" id="basic-addon2">
            <a href="#">Subscribe</a>
          </span>
        </div>
        <div className="footer_menu">
          <ul>
            <li><Link to="/">Best Sellers</Link></li>
            <li><Link to="/">Gift Ideas</Link></li>
            <li><Link to="/">New Releases</Link></li>
            <li><Link to="/">Today's Deals</Link></li>
            <li><Link to="/">Customer Service</Link></li>
          </ul>
        </div>
        <div className="location_main">
          Help Line Number: <a href="#">+0172-4545758</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
