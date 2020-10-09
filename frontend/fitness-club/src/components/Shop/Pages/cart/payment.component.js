import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Payment() {
  const [ItemsInCartList, setItemsInCartList] = useState([]);
  const [totalPrice, setTotal] = useState(0);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [address, setAddress] = useState();

  let currentCartPrice = 0;

  useEffect(() => {

    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };
    //fetching cartlist data from the backend
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/cart/me", config)
      .then(({ data }) => {
        console.log(data.cartList);
        console.log(data.cartList.length);

        if (data.cartList.length > 0) {
          setItemsInCartList(data.cartList);

          data.cartList.map(
            (currentItem) =>
              (currentCartPrice =
                currentCartPrice +
                parseInt(currentItem.ItemPrice, 10) *
                  parseInt(currentItem.quantity, 10))
          );

          setTotal(currentCartPrice);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    //fetching user details
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/userprofile/", config)
      .then((res) => {
        console.log("profile details : " + res.data);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setEmail(res.data.email);
        setAddress(res.data.address);
        setContact(res.data.mobileNo);
      });
  }, []);

  return (
    <div>
      <div className="card" style={{ padding: "20px", margin: "10px" }}>
        <form method="post" action="https://sandbox.payhere.lk/pay/checkout">
          <input type="hidden" name="merchant_id" value="1215573" />
          <input
            type="hidden"
            name="return_url"
            value="http://localhost:3000/cart"
          />
          <input
            type="hidden"
            name="cancel_url"
            value="http://sample.com/cancel"
          />
          <input
            type="hidden"
            name="notify_url"
            value="http://localhost:5000/api/paymenthistory"
          />
          <br />
          <br />
          Item Details
          <br /> <br />
          <hr />
          <input
            type="text"
            name="order_id"
            class="form-control"
            value="ItemNo12345"
            hidden
          />
          <div class="form-group">
            <label for="exampleInputEmail1">Items</label>

            <input
              type="text"
              class="form-control"
              name="items"
              value={ItemsInCartList.map((currentItem) => {
                return currentItem.ItemName;
              })}
              readOnly
            />
          </div>
          <input hidden type="text" name="currency" value="LKR" />
          <div class="form-group">
            <label for="exampleInputEmail1">Total Price</label>
            <input
              type="text"
              name="amount"
              class="form-control"
              value={totalPrice + (totalPrice / 100.0) * 2.0}
              readOnly
            />
          </div>
          <br />
          <hr />
          Customer Details
          <br />
          <br />
          <div class="form-group">
            <label for="exampleInputEmail1">First Name</label>
            <input
              type="text"
              name="first_name"
              class="form-control"
              value={firstName}
              readOnly
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Last Name</label>
            <input
              type="text"
              name="last_name"
              class="form-control"
              value={lastName}
              readOnly
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="text"
              name="email"
              class="form-control"
              value={email}
              readOnly
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Contact</label>
            <input
              type="text"
              name="phone"
              class="form-control"
              value={contact}
              readOnly
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Address</label>
            <input
              type="text"
              name="address"
              class="form-control"
              value={address}
              readOnly
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">City</label>
            <input
              type="text"
              name="city"
              class="form-control"
              value="Colombo"
            />
          </div>
          <input
            type="hidden"
            name="country"
            class="form-c ontrol"
            value="Sri Lanka"
          />
          <input type="submit" value="Buy Now" className="btn btn-success" />
          <br />
          <br />
        </form>
      </div>

  

    </div>
  );
}
