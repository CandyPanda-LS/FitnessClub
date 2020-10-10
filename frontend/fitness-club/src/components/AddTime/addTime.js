import React, { Component } from "react";
import axios from 'axios';


export default class AddTime extends Component{

    constructor(props){
        super(props);

        this.state = {
            date: "",
            inTime: "",
            outTime: "",
            gymTime : []
        };

        this.addTime = this.addTime.bind(this);
        this.generatePDF =this.generatePDF.bind(this);

    }

    //fetching gym time List data from the backend
    componentDidMount(){
      const config = {
        headers: {
          "x-auth-token": localStorage.getItem("x-auth-token"),
        },
      };
      axios
      .get(process.env.REACT_APP_BACKEND_URL + "/api/profile/me", config)
      .then(({ data }) => {
        console.log("gymTimeList: " + data.time);
        console.log(data.time.length);

        if (data.time.length > 0) {
          this.setState({
            gymTime:data.time
          })
         
        }
      })
      .catch((error) => {
        console.log(error);
      });

    }


     generatePDF(e) {

      e.preventDefault();

      const pdfText = {
        gymTime: this.state.gymTime,
      };
  
      axios
        .post(
          process.env.REACT_APP_BACKEND_URL +
            "/api/pdfgenerate/generateusergymtime",
          pdfText
        )
        .then(() => {
          alert("PDF Generated Successful");
        })
        .catch((err) => console.log(err.message));
    }





    addTime(e){
        e.preventDefault();
        const config = {
            headers: {
              "x-auth-token": localStorage.getItem("x-auth-token"),
            },
          };
  
        const time = {
         
            inTime:this.state.inTime,
            outTime:this.state.outTime,
            date:this.state.date
        }

          axios.put(process.env.REACT_APP_BACKEND_URL + "/api/time/addgymusertime",time,config)
          .then((response) => {

              alert("Gym Time Added");
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
   <form class="time">

<div class="form-row">
<div class="col">
        <div class="form-group">
          <label for="inTime">
            <strong>Date</strong>
          </label>
          <input
            class="form-control"
            type="date"
            placeholder="Date"
           // value={this.state.date}
            name="date"
            onChange = {(e)=>{
              this.setState({
                date:e.target.value
              })
            }}
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
            type="time"
            placeholder="In Time"
           // value={this.state.inTime}
            name="inTime"
            onChange = {(e)=>{
              this.setState({
                inTime:e.target.value
              })
            }}
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
            type="time"
            placeholder="Out Time"
           value={this.state.outTime}
           onChange = {(e)=>{
            this.setState({
              outTime:e.target.value
            })
          }}
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
        onClick={this.generatePDF}
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