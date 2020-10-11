import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Switch from "@material-ui/core/Switch";

const OrderPayments = (props) => (
  <tr>
    <td>{props.order.OrderID}</td>
    <td>{props.order.firstName + " " + props.order.lastName}</td>
    <td>{props.order.items}</td>
    <td>{props.order.amount}</td>
    <td>{props.order.phone}</td>
    <td>{props.order.email}</td>
    <td>{props.order.address}</td>
    <td>{props.order.paymentStatus}</td>

    <td>
      {" "}
      <button
        onClick={() => {
          props.completeOrderPayment(props.order._id);
        }}
      >
        Click Me
      </button>
    </td>
  </tr>
);

const SingleOrderPayments = (props) => (
  <tr>
    <td>{props.order.OrderID}</td>
    <td>{props.order.firstName + " " + props.order.lastName}</td>
    <td>{props.order.items}</td>
    <td>{props.order.amount}</td>
    <td>{props.order.phone}</td>
    <td>{props.order.email}</td>
    <td>{props.order.address}</td>
    <td>{props.order.paymentStatus}</td>

    <td>
      {" "}
      <button
        onClick={() => {
          props.completeOrderPayment(props.order._id);
        }}
      >
        Click Me
      </button>
    </td>
  </tr>
);

export default class AdminOrderList extends Component {
  constructor(props) {
    super(props);

    this.generatePDF = this.generatePDF.bind(this);

    //this.deleteInstructor = this.deleteInstructor.bind(this);
    this.searchOrder = this.searchOrder.bind(this);

    this.state = {
      orders: [],
      checkState: false,
      orderID: "",
      singleOrder: "false",

      //state for single order details
      orderSingle: null,
    };
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/addpayment")
      .then((response) => {
        this.setState({ orders: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  generatePDF() {
    const pdfText = {
      orders: this.state.orders,
    };

    axios
      .post(
        process.env.REACT_APP_BACKEND_URL +
          "/api/pdfgenerate/generatecompletedorderlist",
        pdfText
      )
      .then(() => {
        alert("PDF Generated Successful");
      })
      .catch((err) => console.log(err.message));
  }

  completeOrderPayment(id) {
    axios
      .post(
        process.env.REACT_APP_BACKEND_URL + "/api/addpayment/complete/" + id
      )
      .then((response) => {
        alert("Order Success");

        axios
          .get(process.env.REACT_APP_BACKEND_URL + "/api/addpayment")
          .then((response) => {
            this.setState({ orders: response.data });
          })
          .catch((error) => {
            console.log(error);
          });

        window.location = "/adminorderlist";
      })
      .catch((err) => {
        alert(err);
      });
  }
  searchOrder(e) {
    e.preventDefault();

    alert(this.state.orderID);

    //get single order from payment table
    axios
      .post(
        process.env.REACT_APP_BACKEND_URL +
          "/api/addpayment/" +
          this.state.orderID
      )
      .then((response) => {
        console.log("single order " + response);
        this.setState({ orderSingle: response.data, singleOrder: "true" });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  orderList() {
    //return a single Instructor component for each and every array Element
    return this.state.orders.map((currentorder) => {
      return (
        <OrderPayments
          order={currentorder}
          completeOrderPayment={this.completeOrderPayment}
          key={currentorder._id}
        />
      );
    });
  }
  getSingleOrder() {
    //return a single Instructor component for each and every array Element

    return (
      <SingleOrderPayments
        order={this.state.orderSingle}
        completeOrderPayment={this.completeOrderPayment}
        key={this.state.orderSingle._id}
      />
    );
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.generatePDF}>
          Generate PDF
        </button>
        <br />
        <br />
        <div className="row">
          <div className="col-md-9">
            <input
              class="form-control"
              type="text"
              onChange={(e) => {
                this.setState({
                  orderID: e.target.value,
                });
              }}
              placeholder="Search Order ID"
              aria-label="Search"
            />
          </div>
          <div className="col-md-3">
            <button className="btn btn-primary" onClick={this.searchOrder}>
              search
            </button>
          </div>
        </div>
        <br /> <br />
        <h3>Order List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Order ID</th>
              <th>Name</th>
              <th>Item List</th>
              <th>Price</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.singleOrder === "false"
              ? this.orderList()
              : this.getSingleOrder()}
          </tbody>
        </table>
      </div>
    );
  }
}
