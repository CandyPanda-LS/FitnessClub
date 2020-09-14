import React, { useState } from "react";

import "./InsertInventoryItems.css";

import axios from "axios";

import Progress from "./Progress";

import Background from "./img/gymbanner.jpg";

export default function InsertInventoryItems() {
  const [ItemType, setItemType] = useState();
  const [ItemBrand, setItemBrand] = useState();
  const [ManufacturelDate, setManufacturelDate] = useState();
  const [ServiceDate, setServiceDate] = useState();
  const [Warranty, setWarranty] = useState();
  const [PurchasedDate, setPurchasedDate] = useState();
  const [file, setItemImage] = useState(null);
  const [uploadPercentage, setuploadPercentage] = useState(0);

  function onFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("ItemType", ItemType);
    formData.append("ItemBrand", ItemBrand);
    formData.append("ManufacturelDate", ManufacturelDate);
    formData.append("ServiceDate", ServiceDate);
    formData.append("Warranty", Warranty);
    formData.append("PurchasedDate", PurchasedDate);
    formData.append("file", file);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        //'x-auth-token': localStorage.getItem('x-auth-token'),
      },
      onUploadProgress: (progressEvent) => {
        setuploadPercentage(
          parseInt(
            Math.round((progressEvent.loaded * 100) / progressEvent.total)
          )
        );
        //Clear percentage
        setTimeout(() => setuploadPercentage(0), 10000);
      },
    };

    axios
      .post("http://localhost:5000/api/inventory/additems", formData, config)
      .then((res) => {
        window.location = "/inventorytable";
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9 col-lg-12 col-xl-10">
          <div
            class="card  o-hidden border-0 my-5"
            style={{
              // border: "2px solid blue",
              borderRadius: "20px",
              boxShadow: "10px 7px 10px rgba(110, 107, 107, 0.548)",
            }}
          >
            <div class="card-body p-0">
              <div class="row">
                <div class="col-lg-6 d-none d-lg-flex">
                  <div
                    class="flex-grow-1 bg-login-image"
                    style={{
                      backgroundImage: `url(${Background})`,
                    }}
                  >
                    {" "}
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h4 class="text-dark mb-4">Inventory | Add Items</h4>
                    </div>
                    <form class="user" onSubmit={onFormSubmit}>
                      <div class="form-group">
                        <input
                          class="form-control form-control-user"
                          type="text"
                          id="exampleInputEmail"
                          placeholder="Enter Item Type..."
                          name="Type"
                          onChange={(e) => {
                            setItemType(e.target.value);
                          }}
                        />
                      </div>
                      <div class="form-group">
                        <input
                          class="form-control form-control-user"
                          type="text"
                          id="exampleInputEmail"
                          placeholder="Enter Item Brand..."
                          name="Brand"
                          onChange={(e) => {
                            setItemBrand(e.target.value);
                          }}
                        />
                      </div>

                      <div class="form-group">
                        <label style={{ fontSize: "12px", marginLeft: "15px" }}>
                          Manufactural Date
                        </label>
                        <input
                          class="form-control form-control-user"
                          type="date"
                          style={{ borderRadius: "20px" }}
                          placeholder="Enter Manufactural Date..."
                          name="ManufacturalDate"
                          onChange={(e) => {
                            setManufacturelDate(e.target.value);
                          }}
                        />
                      </div>

                      <div class="form-group">
                        <label style={{ fontSize: "12px", marginLeft: "15px" }}>
                          Service Date
                        </label>
                        <input
                          class="form-control form-control-user"
                          type="date"
                          style={{ borderRadius: "20px" }}
                          placeholder="Enter Service Date..."
                          name="ServiceDate"
                          onChange={(e) => {
                            setServiceDate(e.target.value);
                          }}
                        />
                      </div>

                      <div class="form-group">
                        <input
                          class="form-control form-control-user"
                          type="number"
                          id="exampleInputEmail"
                          placeholder="Enter Warranty Period (Years)..."
                          name="Warranty"
                          onChange={(e) => {
                            setWarranty(e.target.value);
                          }}
                        />
                      </div>

                      <div class="form-group">
                        <label style={{ fontSize: "12px", marginLeft: "15px" }}>
                          Purchased Date
                        </label>
                        <input
                          class="form-control form-control-user"
                          type="date"
                          style={{ borderRadius: "20px" }}
                          placeholder="Enter Purchased Date..."
                          name="PurchasedDate"
                          onChange={(e) => {
                            setPurchasedDate(e.target.value);
                          }}
                        />
                      </div>

                      <div class="form-group">
                        <input
                          class="form-control form-control-user"
                          type="file"
                          id="exampleInputEmail"
                          name="Image"
                          style={{ padding: "2px" }}
                          onChange={(e) => {
                            setItemImage(e.target.files[0]);
                          }}
                        />
                      </div>

                      <Progress percentage={uploadPercentage} />
                      <br />

                      <div class="form-group">
                        <button
                          class="btn btn-primary btn-block text-white btn-user additemBtn"
                          type="submit"
                        >
                          Add Item
                        </button>
                      </div>
                    </form>
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
