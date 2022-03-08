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
        width:"907px",
        backgroundColor:"black",
        },
        divtwo:{
            flex:"1",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            height:"100%",
            flexDirection:"column",
            backgroundColor:theme.palette.primary.a100,
            width:"405px"
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
            borderTopLeftRadius:"26px",
            borderTopRightRadius:"26px",
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
            fontWeight:"600",
            fontSize:"25px",
            marginLeft:"50px",
            marginTop:"10px",
            [theme.breakpoints.down("sm")]:{
                fontSize:"14px"
            }
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
                fontSize:"20px",
                position:"absolute",
                top:"50px",
                [theme.breakpoints.down("sm")]:{
                    top:"428px",
                    right:"39px",
                    position:"absolute",
                    fontSize:"14px"
    
    
                }
                
                
                
        },
        farmerphone:{
            fontSize:"24px",
            fontWeight:"600",
            marginLeft:"50px",
            [theme.breakpoints.down("sm")]:{
                fontSize:"14px",
                position:"absolute",
                right:"300px",
                top:"476px"
            }
        },
        phone:{
            fontSize:"20px",
            marginBottom:"30px",
            position:"absolute",
            top:"490px",
            right:"344px",
            [theme.breakpoints.down("sm")]:{
                top:"476px",
                right:"39px",
                position:"absolute",
                fontSize:"14px"


            }
           
        },
        faq:{
            fontSize:"24px",
            fontWeight:"600",
            marginLeft:"50px",
            [theme.breakpoints.down("sm")]:{
                fontSize:"14px"
            }
        },
        mainline1:{
            marginTop:"35px",

            display:"flex",
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
                <h1 className={classes.head}>Contact Us</h1>
                </div>
            <div className={classes.box}>
                <div className={classes.farmeremail}>Email</div>
                <div className={classes.email}>customerservice@farmingo.ca</div>
                <div className={classes.mainline}><div className={classes.line1}></div></div>
            
                <div className={classes.farmerphone}>Phone</div>
                <div className={classes.phone}>778-123-1234</div>
                <div className={classes.mainline1}><div className={classes.line1}></div></div>
                <div className={classes.faq}>FAQ</div>
                </div>
            </div>
        
        
        </div>
  )
}
