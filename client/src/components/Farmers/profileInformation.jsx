import React from 'react'
import { backdropClasses, Button, InputLabel, Select, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { border, borderRadius, display, fontSize, fontWeight, lineHeight, margin, textAlign } from '@mui/system';
import { Link } from 'react-router-dom';

export default function ProfileInformation() {
    const useStyles = makeStyles((theme) => ({
        maindiv:{
            width:"100%",
            backgroundColor:"#EEF6EE",
            height:"100%",
            display: "flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column"
        },
        headingh1:{
            textAlign:"center",
            fontSize:"40px"
        },
        headingh2:{
            textAlign:"center",
            color:"gray",
            fontSize:"28px",
            margin:"0px"
        },
        addform:{
            // need to set new width and height
            width:"60%",
            height:"100%",
            border:"1px solid black ",
            borderRadius:"20px",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            gap:"20px"  
        },
        outerdiv:{
            width:"100%",
            height:"100%",
            display:"flex",
            flexDirection:"column",
            padding:"40px"
            
        },
        newdiv:{
            display:"flex",
            gap:"10px",
            flex:"1"
        },
        imagediv:{
            flex:"1",
            backgroundColor:"black",
            borderRadius:"24px",
        },
        content:{
            flex:"1",
            gap:"30px",
            display:"flex",
            flexDirection:"column"

        },
        newdiv2:{
            flex:"1",
            display:"flex",
            flexDirection:"column",
            gap:"25px"
            
        },
        labels:{
            fontSize:"18px",
            lineHeight:"41px",
            letterSpacing:"1px",
            fontWeight:"bold"
        },
        formmove:{
            display:"flex",
            flexDirection:"column",
            

        },
        passdiv:{
            width:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            [theme.breakpoints.up("sm")]:{
                display:"flex",
                flexDirection:"row",
                width:"80%",
                justifyContent:"space-between",
                gap:"66px"
            }
        },
        
        signupButton: {
            color: "white !important",
            width: "50%",
            backgroundColor:"#F15922!important",
            
        },
        buttonContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px"
        },
        btn:{
            marginTop:"40px"
        }
        


    }));

    const classes = useStyles();

 
    const [firstname, setfirstname] = useState('');
    const [postalcode, setpostalcode] = useState('');
    const [Province, setProvince] = useState('');
    const [password, setpassword] = useState('');
    const [phonenumber, setphonenumber] = useState('');
    const [confirmp, setconfirmp] = useState('');
    const [buttonDisabled, setbuttonDisabled] = useState(false);

    const addusers = async (e) => {
        setbuttonDisabled(true);
        const users = {
            firstname,
            postalcode,
            Province,
            password,
            phonenumber,
            confirmp
        }
    }

  return (
    <div className={classes.maindiv}>
        <h1 className={classes.headingh1}>Profile Information</h1>
        <h6 className={classes.headingh2}>Here you can edit your profile information</h6>

        <form className={ classes.addform} >
        
        <div className={classes.outerdiv}>
        
        <div className={classes.newdiv}>
        <div className={classes.imagediv}></div>
            <div className={classes.content}>
            <div className={classes.formmove}>
                    <label className={classes.labels} htmlFor="farmname">Farm Name</label>
                    <TextField className={classes.textboxes} placeholder='AAA Farm' required value={firstname} type="text" onChange={(e) => setfirstname(e.target.value)} />
                </div>
                <div className={classes.formmove}>
                    <label className={classes.labels} htmlFor="farmname">Address</label>
                    <TextField className={classes.textboxes} placeholder='AAA Farm' required value={firstname} type="text" onChange={(e) => setfirstname(e.target.value)} />
                </div>

                <div className={classes.passdiv}>
            
            <div className={classes.formmove}>
                        <label className={classes.labels} htmlFor="postalcode">Postal Code</label>
                        <TextField className={classes.textboxes} placeholder='A0A 0A0' required value={postalcode} type="password" onChange={(e) => setpostalcode(e.target.value)} />
            </div>
            <div className={classes.formmove}>
                        <label className={classes.labels} htmlFor="confirmp">Province</label>
                        <TextField className={classes.textboxes} placeholder='BC' required value={Province} type="text" onChange={(e) => setconfirmp(e.target.value)} />
            </div>
                
                </div>
                </div>
               

            
            </div>
           
        
        
            <div className={classes.newdiv2}>
            <div className={classes.formmove}>
                    <label className={classes.labels} htmlFor="contact">Contact Information</label>
                    <TextField className={classes.textboxes} placeholder='Phone number' required value={phonenumber} type="number" onChange={(e) => setphonenumber(e.target.value)} />
                </div>

                <div className={classes.passdiv}>
                <div className={classes.formmove}>
                        <label className={classes.labels} htmlFor="confirmp">Days of operation</label>
                        <TextField className={classes.textboxes} placeholder='Select one' required value={confirmp} type="password" onChange={(e) => setconfirmp(e.target.value)} />
            </div>
                
            <div className={classes.formmove}>
                        <label className={classes.labels} htmlFor="confirmp">Hours of operation</label>
                        <TextField className={classes.textboxes} placeholder='Select the opening hours' required value={confirmp} type="password" onChange={(e) => setconfirmp(e.target.value)} />
            </div>
                
                </div>
                <div className={classes.formmove}>
                        <label className={classes.labels} htmlFor="confirmp">Description</label>
                        <TextField className={classes.textboxes1} placeholder='Description of your farm' required value={confirmp} type="password" onChange={(e) => setconfirmp(e.target.value)} />
            </div>

                    <div className={classes.btn}>

        <div className={classes.buttonContainer}>
            <Button disabled={buttonDisabled} className={classes.signupButton}  variant="contained" color="primary" >Save</Button>
            <Link className={classes.alreadyAccount} to="#"></Link>
        </div>

        </div>


                
                </div>
        </div>
        
    </form>
    
    </div>
  )
  }
