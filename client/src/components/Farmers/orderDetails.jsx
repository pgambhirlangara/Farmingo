import React from 'react'
import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { border, borderRadius, display, fontWeight, textAlign, width } from '@mui/system';
import { orderDetails } from '../../constants/constant';
export default function OrderDetails() {

    const useStyles = makeStyles((theme) => ({
        maindiv:{
            height:"100vh",
            display:"flex",

        },
        divone:{
            backgroundImage: "url('../assets/orderDetail.jpg'), linear-gradient(90deg, rgba(91, 175, 97, 0.5) 1.28%, rgba(248, 177, 51, 0.5) 105.7%);",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));",
            backgroundBlendMode: "multiply",
            backgroundPosition: "center",
            backgroundSize: "cover",
            [theme.breakpoints.down("xs")]: {
                flex:"0.7",
            },
            [theme.breakpoints.down("sm")]: {
                flex:"0.7",
            },
            [theme.breakpoints.down("md")]: {
                flex:"0",
            },
        flex:"1.3",
        },
        divtwo:{
            overflow: "auto",
            flex:"1",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            height:"100%",
            flexDirection:"column",
            backgroundColor:theme.palette.primary.a100,
            gap: "40px"
        },
        headingone:{
            textAlign:"center",
            display:"flex",
            justifyContent:"center",
            alignItems:"end",
            
        },
       
        head:{
            fontWeight:"bold"
        },
        farmeremail:{
            fontWeight:"bold",
            fontSize:"20px",
            marginLeft:"50px",
            marginTop:"10px",
            
        },
        line1:{
            width:"80%",
            border:"1px black solid",
            marginBottom:"10px",
        },
        mainline:{
            display:"flex",
            justifyContent:"center",
        },
        email:{
                
                textAlign:"center",
                marginBottom:"10px",
               
                textAlign:"center"
                
        },
        farmerphone:{
            fontSize:"20px",
            fontWeight:"bold",
            marginLeft:"50px"
        },
        phone:{
            marginBottom:"10px",
           textAlign:"center"
        },
        faq:{
            fontSize:"20px",
            fontWeight:"bold",
            marginLeft:"50px"
        },
        divthree:{
            border:"1px black solid",
            width:"70%",
            display:"flex",
            flexDirection:"column"
        
        },
        threeone:{
            width:"90%",
            display:"flex"
            
        },
        threeeach:{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center"
        },
        orderDetailContainer: {
            display: "grid",
            gridTemplateColumns: "20% 80%",
            gap: "20px",
            alignItems: "center",
            margin: "0px 80px",
            padding: "20px",
            background: "white",
            border: "1px solid #74C26C",
            borderRadius: "24px"
        },
        orderDetailImage: {
            width: "100%",
            border: "1px solid green",
            borderRadius: "20px",
            height: "100%"
        },
        orderp: {
            margin: 0
        }
        
    }));




 const classes = useStyles();
 const addusers = async (e) => {
    
    const users = {
       
    }
}

  return (
    <div className={classes.maindiv}>
        <div className={classes.divone}>
        </div>
        <div className={classes.divtwo}>
            <div className={classes.headingone}>
                <h1 className={classes.head}>Order Details</h1>
                </div>
            {
                orderDetails.map((data) => {
                    return (
                        <div className={classes.orderDetailContainer}>
                            <img className={classes.orderDetailImage} src={data.image} alt="" />
                            <div>
                                <h3 className={classes.orderp}>{data.title}</h3>
                                <p className={classes.orderp}>Total Amount: {data.amount}</p>
                                <p className={classes.orderp}>Total Amount: {data.price}</p>
                            </div>
                        </div>
                    )
                })
            }
           
        
        
        </div>
    </div>
  )
}
