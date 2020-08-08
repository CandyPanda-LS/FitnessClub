import React, {Component} from 'react';
import axios from "axios";

// material ui packages for the text feild
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//material ui packages for the +,- button
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
//end

// text feild styling
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        },
        color:"#ffffff"
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
      }
  }));
// text feild styling close


export default class Item extends Component{

    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.substractItem = this.substractItem.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);

        this.state = {ItemsName: "", ItemPrice: 0, ItemDescription: "", ItemColor: ["", "", ""], ItemSize:0 };

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

    // quantity changing functions

    addItem() {
        if (this.state.ItemSize<=10) {
            this.setState({
                ItemSize: ++this.state.ItemSize,
            });
        }
    }

    substractItem() {
        if (this.state.ItemSize>=0) {
            this.setState({
                ItemSize: --this.state.ItemSize,
            });
        }
    }

    onChangeQuantity(e) {
        if (this.state.ItemSize>=0 && this.state.ItemSize<=10) {
            this.setState({
                ItemSize: e.target.value,
              });
        }
    }

    // quantity changing functions end

    render() {

        return(
            <div>
                <div class="card shadow-lg" style={{width: "950px",margin: "150px",height: "555px",marginTop: "50px",borderRadius: "25px",backgroundImage: "linear-gradient(to right, #ffffff , steelblue,darkslategray)"}}>
                    <div class="card-body" style={{background: "linear-gradient(90deg, #ffffff 0%, #0e4d6f 100%);border-radius: 31px"}}>
                        <div class="row" style={{marginTop: "0px"}}>
                                <div class="col"><img data-bs-hover-animate="pulse" src="./assets/img/shoes/1.png" style={{width: "600px", height: " 600px", margin: " 0px", marginTop: " -42px", marginLeft: "-95px"}}/></div>
                                    <div class="col">
                                    <div class="card" style={{width: "401px", marginLeft: "34px", marginTop: "41px", height: "364px", borderRadius: "53px", backgroundColor: "rgba(14,77,111,0)", borderStyle: "none", fontFamily: "Akronim, cursive"}}>
                                        <div class="card-body" style={{height: "429px"}}>
                                        <h1 style={{textAlign: "center", color: "#ffffff", fontWeight: "bold", fontFamily: " Alata, sans-serif", fontSize: "40px"}}>ADIDAS ULRABOOT DNA</h1>
                                        <br />
                                        <br />
                                        <br/>
                                        <TextField id="outlined-basic" label="Quantity" variant="outlined" style={{color:"red"}}/>
                                        <div class="row" style={{marginTop: "0px"}}>
                                            <div class="col">
                                                <Fab color="primary" aria-label="add" size="small" onClick ={this.substractItem}>
                                                <RemoveIcon/>
                                                </Fab>
                                                <TextField id="outlined-basic" variant="outlined" value={this.state.ItemSize} onChange={this.onChangeQuantity}/>
                                                <Fab color="primary" size="small" aria-label="add" onClick ={this.addItem}>
                                                <AddIcon />
                                                </Fab>
                                            </div>
                                        </div>
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
