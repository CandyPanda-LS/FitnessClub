import React from "react";


export default function HomeComponent() {
  return (
    <div>
      {/* Image Slider */}
      <section id="carousel">
        <div class="carousel slide" data-ride="carousel" id="carousel-1">
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item">
              <div class="jumbotron pulse animated hero-nature carousel-hero">
                <h1 class="hero-title">Online Store</h1>
                <p class="hero-subtitle">
                  For each of those gym lovers out there, are you tired of visiting stores for sports wear?Then here is the solution...
                </p>
                <p>
                  <a
                    class="btn btn-primary hero-button plat"
                    role="button"
                    href="/shop"
                  >
                    Learn more
                  </a>
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <div class="jumbotron pulse animated hero-photography carousel-hero">
                <h1 class="hero-title">Packages</h1>
                <p class="hero-subtitle">
                Packages are the best bet if you’re still experimenting or if life is a bit too complicated right now for you to commit. 
                </p>
                <p>
                  <a
                    class="btn btn-primary hero-button plat"
                    role="button"
                    href="/Packages"
                  >
                    Learn more
                  </a>
                </p>
              </div>
            </div>
            <div class="carousel-item active">
              <div class="jumbotron pulse animated hero-technology carousel-hero">
                <h1 class="hero-title">About Us</h1>
                <p class="hero-subtitle">
                Providing a quality healthcare service and giving our members control 
                over their health is paramount at Fitness Club.
                </p>
                <p>
                  <a
                    class="btn btn-primary hero-button plat"
                    role="button"
                    href="/"
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
                    alt="imageHome"
                  />
                </div>
                <div class="separator-fitur"></div>
                <div>
                  <h4 class="heading-fitur">New Equipment </h4>
                  <p class="paragraf-fitur">
                  New Equipment Digest delivers the latest industrial product information, market trends and
                   manufacturing news to print and digital readers in tens-of-thousands of facilities
                  </p>
                </div>
              </div>
              <div class="col-sm-4 col-md-4 waves-effect kolom-b">
                <div class="fitur-a">
                  <img
                    src="assets/img/dumbell.png"
                    style={{ width: "150px" }}
                    alt="imageHome"
                  />
                </div>
                <div class="separator-fitur"></div>
                <div>
                  <h4 class="heading-fitur">Personalized Free Workouts </h4>
                  <p class="paragraf-fitur">
                  Trainers also measure their client’s strengths and weaknesses with fitness assessments. 
                  These fitness assessments may also be performed before and after an exercise program. 
                  Each member will get personalized workouts
                  </p>
                </div>
              </div>
              <div class="col-sm-4 col-md-4 waves-effect kolom-c">
                <div class="fitur-a">
                  <img
                    src="assets/img/heart.png"
                    style={{ width: "150px" }}
                    alt="imageHome"
                  />
                </div>
                <div class="separator-fitur"></div>
                <div>
                  <h4 class="heading-fitur">Fully Passion </h4>
                  <p class="paragraf-fitur">
                  Instructors at Fitness Club are qualified and trained.
                   Our #1 goal as a team is to help you reach your fitness goals while providing you with the most effective.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
      {/* End of Services Section */}

      {/* Jumptron Section */}
      {/* <div
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
      </div> */}

      {/* End of Jumptron Section */}

      {/* Image Grid */}
      <center>
        <h3>Meet Your Tribe</h3>
        <h1>#TougherTogether</h1>
      </center>
      <div className="container" style={{ marginTop: "30px" }}>
        <div class="row flex-box flex-wrap-wrap">
          <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
            <a
              class="fancybox"
              rel="gallery1"
              title="Hero Image Nature"
              href="assets/img/people1.jpeg"
            >
              <img
                class="img-fluid"
                src="assets/img/people1.jpeg"
                alt="imageHome"
              />
            </a>
          </div>
          <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
            <a
              class="fancybox"
              rel="gallery1"
              title="Hero Image Technology"
              href="assets/img/people2.jpeg"
            >
              <img
                class="img-fluid"
                src="assets/img/people2.jpeg"
                alt="imageHome"
              />
            </a>
          </div>
          <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
            <a
              class="fancybox"
              rel="gallery1"
              title="Hero Image Travel"
              href="assets/img/people3.jpeg"
              alt="imageHome"
            >
              <img
                class="img-fluid"
                src="assets/img/people3.jpeg"
                alt="imageHome"
              />
            </a>
          </div>
          <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
            <a
              class="fancybox"
              rel="gallery1"
              title="Hero Image Food"
              href="assets/img/people4.jpeg"
            >
              <img
                class="img-fluid"
                src="assets/img/people4.jpeg"
                alt="imageHome"
              />
            </a>
          </div>
          <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
            <a
              class="fancybox"
              rel="gallery1"
              title="Hero Image Music"
              href="assets/img/people5.jpeg"
            >
              <img
                class="img-fluid"
                src="assets/img/people5.jpeg"
                alt="imageHome"
              />
            </a>
          </div>
          <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
            <a
              class="fancybox"
              rel="gallery1"
              title="Hero Image Music"
              href="assets/img/people6.jpeg"
            >
              <img
                class="img-fluid"
                src="assets/img/people6.jpeg"
                alt="imageHome"
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
