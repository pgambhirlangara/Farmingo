import { Button, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const FarmerOrderItem = (props) => {
  const useStyles = makeStyles((theme) => ({
    farmOrderItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: 25,
      border: "2px solid #74C26C",
      width: "340px",
      height: "90px",
      backgroundColor: "#FFFFFF",
    },
    farmLeft: {
      margin: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    farmRight: {
      margin: "10px",
    },
    header: {
      fontSize: "24px",
      margin: "0",
    },
    paragraph: {
      fontSize: "16px",
      color: "rgba(38, 38, 38, 0.6)",
      lineHeight: "30px",
      margin: "0",
    },
    total: {
      backgroundColor: "#FDC350",
      border: "7px solid #FDC350",
      borderRadius: 25,
      width: "140px",
      margin: "0",
      textAlign: "center",
      display: "inline-block",
      fontSize: "20px",
    },
  }));

  const classes = useStyles();

  return (
    <Box className={classes.farmOrderItem}>
      <Box className={classes.farmLeft}>
        <h1 className={classes.header}>Store name</h1>
        <p className={classes.paragraph}>01/01/2001</p>
      </Box>
      <Box className={classes.farmRight}>
        <p className={classes.total}>Total: $600</p>
      </Box>
    </Box>
  );
};

export default FarmerOrderItem;
