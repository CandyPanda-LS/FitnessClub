import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Cartsuccess() {
  const [orderID, setOrderID] = useState();
  const [customerOrderID, setCustomerOrder] = useState();
  const [customerOrderDate, setCustomerOrderDate] = useState();

  useEffect(() => {
    setOrderID(localStorage.getItem("orderID"));

    axios
      .post(
        process.env.REACT_APP_BACKEND_URL +
          "/api/addpayment/" +
          localStorage.getItem("orderID")
      )
      .then((response) => {
        console.log("customer order " + response);
        setCustomerOrder(response.data.OrderID);
        setCustomerOrderDate(response.data.createdAt.substring(0, 10));
        localStorage.removeItem(orderID);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Thank you. Your order has been received</h5>

          <div className="row">
            <div className="col-md-3">
              <div class="card">
                <div class="card-body">
                  <p>Order Number</p>
                  <p>{customerOrderID}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="card">
                <div class="card-body">
                  <p>Date</p>
                  <p>{customerOrderDate}</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="card">
                <div class="card-body">
                  <p>Email</p>
                  <p>fitnessclublk@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div class="card">
                <div class="card-body">
                  <p>Payment Method</p>
                  <p>Total 2500</p>
                  <p>Direct Bank Transfer</p>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="row" style={{ padding: "5px" }}>
            <p>
              Make your payment directly into our bank account.Please use your
              Order ID as the payment reference.
            </p>

            <p>
              Your Order will not be shipped until the funds have cleared in our
              account.
            </p>
          </div>

          <div class="card" style={{ backgroundColor: "#3299a8" }}>
            <div class="card-body">
              <h3>Our Bank Details</h3>
              <div className="row">
                <div className="col-md-4">
                  <div class="card">
                    <div class="card-body">
                      <p>ACCOUNT NAME</p>
                      <p>FitnessClub Moratuwa</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div class="card">
                    <div class="card-body">
                      <p>BANK</p>
                      <p>Bank Of Ceylon</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div class="card">
                    <div class="card-body">
                      <p>ACCOUNT NUMBER</p>
                      <p>0003237337</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
