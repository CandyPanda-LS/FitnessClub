import React, { Component } from 'react';

import Background from './image/3584.jpg';

export default class AdvertisementComponent extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${Background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div class='container'>
            <div
              class='row justify-content-center'
              style={{
                filter: 'blur(0px)',
                backgroundColor: 'rgba(255,0,0,0)',
                borderRadius: '0px',
                borderWidth: '5px',
                borderBottom: '0px solid rgb(255,255,255)',
              }}
            >
              <div
                class='col-sm-4 col-md-7 col-lg-7 col-xl-7 offset-xl-0'
                style={{
                  margin: '15px',
                  borderRadius: '0',
                  borderWidth: '0px',
                  filter: 'invert(0%)',
                }}
              >
                <div
                  class='card border rounded-0 shadow-sm d-xl-flex justify-content-xl-center align-items-xl-center'
                  data-bs-hover-animate='pulse'
                  style={{
                    boxShadow: '4px 4px 14px 3px rgba(158,159,166,0.7)',
                    margin: '13px',
                  }}
                >
                  <div class='card'>
                    <img
                      class='img-thumbnail img-fluid card-img w-100 d-block d-xl-flex justify-content-xl-center align-items-xl-center'
                      src='assets/img/dogs/medic%20bell.jpg'
                      style={{
                        fontSize: '10px',
                        filter:
                          'blur(0px) brightness(100%) grayscale(0%) hue-rotate(0deg) invert(0%) saturate(100%) sepia(0%)',
                        margin: '0px',
                        padding: '0px',
                      }}
                    />
                  </div>
                  <div class='card-body'>
                    <h4 class='card-title' style={{ fontSize: '18px' }}>
                      Title
                    </h4>
                    <p class='card-text' style={{ fontSize: '12px' }}>
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                      Cras justo odio, dapibus ac facilisis in, egestas eget
                      quam. Donec id elit non mi porta gravida at eget metus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
