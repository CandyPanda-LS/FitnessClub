import React, { useState, useEffect } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import axios from "axios";

import "./InventoryGrid.css";

// Single item functional component start
function InventoryList({
  id,
  ItemType,
  ItemBrand,
  ManufacturelDate,
  ServiceDate,
  Warranty,
  PurchasedDate,
  ItemImage,
}) {
  return (
    <div className="col-md-4" style={{ padding: "10px" }}>
      <div
        class="card shadow ShopItem"
        data-bs-hover-animate="pulse"
        style={{ padding: "10px" }}
      >
        <div class="card-body">
          <div class="card border-white">
            <img
              style={{ height: "250px" }}
              class="card-img w-100 d-block"
              data-bs-hover-animate="pulse"
              src={"uploads/inventory/" + ItemImage}
              alt="itemImage"
            />
          </div>
          <h5
            class="card-title"
            style={{ fontFamily: "Nunito, sans-serif", color: "black" }}
          >
            {ItemType}
          </h5>
          <h6 class="text-muted card-subtitle mb-2">
            <br />
            {ItemBrand}
            <br />
          </h6>
          <h6 class="text-muted card-subtitle mb-2">
            <br />
            Manufacturel Date{" "}
            <span style={{ color: "black" }}>
              {ManufacturelDate.substring(0, 10)}
            </span>
            <br />
          </h6>
          <h6 class="text-muted card-subtitle mb-2">
            <br />
            Purchased Date{" "}
            <span style={{ color: "black" }}>
              {PurchasedDate.substring(0, 10)}
            </span>
            <br />
          </h6>
          <h6 class="text-muted card-subtitle mb-2">
            <br />
            ServiceDate Date{" "}
            <span style={{ color: "black" }}>
              {ServiceDate.substring(0, 10)}
            </span>
            <br />
          </h6>
          <h6 class="text-muted card-subtitle mb-2">
            <br />
            Warranty{" "}
            <span style={{ color: "black" }}>{Warranty + " years"}</span>
            <br />
          </h6>
          <br />
          <div class="row">
            <div class="col">
              <a href={"/UpdateInventoryitems/" + id}>
                <button class="btn btn-info" type="button">
                  Edit
                </button>
              </a>
            </div>
            <div class="col">
              <button
                class="btn btn-danger"
                type="button"
                onClick={(e) => {
                  axios
                    .delete(
                      "http://localhost:5000/api/inventory/removeItem/" + id
                    )
                    .then((res) => {
                      alert("Item Removed");
                      window.location = "/inventorytable";
                    })
                    .catch((err) => {
                      alert("Unsuccessful");
                    });
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InventoryGrid() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    //if there is no admin navigate to the login page
    const token = localStorage.getItem("x-auth-token");
    const userRole = localStorage.getItem("userRole");

    if (!token) {
      window.location = "/userlogin";
    }

    if (userRole !== "admin") {
      window.location = "/userlogin";
    }

    const sendData = async () => {
      try {
        await axios
          .get("http://localhost:5000/api/inventory")
          .then((res) => {
            console.log(res);
            setInventory(res.data);
            // setLoading(false);
          })
          .catch((error) => {
            console.log("No data");
          });
      } catch (error) {
        console.log("No Data CATCH");
      }
    };

    sendData();
  }, []);

  return (
    <div>
      <div class="row">
        <div class="col-md-12">
          <a href="/addinventoryitems">
            <button class="btn btn-primary additem-btn"> Add Item </button>
          </a>
        </div>
      </div>

      {/* Ecommerce grid */}
      <div style={{ margin: "2px" }}>
        <div class="row" style={{ margin: "10px" }}>
          {/* Item Column */}
          {inventory.map((currentItem) => (
            <InventoryList
              id={currentItem._id}
              key={currentItem._id}
              ItemType={currentItem.ItemType}
              ItemBrand={currentItem.ItemBrand}
              ManufacturelDate={currentItem.ManufacturelDate}
              ServiceDate={currentItem.ServiceDate}
              Warranty={currentItem.Warranty}
              PurchasedDate={currentItem.PurchasedDate}
              ItemImage={currentItem.ItemImage}
            />
          ))}

          {/* End of column */}
        </div>
      </div>
    </div>
  );
}
