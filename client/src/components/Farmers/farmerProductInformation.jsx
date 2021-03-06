import { Button, Card, CardActions, CardContent, Alert, Snackbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const FarmerProductInformation = () => {

    const useStyles = makeStyles((theme) => ({
        mainImage: {
            width: "100%",
            height: "100%"
        },
        buttonContainer: {
            display: "flex",
            justifyContent: "space-evenly"
        },
        button: {
            color: "white !important"
        },
        editButton: {
            width: "50%",
            margin: "auto"
        },
        mainActionButtonContainer: {
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            flexDirection: "column",
            alignItems: "center"
        },
        productImage: {
            width: "339px",
            borderRadius: "24px"
        },
        productDescriptionContainer: {
            padding: "20px 0px",
            borderRadius: "24px !important",
            textAlign: "center",
            height: "100%",
            width: "100%",
            border: "1px solid #74C26C"
        },
        divone: {
            backgroundImage: "url('../../../assets/farmer_information_image.jpg'), linear-gradient(90deg, rgba(91, 175, 97, 0.5) 1.28%, rgba(248, 177, 51, 0.5) 105.7%);",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));",
            backgroundBlendMode: "multiply",
            backgroundPosition: "center",
            backgroundSize: "cover",
            [theme.breakpoints.down("md")]: {
                display: "none"
            },
            flex: "1.3",
            height: "100%"
        },
        productInfoContainer: {
            textAlign: "center",
            display: "grid",
            justifyContent: "center",
            flexDirection: "column !important",
            gap: "20px",
            padding: "40px 0px",
            overflow: "auto",
            maxHeight: "calc(100% - 64px)"
        },
        productContainer: {
            background: "#EEF6EE",
            height: "100vh",
            display: "grid",
            gridTemplateColumns: "60% 40%",
            backgroundColor: theme.palette.primary.a100,
            [theme.breakpoints.down("md")]: {
                gridTemplateColumns: "100%"
            },
        },
        priceContainer: {
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%"
        },
        farmName: {
            marginBottom: 0
        },
        productName: {
            margin: 0,
            fontSize: "28px"
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
            alignItems: "center",
            padding: "40px",
            flexDirection: "column"
        },
        mainContent: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            justifyContent: "center"
        },
        editButtonContainer: {
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            width: "100%"
        }
    }));

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState('success');
    const [farmProduct, setFarmProduct] = useState({});
    const [hidden, setHidden] = useState(false);


    
    let { id } = useParams();
    const anchorOrigin = {
        vertical: "bottom",
         horizontal: "center"
    }

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    

    useEffect(() => {
        window.scrollTo(0, 0)
        fetchData();
    }, []);

    const updatePostStatus = async (isHidden) => {
        const updateFarm = {...farmProduct, hide: isHidden};
        try {
            const response = await axios.put(`${process.env.REACT_APP_API_URL}/posts/${id}`, updateFarm);
            setMessage(response.data.message);
            setHidden(true ? isHidden : false);
            setOpen(true);
            // setButtonDisabled(false);
            setSeverity('success');
        } catch (error) {
            setSeverity('error');
            setOpen(true);
            // setButtonDisabled(false);
            setMessage(error.response.data.message);
        }
    }

    const fetchData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}`);
            console.log(response.data.data, "Response");
            setHidden(true ? response.data.data.hide : false);
            setMessage(response.data.message);
            setFarmProduct(response.data.data);
            setOpen(true);
            setSeverity('success');

        } catch (error) {
            setSeverity('error');
            setOpen(true);
            setMessage(error.response.data.message);
        }
    }


    return (
        <div className={classes.productContainer}>
             <Snackbar anchorOrigin={anchorOrigin} open={open} autoHideDuration={3000} onClose={handleAlertClose}>
                <Alert className={classes.snackbar} onClose={handleAlertClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
            <div className={classes.divone}>
            </div>
            <div className={classes.divtwo}>
                <div className={classes.headingone}>
                <h4 className={classes.farmName}>Cloverdale Market Farm</h4>
                <h3 className={classes.productName}>{farmProduct.title}</h3>
                </div>
                <div className={classes.mainContent}>
                <img className={classes.productImage} src={`${farmProduct.image}`} alt="" />
                <div className={classes.priceContainer}>
                    <span>${farmProduct.price}/lb</span>
                    <span>{farmProduct.stock}/lb</span>
                    <span>Created on {new Date(farmProduct.createdAt).toLocaleDateString()}</span>
                </div>
                <Card className={classes.productDescriptionContainer}>
                    <h3>Product description</h3>
                    <CardContent>
                        <p>{farmProduct.description}</p>
                    </CardContent>
                    <CardActions className={classes.buttonContainer}>
                        <Button disabled={!hidden} className={classes.button} onClick={() => updatePostStatus(false)} variant="contained" color="secondary">Active Post</Button>
                        <Button disabled={hidden} className={classes.button} onClick={() => updatePostStatus(true)} variant="contained" color="primary">Hide Post</Button>
                    </CardActions>
                    <div className={classes.mainActionButtonContainer}>
                        <Link className={classes.editButtonContainer} to={`../farmer/product/edit/${id}`}>
                        <Button className={classes.editButton} variant="outlined" color="secondary">Edit Details</Button>
                        </Link>
                        <Button className={classes.saveButton} color="primary">Save</Button>
                    </div>
                </Card>
                </div>
            </div>
        </div>
    )
}

export default FarmerProductInformation;