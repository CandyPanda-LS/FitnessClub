import React, { Component } from "react";

import Imageslider from "../../Slider/imageslider.component";

import "./ItemsGrid.css";

export default class ItemsGrid extends Component {
  render() {
    return (
      <div>
        {/* Image Slider */}
        <Imageslider />
        {/* Ecommerce grid */}
        <div style={{ margin: "2px" }}>
          <div class="row" style={{ margin: "10px" }}>
            {/* Item Column */}
            <div class="col-md-3" style={{ padding: "10px" }}>
              <div
                class="card shadow ShopItem"
                data-bs-hover-animate="pulse"
                style={{ padding: "10px" }}
              >
                <div class="card-body">
                  <div class="card border-white">
                    <img
                      class="card-img w-100 d-block"
                      data-bs-hover-animate="pulse"
                      src="assets/img/1-1.png"
                      alt="itemImage"
                    />
                  </div>
                  <h4
                    class="card-title"
                    style={{ fontFamily: "Nunito, sans-serif", color: "black" }}
                  >
                    Nike
                  </h4>
                  <h6 class="text-muted card-subtitle mb-2">
                    <br />
                    lipsum as it is sometimes known, is dummy text used in
                    laying out print, graphic or web designs
                    <br />
                    <br />
                  </h6>
                  <div class="row">
                    <div class="col">
                      <button
                        class="btn"
                        type="button"
                        style={{ backgroundColor: "#0c4c6d", color: "#ffffff" }}
                      >
                        view
                      </button>
                    </div>
                    <div class="col">
                      <p style={{ margin: "6px" }}>Rs.2000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* End of column */}
            {/* Item Column */}
            <div class="col-md-3" style={{ padding: "10px" }}>
              <div
                class="card shadow ShopItem"
                data-bs-hover-animate="pulse"
                style={{ padding: "10px" }}
              >
                <div class="card-body">
                  <div class="card border-white">
                    <img
                      alt="itemImage"
                      class="card-img w-100 d-block"
                      data-bs-hover-animate="pulse"
                      src="assets/img/1-1.png"
                    />
                  </div>
                  <h4
                    class="card-title"
                    style={{ fontFamily: "Nunito, sans-serif", color: "black" }}
                  >
                    Nike
                  </h4>
                  <h6 class="text-muted card-subtitle mb-2">
                    <br />
                    lipsum as it is sometimes known, is dummy text used in
                    laying out print, graphic or web designs
                    <br />
                    <br />
                  </h6>
                  <div class="row">
                    <div class="col">
                      <button
                        class="btn"
                        type="button"
                        style={{ backgroundColor: "#0c4c6d", color: "#ffffff" }}
                      >
                        view
                      </button>
                    </div>
                    <div class="col">
                      <p style={{ margin: "6px" }}>Rs.2000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* End of column */}
            {/* Item Column */}
            <div class="col-md-3" style={{ padding: "10px" }}>
              <div
                class="card shadow ShopItem"
                data-bs-hover-animate="pulse"
                style={{ padding: "10px" }}
              >
                <div class="card-body">
                  <div class="card border-white">
                    <img
                      alt="itemImage"
                      class="card-img w-100 d-block"
                      data-bs-hover-animate="pulse"
                      src="assets/img/1-1.png"
                    />
                  </div>
                  <h4
                    class="card-title"
                    style={{ fontFamily: "Nunito, sans-serif", color: "black" }}
                  >
                    Nike
                  </h4>
                  <h6 class="text-muted card-subtitle mb-2">
                    <br />
                    lipsum as it is sometimes known, is dummy text used in
                    laying out print, graphic or web designs
                    <br />
                    <br />
                  </h6>
                  <div class="row">
                    <div class="col">
                      <button
                        class="btn"
                        type="button"
                        style={{ backgroundColor: "#0c4c6d", color: "#ffffff" }}
                      >
                        view
                      </button>
                    </div>
                    <div class="col">
                      <p style={{ margin: "6px" }}>Rs.2000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* End of column */}
            {/* Item Column */}
            <div class="col-md-3" style={{ padding: "10px" }}>
              <div
                class="card shadow ShopItem"
                data-bs-hover-animate="pulse"
                style={{ padding: "10px" }}
              >
                <div class="card-body">
                  <div class="card border-white">
                    <img
                      alt="itemImage"
                      class="card-img w-100 d-block"
                      data-bs-hover-animate="pulse"
                      src="assets/img/1-1.png"
                    />
                  </div>
                  <h4
                    class="card-title"
                    style={{ fontFamily: "Nunito, sans-serif", color: "black" }}
                  >
                    Nike
                  </h4>
                  <h6 class="text-muted card-subtitle mb-2">
                    <br />
                    lipsum as it is sometimes known, is dummy text used in
                    laying out print, graphic or web designs
                    <br />
                    <br />
                  </h6>
                  <div class="row">
                    <div class="col">
                      <button
                        class="btn"
                        type="button"
                        style={{ backgroundColor: "#0c4c6d", color: "#ffffff" }}
                      >
                        view
                      </button>
                    </div>
                    <div class="col">
                      <p style={{ margin: "6px" }}>Rs.2000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* End of column */}
          </div>
        </div>
      </div>
    );
  }
}
