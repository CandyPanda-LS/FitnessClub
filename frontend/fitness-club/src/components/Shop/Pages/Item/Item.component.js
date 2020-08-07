import React, {Component} from 'react';
import axios from "axios";


export default class Item extends Component{

    constructor(props) {
        super(props);

        this.state = {ItemsName: "", ItemPrice: 0, ItemDescription: "", ItemColor: ["", "", ""], };

    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/ShopItems/"+ this.props.match.params.id)
            .then((response) => {
                this.setState({
                    ItemsName:response.data.ItemName,
                    ItemPrice:response.data.ItemPrice,
                    ItemDescription: response.data.ItemDescriprion,
                    ItemColor: response.data.ItemColors,

                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {

        return(
            <div>
                <div class="card shadow-lg" style={{width: "1000px",margin: "150px",height: "555px",marginTop: "50px",borderRadius: "25px"}}>
                    <div class="card-body" style={{background: "linear-gradient(90deg, #ffffff 0%, #0e4d6f 100%);border-radius: 31px"}}>
                        <div class="row" style={{marginTop: "0px"}}>
                                <div class="col"><img data-bs-hover-animate="pulse" src="./assets/img/shoes/1.png" style={{width: "600px", height: " 600px", margin: " 0px", marginTop: " -42px", marginLeft: "-95px"}}/></div>
                                    <div class="col">
                            <div class="card" style={{width: "401px", marginLeft: "34px", marginTop: "41px", height: "364px", borderRadius: "53px", backgroundColor: "rgba(14,77,111,0)", borderStyle: "none", fontFamily: "Akronim, cursive"}}>
                                <div class="card-body" style={{height: "429px"}}>
                                            <h1 style={{textAlign: "center", color: "#ffffff", fontWeight: "bold", fontFamily: " Alata, sans-serif", fontSize: "40px"}}>ADIDAS ULRABOOT DNA</h1>
                                            <h1 style={{marginTop: "6px", marginLeft: "48px", fontFamily: " Alata, sans-serif", fontSize: "29px", color: "rgb(255,255,255)", fontWeight: "bold"}}>Rs.2000.00</h1>
                                        </div>
                                        </div>
                                        <button class="btn btn-primary" type="button" style={{marginTop: "46px", marginRight: "0px", marginLeft: "137px", width: "211px", height: "53px", backgroundColor: "#0e4d6f"}}>Button</button>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
