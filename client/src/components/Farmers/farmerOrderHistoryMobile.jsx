import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import FarmerOrderItem from "./farmerOrderItem";

const FarmerOrderHistoryMobile = (props) => {
  const useStyles = makeStyles((theme) => ({
    farmOrderHistory: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#EEF6EE",
    },
    farmTotalSection: {
      width: "100%",
      textAlign: "center",
      backgroundColor: "#5BAF61",
      marginBottom: "10px",
      color: "#FFFFFF",
    },
    farmButtonsSection: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "80%",
      gap: "10px",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.farmOrderHistory}>
      <section className={classes.farmHeaderSection}>
        <h1 className={classes.farmHeader}>Order History</h1>
      </section>

      <section className={classes.farmTotalSection}>
        <p className={classes.farmTotal}>Total:</p>
        <p className={classes.farmDate}>Date:</p>
      </section>

      <Box className={classes.farmButtonsSection}>
        <Button type="button" variant="contained" color="secondary">
          New orders
        </Button>

        <Button type="button" variant="contained" color="secondary">
          In progress orders
        </Button>

        <Button type="button" variant="contained" color="secondary">
          Completed orders
        </Button>

        <Button type="button" variant="contained" color="secondary">
          Problem orders
        </Button>
        <FarmerOrderItem />
      </Box>
    </div>
  );
};

export default FarmerOrderHistoryMobile;
