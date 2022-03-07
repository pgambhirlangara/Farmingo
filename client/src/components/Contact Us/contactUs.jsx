import React from 'react'
import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { border, borderRadius, display, fontWeight, textAlign } from '@mui/system';
export default function ContactUs() {

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
            flex:"1"
        },
        box:{
            flex:"1",
            width:"70%",
            height:"100vh",
            border:"1px green solid",
            borderTopLeftRadius:"10px",
            borderTopRightRadius:"10px",
            display:"flex",
            flexDirection:"column",
            backgroundColor:"white",
            [theme.breakpoints.down("xs")]: {
                width:"100%"
            },
            [theme.breakpoints.down("sm")]: {
                width:"100%"
            },
            [theme.breakpoints.up("md")]: {
                width:"70%"
            },
          
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
                <h1 className={classes.head}>Contact Us</h1>
                </div>
            <div className={classes.box}>
                <div className={classes.farmeremail}>Email</div>
                <div className={classes.email}>customerservice@farmingo.ca</div>
                <div className={classes.mainline}><div className={classes.line1}></div></div>
            
                <div className={classes.farmerphone}>Phone</div>
                <div className={classes.phone}>778-123-1234</div>
                <div className={classes.mainline}><div className={classes.line1}></div></div>
                <div className={classes.faq}>FAQ</div>
                </div>
            </div>
        
        
        </div>
  )
}
