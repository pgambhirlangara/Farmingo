import React from 'react'
import { Button, Divider, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { border, borderRadius, color, display, fontSize, fontWeight, letterSpacing, padding, textAlign, width } from '@mui/system';
import { Link } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MessageIcon from '@mui/icons-material/Message';

export default function Settings() {

    const useStyles = makeStyles((theme) => ({
        maindiv: {
            display: "flex",
            height: "100vh",
            width: "100%"
        },
        head: {
            fontSize: "28px"
        },
        divone: {
            //change width and height according to the mock ups
            flex: "1",
            backgroundImage: "url('../assets/settingsImage.jpg'), linear-gradient(90deg, rgba(91, 175, 97, 0.5) 1.28%, rgba(248, 177, 51, 0.5) 105.7%);",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));",
            backgroundBlendMode: "multiply",
            backgroundPosition: "center",
            backgroundSize: "cover",
            [theme.breakpoints.down("sm")]: {
                display: "none"
            }

        },
        divtwo: {
            flex: "0.5",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#EEF6EE",
            [theme.breakpoints.down("sm")]: {
                flex: "1"
            }
        },
        headingone: {
            flex: "0.7",
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            [theme.breakpoints.down("sm")]: {
                flex: "0.3"
            }
        },
        box: {
            flex: "1",
            width: "405px",
            border: "1px green solid",
            borderTopLeftRadius: "28px",
            borderTopRightRadius: "28px",
            display: "flex",
            backgroundColor: "white",
            flexDirection: "column",
            [theme.breakpoints.down("sm")]: {
                width: "100%"
            }


        },
        mainline: {
            display: "flex",
            justifyContent: "center"

        },
        line1: {
            width: "70%",
            border: "1px solid black",
        },
        farmeremail: {
            textAlign: "left",
            fontSize: "24px",
            marginLeft: "96px",
            padding: "10px",
            marginTop: "30px",
            letterSpacing: "1px"

        },
        adduser: {
            textAlign: "left",
            fontSize: "24px",
            padding: "10px",
            marginLeft: "96px",
            letterSpacing: "1px"

        },
        farmerphone: {
            textAlign: "left",
            fontSize: "24px",
            padding: "10px",
            marginLeft: "96px",
            letterSpacing: "1px"
        },
        phone: {
            textAlign: "center",
            fontSize: "24px",
            padding: "10px",
            letterSpacing: "1px"
        },
        settingImage: {
            width: "100%",
            height: "100%"
        },
        settingAction: {
            textDecoration: "none",
            fontSize: "24px",
            color: "black",
            padding: "20px 40px",
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            "&:hover": {
                color: theme.palette.primary.main
            }
        },
        detailContainer: {
            display: "flex",
            alignItems: "center",
            gap: "20px",
            textDecoration: "none",
            color:"black"
        },
        metaInfo: {
            fontSize: "18px",

        }

    }));




    const classes = useStyles();
    const addusers = async (e) => {

        const users = {

        }
    }

    const logout = () => {
        alert("Logged out");
    }

    return (
        <div className={classes.maindiv}>
            <div className={classes.divone}>
                {/* <img className={classes.settingImage} src="../assets/settingsImage.jpg" alt="settingspage" />     */}
            </div>
            <div className={classes.divtwo}>
                <div className={classes.headingone}>
                    <h1 className={classes.head}>Contact Us</h1>
                </div>
                <div className={classes.box}>
                    <div className={classes.settingAction}><div className={classes.detailContainer}>
                        <EmailIcon />Email</div>
                        <span className={classes.metaInfo}><a style={{ textDecoration: "none", color:"black"}} href="mailto:info@farmingo.com" type="email">customerservice@farmingo.ca</a></span>
                    </div>
                    <Divider />
                    <div className={classes.settingAction}><div className={classes.detailContainer}>
                        <LocalPhoneIcon />Phone</div>
                        <span className={classes.metaInfo}>XXX - XXXX - XXXX</span>
                    </div>                    <Divider />
                    <div className={classes.settingAction}><div className={classes.detailContainer}>
                        <Link className={classes.detailContainer} to="../farmer/faq">
                            <MessageIcon />FAQ's
                    </Link>
                    </div>
                </div>
                
            </div>
        </div>


        </div >
    )
}
