import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Imageslider from "../../Slider/imageslider.component";

//end
import "./ItemsGrid.css";

// Single item functional component start
function Item({ id, ItemName, ItemDescriprion, ItemPrice, ItemImage }) {
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
              src={ItemImage}
              alt="itemImage"
            />
          </div>
          <h4
            class="card-title"
            style={{ fontFamily: "Nunito, sans-serif", color: "black" }}
          >
            {ItemName}
          </h4>
          <h6 class="text-muted card-subtitle mb-2">
            <br />
            {ItemDescriprion}
            <br />
            <br />
          </h6>
          <div class="row">
            <div class="col">
              <Link to={"/shopItem/" + id}>
                <button
                  class="btn"
                  type="button"
                  style={{ backgroundColor: "#0c4c6d", color: "#ffffff" }}
                >
                  view
                </button>
              </Link>
            </div>
            <div class="col">
              <p style={{ margin: "6px" }}>Rs{ItemPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// Single item functional component end

export default class ItemsGrid extends Component {
  constructor(props) {
    super(props);

    this.state = { Items: [], showSideDrawer: false };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/shop/")
      .then((response) => {
        console.log(response);
        this.setState({ Items: response.data });
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
                id={currentItem._id}
                key={currentItem._id}
                ItemName={currentItem.ItemName}
                ItemPrice={currentItem.ItemPrice}
                ItemDescriprion={currentItem.ItemDescriprion}
                ItemImage={currentItem.ItemImage}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
