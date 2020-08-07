import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


import Imageslider from "../../Slider/imageslider.component";

import "./ItemsGrid.css";

function Item(props) {
  return (
    <div className="col-md-3" style={{ padding: "10px" }}>
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
            {props.Item.ItemName}
          </h4>
          <h6 class="text-muted card-subtitle mb-2">
            <br />
            {props.Item.ItemDescriprion}
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
              <p style={{margin: "6px"}}>Rs{props.Item.ItemPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default class ItemsGrid extends Component {
  constructor(props) {
    super(props);

    this.state = { Items: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/ShopItems/")
      .then((response) => {
        this.setState({Items: response.data});
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {/* Image Slider */}
        <Imageslider />
        {/* Ecommerce grid */}
        <div style={{ margin: "2px" }}>
          <div class="row" style={{ margin: "10px" }}>
            {/* <Item/>
            <Item/>
            <Item />
            <Item/>
            <Item/> */}

            {this.state.Items.map((currentItem) => (
              <Item
                key={currentItem._id}
                ItemName={currentItem.ItemName}
                ItemPrice={currentItem.ItemPrice}
                ItemDescriprion={currentItem.ItemDescriprion}
                ItemColors={currentItem.ItemColors}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
