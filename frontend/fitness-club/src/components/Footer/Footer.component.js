import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <Router>
      <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col-6 col-md-3">
              <h4>Lorem Ipsum dolor</h4>
              <ul class="footer-links">
                <li>
                  <Link to="#">Consectetur adipiscing</Link>
                </li>
                <li>
                  <Link to="#">Facilisis vulputate est eget</Link>
                </li>
                <li>
                  <Link to="#">Lorem ipsum dolor</Link>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md-3">
              <h4>Sed elit eros</h4>
              <ul class="footer-links">
                <li>
                  <Link to="#">Aenean condimentum viverra</Link>
                </li>
                <li>
                  <Link to="#">Proin porta diam</Link>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md-3">
              <h4>Donec quis turpis vel</h4>
              <ul class="footer-links">
                <li>
                  <Link to="#">Proin laoreet volutpat</Link>
                </li>
                <li>
                  <Link to="#">Aenean tincidunt est</Link>
                </li>
              </ul>
              <h4>Nulla cursus finibus</h4>
              <ul class="footer-links">
                <li>
                  <Link to="#">Curabitur elementum odio</Link>
                </li>
                <li>
                  <Link to="#">Proin condimentum ac</Link>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md-3">
              <h4>Nullam ut rutrum elit</h4>
              <ul class="footer-links">
                <li>
                  <Link to="#">Praesent gravida</Link>
                </li>
                <li>
                  <Link to="#">Praesent egestas</Link>
                </li>
              </ul>
              <h4>Ut eget feugiat ante</h4>
              <ul class="footer-links">
                <li>
                  <Link to="#">Etiam ornare vestibulum</Link>
                </li>
                <li>
                  <Link to="#">Donec tincidunt tempus</Link>
                </li>
              </ul>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <hr />
          <div class="footer-legal">
            <div class="float-md-right region">
              <Link to="#">
                <img alt="sateflag" src="assets/img/united-states-flag.png" />
                United States
              </Link>
            </div>
            <div class="d-inline-block copyright">
              <p class="d-inline-block">
                Copyright © 2018. All rights reserved.
                <br />
              </p>
            </div>
            <div class="d-inline-block legal-links">
              <div class="d-inline-block item">
                <h5>Privacy Policy</h5>
              </div>
              <div class="d-inline-block item">
                <h5>Terms of Use</h5>
              </div>
              <div class="d-inline-block item">
                <h5>Legal</h5>
              </div>
              <div class="d-inline-block item">
                <h5>License</h5>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Router>
  );
};

export default Footer;
