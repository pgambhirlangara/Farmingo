import React from 'react'
import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

import { border, color, display, fontWeight, padding } from '@mui/system';
export default function FarmerAddUser() {
    const useStyles = makeStyles((theme) => ({

        addform: {
            backgroundColor: theme.palette.primary.a100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            height: "100%",
            
        },
        headingtwo:{
            textAlign: "center",
            [theme.breakpoints.up("sm")]: {
                marginTop:"-15px",
                color:"gray"
            },
        },
        headingone:{
            textAlign:"center"
        },
        formmove: {
            width:"80%",
            display: "flex",
            flexDirection: "column",
            height:"50%",
            marginBottom:"10px"
        },
        labels:{
            display:"none",
            color:"black",
            [theme.breakpoints.up("sm")]:{
                display:"block",
                fontWeight:"bold",
                marginBottom:"4px",
                marginTop:"4px"
            }
        },
        addButton: {
            color: "white !important",
            backgroundColor:"#F15922 !important",
            width:"100%",
            padding:"10px !important",
            
        },
        btnname:{
            fontWeight:"bold"
        },
        formargin:{
            marginBottom:"40px"
        },
        outerdiv:{
            width:"100%",
            height:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            [theme.breakpoints.up("sm")]:{
                padding:"70px",
                width:"40%",
                height:"10%",
                border:"1px green solid",
                borderRadius:"10px",
                backgroundColor:"white !important",
                display:"flex",
                justifyContent:"center",
                flexDirection:"column",
                alignItems: "center",
                marginBottom:"50px"
            }

        },
        textboxes:{
            width:"100%",
            backgroundColor:"white",
            
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
        }
    }));
    
    const classes = useStyles();
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [phonenumber, setphonenumber] = useState('');
    const [confirmp, setconfirmp] = useState('');
    const [buttonDisabled, setbuttonDisabled] = useState(false);

    const addusers = async (e) => {
        setbuttonDisabled(true);
        const users = {
            firstname,
            lastname,
            email,
            password,
            phonenumber,
            confirmp
        }
    }
   
    
  return (
    
    <form className={ classes.addform} >
        <div ><h1 className={classes.headingone}>Add User</h1></div>
        <div ><h2 className={classes.headingtwo}>A second user can be added to your account to help you manage it</h2></div>
        <div className={classes.outerdiv}>
        

        <div className={classes.formmove}>
                    <label className={classes.labels} htmlFor="firstname">First Name</label>
                    <TextField className={classes.textboxes} placeholder='First Name' required value={firstname} type="text" onChange={(e) => setfirstname(e.target.value)} />
                </div>
        <div className={classes.formmove}>
        <label className={classes.labels} htmlFor="lastname">Last Name</label>
                    <TextField className={classes.textboxes} placeholder='Last Name' required value={lastname} type="text" onChange={(e) => setlastname(e.target.value)} />
        </div>
        <div className={classes.formmove}>
                    <label className={classes.labels} htmlFor="email">Email</label>
                    <TextField className={classes.textboxes} placeholder='Email' required value={email} type="text" onChange={(e) => setemail(e.target.value)} />
        </div>
        <div className={classes.formmove}>
                    <label className={classes.labels} htmlFor="phonenumber">Phone Number</label>
                    <TextField className={classes.textboxes} placeholder='Phone Number' required value={phonenumber} type="number" onChange={(e) => setphonenumber(e.target.value)} />
        </div>
        <div className={classes.passdiv}>
            
        <div className={classes.formmove}>
                    <label className={classes.labels} htmlFor="password">Password</label>
                    <TextField className={classes.textboxes} placeholder='Password' required value={password} type="password" onChange={(e) => setpassword(e.target.value)} />
        </div>
        <div className={classes.formmove}>
                    <label className={classes.labels} htmlFor="confirmp">Confirm Password</label>
                    <TextField className={classes.textboxes} placeholder='Confirm password' required value={confirmp} type="password" onChange={(e) => setconfirmp(e.target.value)} />
        </div>
            
            </div>
        
        
        
        <div className={classes.formmove}>
        <Button disabled={buttonDisabled} className={classes.addButton} onClick={addusers}  variant="contained" ><span className={classes.btnname}> Add User </span></Button>
        </div>
        </div>
    </form>
    
    )
}

