import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const FarmerOrderItem = ({ data }) => {
  const useStyles = makeStyles((theme) => ({
    farmOrderItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: 25,
      border: "2px solid #74C26C",
      width: "18vw",
      height: "80px",
      backgroundColor: "#FFFFFF",
    },
    farmLeft: {
      margin: "15px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginLeft: "15px",
    },
    farmRight: {
      margin: "15px",
      marginLeft: "15px",
    },
    header: {
      fontSize: "1.4vw",
      fontFamily: "Nunito",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "30px",
      margin: "0",
      color: "black",
    },
    paragraph: {
      color: "rgba(38, 38, 38, 0.6)",
      lineHeight: "30px",
      margin: "0",
      fontSize: "0.9vw",
      fontFamily: "Nunito",
      fontStyle: "normal",
      fontWeight: "600",
    },
    total: {
      backgroundColor: "#FDC350",
      border: "0.3vw solid #FDC350",
      borderRadius: 25,
      width: "6vw",
      margin: "0",
      textAlign: "center",
      display: "inline-block",
      fontSize: "1vw",
      fontFamily: "Nunito",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "30px",
      color: "black",
    },
    orderItemContainer: {
      textDecoration: "none",
    },
  }));

  const classes = useStyles();

  return (
    <Link
      className={classes.orderItemContainer}
      to={`../farmer/orderdetails/${data.id}`}
    >
      <Box className={classes.farmOrderItem}>
        <Box className={classes.farmLeft}>
          <h1 className={classes.header}>{data.name}</h1>
          <p className={classes.paragraph}>{data.orderDate}</p>
        </Box>
        <Box className={classes.farmRight}>
          <p className={classes.total}>Total: {data.total}</p>
        </Box>
      </Box>
    </Link>
  );
};

export default FarmerOrderItem;
