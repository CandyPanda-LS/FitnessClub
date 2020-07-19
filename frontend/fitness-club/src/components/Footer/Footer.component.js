import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
                  <a href="#">Consectetur adipiscing</a>
                </li>
                <li>
                  <a href="#">Facilisis vulputate est eget</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum dolor</a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md-3">
              <h4>Sed elit eros</h4>
              <ul class="footer-links">
                <li>
                  <a href="#">Aenean condimentum viverra</a>
                </li>
                <li>
                  <a href="#">Proin porta diam</a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md-3">
              <h4>Donec quis turpis vel</h4>
              <ul class="footer-links">
                <li>
                  <a href="#">Proin laoreet volutpat</a>
                </li>
                <li>
                  <a href="#">Aenean tincidunt est</a>
                </li>
              </ul>
              <h4>Nulla cursus finibus</h4>
              <ul class="footer-links">
                <li>
                  <a href="#">Curabitur elementum odio</a>
                </li>
                <li>
                  <a href="#">Proin condimentum ac</a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md-3">
              <h4>Nullam ut rutrum elit</h4>
              <ul class="footer-links">
                <li>
                  <a href="#">Praesent gravida</a>
                </li>
                <li>
                  <a href="#">Praesent egestas</a>
                </li>
              </ul>
              <h4>Ut eget feugiat ante</h4>
              <ul class="footer-links">
                <li>
                  <a href="#">Etiam ornare vestibulum</a>
                </li>
                <li>
                  <a href="#">Donec tincidunt tempus</a>
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
              <a href="#">
                <img src="assets/img/united-states-flag.png" />
                United States
              </a>
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
