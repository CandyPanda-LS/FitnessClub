import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";




// Single item functional component start
function Item({ id, ItemName, ItemDescriprion, ItemPrice, ItemImage }) {
  return (
    <div
      class="card"
      style={{
        backgroundColor: "#074666",
        marginTop: "10px",
        marginBottom: "10px",
      }}
    >
      <div class="card-body">
        <div class="row">
          <div class="col" style={{ paddingLeft: "-3px", paddingRight: "0px" }}>
            <div class="card" style={{ width: "113px" }}>
              <img
                class="card-img w-100 d-block"
                data-bs-hover-animate="pulse"
                src={"uploads/shop/"+ItemImage}
                alt="itemImage"
              />
            </div>
          </div>
          <div class="col">
            <div class="row">
              <div class="col">
                <h1 style={{ color: "rgb(255,255,255)" }}>
                  {ItemName}
                </h1>
                <h1
                  class="align-content-end align-self-baseline"
                  style={{
                    width: " 291px",
                    fontSize: "29px",
                    color: "rgb(248,248,248)",
                  }}
                >
                  {ItemPrice}
                </h1>
              </div>
            </div>
          </div>
          <div class="col" style={{ padding: "30px" }}>
            <div class="row">
              <div class="col">
                <Link to={"/shopItem/" + id}>
                <button
                  class="btn btn-primary m-auto"
                  type="button"
                  style={{
                    color: "rgb(0,0,0)",
                    backgroundColor: "rgb(146,174,196)",
                    width: "150px",
                    marginLeft: " 19px",
                    height: "53px",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                    EDIT
                </button>
                </Link >
              </div>
              <div class="col">


                <button
                  class="btn btn-primary justify-content-center flex-wrap m-auto"
                  type="button"
                  style={{
                    backgroundColor: "rgb(146,174,196)",
                    color: "rgb(0,0,0)",
                    width: "150px",
                    height: "53px",
                    fontWeight: "bold",
                    fontSize: "26px",
                  }}

                  onClick={() => {

                    axios.delete("http://localhost:5000/api/shop/removeItem/"+id).then(alert("Item deleted"), window.location = "/adminItemShop").catch((error) => {
                      console.log(error);
                    });




                  }}
                >
                  DELETE
                </button>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// Single item functional component end

export default class adminViewItemsShop extends Component {
  constructor(props) {
    super(props);

    this.state = { Items: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/shop/")
      .then((response) => {
        this.setState({ Items: response.data });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div class="card" style={{ backgroundColor: "#92aec4", margin: "51px" }}>
        <div class="card-body">
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
    );
  }
}
