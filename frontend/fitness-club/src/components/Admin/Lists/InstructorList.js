import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Instructor = (props) => (
  <tr>
    <td>{props.instructor.instructorID}</td>
    <td>{props.instructor.name}</td>
    <td>{props.instructor.dob.substring(0, 10)}</td>
    <td>{props.instructor.gender}</td>
    <td>{props.instructor.address}</td>
    <td>{props.instructor.phone}</td>
    <td>{props.instructor.email}</td>
    <td>
      <Link to={"/update/" + props.instructor._id}>Edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteInstructor(props.instructor._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

export default class InstructorList extends Component {
  constructor(props) {
    super(props);

    this.deleteInstructor = this.deleteInstructor.bind(this);

    this.state = { instructors: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/instructors/")
      .then((response) => {
        this.setState({ instructors: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteInstructor(id) {
    axios
      .delete("http://localhost:5000/api/instructors/" + id)
      .then((response) => {
        console.log(response.data);
      });

    this.setState({
      instructors: this.state.instructors.filter((el) => el._id !== id),
    });
  }

  instructorList() {
    //return a single Instructor component for each and every array Element
    return this.state.instructors.map((currentinstructor) => {
      return (
        <Instructor
          instructor={currentinstructor}
          deleteInstructor={this.deleteInstructor}
          key={currentinstructor._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Instructor List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Instructor ID</th>
              <th>Name</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.instructorList()}</tbody>
        </table>
      </div>
    );
  }
}
