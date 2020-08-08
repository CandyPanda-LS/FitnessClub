import React, { Component } from "react";

import "./ArticleList.css";

export default class ArticleList extends Component {
  render() {
    return (
      <div>
        <div class="row">
          {/* ArticleList Column */}
          <div class="col-md-12 articleColumn">
            <div class="card" style={{ margin: "5px" }}>
              <div
                class="card-body"
                style={{
                  borderRadius: "10px",
                  boxShadow: "1px 2px 6px rgb(146,146,147)",
                }}
              >
                <div class="row">
                  <div class="col-md-3" style={{ padding: "30px" }}>
                    <div
                      class="card"
                      style={{ borderColor: "rgb(244,244,244)" }}
                    >
                      <img
                        class="img-fluid card-img w-100 d-block"
                        src="assets/img/post1.jpg"
                      />
                    </div>
                  </div>
                  <div class="col-md-9" style={{ padding: "20px 10px" }}>
                    <h4>
                      What Hiroshima teaches us about coronavirus and the future
                      of humanity
                      <br />
                    </h4>
                    <p>
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                      Cras justo odio, dapibus ac facilisis in, egestas eget
                      quam. Donec id elit non mi porta gravida at eget metus.
                    </p>
                    <a href="#">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End ArticleList Column */}
          {/* ArticleList Column */}
          <div class="col-md-12 articleColumn">
            <div class="card" style={{ margin: "5px" }}>
              <div
                class="card-body"
                style={{
                  borderRadius: "10px",
                  boxShadow: "1px 2px 6px rgb(146,146,147)",
                }}
              >
                <div class="row">
                  <div class="col-md-3" style={{ padding: "30px" }}>
                    <div
                      class="card"
                      style={{ borderColor: "rgb(244,244,244)" }}
                    >
                      <img
                        class="img-fluid card-img w-100 d-block"
                        src="assets/img/post1.jpg"
                      />
                    </div>
                  </div>
                  <div class="col-md-9" style={{ padding: "20px 10px" }}>
                    <h4>
                      What Hiroshima teaches us about coronavirus and the future
                      of humanity
                      <br />
                    </h4>
                    <p>
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                      Cras justo odio, dapibus ac facilisis in, egestas eget
                      quam. Donec id elit non mi porta gravida at eget metus.
                    </p>
                    <a href="#">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End ArticleList Column */}
          {/* ArticleList Column */}
          <div class="col-md-12 articleColumn">
            <div class="card" style={{ margin: "5px" }}>
              <div
                class="card-body"
                style={{
                  borderRadius: "10px",
                  boxShadow: "1px 2px 6px rgb(146,146,147)",
                }}
              >
                <div class="row">
                  <div class="col-md-3" style={{ padding: "30px" }}>
                    <div
                      class="card"
                      style={{ borderColor: "rgb(244,244,244)" }}
                    >
                      <img
                        class="img-fluid card-img w-100 d-block"
                        src="assets/img/post1.jpg"
                      />
                    </div>
                  </div>
                  <div class="col-md-9" style={{ padding: "20px 10px" }}>
                    <h4>
                      What Hiroshima teaches us about coronavirus and the future
                      of humanity
                      <br />
                    </h4>
                    <p>
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                      Cras justo odio, dapibus ac facilisis in, egestas eget
                      quam. Donec id elit non mi porta gravida at eget metus.
                    </p>
                    <a href="#">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End ArticleList Column */}
        </div>
      </div>
    );
  }
}
