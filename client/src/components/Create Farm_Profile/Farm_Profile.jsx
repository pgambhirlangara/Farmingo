import React from 'react'
import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

import { border, color, display, fontWeight, height, padding } from '@mui/system';
export default function Farm_Profile() {
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
            width:"53%",
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
            marginBottom:"10px",
            [theme.breakpoints.down("md")]:{
                height:"40px",
                width:"333px",
                marginBottom:"10px",
                padding:"0",
                display: "flex",
                flexDirection: "column",
            }
        },
        labels:{
            display:"none",
            color:"black",
            [theme.breakpoints.up("sm")]:{
                display:"block",
                fontWeight:"bold",
                marginBottom:"4px",
                fontSize:"18px",
                marginTop:"4px"
            }
        },
        addButton: {
            color: "white !important",
            backgroundColor:"#58A85D !important",
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
                width:"47%",
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
            width:"547px",
            height:"52px",
            backgroundColor:"white",
            marginBottom:"20px!important",
            [theme.breakpoints.down("md")]:{
                    width:"333px",
                    height:"40px",
                    padding:"0px!important"
            }
            
        },
        passdiv:{
            width:"100%",
            display:"flex",
            marginBottom:"20px",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            [theme.breakpoints.down("md")]:{
                display:"flex",
                flexDirection:"row",
                width:"333px",
                height:"40px",
                justifyContent:"space-between",
                gap:"14px",
                marginBottom:"20px"
            }
        },
        headingdiv:{
            display:"flex",
            justifyContent:"center",

        },
        heads:{
            textAlign:"center",
            fontWeight:"bold",
            fontSize:"24px",
            [theme.breakpoints.down("md")]:{
                fontSize:"16px"
        }
        },
        textboxesbig:{
            width:"547px",
            height:"150px",
            backgroundColor:"white",
            border:"1px gray solid ",
            borderRadius:"13px",
             [theme.breakpoints.down("md")]:{
                width:"333px",
                height:"80px"
        }
        },
        bigarea:{
            width:"80%",
            display: "flex",
            flexDirection: "column",
            height:"150px",
            marginBottom:"10px",
            [theme.breakpoints.down("md")]:{
                width:"333px",
                height:"80px"
            }

        },
        textboxes1:{
            width:"257.87px",
            height:"52px",
            [theme.breakpoints.down("md")]:{
                width:"134px",
                height:"40px"
        }
        },
        btndiv:{
            display:"flex",
            marginTop:"20px",
            gap:"25px",
            [theme.breakpoints.down("md")]:{
               display:"flex",
               flexDirection:"column"
        }

        },
        btnform:{
            width:"343px",
            height:"51px"
        },
        addButton1: {
            color: "white !important",
            backgroundColor:"#F15922 !important",
            width:"100%",
            padding:"10px !important",
            [theme.breakpoints.down("md")]:{
                width:"343px",
                height:"51px"
            
        },
        textboxes2:{
            width:"257.87px",
            height:"52px",
            [theme.breakpoints.down("md")]:{
                width:"184px",
                height:"40px",
                backgroundColor:"white"
        }
        },
       
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
        <div ><h1 className={classes.headingone}>Create a profile of your farm</h1></div>
        <div className={classes.headingdiv} ><h2 className={classes.headingtwo}>You can establish a unique identity of your farm by creating a new 
profile of your farm in wich to upload a list of your products.</h2></div>
        <div className={classes.outerdiv}>
        

        <div className={classes.formmove}>
                    <label className={classes.labels} htmlFor="Farm">Name</label>
                    <TextField className={classes.textboxes} placeholder='Name of the farm...' required value={firstname} type="text" onChange={(e) => setfirstname(e.target.value)} />
                </div>
        <div className={classes.formmove}>
        <label className={classes.labels} htmlFor="Address">Address</label>
                    <TextField className={classes.textboxes} placeholder='Street...' required value={lastname} type="text" onChange={(e) => setlastname(e.target.value)} />
        </div>

        <div className={classes.passdiv}>
            
            <div className={classes.formmove}>
                        <label className={classes.labels} htmlFor="Zip Code">Zip code</label>
                        <TextField className={classes.textboxes1} placeholder='Ex.V3A 0K8' required value={password} type="password" onChange={(e) => setpassword(e.target.value)} />
            </div>
            <div className={classes.formmove}>
                        <label className={classes.labels} htmlFor="Province">Province</label>
                        <TextField className={classes.textboxes2} placeholder='Ex .British Columbia' required value={confirmp} type="password" onChange={(e) => setconfirmp(e.target.value)} />
            </div>
                
                </div>

        <div className={classes.formmove}>
                    <label className={classes.labels} htmlFor="email">Contact info</label>
                    <TextField className={classes.textboxes} placeholder='Email or phone' required value={email} type="text" onChange={(e) => setemail(e.target.value)} />
        </div>
        <div className={classes.heads}>Days of Operation</div>
        <div className={classes.formmove}>
                   
                    <TextField className={classes.textboxes} placeholder='Select One' required value={phonenumber} type="number" onChange={(e) => setphonenumber(e.target.value)} />
        </div>
       
        <div className={classes.heads}>Hours of operation</div>
        <div className={classes.formmove}>
                   
                    <TextField className={classes.textboxes} placeholder='Set the opening hours' required value={phonenumber} type="number" onChange={(e) => setphonenumber(e.target.value)} />
        </div>

        <div className={classes.bigarea}>
                   
                   <textarea className={classes.textboxesbig} placeholder='Farm description...' required value={phonenumber} type="text" onChange={(e) => setphonenumber(e.target.value)} />
       </div>
        
        
        <div className={classes.btndiv}>
            
        <div className={classes.btnform}>
        <Button disabled={buttonDisabled} className={classes.addButton1} onClick={addusers}  variant="contained" ><span className={classes.btnname}> Upload image of the farm </span></Button>
        </div>
        <div className={classes.btnform}>
        <Button disabled={buttonDisabled} className={classes.addButton} onClick={addusers}  variant="contained" ><span className={classes.btnname}> Save </span></Button>
        </div>

            </div>
       
        </div>
    </form>
    
    )
}

