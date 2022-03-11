import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import FarmerOrderItem from "./farmerOrderItem";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div hidden={value !== index} id={`simple-tabpanel-${index}`}>
      {value === index && (
        <Box>
          <FarmerOrderItem />
          <FarmerOrderItem />
          <FarmerOrderItem />
          <FarmerOrderItem />
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const FarmerOrderHistory = (props) => {
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

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box className={classes.mobileView}>
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
            {/* <FarmerOrderItem /> */}
          </Box>
        </div>
      </Box>
      <Box className={classes.desktopView}>
        <Box>
          <Box>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="New Orders" />
              <Tab label="In Progress" />
              <Tab label="Completed" />
              <Tab label="Problems" />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            New Orders
          </TabPanel>
          <TabPanel value={value} index={1}>
            In Progress
          </TabPanel>
          <TabPanel value={value} index={2}>
            Completed
          </TabPanel>
          <TabPanel value={value} index={3}>
            Problems
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
};

export default FarmerOrderHistory;
