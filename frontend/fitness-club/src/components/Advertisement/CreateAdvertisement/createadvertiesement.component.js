import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

import Background from './image/gymbanner.jpg';

import Progress from './Progress';

export default function createadvertiesement() {
  const [Title, setTitle] = useState();
  const [Description, setDescription] = useState();
  const [file, setFile] = useState();
  const [filename, setFilename] = useState('Choose File');
  const [uploadPercentage, setuploadPercentage] = useState(0);

  function onChangeFile(e) {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  }

  function onFormSubmit(e) {
    e.preventDefault();
    setError('Item Added');
    const formData = new FormData();

    formData.append('Title', Title);
    formData.append('Description', Description);
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
      .post('http://localhost:5000/api/advertisement/create', formData, config)
      .then((res) => {
        setError('Advertisement Added');
        window.location = '/';
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <div>
      <div class='container'>
        <div class='card shadow-lg o-hidden border-0 my-5'>
          <div class='card-body p-0'>
            <div class='row'>
              <div class='col-lg-5 d-none d-lg-flex'>
                <div
                  class='flex-grow-1 bg-login-image'
                  style={{
                    // border: "2px solid blue",
                    backgroundImage: `url(${Background})`,
                    backgroundRepeat: 'no-repeat' /* Do not repeat the image*/,
                    backgroundSize: 'cover',
                    boxShadow: '10px 7px 10px rgba(110, 107, 107, 0.548)',
                    boxShadow: '10px 7px 10px rgba(110, 107, 107, 0.548)',
                  }}
                ></div>{' '}
              </div>
              <div class='col-lg-7'>
                <div class='p-5'>
                  <div class='text-center'>
                    <h4 class='text-dark mb-4'>Create an Advertisement</h4>
                  </div>
                  <form class='user'>
                    <div class='form-group row'>
                      <div class='col-sm-6 mb-3 mb-sm-0'>
                        <input
                          class='form-control form-control-user'
                          type='text'
                          id='title'
                          placeholder='Title'
                          name='title'
                          onChange={(e) => setTitle(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div class='form-group row'>
                      <div class='col-sm-6'>
                        <input
                          class='form-control form-control-user'
                          type='text'
                          id='description'
                          placeholder='Description'
                          name='description'
                          onChange={(e) => setDescription(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div class='form-group row'>
                      <div class='col-sm-6 mb-3 mb-sm-0'>
                        <input
                          class='form-control form-control-user'
                          type='file'
                          id='ItemImage'
                          placeholder='Image'
                          name='image'
                          onChange={onChangeFile}
                          required
                        />

                        <label
                          className='custom-file-label'
                          htmlFor='ItemImage'
                        >
                          {filename}
                        </label>
                      </div>
                    </div>

                    <Progress percentage={uploadPercentage} />

                    <button
                      class='btn btn-primary btn-block text-white btn-user'
                      id='signup'
                      name='signup'
                      type='submit'
                      onClick={onFormSubmit}
                    >
                      Create
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
