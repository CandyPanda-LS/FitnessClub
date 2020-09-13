    import React, { useState, useEffect } from "react";
    import axios from "axios";
    import { FormControl, TextField, Button } from "@material-ui/core";
    import { makeStyles } from "@material-ui/core/styles";
    import Progress from "./Progress";

    const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(3),
        minWidth: 150,
    },
    inputControl: {
        margin: theme.spacing(1),
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    }));

    export default function EcommerceUpdateitem(props) {
    const classes = useStyles();

    const [ItemName, setItemName] = useState(null);
    const [ItemPrice, setItemPrice] = useState(null);
    const [ItemDescriprion, setItemDescriprion] = useState(null);
    const [ItemImage, setItemImage] = useState(null);
    const [file, setFile] = useState();
    const [uploadPercentage, setuploadPercentage] = useState(0);


    useEffect(()=>{


        console.log("item id is : " +props.match.params.id);
        axios
        .get("http://localhost:5000/api/shop/" +props.match.params.id)
        .then((response) => {

            console.log("item id" + response.data._id);
            console.log("item name" + response.data.ItemName);
            console.log("item price" + response.data.ItemPrice);
            console.log("item descriprion" + response.data.ItemDescriprion);
            console.log("item image" + response.data.ItemImage);

            setItemName(response.data.ItemName);
            setItemPrice(response.data.ItemPrice);
            setItemDescriprion(response.data.ItemDescriprion);
            setItemImage(response.data.ItemImage);

        })
        .catch((error) => {
            console.log("No Item");
        });


    },[])

    function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData();

        formData.append("ItemName", ItemName);
        formData.append("ItemPrice", ItemPrice);
        formData.append("ItemDescriprion", ItemDescriprion);
        formData.append("file", file);

        const config = {
        headers: {
            "content-type": "multipart/form-data",
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
        .post("http://localhost:5000/api/shop/updateItem/" + props.match.params.id, formData, config)
        .then((res) => {
            alert("Item Updated");
        })
        .catch((error) => {
            alert(error);
        });
    }

    function onChangeFile(e) {
        setFile(e.target.files[0]);
    }

    return (
        <>
        <div
            class="card"
            style={{
            margin: "100px",
            borderRadius: "43px",
            backgroundColor: "#73a8f0",
            }}
        >
            <div
            class="card-body"
            style={{ backgroundColor: "rgba(115,168,240,0)", padding: "65px" }}
            >
            <div class="row">
                <div class="col">
                <div class="card" style={{ borderRadius: "78px" }}>
                    <img
                    class="card-img w-100 d-block"
                    src="/assets/img/shoes/1.png"
                    alt="imageInsetitems"
                    />
                </div>
                </div>
                <div class="col">
                <div class="card" style={{ borderRadius: "70px" }}>
                    <div class="card-body">
                    <FormControl className={classes.formControl}>
                        <TextField
                        className={classes.inputControl}

                        onChange={(e) => setItemName(e.target.value)}
                        variant="outlined"
                        style={{
                            minWidth: "250px",
                            maxWidth: "275px",
                                            }}

                        value = {ItemName}
                        />

                        <TextField
                        className={classes.inputControl}

                        onChange={(e) => setItemPrice(e.target.value)}
                        variant="outlined"
                        value = {ItemPrice}

                                        />

                        <TextField
                        id="filled-multiline-flexible"
                        className={classes.inputControl}

                        multiline
                        rowsMax={4}
                        onChange={(e) => setItemDescriprion(e.target.value)}
                                            variant="outlined"
                                            value = {ItemDescriprion}
                        />

                        <TextField
                        type="file"
                        onChange={onChangeFile}
                                            variant="outlined"
                        />
                        <br />
                        <Progress percentage={uploadPercentage} />
                        <br />
                        <Button
                        onClick={onSubmit}
                        variant="contained"
                        style={{
                            backgroundColor: "#263238",
                            color: "white",
                        }}
                        >
                        Update
                        </Button>
                    </FormControl>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        <br />
        </>
    );
    }
