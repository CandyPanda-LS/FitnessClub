import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Assigninstructorform(props) {
  const [userID, setUserId] = useState();
  const [profileID, setProfileID] = useState();
  const [userName, setUserName] = useState();
  const [instructor, setInstructor] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/profile/user/" + props.match.params.id)
      .then((res) => {
        console.log(res.data);
        setProfileID(res.data._id);
        setUserId(res.data.user._id);
        setUserName(res.data.user.firstName + " " + res.data.user.lastName);
      });
  }, []);

  function submitHandler(e) {
    e.preventDefault();

    const AssignInstructor = {
      userid: profileID,
      instructorid: instructor,
    };

    axios
      .post(
        "http://localhost:5000/api/profile/assigninstructor",
        AssignInstructor
      )
      .then(() => {
        alert("Successfuly Assigned");
      })
      .catch((err) => {
        alert(err);
      });
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div class="form-group">
          <label for="userID">User ID</label>
          <input
            type="text"
            class="form-control"
            id="userID"
            value={userID}
            readOnly
          />
        </div>
        <div class="form-group">
          <label for="userID">Profile ID</label>
          <input
            type="text"
            class="form-control"
            id="userID"
            value={profileID}
            readOnly
          />
        </div>
        <div class="form-group">
          <label for="customerName">Customer Name</label>
          <input
            type="text"
            class="form-control"
            id="customerName"
            value={userName}
            readOnly
          />
        </div>

        <div class="form-group">
          <label for="InstructorID">Instructor ID</label>
          <input
            type="text"
            class="form-control"
            id="InstructorID"
            placeholder="Instructor ID"
            onChange={(e) => {
              setInstructor(e.target.value);
            }}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Assign Instructor
        </button>
      </form>
    </div>
  );
}
