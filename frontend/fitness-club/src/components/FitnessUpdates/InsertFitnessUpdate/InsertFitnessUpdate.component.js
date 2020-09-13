import React, { useState } from 'react';
import axios from 'axios';
import './InsertFitnessUpdate.css';

import Background from './img/fitnessupdate.jpg';
import Progress from './Progress';

export default function InsertFitnessUpdate() {
  const [topic, settopic] = useState();
  const [description, setdescription] = useState();
  const [link, setlink] = useState();
  const [file, setFile] = useState();
  const [uploadPercentage, setuploadPercentage] = useState(0);

  function onFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append('topic', topic);
    formData.append('description', description);
    formData.append('link', link);
    formData.append('file', file);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
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
      .post('http://localhost:5000/api/fitnessUpdate', formData, config)
      .then((res) => {
        //window.location = '/FitnessUpdatesTable';
        console.log(formData);
      })
      .catch((error) => {
        console.log(error.message);
        console.log(formData);
      });
  }

  return (
    <div class='container'>
      <div class='row justify-content-center'>
        <div class='col-md-9 col-lg-12 col-xl-10'>
          <div
            class='card  o-hidden border-0 my-5'
            style={{
              // border: "2px solid blue",
              borderRadius: '20px',
              boxShadow: '10px 7px 10px rgba(110, 107, 107, 0.548)',
            }}
          >
            <div class='card-body p-0'>
              <div class='row'>
                <div class='col-lg-6 d-none d-lg-flex'>
                  <div
                    class='flex-grow-1 bg-login-image'
                    style={{
                      backgroundImage: `url(${Background})`,
                      backgroundRepeat:
                        'no-repeat' /* Do not repeat the image */,
                      backgroundSize: 'cover',
                    }}
                  >
                    {' '}
                  </div>
                </div>
                <div class='col-lg-6'>
                  <div class='p-5'>
                    <div class='text-center'>
                      <h4 class='text-dark mb-4'>Add Fitness Update</h4>
                    </div>
                    <form class='user'>
                      <div class='form-group'>
                        <input
                          class='form-control form-control-user'
                          type='text'
                          id='topic'
                          placeholder='Enter Topic...'
                          name='topic'
                          onChange={(e) => {
                            settopic(e.target.value);
                          }}
                        />
                      </div>

                      <div class='form-group'>
                        <textarea
                          class='form-control form-control-user'
                          type='text'
                          style={{ borderRadius: '20px' }}
                          id='description'
                          placeholder='Enter  Description...'
                          name='description'
                          onChange={(e) => {
                            setdescription(e.target.value);
                          }}
                        />
                      </div>

                      <div class='form-group'>
                        <input
                          class='form-control form-control-user'
                          type='text'
                          id='link'
                          placeholder='Enter Link...'
                          name='link'
                          onChange={(e) => {
                            setlink(e.target.value);
                          }}
                        />
                      </div>

                      <div class='form-group'>
                        <input
                          style={{ padding: '2px' }}
                          class='form-control form-control-user'
                          type='file'
                          id='image'
                          placeholder='Enter Link...'
                          name='image'
                          onChange={(e) => {
                            setFile(e.target.files[0]);
                          }}
                        />
                      </div>
                      <Progress percentage={uploadPercentage} />
                      <br />
                      <div class='form-group'>
                        <button
                          class='btn btn-primary btn-block text-white btn-user'
                          type='submit'
                        >
                          Add Post
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
