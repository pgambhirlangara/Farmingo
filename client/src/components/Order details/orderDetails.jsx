import React from 'react'
import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { border, borderRadius, display, fontWeight, textAlign, width } from '@mui/system';
export default function OrderDetails() {

    const useStyles = makeStyles((theme) => ({
        maindiv:{
            height:"100vh",
            display:"flex"


        },
        divone:{
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
        height:"100%",
        backgroundColor:"black",
        },
        divtwo:{
            flex:"1",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            height:"100%",
            flexDirection:"column",
            backgroundColor:theme.palette.primary.a100
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
        <img src="" alt="" />    
        </div>
        <div className={classes.divtwo}>
            <div className={classes.headingone}>
                <h1 className={classes.head}>Order Details</h1>
                </div>
            <div className={classes.divthree}>
                <div className={classes.threeone}>
                    <div className={classes.threetwo}> </div>
                    <div className={classes.threeeach}><h2>Pink Apple</h2><p>Total Amount: 30lb</p><p>Total price: $100</p></div>
                    </div>
                <div className={classes.threeone}></div>
                <div className={classes.threeone}></div>
                <div className={classes.threeone}></div>
                <div className={classes.threeone}></div>

            </div>
           
        
        
        </div>
    </div>
  )
}
