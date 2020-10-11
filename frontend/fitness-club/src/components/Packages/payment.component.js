import React, { useState, useEffect } from "react";
import axios from "axios";
import emailjs from "emailjs-com";

export default function Payment() {
  const [ItemsInCartList, setItemsInCartList] = useState([]);
  const [totalPrice, setTotal] = useState(0);

  const [cartID, setCartID] = useState();
  const [userProfile, setUserProfile] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [address, setAddress] = useState();
  const [order_id, setOrder_id] = useState();
  const [items, setItems] = useState();
  const [amount, setAmount] = useState();

  let currentCartPrice = 0;

  useEffect(() => {
    const generateOrderId = Math.floor(Math.random() * 100000 + 1);
    setOrder_id(generateOrderId);

    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };
    //fetching cartlist data from the backend
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/cart/me", config)
      .then(({ data }) => {
        setCartID(data._id);
        console.log(data.cartList);
        console.log("user profile id " + data.user._id);
        console.log(data.cartList.length);

        setUserProfile(data.user._id);

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
          setAmount(currentCartPrice + (currentCartPrice / 100.0) * 2.0);
          setItems(
            data.cartList.map((item) => {
              return item.ItemName + " X " + item.quantity;
            })
          );
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

  function onPayment(e) {
    e.preventDefault();

    //send email to customer about orderdetails
    emailjs
      .sendForm(
        "gmail",
        "template_v4lsx87",
        e.target,
        "user_4hQlVwKm1eUwsRWPbvFHE"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Sent. Please Check Your Email");

          //send data to backend
          const formData = new FormData();
          formData.append("userProfile", userProfile);
          formData.append("OrderID", order_id);
          formData.append("items", items);
          formData.append("amount", amount);
          formData.append("firstName", firstName);
          formData.append("lastName", lastName);
          formData.append("email", email);
          formData.append("phone", contact);
          formData.append("address", address);

          axios
            .post(
              process.env.REACT_APP_BACKEND_URL + "/api/addpayment",
              formData
            )
            .then(() => {
              console.log("Order Success");

              axios
                .delete(
                  process.env.REACT_APP_BACKEND_URL + "/api/cart/" + cartID
                )
                .then(() => {
                  console.log("Cart Cleared");
                  localStorage.setItem("orderID", order_id);
                  window.location = "/Cartsuccess/";
                })
                .catch((err) => {
                  alert(err);
                });
            })
            .catch((err) => {
              alert(err);
            });
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div>
      <div className="card" style={{ padding: "20px", margin: "10px" }}>
        <form onSubmit={onPayment}>
          Item Details
          <br /> <br />
          <hr />
          <label for="exampleInputEmail1">Order ID</label>
          <input
            type="text"
            name="orderid"
            class="form-control"
            value={order_id}
          />
          <div class="form-group">
            <label for="exampleInputEmail1">Items</label>
            <input
              type="text"
              class="form-control"
              name="items"
              value={items}
              // value={ItemsInCartList.map((item)=>{
              //   return(
              //       item.ItemName + " X " + item.quantity
              //   )
              // })}
              onChange={(e) => {
                setItems(
                  ItemsInCartList.map((item) => {
                    return item.ItemName + " X " + item.quantity;
                  })
                );
              }}
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
              value={amount}
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
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Contact</label>
            <input
              type="text"
              name="phone"
              class="form-control"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Address</label>
            <input
              type="text"
              name="address"
              class="form-control"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
          <input type="submit" value="Buy Now" className="btn btn-success" />
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}
