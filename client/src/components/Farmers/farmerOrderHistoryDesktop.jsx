import { Button, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div hidden={value !== index} id={`simple-tabpanel-${index}`}>
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
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
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
      <TabPanel value={value} index={2}>
        Problems
      </TabPanel>
    </Box>
  );
};

export default FarmerOrderHistory;
