import { Button, Card, CardActions, CardContent, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const FarmerProductInformation = () => {

    const useStyles = makeStyles((theme) => ({
        mainImage: {
            width: "100%"
        },
        buttonContainer: {
            display: "flex",
            justifyContent: "space-evenly"
        },
        button: {
            color: "white"
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
            width: "100%",
        },
        productDescriptionContainer: {
            padding: "20px",
            borderRadius: "24px"
        },
        productInfoContainer: {
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column !important",
            gap: "20px",
            padding: "40px !important",
        },
        productContainer: {
            background: "#EEF6EE"
        },
        priceContainer: {
            display: "flex",
            justifyContent: "space-evenly"
        },
        farmName: {
            margin: 0
        },
        productName: {
            margin: 0
        },
    }));

    const classes = useStyles();

    return (
        <Grid container spacing={2} className={classes.productContainer}>
            <Grid item md={8} sx={{ display: { xs: 'none', md: 'block' } }}>
                <img className={classes.mainImage} src="../../../assets/farmer_information_image.jpg" alt="Farmer" />
            </Grid>
            <Grid item md={4} className={classes.productInfoContainer}>
                <h4 className={classes.farmName}>Cloverdale Market Farm</h4>
                <h3 className={classes.productName}>Apple Pink Lady</h3>
                <img className={classes.productImage} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apples-at-farmers-market-royalty-free-image-1627321463.jpg?crop=1.00xw:0.631xh;0.00160xw,0.206xh&resize=1200:*" alt="" />
                <div className={classes.priceContainer}>
                    <span>$1.49/lb</span>
                    <span>25/lb</span>
                    <span>Created on 27/01/22</span>
                </div>
                <Card className={classes.productDescriptionContainer}>
                    <h3>Product description</h3>
                    <CardContent>
                        <p>Pink Lady Apples (1 apple) contians 18.5g total carbs. 16g carbs, 0.1g fat, 0.5g protein and 72 calories</p>
                    </CardContent>
                    <CardActions className={classes.buttonContainer}>
                            <Button className={classes.button} variant="contained" color="secondary">Active Post</Button>
                            <Button className={classes.button} variant="contained" color="primary">Hide Post</Button>
                    </CardActions>
                    <div className={classes.mainActionButtonContainer}>
                    <Button className={classes.editButton} variant="outlined" color="secondary">Edit Details</Button>
                    <Button className={classes.saveButton} color="primary">Save</Button>
                    </div>
                </Card>
            </Grid>
        </Grid>
    )
}

export default FarmerProductInformation;