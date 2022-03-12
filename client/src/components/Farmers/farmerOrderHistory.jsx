import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import FarmerOrderItem from "./farmerOrderItem";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import { styled } from "@mui/system";

const Tab = styled(TabUnstyled)`
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: #c04718;
  width: 200px;
  padding: 12px 16px;
  margin: 6px 6px;

  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
  }

  &:focus {
    color: #fff;
    border-radius: 3px;

    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #f15a22;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;

    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  width: 63vw;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;

const FarmerOrderHistory = (props) => {
  const useStyles = makeStyles((theme) => ({
    mobileView: {
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },

    desktopView: {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
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
      width: "90%",
      gap: "10px",
    },

    desktopContainer: {
      display: "flex",
      justifyContent: "center",
    },
  }));

  const classes = useStyles();

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
        <Box className={classes.desktopContainer}>
          <TabsUnstyled defaultValue={0}>
            <TabsList>
              <Tab>New Orders</Tab>
              <Tab>In Progress </Tab>
              <Tab>Completed</Tab>
              <Tab>Problems</Tab>
            </TabsList>
            <TabPanel value={0}>First content</TabPanel>
            <TabPanel value={1}>Second content</TabPanel>
            <TabPanel value={2}>Third content</TabPanel>
            <TabPanel value={3}>Third content</TabPanel>
          </TabsUnstyled>
        </Box>
      </Box>
    </Box>
  );
};

export default FarmerOrderHistory;
