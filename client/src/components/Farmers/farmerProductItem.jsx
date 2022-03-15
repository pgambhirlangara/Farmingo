import { Button, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const FarmerProductItem = (props) => {

    const useStyles = makeStyles((theme) => ({
        image: {
            width: "100%"
        },
        productContainer: {
            padding: "20px",
            border: `2px solid ${theme.palette.primary.main}`,
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            margin: "20px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
            backgroundColor: "rgba(209, 243, 209, 0.4) !important",
           
        },
        productTitle: {
            margin: 0,
            fontWeight: 800,
            textAlign: "center"
        },
        productPrice: {
            margin: 0
        },
        editButton: {
            color: "white !important",
            width: "80% !important"
        },
        editButtonContainer: {
            textDecoration: "none"
        }
    }));

    const classes = useStyles();

    return (
        <Paper className={classes.productContainer}>
            <img className={classes.image} src={props.image} alt={props.name} />
            <h4 className={classes.productTitle}>{props.name}</h4>
            <p className={classes.productPrice}>{props.price}</p>
            <Link to={`../farmer/product/${props.id}`} className={classes.editButtonContainer}>
                <Button className={classes.editButton} variant="contained">Edit</Button>
            </Link>
        </Paper>
    )
}

export default FarmerProductItem;