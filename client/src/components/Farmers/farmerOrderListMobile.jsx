import { Button, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import FarmerOrderItem from "./farmerOrderItem";

const FarmerOrderHistory = (props) => {
  return (
    <Box>
      <FarmerOrderItem />
      <FarmerOrderItem />
      <FarmerOrderItem />
    </Box>
  );
};

export default FarmerOrderHistory;
