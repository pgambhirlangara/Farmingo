import { Button, Grid, ListItemSecondaryAction } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerProductItem from "./customerProductItem";

const CustomerProduct = () => {


    const useStyles = makeStyles((theme) => ({
        buttonContainer: {
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            margin: "40px"
        },
        payButton: {
            color: "white !important"
        }
    }))

    const [products, setProducts] = useState([]);
    const classes = useStyles();
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [item, setItem] = useState();
    const [totalAmount, setTotalAmount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
       if(item > 0) {
           setButtonDisabled(false);
       }

       if (item === 0) {
           setButtonDisabled(true);
       }
    } , [item])

    useEffect(async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/posts`);
        setProducts(response.data.data);
    }, [])

    const payNow = () => {
        localStorage.setItem('orderAmount', JSON.stringify(totalAmount))
        navigate('../customer/payment');
    }

    const updateData = (items, data) => {
        setTotalAmount(+totalAmount + +data.price);
        setItem(items);
    }

    return (
        <Grid container spacing={2}>

            {
                products.map((data) => {
                    return (
                        <Grid item xs={4}> <CustomerProductItem addItems={(items, data) => updateData(items, data)} data={data} /> </Grid>
                    )
                })
            }
           <div className={classes.buttonContainer}>
           <Button disabled={buttonDisabled}  className={classes.payButton} variant="contained" onClick={payNow}>Pay Now!</Button>
           </div>
        </Grid>
    )
}

export default CustomerProduct;