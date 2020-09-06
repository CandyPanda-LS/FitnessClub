import React from "react";

// import "./BasicFancyGallery.css";

// import CustomerReviews from "./CustomerReviews/CustomerReviews.component";

import Background from "./img/gymbannner.jpg";

export default function HomeComponent() {
  return (
    <div>
      {/* Image Slider */}
      <section id="carousel">
        <div class="carousel slide" data-ride="carousel" id="carousel-1">
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item">
              <div class="jumbotron pulse animated hero-nature carousel-hero">
                <h1 class="hero-title">Hero Nature</h1>
                <p class="hero-subtitle">
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                  justo odio, dapibus ac facilisis in, egestas eget quam.
                </p>
                <p>
                  <a
                    class="btn btn-primary hero-button plat"
                    role="button"
                    href="#"
                  >
                    Learn more
                  </a>
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <div class="jumbotron pulse animated hero-photography carousel-hero">
                <h1 class="hero-title">Hero Photography</h1>
                <p class="hero-subtitle">
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                  justo odio, dapibus ac facilisis in, egestas eget quam.
                </p>
                <p>
                  <a
                    class="btn btn-primary hero-button plat"
                    role="button"
                    href="#"
                  >
                    Learn more
                  </a>
                </p>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="jumbotron pulse animated hero-technology carousel-hero">
                <h1 class="hero-title">Hero Technology</h1>
                <p class="hero-subtitle">
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                  justo odio, dapibus ac facilisis in, egestas eget quam.
                </p>
                <p>
                  <a
                    class="btn btn-primary hero-button plat"
                    role="button"
                    href="#"
                  >
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div>
            <a
              class="carousel-control-prev"
              href="#carousel-1"
              role="button"
              data-slide="prev"
            >
              <i class="fa fa-chevron-left"></i>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carousel-1"
              role="button"
              data-slide="next"
            >
              <i class="fa fa-chevron-right"></i>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <ol class="carousel-indicators">
            <li data-target="#carousel-1" data-slide-to="0"></li>
            <li data-target="#carousel-1" data-slide-to="1"></li>
            <li data-target="#carousel-1" data-slide-to="2" class="active"></li>
          </ol>
        </div>
      </section>
      {/* End of Image Slider */}

      {/*  Services Section */}
      <center>
        <div>
          <div class="container">
            <div class="row row-fitur">
              <div class="col-sm-4 col-md-4 waves-effect kolom-a">
                <div class="fitur-a">
                  <img
                    src="assets/img/gym%20(1).png"
                    style={{ width: "150px" }}
                  />
                </div>
                <div class="separator-fitur"></div>
                <div>
                  <h4 class="heading-fitur">Secure </h4>
                  <p class="paragraf-fitur">
                    Our 2-of-3 multi-signature wallet removes all single points
                    of failure by using 3 keys
                  </p>
                </div>
              </div>
              <div class="col-sm-4 col-md-4 waves-effect kolom-b">
                <div class="fitur-a">
                  <img src="assets/img/medal.png" style={{ width: "150px" }} />
                </div>
                <div class="separator-fitur"></div>
                <div>
                  <h4 class="heading-fitur">Simple </h4>
                  <p class="paragraf-fitur">
                    BitGo provides a simple and robust REST-ful API as well as
                    an easy to use client SDK to&nbsp;
                  </p>
                </div>
              </div>
              <div class="col-sm-4 col-md-4 waves-effect kolom-c">
                <div class="fitur-a">
                  <img src="assets/img/shield.png" style={{ width: "150px" }} />
                </div>
                <div class="separator-fitur"></div>
                <div>
                  <h4 class="heading-fitur">Powerfull </h4>
                  <p class="paragraf-fitur">
                    Our powerful, client-side SDK implements all the security
                    details needed for today's&nbsp;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
      {/* End of Services Section */}

      {/* Jumptron Section */}
      <div
        class="row clearmargin clearpadding row-image-txt"
        style={{ backgroundColor: "rgb(20,102,227)" }}
      >
        <div
          class="col-xs-12 col-sm-6 col-md-6 clearmargin clearpadding col-sm-push-6"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            height: "400px",
            backgroundPosition: "center",
          }}
        >
          <div></div>
        </div>
        <div
          class="col-xs-12 col-sm-6 col-md-6 col-sm-pull-6"
          style={{ padding: "20px", color: "#ffffff" }}
        >
          <h1>Heading</h1>
          <hr />
          <p style={{ fontFamily: "Nunito, sans-serif", color: "#ffffff" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
            lorem a lectus finibus bibendum ut sagittis diam. Nunc egestas nulla
            in elit congue, id pellentesque ex semper. Aenean euismod tellus
            tincidunt massa eleifend, a efficitur lectus ultricies. Aliquam
            bibendum et leo quis consectetur. Integer consequat consequat
            mauris, id porttitor sem feugiat eu. Proin ac neque eu nisi viverra
            mattis. Curabitur molestie lectus ac sollicitudin faucibus. Duis
            congue ipsum eget justo egestas blandit.
          </p>
          <div style={{ textAlign: "center" }}>
            <button class="btn btn-light btn-lg" type="button">
              Lorem{" "}
            </button>
          </div>
        </div>
      </div>

      {/* End of Jumptron Section */}

      {/* Image Grid */}
      <div className="container" style={{ marginTop: "30px" }}>
        <div class="row flex-box flex-wrap-wrap">
          <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
            <a
              class="fancybox"
              rel="gallery1"
              title="Hero Image Nature"
              href="assets/img/hero-background-nature.jpg"
            >
              <img
                class="img-fluid"
                src="assets/img/hero-background-nature.jpg"
              />
            </a>
          </div>
          <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
            <a
              class="fancybox"
              rel="gallery1"
              title="Hero Image Technology"
              href="assets/img/hero-background-technology.jpg"
            >
              <img
                class="img-fluid"
                src="assets/img/hero-background-technology.jpg"
              />
            </a>
          </div>
          <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
            <a
              class="fancybox"
              rel="gallery1"
              title="Hero Image Travel"
              href="assets/img/hero-background-travel.jpg"
            >
              <img
                class="img-fluid"
                src="assets/img/hero-background-travel.jpg"
              />
            </a>
          </div>
          <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
            <a
              class="fancybox"
              rel="gallery1"
              title="Hero Image Food"
              href="assets/img/hero-background-food.jpg"
            >
              <img
                class="img-fluid"
                src="assets/img/hero-background-food.jpg"
              />
            </a>
          </div>
          <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
            <a
              class="fancybox"
              rel="gallery1"
              title="Hero Image Music"
              href="assets/img/hero-background-music.jpg"
            >
              <img
                class="img-fluid"
                src="assets/img/hero-background-music.jpg"
              />
            </a>
          </div>
          <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
            <a
              class="fancybox"
              rel="gallery1"
              title="Hero Image Music"
              href="assets/img/hero-background-music.jpg"
            >
              <img
                class="img-fluid"
                src="assets/img/hero-background-music.jpg"
              />
            </a>
          </div>
        </div>
      </div>
      {/* End of Image Grid */}

      {/* Customer Feedbacks */}

      {/* <CustomerReviews /> */}

      {/* End of Customer Feedbacks */}
    </div>
  );
}
