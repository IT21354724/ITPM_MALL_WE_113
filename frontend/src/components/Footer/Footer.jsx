import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3">
            <h5>Company Name</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-md-3">
            <h5>Products</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">MDBootstrap</a></li>
              <li><a href="#" className="text-white">MDWordPress</a></li>
              <li><a href="#" className="text-white">BrandFlow</a></li>
              <li><a href="#" className="text-white">Bootstrap Angular</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Your Account</a></li>
              <li><a href="#" className="text-white">Become an Affiliate</a></li>
              <li><a href="#" className="text-white">Shipping Rates</a></li>
              <li><a href="#" className="text-white">Help</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact</h5>
            <address>
              New York, NY 10012, US<br />
              <i className="fas fa-envelope"></i> info@gmail.com<br />
              <i className="fas fa-phone"></i> +01 234 567 88<br />
              <i className="fas fa-print"></i> +01 234 567 89
            </address>
          </div>
        </div>
      </div>
      <div className="bg-dark py-3">
        <div className="container text-center">
          <p className="mb-0">© 2020 Company Name. All rights reserved.</p>
          <div>
            <a href="#" className="text-white me-4"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white me-4"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white me-4"><i className="fab fa-google"></i></a>
            <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
