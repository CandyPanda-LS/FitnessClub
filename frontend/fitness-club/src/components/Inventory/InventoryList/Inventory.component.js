import React, { Component } from "react";

import "./InventoryGrid.css";

export default class InventoryGrid extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-md-12">
            <button class="btn btn-primary additem-btn"> Add Item </button>
          </div>
        </div>

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
                    Dumbell
                  </h4>
                  <h6 class="text-muted card-subtitle mb-2">
                    <br />
                    Brand : eser
                    <br />
                  </h6>
                  <h6>Service date: 11/2/2021</h6>
                  <p>Purchased date: 2/8/2019</p>

                  <div class="row">
                    <div class="col">
                      <button
                        class="btn"
                        type="button"
                        style={{ backgroundColor: "#deae2a", color: "#ffffff" }}
                      >
                        Update
                      </button>
                    </div>
                    <div class="col">
                      <button
                        class="btn"
                        type="button"
                        style={{ backgroundColor: "#cf3429", color: "#ffffff" }}
                      >
                        Delete
                      </button>
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
                    Dumbell
                  </h4>
                  <h6 class="text-muted card-subtitle mb-2">
                    <br />
                    Brand : eser
                    <br />
                  </h6>
                  <h6>Service date: 11/2/2021</h6>
                  <p>Purchased date: 2/8/2019</p>

                  <div class="row">
                    <div class="col">
                      <button
                        class="btn"
                        type="button"
                        style={{ backgroundColor: "#deae2a", color: "#ffffff" }}
                      >
                        Update
                      </button>
                    </div>
                    <div class="col">
                      <button
                        class="btn"
                        type="button"
                        style={{ backgroundColor: "#cf3429", color: "#ffffff" }}
                      >
                        Delete
                      </button>
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
                    Dumbell
                  </h4>
                  <h6 class="text-muted card-subtitle mb-2">
                    <br />
                    Brand : eser
                    <br />
                  </h6>
                  <h6>Service date: 11/2/2021</h6>
                  <p>Purchased date: 2/8/2019</p>

                  <div class="row">
                    <div class="col">
                      <button
                        class="btn"
                        type="button"
                        style={{ backgroundColor: "#deae2a", color: "#ffffff" }}
                      >
                        Update
                      </button>
                    </div>
                    <div class="col">
                      <button
                        class="btn"
                        type="button"
                        style={{ backgroundColor: "#cf3429", color: "#ffffff" }}
                      >
                        Delete
                      </button>
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
                    Dumbell
                  </h4>
                  <h6 class="text-muted card-subtitle mb-2">
                    <br />
                    Brand : eser
                    <br />
                  </h6>
                  <h6>Service date: 11/2/2021</h6>
                  <p>Purchased date: 2/8/2019</p>

                  <div class="row">
                    <div class="col">
                      <button
                        class="btn"
                        type="button"
                        style={{ backgroundColor: "#deae2a", color: "#ffffff" }}
                      >
                        Update
                      </button>
                    </div>
                    <div class="col">
                      <button
                        class="btn"
                        type="button"
                        style={{ backgroundColor: "#cf3429", color: "#ffffff" }}
                      >
                        Delete
                      </button>
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
