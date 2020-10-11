/*
 *
 * @author Ayodya
 * @desc Feedback List Table
 *
 */

import React, { Component } from "react";
import axios from "axios";

export default class AddTime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feedbacks: [],
    };

    this.generatePDF = this.generatePDF.bind(this);
  }

  //fetching gym time List data from the backend
  componentDidMount() {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/feedback")
      .then(({ data }) => {
        console.log("feedbacks: " + data);
        console.log(data.length);

        if (data.length > 0) {
          this.setState({
            feedbacks: data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  generatePDF(e) {
    e.preventDefault();

    const pdfText = {
      feedbacks: this.state.feedbacks,
    };

    axios
      .post(
        process.env.REACT_APP_BACKEND_URL + "/api/pdfgenerate/generatfeedbacks",
        pdfText
      )
      .then(() => {
        alert("PDF Generated Successful");
      })
      .catch((err) => console.log(err.message));
  }

  displayFunction() {
    //return a single Instructor component for each and every array Element
    return this.state.feedbacks.map((currentFeedback) => {
      return (
        <tr>
          <td>{currentFeedback._id}</td>
          <td>{currentFeedback.GymAppearance}</td>
          <td>{currentFeedback.ActivitiesQuality}</td>
          <td>{currentFeedback.QualityOfStaff}</td>
          <td>{currentFeedback.Overall}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <div>
          <hr />
          <h3>Feedbacks</h3>
          <br />
          <button className="btn btn-primary" onClick={this.generatePDF}>
            Generate Report
          </button>
          <br />
          <br />
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Feedback ID</th>
                <th>Gym Appearance</th>
                <th>Quality of Activities</th>
                <th>Quality Of Staff</th>
                <th>Overall Satisfaction</th>
              </tr>
            </thead>

            <tbody>{this.displayFunction()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
