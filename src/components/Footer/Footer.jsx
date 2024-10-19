import React from "react";
import LogoDark from "@images/logo-dark.svg";
import './_footer.scss';

const Footer = () => {
  return (
    <>
      {/* <!-- ***** Footer Start ***** --> */}
      <footer>
      <div className="container">
      <div className="row">
        <div className="col-lg-5 col-md-12 col-sm-12">
          <img src={LogoDark} className="logo" alt="footer logo dark" />
          <div className="text">Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a
            feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper.</div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
          <h5>Helpful Links</h5>
          <ul className="footer-nav">
            <li><a href="#"><i className="fa fa-angle-right"></i><span>Our Work</span></a></li>
            <li><a href="#"><i className="fa fa-angle-right"></i><span>About Us</span></a></li>
            <li><a href="#"><i className="fa fa-angle-right"></i><span>Services</span></a></li>
            <li><a href="#"><i className="fa fa-angle-right"></i><span>Blog</span></a></li>
            <li><a href="#"><i className="fa fa-angle-right"></i><span>Contact</span></a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
          <h5>Latest Apps</h5>
          <ul className="footer-nav">
            <li><a href="#"><i className="fa fa-angle-right"></i><span>Dance School</span></a></li>
            <li><a href="#"><i className="fa fa-angle-right"></i><span>Coiner</span></a></li>
            <li><a href="#"><i className="fa fa-angle-right"></i><span>Cloud Manager</span></a></li>
            <li><a href="#"><i className="fa fa-angle-right"></i><span>Coding Life</span></a></li>
            <li><a href="#"><i className="fa fa-angle-right"></i><span>Smart Office</span></a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-12">
          <h5>Contact Us</h5>
          <div className="address">
            <p>455 West Orchard Street<br/>Kings Mountain, NC 28086</p>
            <p>Phone: (272) 211-7370</p>
            <p><span>E-Mail:</span><a href="#">support@yourbrand.com</a></p>
            <ul className="social">
              <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter-square"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="#"><i className="fab fa-google-plus-square"></i></a></li>
              <li><a href="#"><i className="fab fa-github-square"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <p className="copyright">© 2021 Beapp. All Rights Reserved.</p>
        </div>
      </div>
      </div>
      </footer>
      {/* <!-- ***** Footer Start ***** --> */}
    </>
  );
};

export default Footer;
