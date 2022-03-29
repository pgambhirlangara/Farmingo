import React from "react";
import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import {
  border,
  borderRadius,
  display,
  fontWeight,
  textAlign,
  width,
} from "@mui/system";
import { orderDetails, orderHistory } from "../../constants/constant";
export default function OrderDetails() {
  const useStyles = makeStyles((theme) => ({
    maindiv: {
      height: "100vh",
      display: "grid",
      gridTemplateColumns: "60% 40%",
      backgroundColor: theme.palette.primary.a100,
      [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "100%",
      },
    },
    totalSection: {
      background: "#57A85D",
      color: "white",
      padding: "20px",
      display: "flex",
      gap: "10px",
      marginTop: "64px",
      justifyContent: "center",
      fontSize: "24px",
    },
    totalSectionTitle: {
      fontWeight: "bold",
    },
    divone: {
      backgroundImage:
        "url('../../assets/orderDetail.jpg'), linear-gradient(90deg, rgba(91, 175, 97, 0.5) 1.28%, rgba(248, 177, 51, 0.5) 105.7%);",
      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));",
      backgroundBlendMode: "multiply",
      backgroundPosition: "center",
      backgroundSize: "cover",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
      flex: "1.3",
    },
    divtwo: {
      overflow: "auto",
      padding: "40px 0px",
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      height: "calc(100% - 100px)",
      flexDirection: "column",
      gap: "20px",
    },
    headingone: {
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "end",
    },

    head: {
      fontWeight: "bold",
    },
    farmeremail: {
      fontWeight: "bold",
      fontSize: "20px",
      marginLeft: "50px",
      marginTop: "10px",
    },
    line1: {
      width: "80%",
      border: "1px black solid",
      marginBottom: "10px",
    },
    mainline: {
      display: "flex",
      justifyContent: "center",
    },
    email: {
      textAlign: "center",
      marginBottom: "10px",

      textAlign: "center",
    },
    farmerphone: {
      fontSize: "20px",
      fontWeight: "bold",
      marginLeft: "50px",
    },
    phone: {
      marginBottom: "10px",
      textAlign: "center",
    },
    faq: {
      fontSize: "20px",
      fontWeight: "bold",
      marginLeft: "50px",
    },
    divthree: {
      border: "1px black solid",
      width: "70%",
      display: "flex",
      flexDirection: "column",
    },
    threeone: {
      width: "90%",
      display: "flex",
    },
    threeeach: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    orderDetailContainer: {
      display: "grid",
      gridTemplateColumns: "30% 70%",
      gap: "20px",
      alignItems: "center",
      margin: "0px 80px",
      padding: "0px",
      background: "white",
      border: "1px solid #74C26C",
      borderRadius: "24px",
      [theme.breakpoints.down("md")]: {
        margin: "0px 20px",
      },
    },
    orderDetailDescription: {
      padding: "8px",
    },
    orderDetailImage: {
      width: "100%",
      border: "1px solid green",
      borderRadius: "20px",
      height: "100%",
    },
    orderpHeader: {
      margin: 0,
      fontSize: "18px",
    },
    orderp: {
      margin: 0,
    },
    orderDescTitle: {
      fontWeight: 800,
    },
  }));

  const classes = useStyles();
  const [orderDetail, setOrderDetail] = useState([]);
  const addusers = async (e) => {};

  return (
    <>
      <div className={classes.totalSection}>
        <span className={classes.totalSectionTitle}>Wallmart: </span>{" "}
        <span>Total {orderHistory[0].total}</span>
      </div>
      <div className={classes.maindiv}>
        <div className={classes.divone}></div>
        <div className={classes.divtwo}>
          <div className={classes.headingone}>
            <h1 className={classes.head}>Order Details</h1>
          </div>
          {orderHistory.slice(0, 1).map(({ items }) => {
            return items.map((item) => {
              return (
                <div className={classes.orderDetailContainer}>
                  <img
                    className={classes.orderDetailImage}
                    src={item.image}
                    alt=""
                  />
                  <div className={classes.orderDetailDescription}>
                    <h3 className={classes.orderpHeader}>{item.title}</h3>
                    <p className={classes.orderp}>
                      <span className={classes.orderDescTitle}>
                        Total Amount:
                      </span>{" "}
                      {item.amount}
                    </p>
                    <p className={classes.orderp}>
                      <span className={classes.orderDescTitle}>
                        Total Price:
                      </span>{" "}
                      {item.price}
                    </p>
                  </div>
                </div>
              );
            });
          })}
        </div>
      </div>
    </>
  );
}
