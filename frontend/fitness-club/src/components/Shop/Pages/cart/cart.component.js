import React, { useState, useEffect } from "react";
import axios from "axios";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import LocalMallIcon from "@material-ui/icons/LocalMall";

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: "auto",
  },
});

// Single item functional component start
function ItemCart({ id, ItemPrice, ItemImage }) {
  return (
    <div class="row" style={{ marginTop: "10px", marginBottom: "10px" }}>
      <div class="col">
        <div class="card" style={{ background: "rgba(0,0,0,0.17)" }}>
          <div
            class="card-body"
            style={{ height: "100px", padding: "8px", paddingTop: "1px" }}
          >
            <div class="row">
              <div class="col" style={{ width: "138px" }}>
                <img
                  style="height: 97px;width: 95px;"
                  src="assets/img/Shop/2.png"
                />
              </div>
              <div class="col">
                <div
                  class="row"
                  style={{ width: "154px", height: "36px", paddingTop: "0px" }}
                >
                  <h4
                    style={{
                      marginTop: "5px",
                      marginRight: "0px",
                      marginLeft: "58px",
                    }}
                  >
                    Rs2000
                  </h4>
                </div>
                <div
                  class="row"
                  style={{ width: "154px", height: "21px", paddingTop: "0px" }}
                >
                  <h4
                    style={{
                      marginTop: "1px",
                      marginRight: "0px",
                      marginLeft: "116px",
                      fontSize: "12px",
                    }}
                  >
                    x 2
                  </h4>
                </div>
                <div class="row" style={{ width: "154px", height: "50px" }}>
                  <div class="col">
                    <button
                      class="btn btn-primary pull-right"
                      type="button"
                      style={{
                        height: " 35px",
                        padding: "5px",
                        background: "rgb(96,98,101)",
                      }}
                    >
                      <i class="fa fa-star"></i>&nbsp; DELETE&nbsp;&nbsp;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// Single item functional component end

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [cartList, setCartList] = useState([]);

  //fetching meallist data from the backend
  useEffect(() => {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    axios
      .get("http://localhost:5000/api/cart/me", config)
      .then(({ data }) => {
        console.log(data.cartList);
        console.log(data.cartList.length);

        if (data.cartList.length > 0) {
          setCartList(data.cartList);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />

      {cartList.map((currentItem) => (
        <ItemCart
          id={currentItem._id}
          key={currentItem._id}
          ItemName={currentItem.ItemName}
          ItemPrice={currentItem.ItemPrice}
          ItemDescriprion={currentItem.ItemDescriprion}
          ItemImage={currentItem.ItemImage}
        />
      ))}
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <LocalMallIcon onClick={toggleDrawer(anchor, true)}></LocalMallIcon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
