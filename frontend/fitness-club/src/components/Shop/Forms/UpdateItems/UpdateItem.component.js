import React, { useState, useEffect } from "react";
import axios from "axios";
import { storage } from "../../../../firebase";
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
  const [imageURL, setImageURL] = useState(null);
  const [uploadPercentage, setuploadPercentage] = useState(0);

  useEffect(() => {
    console.log("item id is : " + props.match.params.id);
    axios
      .get("http://localhost:5000/api/shop/" + props.match.params.id)
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
        setImageURL(response.data.ItemImage);
      })
      .catch((error) => {
        console.log("No Item");
      });
  }, []);

  function uploadImage(e) {
    e.preventDefault();

    if (file !== null) {
      const uploadTask = storage.ref(`shoping/${file.name}`).put(file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          //progress function
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setuploadPercentage(progress);
        },
        (error) => {
          //error function
          console.log(error);
        },
        () => {
          //complete function
          storage
            .ref("shoping")
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              setImageURL(url);
            });
        }
      );
    } else {
      alert("First You Must Select An Image");
    }
  }

  function onSubmit(e) {
    e.preventDefault();

    if (ItemName == null) {
      alert("Item Name Required");
      return false;
    }
    if (ItemPrice == null) {
      alert("Item Price Required");
      return false;
    }
    if (ItemDescriprion == null) {
      alert("Item Description Required");
      return false;
    }
    if (imageURL == null) {
      alert("Item Image Required");
      return false;
    }

    const formData = {
      ItemName: ItemName,
      ItemPrice: ItemPrice,
      ItemDescriprion: ItemDescriprion,
      ItemImage: imageURL,
    };

    axios
      .post(
        "http://localhost:5000/api/shop/updateItem/" + props.match.params.id,
        formData
      )
      .then((res) => {
        alert("Item Updated");
      })
      .catch((error) => {
        alert(error);
      });
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
                  class="card-img  d-block"
                  src={imageURL}
                  width="300px"
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
                      value={ItemName}
                    />

                    <TextField
                      className={classes.inputControl}
                      onChange={(e) => setItemPrice(e.target.value)}
                      variant="outlined"
                      value={ItemPrice}
                    />

                    <TextField
                      id="filled-multiline-flexible"
                      className={classes.inputControl}
                      multiline
                      rowsMax={4}
                      onChange={(e) => setItemDescriprion(e.target.value)}
                      variant="outlined"
                      value={ItemDescriprion}
                    />

                    <div className="row">
                      <div className="col-md-9">
                        <TextField
                          type="file"
                          onChange={(e) => {
                            setFile(e.target.files[0]);
                          }}
                          variant="outlined"
                        />
                      </div>
                      <div className="col-md-3">
                        <i
                          style={{ fontSize: "43px" }}
                          class="fas fa-cloud-upload-alt ImageUploadButton"
                          onClick={uploadImage}
                        ></i>
                      </div>
                    </div>
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
