import React from 'react'
import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { border, borderRadius, display, fontSize, fontWeight, letterSpacing, padding, textAlign, width } from '@mui/system';
export default function Settings() {

    const useStyles = makeStyles((theme) => ({
        maindiv:{
            display:"flex",
            height:"100vh",
            width:"100%"
        },
        divone:{
            //change width and height according to the mock ups
            flex:"1",
            backgroundColor:"black",
            [theme.breakpoints.down("sm")]:{
                display:"none"
            }

        },
        divtwo:{
            flex:"0.5",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#EEF6EE",
            [theme.breakpoints.down("sm")]:{
                flex:"1"
            }
        },
        headingone:{
            flex:"0.7",
            display:"flex",
            justifyContent:"center",
            alignItems:"end",
            [theme.breakpoints.down("sm")]:{
                flex:"0.3"
            }
        },
        box:{
            flex:"1",
            width:"405px",
            border:"1px green solid",
            borderTopLeftRadius:"28px",
            borderTopRightRadius:"28px",
            display:"flex",
            backgroundColor:"white",
            flexDirection:"column",
            [theme.breakpoints.down("sm")]:{
                width:"100%"
            }


        },
        mainline:{
           display:"flex",
           justifyContent:"center"
           
        },
        line1:{
            width:"70%",
            border:"1px solid black",
        },
        farmeremail:{
            textAlign:"left",
            fontSize:"24px",
            marginLeft:"96px",
            padding:"10px",
            marginTop:"30px",
            letterSpacing:"1px"

        },
        adduser:{
            textAlign:"left",
            fontSize:"24px",
            padding:"10px",
            marginLeft:"96px",
            letterSpacing:"1px"

        },
        farmerphone:{
            textAlign:"left",
            fontSize:"24px",
            padding:"10px",
            marginLeft:"96px",
            letterSpacing:"1px"
        },
        phone:{
            textAlign:"center",
            fontSize:"24px",
            padding:"10px",
            letterSpacing:"1px"
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
                <h1 className={classes.head}>Settings</h1>
                </div>
            <div className={classes.box}>
                <div className={classes.farmeremail}>Profile Information</div>
                <div className={classes.mainline}><div className={classes.line1}></div></div>
                <div className={classes.adduser}>Add User</div>
                <div className={classes.mainline}><div className={classes.line1}></div></div>
            
                <div className={classes.farmerphone}>Payment</div>
                <div className={classes.mainline}><div className={classes.line1}></div></div>
                <div className={classes.phone}>Log Out</div>
                </div>
            </div>
        
        
        </div>
  )
}
