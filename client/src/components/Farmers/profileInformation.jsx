import React, { useEffect } from 'react'
import { Alert, Box, Button, MenuItem, Select, Snackbar, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

import { border, color, display, fontWeight, height, padding } from '@mui/system';
import { days, Province } from '../../constants/constant';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
export default function EditFarmProfile() {
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
            width: "53%",
            [theme.breakpoints.up("sm")]: {
                marginTop: "-15px",
                color: "gray"
            },
        },
        headingone: {
            textAlign: "center",
        },
        formmove: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
            [theme.breakpoints.down("md")]: {
                height: "40px",
                width: "333px",
                marginBottom: "10px",
                padding: "0",
                display: "flex",
                flexDirection: "column",
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
            }
        },
        addButton: {
            color: "white !important",
            backgroundColor: "#58A85D !important",
            width: "100%",
            padding: "10px !important",

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
            paddingTop: "400px",
            gap: "20px",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            [theme.breakpoints.up("sm")]: {
                padding: "100px 70px !important",
                width: "830px",
                height: "130%",
                border: "1px green solid",
                borderRadius: "10px",
                backgroundColor: "white !important",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "50px"
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
            }

        },
        addressDiv: {
            width: "80%",
            display: "flex",
            marginBottom: "20px",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            [theme.breakpoints.down("md")]: {
                display: "flex",
                flexDirection: "row",
                height: "40px",
                justifyContent: "space-between",
                gap: "14px",
                marginBottom: "20px"
            }
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
            }

        },
        btnform: {
            width: "343px",
            height: "51px"
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
            minWidth: "64px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "24px",
            fontWeight: "bold",
            fontSize: "0.875rem"
        },
        textContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        image: {
            width: "100%",
            borderRadius: "24px"
        },
        imageSection: {
            display: "grid",
            gridTemplateColumns: "30% 70%",
        }
    }));

    const classes = useStyles();


    const [farmName, setFarmName] = useState('');
    const [address, setAddress] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [province, setProvince] = useState("");
    const [contact, setContact] = useState(0);
    const [daysOfOperation, setDaysOfOperation] = useState([]);
    const [hoursOfOperation, setHoursOfOperation] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [severity, setSeverity] = useState('success');
    const navigate = useNavigate();
    const farmData = JSON.parse(localStorage.getItem('farm-profile'));
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        window.scrollTo(0, 0)
        fetchData();
    }, []);

    const fetchData = async () => {
        setSeverity('success');
        setOpen(true);
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/farm/${farmData.id}`);
            setMessage(response.data.message);
            setFarmName(response.data.data.farmName);
            setProvince(response.data.data.province);
            setZipCode(response.data.data.zipCode);
            setContact(response.data.data.contact);
            setHoursOfOperation(response.data.data.hoursOfOperation);
            setDaysOfOperation(JSON.parse(response.data.data.daysOfOperation));
            setImage(response.data.data.image);
            setAddress(response.data.data.address);
            setDescription(response.data.data.description);
            setOpen(false);

        } catch (error) {
            setSeverity('error');
            setMessage(error.response.data.message);
            setOpen(false);
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

    const editFarmProfile = async (e) => {
        e.preventDefault();
        const farmProfile = {
            farmName,
            address,
            zipCode,
            province,
            contact,
            daysOfOperation: JSON.stringify(daysOfOperation),
            hoursOfOperation,
            email: user.email,
            description
        }
        try {
            const response = await axios.put(`${process.env.REACT_APP_API_URL}/farm/${farmData.id}`, farmProfile);
            setMessage(response.data.message);
            setOpen(true);
            setSeverity('success');
            setTimeout(() => {
                navigate('../farmer/home');
            }, 2000);
        } catch (error) {
            setSeverity('error');
            setOpen(true);
            setMessage(error.response.data.message);
        }
    }


    return (

        <form className={classes.addform} onSubmit={editFarmProfile} >
            <Snackbar anchorOrigin={anchorOrigin} open={open} autoHideDuration={3000} onClose={handleAlertClose}>
                <Alert className={classes.snackbar} onClose={handleAlertClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
            <Box marginTop="100px" >
                <h1 className={classes.headingone}>Profile Information</h1>
            </Box>
            <div className={classes.headingdiv} >
                <h2 className={classes.headingtwo}>
                    Here you can edit your profile information.
                </h2>
            </div>
            <div className={classes.outerdiv}>

                <div className={classes.imageSection}>
                    <div className={classes.imageContainer}>
                        <img className={classes.image} src={image} alt="" />
                        <label for="upload" className={classes.uploadImage}>Upload Image of the Product</label>
                        <input id="upload" className={classes.fileUpload} onChange={onSelectFile} type="file" hidden />                    </div>
                    <div className={classes.textContainer}>
                        <div className={classes.formmove}>
                            <label className={classes.labels} htmlFor="Farm">Farm Name</label>
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


                    </div>
                </div>
                <div className={classes.formmove}>
                    <label className={classes.labels} htmlFor="email">Contact info</label>
                    <TextField fullWidth className={classes.textboxes} placeholder='phone' type="number" required value={contact} type="text" onChange={(e) => setContact(e.target.value)} />
                </div>
                <div className={classes.heads}>Days of Operation</div>
                <div className={classes.formmove}>
                    <Select
                        value={daysOfOperation}
                        className={classes.textboxes}
                        required
                        fullWidth
                        multiple
                        onChange={(e) => setDaysOfOperation(e.target.value)}
                    >
                        {
                            days.map((name, index) => {
                                return <MenuItem key={index} value={name}>{name}</MenuItem>
                            })
                        }
                    </Select>
                </div>

                <div className={classes.heads}>Hours of operation</div>
                <div className={classes.formmove}>
                    <TextField fullWidth className={classes.textboxes} placeholder='Set the opening hours' required value={hoursOfOperation} type="number" onChange={(e) => setHoursOfOperation(e.target.value)} />
                </div>

                <div className={classes.bigarea}>
                    <TextField rows="4" multiline fullWidth className={classes.textboxesbig} placeholder='Farm description...' required value={description} type="number" onChange={(e) => setDescription(e.target.value)} />

                </div>


                <div className={classes.btndiv}>

                   
                    <div className={classes.btnform}>
                        <Button type="submit" className={classes.addButton} variant="contained" ><span className={classes.btnname}> Save </span></Button>
                    </div>

                </div>

            </div>
        </form>

    )
}

