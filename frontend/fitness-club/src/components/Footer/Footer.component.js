import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Footer = () => {
  return (
    <Router>
      <footer class="bg-white sticky-footer">
        <div class="container my-auto">
          <div class="text-center my-auto copyright">
            <span>Copyright © Fitness-Club 2020/21</span>
          </div>
        </div>
      </footer>
    </Router>
  );
};

export default Footer;
