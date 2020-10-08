import React, { useState, useEffect } from "react";
import axios from "axios";
import Background from "./image/3584.jpg";

export default function AdvertisementComponent() {
  const [advertiesementPost, setAdvertiesement] = useState([]);

  useEffect(() => {
    const sendData = async () => {
      try {
        await axios
          .get(process.env.REACT_APP_BACKEND_URL + "/api/advertisement")
          .then((res) => {
            console.log(res);
            setAdvertiesement(res.data);
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
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div class="container">
          <div
            class="row justify-content-center"
            style={{
              filter: "blur(0px)",
              backgroundColor: "rgba(255,0,0,0)",
              borderRadius: "0px",
              borderWidth: "5px",
              borderBottom: "0px solid rgb(255,255,255)",
            }}
          >
            {advertiesementPost.map(function (advertisements) {
              return (
                <div
                  class="col-sm-4 col-md-6 col-lg-6 col-xl-7 offset-xl-0"
                  style={{
                    margin: "15px",
                    borderRadius: "0",
                    borderWidth: "0px",
                    filter: "invert(0%)",
                  }}
                >
                  <div
                    class="card border rounded-0 shadow-sm d-xl-flex justify-content-xl-center align-items-xl-center"
                    data-bs-hover-animate="pulse"
                    style={{
                      boxShadow: "4px 4px 14px 3px rgba(158,159,166,0.7)",
                      margin: "13px",
                    }}
                  >
                    <div class="card">
                      <img
                        class="img-thumbnail img-fluid card-img w-100 d-block d-xl-flex justify-content-xl-center align-items-xl-center"
                        src={advertisements.advertiesementImage}
                        style={{
                          fontSize: "10px",
                          filter:
                            "blur(0px) brightness(100%) grayscale(0%) hue-rotate(0deg) invert(0%) saturate(100%) sepia(0%)",
                          margin: "0px",
                          padding: "0px",
                        }}
                        alt="imageCard"
                      />
                    </div>
                    <div class="card-body">
                      <h4 class="card-title" style={{ fontSize: "18px" }}>
                        {advertisements.title}
                      </h4>
                      <p class="card-text" style={{ fontSize: "12px" }}>
                        {advertisements.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
