import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    // <footer className='text-center bg-dark text-light py-2'>
    //   <p className='m-0'><small>Copyright &copy; {year} All right reserved</small></p>
    // </footer>
    <div className="footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-xs-12">
            <div className="first">
              <h4>Our Plumbing Services</h4>
              <p> Residential Plumbing Services</p>
              <p> Commercial Plumbing Services</p>
              <p> Drain Cleaning Services</p>
              <p> Gas Lines Services</p>
             
            </div>
          </div>

          <div className="col-md-4 col-xs-12">
            <div className="second">
              <h4> Navigate</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
               
                <li>
                  <Link to = "/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-xs-12">
            <div className="third">
              <h4> Contact</h4>
              <ul>
                <li>Monayem Hossain </li>
                <li>Phone: 01850-939862</li>

                <li>
                  <i className="far fa-envelope"></i>{" "}
                  monayemhossain347@gmail.com
                </li>
            
                <li>
                  <i className="fas fa-map-marker-alt"></i>Dhaka,Bangladesh{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="line"></div>
            
            <p className='m-0 text-white text-center'><small>Copyright &copy; {year} All Rights Reserved</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
