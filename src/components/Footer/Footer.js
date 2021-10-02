import React from "react";
import "./Footer.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
  faLinkedin,
  faFacebookF
} from "@fortawesome/free-brands-svg-icons";
import {
  faCoffee,
  faPhoneVolume,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>Biona Sports Club</h1>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                    <a target="*" rel="noreferrer" href={"https://www.instagram.com/ilhankhondaker/?hl=en/"} >
                      <FontAwesomeIcon icon={faInstagramSquare} />
                    </a>
                  </div>
                  <div className="icon">
                    <a target="*" rel="noreferrer" href={"https://twitter.com/IlhanKhondaker/"} >
                      <FontAwesomeIcon icon={faTwitterSquare} />
                    </a>
                  </div>
                  <div className="icon">
                    <a target="*" rel="noreferrer" href={"https://www.youtube.com/channel/UCYzmpgr_xPjbyU7P_xWz2zw"} >
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </div>
                  <div className="icon">
                    <a target="*" rel="noreferrer" href={"https://www.facebook.com/ilhan.khondaker/"} >
                      <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>
                  </div>
                  <div className="icon">
                    <a target="*" rel="noreferrer" href={"https://www.facebook.com/Ilhan-Khondaker-102758198228272/"} >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </div>
                  <div className="icon">
                    <a target="*" rel="noreferrer" href={"https://www.linkedin.com/in/ilhan-khondaker-9a46b01b5//"} >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                </div>
                <p className="mt-4 ">
                  <small>
                    *These statements have not been evaluated by the Food and
                    Drug Administration. These products are not intended to
                    diagnose.
                  </small>
                </p>

                <p className="mt-5">
                  <small>Ilhan © . All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">Services</li>
                  <li className="footer-menu">Sports</li>
                  <li className="footer-menu">Contact us</li>
                  <li className="footer-menu"> About us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>Sign up for the newsletter</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                  <div>
                    <h5>+8801680576091</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </div>
                  <div>
                    <p>
                      160 Broadway, New York, NY 10038,
                      <br /> 102 1st Avenue, New York, NY 100
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;
