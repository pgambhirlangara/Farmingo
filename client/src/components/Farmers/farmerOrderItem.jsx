import { Button, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useState } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

const FarmerOrderItem = (props) => {
  const useStyles = makeStyles((theme) => ({
    farmOrderItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: 25,
      border: "2px solid #74C26C",
    },
    farmLeft: {
      margin: "10px",
    },
    farmRight: {
      margin: "10px",
    },
  }));

  const classes = useStyles();

  return (
    <Paper className={classes.farmOrderItem}>
      <Box className={classes.farmLeft}>
        <h1>Store name</h1>
        <p>01/01/2001</p>
      </Box>
      <Box className={classes.farmRight}>
        <Button type="button" variant="contained">
          Total: $600
        </Button>
      </Box>
    </Paper>
  );
};

export default FarmerOrderItem;
