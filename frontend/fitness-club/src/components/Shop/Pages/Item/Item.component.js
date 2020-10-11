import React, { Component } from "react";
import axios from "axios";
import "./itemComponent.css";

//material ui packages for the +,- button
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default class Item extends Component {
  constructor(props) {
    super(props);

    //if there is no user navigate to the login page
    const token = localStorage.getItem("x-auth-token");
    const userRole = localStorage.getItem("userRole");

    if (!token) {
      window.location = "/userlogin";
    }

    if (userRole !== "user") {
      window.location = "/userlogin";
    }

    this.addItem = this.addItem.bind(this);
    this.substractItem = this.substractItem.bind(this);
    this.addSize = this.addSize.bind(this);
    this.substractSize = this.substractSize.bind(this);
    this.addItemFunction = this.addItemFunction.bind(this);

    this.state = {
      ItemName: "",
      ItemPrice: 0,
      ItemDescription: "",
      ItemImage: "",
      ItemSize: 6,
      ItemQuantity: 0,
    };
  }

  componentDidMount() {
    if (!this.props.location.data) {
      window.location = "/shop";
    }

    axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          "/api/shop/" +
          this.props.location.data
      )
      .then((response) => {
        this.setState({
          ItemName: response.data.ItemName,
          ItemPrice: response.data.ItemPrice,
          ItemDescription: response.data.ItemDescriprion,
          ItemImage: response.data.ItemImage,
        });
      })
      .catch((error) => {
        console.log("No Item");
      });
  }

  async addItemFunction(e) {
    e.preventDefault();

    if (this.state.ItemQuantity === 0) {
      alert("Item Quantity must be atleast one");
      return false;
    }

    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
        "Content-Type": "application/json",
      },
    };

    const newCart = {
      activated: "activated",
    };
    //when click a button create a cart
    await axios
      .post(process.env.REACT_APP_BACKEND_URL + "/api/cart", newCart, config)
      .then(() => {
        console.log("Cart Created");
      })
      .catch((err) => {
        alert(err);
      });

    const newItemToCart = {
      ItemName: this.state.ItemName,
      ItemPrice: this.state.ItemPrice,
      ItemImage: this.state.ItemImage,
      quantity: this.state.ItemQuantity,
    };

    await axios
      .put(
        process.env.REACT_APP_BACKEND_URL + "/api/cart/addtocart",
        newItemToCart,
        config
      )
      .then(() => {
        alert("Added to Cart");
      })
      .catch((err) => {
        alert(err);
      });

    window.location = "/cart";
  }

  // quantity changing functions

  addItem() {
    this.setState({
      ItemQuantity: ++this.state.ItemQuantity,
    });
  }

  substractItem() {
    if (this.state.ItemQuantity >= 1) {
      this.setState({
        ItemQuantity: --this.state.ItemQuantity,
      });
    }
  }

  // quantity changing functions end
  // size changing functions

  addSize() {
    if (this.state.ItemSize <= 11) {
      this.setState({
        ItemSize: ++this.state.ItemSize,
      });
    }
  }

  substractSize() {
    if (this.state.ItemSize >= 7) {
      this.setState({
        ItemSize: --this.state.ItemSize,
      });
    }
  }

  // size changing functions end

  render() {
    return (
      <div>
        {/*Start of  Desktop Version */}
        <div
          id="CardSingleItemCartDesktopVersion"
          class="card shadow-lg"
          style={{
            width: "950px",
            margin: "150px",
            height: "555px",
            marginTop: "50px",
            borderRadius: "25px",
            backgroundImage:
              "linear-gradient(to right, #ffffff , steelblue,darkslategray)",
          }}
        >
          <div
            class="card-body"
            style={{
              background:
                "linear-gradient(90deg, #ffffff 0%, #0e4d6f 100%);border-radius: 31px",
            }}
          >
            <div class="row" style={{ marginTop: "0px" }}>
              <div class="col" style={{ margin: "0px" }}>
                <img
                  data-bs-hover-animate="pulse"
                  src={this.state.ItemImage}
                  style={{
                    width: "600px",
                    height: " 600px",
                    margin: " 0px",
                    marginTop: " -42px",
                    marginLeft: "-95px",
                  }}
                  alt="itemImage"
                />
              </div>
              <div class="col" style={{ margin: "0px" }}>
                <div
                  class="card"
                  style={{
                    width: "401px",
                    marginLeft: "34px",
                    marginTop: "41px",
                    height: "364px",
                    borderRadius: "53px",
                    backgroundColor: "rgba(14,77,111,0)",
                    borderStyle: "none",
                    fontFamily: "Akronim, cursive",
                  }}
                >
                  <div class="card-body" style={{ height: "429px" }}>
                    <h1
                      style={{
                        textAlign: "center",
                        color: "#ffffff",
                        fontWeight: "bold",
                        fontFamily: " Alata, sans-serif",
                        fontSize: "40px",
                      }}
                    >
                      {this.state.ItemName}
                    </h1>
                    <br />
                    <br />
                    <br />

                    {/* quantity picker start           */}
                    <div class="row" style={{ marginTop: "0px" }}>
                      <div class="col">
                        <Fab
                          color="primary"
                          aria-label="add"
                          size="small"
                          onClick={this.substractItem}
                        >
                          <RemoveIcon />
                        </Fab>
                        &nbsp;&nbsp; &nbsp;
                        <input
                          // id="outlined-basic"
                          // variant="outlined"
                          style={{
                            border: "none",
                            outline: "none",
                            background: "none",
                            maxWidth: "30px",
                            color: "white",
                          }}
                          value={this.state.ItemQuantity}
                          onChange={this.onChangeQuantity}
                        />
                        &nbsp; &nbsp; &nbsp;
                        <Fab
                          color="primary"
                          size="small"
                          aria-label="add"
                          onClick={this.addItem}
                        >
                          <AddIcon />
                        </Fab>
                      </div>
                    </div>
                    {/* quantity picker end                 */}
                    <br />
                    <h1
                      style={{
                        marginTop: "6px",
                        marginLeft: "48px",
                        fontFamily: " Alata, sans-serif",
                        fontSize: "29px",
                        color: "rgb(255,255,255)",
                        fontWeight: "bold",
                      }}
                    >
                      {this.state.ItemPrice * this.state.ItemQuantity} LKR
                    </h1>
                  </div>
                </div>
                <button
                  onClick={this.addItemFunction}
                  class="btn btn-primary"
                  type="button"
                  style={{
                    marginTop: "46px",
                    marginRight: "0px",
                    marginLeft: "137px",
                    width: "211px",
                    height: "53px",
                    backgroundColor: "#0e4d6f",
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*End of  Desktop Version */}
        {/*Start of  Mobile Version */}

        <div
          id="CardSingleItemCartMobileVersion"
          class="card"
          style={{
            borderRadius: "25px",
            // backgroundImage:
            //   "linear-gradient(to right, #ffffff , steelblue,darkslategray)",
          }}
        >
          <center>
            <img
              class="card-img-top"
              src={this.state.ItemImage}
              style={{ width: "250px", height: "250px" }}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title"> {this.state.ItemName}</h5>

              {/* quantity picker start           */}
              <div class="row" style={{ marginTop: "0px" }}>
                <div class="col">
                  <Fab
                    color="primary"
                    aria-label="add"
                    size="small"
                    onClick={this.substractItem}
                  >
                    <RemoveIcon />
                  </Fab>
                  &nbsp;&nbsp; &nbsp;
                  <input
                    // id="outlined-basic"
                    // variant="outlined"
                    style={{
                      border: "none",
                      outline: "none",
                      background: "none",
                      maxWidth: "30px",
                    }}
                    value={this.state.ItemQuantity}
                    onChange={this.onChangeQuantity}
                  />
                  &nbsp; &nbsp; &nbsp;
                  <Fab
                    color="primary"
                    size="small"
                    aria-label="add"
                    onClick={this.addItem}
                  >
                    <AddIcon />
                  </Fab>
                </div>
              </div>
              {/* quantity picker end                 */}
              <br />
              <p class="card-text">
                {this.state.ItemPrice * this.state.ItemQuantity} LKR
              </p>

              <hr />

              <button onClick={this.addItemFunction} class="btn btn-primary">
                Add to Cart
              </button>
            </div>
          </center>
        </div>

        {/*End of  Mobile Version */}
      </div>
    );
  }
}
