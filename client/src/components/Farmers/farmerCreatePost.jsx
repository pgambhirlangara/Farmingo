import React, { useEffect } from 'react'
import { Alert, Button, InputLabel, MenuItem, Select, Snackbar, Stack, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { categoryList } from '../../constants/constant';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function FarmerCreatePost() {

    const useStyles = makeStyles((theme) => ({
        maindiv: {
            height: "100vh",
            display: "grid",
            gridTemplateColumns: "60% 40%",
            backgroundColor: theme.palette.primary.a100,
            [theme.breakpoints.down("md")]: {
                gridTemplateColumns: "100%"
            },
        },
        divone: {
            backgroundImage: "url('../../assets/orderDetail.jpg'), linear-gradient(90deg, rgba(91, 175, 97, 0.5) 1.28%, rgba(248, 177, 51, 0.5) 105.7%);",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));",
            backgroundBlendMode: "multiply",
            backgroundPosition: "center",
            backgroundSize: "cover",
            [theme.breakpoints.down("md")]: {
                display: "none"
            },
            flex: "1.3",
        },
        divtwo: {
            padding: "40px 0px",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
            overflow: "auto",
            maxHeight: "calc(100% - 64px)"
        },
        headingone: {
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "end",
            padding: "40px"

        },

        head: {
            fontWeight: "bold"
        },
        farmeremail: {
            fontWeight: "bold",
            fontSize: "20px",
            marginLeft: "50px",
            marginTop: "10px",

        },
        line1: {
            width: "80%",
            border: "1px black solid",
            marginBottom: "10px",
        },
        mainline: {
            display: "flex",
            justifyContent: "center",
        },
        email: {

            textAlign: "center",
            marginBottom: "10px",

            textAlign: "center"

        },
        farmerphone: {
            fontSize: "20px",
            fontWeight: "bold",
            marginLeft: "50px"
        },
        phone: {
            marginBottom: "10px",
            textAlign: "center"
        },
        faq: {
            fontSize: "20px",
            fontWeight: "bold",
            marginLeft: "50px"
        },
        divthree: {
            border: "1px black solid",
            width: "70%",
            display: "flex",
            flexDirection: "column"

        },
        threeone: {
            width: "90%",
            display: "flex"

        },
        threeeach: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        },
        orderDetailContainer: {
            display: "grid",
            gridTemplateColumns: "30% 70%",
            gap: "20px",
            alignItems: "center",
            margin: "0px 80px",
            padding: "0px",
            background: "white",
            border: "1px solid #74C26C",
            borderRadius: "24px",
            [theme.breakpoints.down("md")]: {
                margin: "0px 20px"
            },
        },
        actionButton: {
            color: "white !important",
            height: 51
        },
        label: {
            fontWeight: "800 !important",
            color: "black"
        },
        actionButtonContainer: {
            width: "65%",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            marginTop: "30px",
            [theme.breakpoints.down("md")]: {
                width: "75%",
            },
        },
        orderDetailDescription: {
            padding: "8px"
        },
        orderDetailImage: {
            width: "100%",
            border: "1px solid green",
            borderRadius: "20px",
            height: "100%"
        },
        orderp: {
            margin: 0
        },
        orderDescTitle: {
            fontWeight: 800
        },
        form: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            justifyContent: "center"
        },
        formInput: {
            width: "60%",
            background: "white",
            [theme.breakpoints.down("md")]: {
                width: "85%",
            },
        },
        fileUpload: {
            background: "#F15A22",
            padding: "20px",
            borderRadius: "24px",
            color: "white",
            
        },
        uploadImage: {
            backgroundColor: "#F15A22",
            color: "white",
            cursor: "pointer",
            minWidth: "64px",
            height: "51px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "24px",
            fontWeight: "bold",
            fontSize: "0.875rem"
        }

    }));

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    const openGallery = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }



    const classes = useStyles();

    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState(0);
    const [harvestDate, setHarvestDate] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState("");
    const [severity, setSeverity] = useState('success');
    const [message, setMessage] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    const anchorOrigin = {
        vertical: "bottom",
         horizontal: "center"
    }


    const createPost = async (e) => {
        console.log(image);
        e.preventDefault();
        const post = {
            title: productName,
            category,
            stock,
            harvestDate,
            price,
            image,
            email: user.email,
            description
        }
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/posts/create`, post);

            setMessage(response.data.message);
            setOpen(true);
            setButtonDisabled(false);
            setSeverity('success');
            setTimeout(() => {
                navigate('../farmer/home');
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

        // Request will be sent from here in the future
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
    

    return (
        <>
            <div className={classes.maindiv}>
            <Snackbar anchorOrigin={anchorOrigin} open={open} autoHideDuration={3000} onClose={handleAlertClose}>
                <Alert className={classes.snackbar} onClose={handleAlertClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
                <div className={classes.divone}>
                </div>
                <div className={classes.divtwo}>
                    <div className={classes.headingone}>
                        <h2 className={classes.head}>Create a post of your product and view it in
                            your product listings</h2>
                    </div>
                    <form className={classes.form} onSubmit={createPost}>
                        <InputLabel className={classes.label}>Product Name</InputLabel>
                        <TextField value={productName} onChange={(e) => setProductName(e.target.value)} className={classes.formInput} type="text" placeholder="Name of the product..." />
                        <InputLabel className={classes.label}>Category</InputLabel>
                        <Select
                            placeholder="Your Province"
                            value={category}
                            required
                            className={classes.formInput}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            {
                                categoryList.map(({ name, id }, index) => {
                                    return <MenuItem key={index} value={name}>{name}</MenuItem>
                                })
                            }
                        </Select>
                        <InputLabel className={classes.label}>Stock (in lb)</InputLabel>
                        <TextField className={classes.formInput} type="number" placeholder="in LB..." onChange={(e) => setStock(e.target.value)} />
                        <InputLabel className={classes.label}>Harvest Day</InputLabel>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Stack className={classes.formInput}
                                spacing={3}>
                                <DesktopDatePicker
                                    inputFormat="MM/dd/yyyy"
                                    value={harvestDate}
                                    onChange={(date) => setHarvestDate(date)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Stack>
                        </LocalizationProvider>
                        <InputLabel className={classes.label}>Price</InputLabel>
                        <TextField className={classes.formInput} type="number" placeholder="in CAD" onChange={(e) => setPrice(e.target.value)} />
                        <InputLabel className={classes.label}>Product Description</InputLabel>
                        <TextField className={classes.formInput} type="text" onChange={(e) => setDescription(e.target.value)} multiline placeholder="Nutrition Facts...." />
                        <div className={classes.actionButtonContainer}>
                                <label for="upload"  className={classes.uploadImage}>Upload Image of the Product</label>
                                <input id="upload" className={classes.fileUpload} onChange={onSelectFile} type="file" hidden />
                            <Button type="submit" variant='contained' className={classes.actionButton}>Create a post </Button>
                        </div>

                    </form>

                    {/* <FarmerGallery open={open} handleClose={handleClose}  /> */}

                </div>
            </div>
        </>
    )
}
