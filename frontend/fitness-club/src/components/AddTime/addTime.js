import React, { Component } from "react";
import axios from 'axios';


export default class AddTime extends Component{

    constructor(props){
        super(props);

        this.state = {
            date: "",
            inTime: "",
            outTime: "",
        };

        this.addTime = this.addTime.bind(this);

    }


    addTime(e){
        e.preventDefault();
        // const config = {
        //     headers: {
        //       "x-auth-token": localStorage.getItem("x-auth-token"),
        //     },
        //   };
  
        const time = {
            inTime:this.state.inTime,
            outTime:this.state.outTime,
            date:this.state.date
        }

        console.log(time);

           axios.post(process.env.REACT_APP_BACKEND_URL + "/api/addTime",time)
          .then((response) => {
              this.setState({
                  inTime:"",
                  outTime:"",
                  date:""
              })
          })
          .catch((error) => {
            console.log(error);
            alert(error);
          });

          window.location = "/addTime";
  
    }

    render(){
        return(
            <div>
   <form class="time" onSubmit={this.onFormSubmit}>

<div class="form-row">
<div class="col">
        <div class="form-group">
          <label for="inTime">
            <strong>Date</strong>
          </label>
          <input
            class="form-control"
            type="text"
            placeholder="Date"
           // value={this.state.date}
            name="date"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="inTime">
            <strong>In Time</strong>
          </label>
          <input
            class="form-control"
            type="text"
            placeholder="In Time"
           // value={this.state.inTime}
            name="inTime"
          />
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="outTime">
            <strong> Out Time</strong>
          </label>
          <input
            class="form-control"
            type="outTime"
            placeholder="Out Time"
           // value={this.state.outTime}
            name="outTime"
          />
        </div>
      </div>        
    </div>
    <center>
        <div class="mb-3">
        <button
        class="btn btn-primary btn-sm"
        type="button"
        onClick={this.generateReport}
        >
        Generate Report
        </button>{" "}
        <button
        class="btn btn-primary btn-sm"
        type="button"
        onClick={this.addTime}
        >
        Add
        </button>                   
        </div>
        </center>
        </form>
            
            </div>
                )
            }
}