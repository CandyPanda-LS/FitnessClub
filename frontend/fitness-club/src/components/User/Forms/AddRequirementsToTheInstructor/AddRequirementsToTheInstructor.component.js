import React from "react";

import "./AddRequirementsToTheInstructor.css";

import Background from "./img/gymbannner.jpg";

const AddRequirementsToTheInstructor = () => {
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
                    style={{ backgroundImage: `url(${Background})` }}
                  >
                    {" "}
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h4 class="text-dark mb-4">Add Your Requirement</h4>
                    </div>
                    <form class="user">
                      <div class="form-group">
                        <input
                          class="form-control form-control-user"
                          type="number"
                          id="exampleInputEmail"
                          placeholder="Enter Weight..."
                          name="Weight"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          class="form-control form-control-user"
                          type="number"
                          id="exampleInputEmail"
                          placeholder="Enter Height..."
                          name="Height"
                        />
                      </div>
                      <div class="form-group">
                        <textarea
                          class="form-control form-control-user"
                          type="text"
                          style={{ borderRadius: "20px" }}
                          placeholder="Enter Your Requirement..."
                          name="Requirement"
                        />
                      </div>
                      <div class="form-group">
                        <button
                          class="btn btn-primary btn-block text-white btn-user"
                          type="submit"
                        >
                          Request
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

    // <div style={{ textAlign: "center" }}>
    //   <Paper elevation={3}>
    //     <FormControl className="form1">
    //       <TextField
    //         id="filled-basic"
    //         className="formInputs"
    //         label="Add Weight"
    //         variant="outlined"
    //       />
    //       <TextField
    //         id="filled-basic"
    //         className="formInputs"
    //         label="Add Height"
    //         variant="outlined"
    //       />
    //       <TextField
    //         id="outlined-multiline-static"
    //         label="Multiline"
    //         multiline
    //         rows={4}
    //         defaultValue="Default Value"
    //         variant="outlined"
    //       />

    //       <Button className="formInputs" variant="outlined" color="primary">
    //         Request
    //       </Button>
    //     </FormControl>
    //   </Paper>
    // </div>
  );
};

export default AddRequirementsToTheInstructor;
