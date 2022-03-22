import { Alert, Button, Skeleton, Snackbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FarmerProductItem from "./farmerProductItem";
import AddIcon from '@mui/icons-material/Add';
import { farmProducts } from "../../constants/constant";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/system";

const FarmerProductPage = () => {

    const useStyles = makeStyles((theme) => ({
        banner: {
            width: "100%"
        },
        farmProductContainer: {
            background: "#EEF6EE",
        },
        farmProductSubContainer: {
            background: "white",
            border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: "20px",

        },
        farmNameSection: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            padding: "20px"
        },
        farmName: {
            margin: 0
        },
        farmAddress: {
            margin: 0
        },
        farmPostSection: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            [theme.breakpoints.down("md")]: {
                padding: "20px"
            },
        },
        createPost: {
            textDecoration: "none",
            width: "100%",
            display: "flex",
            justifyContent: "center"
        },
        farmProducts: {
            display: "grid",
            padding: "0px 150px",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "4px",
            [theme.breakpoints.down("lg")]: {
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "30px",
            },
            [theme.breakpoints.down("md")]: {
                gridTemplateColumns: "auto auto auto",
                gap: "0px",
                padding: "20px"
            },
            [theme.breakpoints.down("sm")]: {
                gridTemplateColumns: "auto auto"
            },

        },
        productDescription: {
            [theme.breakpoints.down("sm")]: {
                margin: 0,
                textAlign: "center"
            },
        },
        createPostButton: {
            width: "343px",
            [theme.breakpoints.down("sm")]: {
                width: "100%"
            },
        }
    }));

    const classes = useStyles();

    const [farmProducts, setFarmProducts] = useState([]);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState('success');
    const [showData, setShowData] = useState(false);
    const [farmData, setFarmData] = useState({
        farmName: "There",
        address: "Please create",
        province: "a farm",
        zipCode: ""
    });

    useEffect(() => {
        fetchData();
        if (localStorage.getItem('farm-profile')) {
            setFarmData(JSON.parse(localStorage.getItem('farm-profile')));
        }
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/posts`);
            console.log(response, "Response");
            setMessage(response.data.message);
            setFarmProducts(response.data.data);
         
            setTimeout(() => {
                setShowData(true);
                setOpen(true);
                setSeverity('success');
            }, 2000);
        } catch (error) {
            setSeverity('error');
            setOpen(true);
            setMessage(error.response.data.message);
        }
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
        <div>
            <Snackbar anchorOrigin={anchorOrigin} open={open} autoHideDuration={3000} onClose={handleAlertClose}>
                <Alert className={classes.snackbar} onClose={handleAlertClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
            <img className={classes.banner} src="../../../assets/farmer_home_banner.jpg" alt="Home" />
            <div className={classes.farmProductContainer}>
                <section className={classes.farmNameSection}>
                    <h1 className={classes.farmName}>Hi! {farmData?.farmName}</h1>
                    <p className={classes.farmAddress}>{farmData?.address}, {farmData?.province}, {farmData?.zipCode}</p>
                </section>
                <div className={classes.farmProductSubContainer}>
                    <section className={classes.farmPostSection}>
                        <h3>Post something new!</h3>
                        <Link className={classes.createPost} to="../farmer/createpost"> <Button className={classes.createPostButton} type="button" variant="contained" color="secondary" endIcon={<AddIcon />}>Create new post</Button>
                        </Link>
                        <h3>View and Edit your products</h3>
                        <h4 className={classes.productDescription}>Here is the list of your products on sale, click in to the product to manage the list and update it.</h4>
                    </section>
                    <section>
                        {farmProducts.length === 0 ? <div style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "100px"}} >You need to add products to view them</div> : null}
                    </section>
                    <section className={classes.farmProducts}>
                        {
                            farmProducts.length !== 0  ?
                            farmProducts.map((item) => {
                                return (
                                    <>
                                        {
                                            !showData ? <Box sx={{ pt: 0.5 }} padding="30px">
                                                <Skeleton variant="rectangular" width={210} height={118} />
                                                <Skeleton />
                                                <Skeleton width="60%" />
                                            </Box> : <FarmerProductItem name={item.title} price={item.price} id={item._id} image={item.image} />
                                        }


                                    </>
                                )
                            }) : null
                        }
                    </section>
                </div>
            </div>
        </div>
    )
}


export default FarmerProductPage;