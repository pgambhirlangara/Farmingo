import React from 'react'
import { Alert, Box, Button, CircularProgress, MenuItem, Select, Snackbar, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { days, Province } from '../../constants/constant';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function FarmProfile() {
    const useStyles = makeStyles((theme) => ({

        addform: {
            backgroundColor: theme.palette.primary.a100,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            height: "calc(100vh - 64px)",
            overflow: "auto"

        },
        headingtwo: {
            textAlign: "center",
            width: "80%", // 53% previous
            [theme.breakpoints.up("sm")]: {
                marginTop: "-15px",
                color: "gray"
            },
        },
        headingone: {
            textAlign: "center",
        },
        formmove: {
            width: "80%",
            display: "flex",
            flexDirection: "column",
            height: "50%",
            marginBottom: "10px",
            [theme.breakpoints.down("md")]: {
                height: "40px",
                width: "333px",
                marginBottom: "10px",
                padding: "0",
                display: "flex",
                flexDirection: "column",
            },
            [theme.breakpoints.between('sm','md')]: {
                marginBottom:"46px"
            },
            [theme.breakpoints.between('xs','sm')]: {
                flex:"1"
            }
        },
        labels: {
            display: "none",
            color: "black",
            [theme.breakpoints.up("sm")]: {
                display: "block",
                fontWeight: "bold",
                marginBottom: "4px",
                fontSize: "18px",
                marginTop: "4px"
            },
            [theme.breakpoints.between('sm','md')]: {
                marginTop:"14px"            }
           
        },
        addButton: {
            color: "white !important",
            width: "100%",
            padding: "10px !important",
            height:"51px"

        },
        btnname: {
            fontWeight: "bold"
        },
        formargin: {
            marginBottom: "40px"
        },
        outerdiv: {
            width: "100%",
            height: "100%",
            display: "flex",
            gap: "20px",
            // padding: "50px",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            [theme.breakpoints.up("sm")]: {
                padding: "100px 70px !important",
                width: "830px",
                height: "100%",
                border: "1px green solid",
                borderRadius: "10px",
                backgroundColor: "white !important",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "50px",
                padding: "293px"
            },
            [theme.breakpoints.between('xs','sm')]: {
                height:"auto"
            }
            

        },
        textboxes: {
            width: "547px",
            height: "52px",
            backgroundColor: "white",
            marginBottom: "20px!important",
            [theme.breakpoints.down("md")]: {
                width: "333px",
                height: "40px",
                padding: "0px!important"
            },
            [theme.breakpoints.between('sm','md')]: {
                marginBottom:"10px"
            }

        },
        addressDiv: {
            width: "80%",
            display: "flex",
            marginBottom: "20px",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            [theme.breakpoints.between('sm', 'md')]: {
                width:"40%!important",
            
               
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            width:"100%",
            display:"flex",
            justifyContent:"space-between"
        
           
    },
            
        },
        headingdiv: {
            display: "flex",
            justifyContent: "center",

        },
        heads: {
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "24px",
            [theme.breakpoints.down("md")]: {
                fontSize: "16px"
            },
            [theme.breakpoints.between('sm', 'md')]: {
                marginTop:"45px"
        }
        },
        textboxesbig: {
            width: "547px",
            height: "150px",
            backgroundColor: "white",
            border: "1px gray solid ",
            borderRadius: "13px",
            [theme.breakpoints.down("md")]: {
                width: "333px",
                height: "80px"
            },
            [theme.breakpoints.between('sm','md')]: {
                marginBottom:"20px",
                height:"125px"
            }
        },
        bigarea: {
            width: "80%",
            display: "flex",
            flexDirection: "column",
            height: "150px",
            marginBottom: "10px",
            [theme.breakpoints.down("md")]: {
                width: "333px",
                height: "80px"
            }

        },
        textboxes1: {
            width: "257.87px",
            height: "52px",
            [theme.breakpoints.down("md")]: {
                width: "134px",
                height: "40px"
            }
        },
        btndiv: {
            display: "flex",
            marginTop: "20px",
            gap: "25px",
            [theme.breakpoints.down("md")]: {
                display: "flex",
                flexDirection: "column"
            },
            [theme.breakpoints.between('sm','md')]: {
                marginTop:"46px"
            }

        },
        btnform: {
            width: "343px",
            height: "51px",
            display:"flex",
            justifyContent: "center",
            alignItems: "center"
        },
        addButton1: {
            color: "white !important",
            backgroundColor: "#F15922 !important",
            width: "100%",
            padding: "10px !important",
            [theme.breakpoints.down("md")]: {
                width: "343px",
                height: "51px"

            },
            textboxes2: {
                width: "257.87px",
                height: "52px",
                [theme.breakpoints.down("md")]: {
                    width: "184px",
                    height: "40px",
                    backgroundColor: "white"
                }
            },
            headingParent: {
                marginTop: "100px !important"
            },
            mainheading: {
                marginTop: "100px"
            }

        },
        uploadImage: {
            backgroundColor: "#F15A22",
            color: "white",
            cursor: "pointer",
            width: "100%",
            minWidth: "64px",
            height: "51px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "24px",
            fontWeight: "bold",
            fontSize: "0.875rem"
        },
        heads1:{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "24px",
        [theme.breakpoints.down("md")]: {
            fontSize: "16px"
        },
        [theme.breakpoints.between('sm', 'md')]: {
            marginTop:"10px"
        }
    }
    }));

    const classes = useStyles();


    const [farmName, setFarmName] = useState('');
    const [address, setAddress] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [province, setProvince] = useState("");
    // const [contact, setContact] = useState(0);
    const [contact, setContact] = useState("");
    const [daysOfOperation, setDaysOfOperation] = useState([]);
    const [hoursOfOperation, setHoursOfOperation] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [severity, setSeverity] = useState('success');
    const user = JSON.parse(localStorage.getItem('user'));

    const navigate = useNavigate();


    const createFarmProfile = async (e) => {
        setButtonDisabled(true);
        e.preventDefault();
        let farmProfile = {
            farmName,
            address,
            zipCode,
            province,
            contact,
            daysOfOperation,
            hoursOfOperation,
            email: user.email,
            image,
            description
        }
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/farm/create`, farmProfile);
            farmProfile = { ...farmProfile, id: response.data.data._id }
            localStorage.setItem('farm-profile', JSON.stringify(farmProfile));

            setMessage(response.data.message);
            setOpen(true);
            setSeverity('success');
            setTimeout(() => {
                navigate('../farmer/home');
                setButtonDisabled(false);
            }, 2000);
        } catch (error) {
            setSeverity('error');
            setOpen(true);
            setButtonDisabled(false);
            setMessage(error.response.data.message);
        }
    }


    const onSelectFile = async (event) => {
        const file = event.target.files[0];
        const convertedFile = await convertToBase64(file);
        setImage(convertedFile);
    }
    const convertToBase64 = (file) => {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            }
        })
    }

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const anchorOrigin = {
        vertical: "bottom",
        horizontal: "center"
    }


    return (

        <form className={classes.addform} onSubmit={createFarmProfile} >
            <Snackbar anchorOrigin={anchorOrigin} open={open} autoHideDuration={3000} onClose={handleAlertClose}>
                <Alert className={classes.snackbar} onClose={handleAlertClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
            <Box marginTop="100px" >
                <h1 className={classes.headingone}>Create a profile of your farm</h1>
            </Box>
            <div className={classes.headingdiv} >
                <h2 className={classes.headingtwo}>
                    You can establish a unique identity of your farm by creating a new
                    profile of your farm in wich to upload a list of your products.
                </h2>
            </div>
            <div className={classes.outerdiv}>
                <div className={classes.formmove}>
                    <label className={classes.labels} htmlFor="Farm">Name</label>
                    <TextField fullWidth className={classes.textboxes} placeholder='Name of the farm...' required value={farmName} type="text" onChange={(e) => setFarmName(e.target.value)} />
                </div>
                <div className={classes.formmove}>
                    <label className={classes.labels} htmlFor="Address">Address</label>
                    <TextField fullWidth className={classes.textboxes} placeholder='Street...' required value={address} type="text" onChange={(e) => setAddress(e.target.value)} />
                </div>

                <div className={classes.addressDiv}>

                    <div className={classes.formmove}>
                        <label className={classes.labels} htmlFor="Zip Code">Zip code</label>
                        <TextField className={classes.textboxes1} placeholder='Ex.V3A 0K8' required value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                    </div>
                    <div className={classes.formmove}>
                        <label className={classes.labels} htmlFor="Province">Province</label>
                        <Select
                            placeholder="Your Province"
                            value={province}
                            required
                            onChange={(e) => setProvince(e.target.value)}
                        >
                            {
                                Province.map(({ name }, index) => {
                                    return <MenuItem key={index} value={name}>{name}</MenuItem>
                                })
                            }
                        </Select>
                    </div>

                </div>

                <div className={classes.formmove}>
                    <label className={classes.labels} htmlFor="email">Contact info</label>
                    <TextField fullWidth className={classes.textboxes} placeholder='phone' type="number" required value={contact} onChange={(e) => setContact(e.target.value)} />
                </div>
                <div className={classes.heads}>Days of Operation</div>
                <div className={classes.formmove}>
                    <Select
                        value={daysOfOperation}
                        className={classes.textboxes}
                        required
                        fullWidth
                        multiple
                        label="Days"
                        onChange={(e) => setDaysOfOperation(e.target.value)}
                    >
                        {
                            days.map((name, index) => {
                                return <MenuItem key={index} value={name}>{name}</MenuItem>
                            })
                        }
                    </Select>
                </div>

                <div className={classes.heads1}>Hours of operation</div>
                <div className={classes.formmove}>
                    <TextField fullWidth className={classes.textboxes} placeholder='Set the opening hours' required value={hoursOfOperation} type="number" onChange={(e) => setHoursOfOperation(e.target.value)} />
                </div>

                <div className={classes.bigarea}>
                    <TextField rows="4" multiline fullWidth className={classes.textboxesbig} placeholder='Farm description...' required value={description} type="number" onChange={(e) => setDescription(e.target.value)} />

                </div>


                <div className={classes.btndiv}>

                    <div className={classes.btnform}>
                        <label for="upload" className={classes.uploadImage}>Upload Image of the Product</label>
                        <input id="upload" className={classes.fileUpload} onChange={onSelectFile} type="file" hidden />
                    </div>
                    <div className={classes.btnform}>
                        <Button color='primary' disabled={buttonDisabled} type="submit" className={classes.addButton} variant="contained" ><span className={classes.btnname}>

                            {buttonDisabled ? <CircularProgress size="1.5rem" style={{ marginRight: "8px" }} color="secondary" /> : null}
                            Save </span></Button>
                    </div>

                </div>

            </div>
        </form>

    )
}

