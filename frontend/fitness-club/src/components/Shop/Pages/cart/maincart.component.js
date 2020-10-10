import React, { useState, useEffect } from "react";
import axios from "axios";

function ItemsInCart({ id, ItemName, ItemPrice, ItemQuantity, ItemImage }) {
  return (
    <tr>
      <th scope="row" class="border-0">
        <div class="p-2">
          <img
            src={ItemImage}
            alt="IMAGEcART"
            width="70"
            class="img-fluid rounded shadow-sm"
          />
          <div class="ml-3 d-inline-block align-middle">
            <h5 class="mb-0">
              {" "}
              <a href="#" class="text-dark d-inline-block align-middle">
                {ItemName}
              </a>
            </h5>
            <span class="text-muted font-weight-normal font-italic d-block">
              Category: Shoes
            </span>
          </div>
        </div>
      </th>
      <td class="border-0 align-middle">
        <strong>{ItemPrice} LKR</strong>
      </td>
      <td class="border-0 align-middle">
        <strong>{ItemQuantity}</strong>
      </td>
      <td class="border-0 align-middle">
        <button
          onClick={() => {
            const config = {
              headers: {
                "x-auth-token": localStorage.getItem("x-auth-token"),
              },
            };
            axios
              .delete(
                process.env.REACT_APP_BACKEND_URL + "/api/cart/cartlist/" + id,
                config
              )
              .then(() => {
                alert("Item Deleted");
                window.location = "/cart";
              })
              .catch((err) => {
                alert(err);
              });
          }}
        >
          <a href="#" class="text-dark">
            <i class="fa fa-trash"></i>
          </a>
        </button>
      </td>
    </tr>
  );
}

export default function MainCart() {
  const [ItemsInCartList, setItemsInCartList] = useState([]);
  const [totalPrice, setTotal] = useState(0);

  let currentCartPrice = 0;

  //fetching meallist data from the backend
  useEffect(() => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

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
  }, []);

  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
          {/* <!-- Shopping cart table --> */}
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" class="border-0 bg-light">
                    <div class="p-2 px-3 text-uppercase">Product</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">Price</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">Quantity</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">Remove</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* View Item By Item */}

                {ItemsInCartList.map((currentItem) => (
                  <ItemsInCart
                    id={currentItem._id}
                    key={currentItem._id}
                    ItemName={currentItem.ItemName}
                    ItemPrice={currentItem.ItemPrice}
                    ItemQuantity={currentItem.quantity}
                    ItemImage={currentItem.ItemImage}
                  />
                ))}
              </tbody>
            </table>
          </div>
          {/* <!-- End --> */}
        </div>
      </div>

      <div class="row py-5 p-4 bg-white rounded shadow-sm">
        <div class="col-lg-6">
          <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
            Instructions for buyer
          </div>
          <div class="p-4">
            <p class="font-italic mb-4">
              <ul>
                <li>
                  {" "}
                  Deposit money to our BOC bank or eZCash (+94 763631711, + 2.5%
                  commision for Dialog) account and email us the scanned bank
                  slip (Before 12 noon, to ship the package on the same day)
                </li>
                <li>
                  {" "}
                  You can also use Frimi or Genie payment methods by scanning
                  the QR codes from your mobile App.
                </li>
                <li>
                  After confirming your payment the package will be handed over
                  to a local courier service or post office
                </li>
              </ul>
            </p>
            <textarea
              name=""
              cols="30"
              rows="10"
              class="form-control"
            ></textarea>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
            Order summary{" "}
          </div>
          <div class="p-4">
            <p class="font-italic mb-4">
              Shipping and additional costs are calculated based on values you
              have entered.
            </p>
            <ul class="list-unstyled mb-4">
              <li class="d-flex justify-content-between py-3 border-bottom">
                <strong class="text-muted">Order Subtotal </strong>
                <strong>{totalPrice} LKR</strong>
              </li>

              <li class="d-flex justify-content-between py-3 border-bottom">
                <strong class="text-muted">Tax</strong>
                <strong>{(totalPrice / 100.0) * 2.0} LKR</strong>
              </li>
              <li class="d-flex justify-content-between py-3 border-bottom">
                <strong class="text-muted">Total</strong>
                <h5 class="font-weight-bold">
                  {totalPrice + (totalPrice / 100.0) * 2.0} LKR
                </h5>
              </li>
            </ul>
            <a
              href="/PaymentCart"
              class="btn btn-dark rounded-pill py-2 btn-block"
            >
              Procceed to checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
