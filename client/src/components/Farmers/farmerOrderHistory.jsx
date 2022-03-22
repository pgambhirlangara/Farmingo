import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FarmerOrderItem from "./farmerOrderItem";
import {
  TabUnstyled,
  TabsUnstyled,
  TabsListUnstyled,
  TabPanelUnstyled,
  tabUnstyledClasses,
} from "@mui/base";

import { styled, Box } from "@mui/system";
import { orderHistory } from "../../constants/constant";

const Tab = styled(TabUnstyled)`
  color: white;
  cursor: pointer;
  background-color: #c04718;
  width: 13vw;
  height: 100px;
  padding: 12px 16px;
  margin: 6px 6px;
  margin-left: 0;
  text-align: center;
  border: none;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  font-size: 1.3vw;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  line-height: 30px;

  &.${tabUnstyledClasses.selected} {
    background-color: #f15a22;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  height: 450px;
  top: 230px;
  background-color: white;
  z-index: 100;
  position: absolute;
  width: 60vw;
  padding: 50px 35px;
  border: 1px solid #74c26c;
  border-radius: 0 24px 24px 24px;
  @media (min-width: 1900px) {
    top: 280px;
  }
  @media (min-width: 1700px) and (max-width: 1900px) {
    top: 270px;
  }
  @media (min-width: 1300px) and (max-width: 1700px) {
    top: 250px;
  }
  @media (min-width: 1000px) and (max-width: 1300px) {
    top: 240px;
  }
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  width: 63vw;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  min-height: 650px;
`;

const FarmerOrderHistory = (props) => {
  const useStyles = makeStyles((theme) => ({
    desktopView: {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      backgroundColor: "#EEF6EE",
    },
    desktopContainer: {
      display: "flex",
      justifyContent: "center",
    },

    panelContainer: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "20px",
    },

    totalDesktop: {
      fontSize: "1.4vw",
      fontWeight: "800",
      lineHeight: "30px",
      backgroundColor: "#57A85D",
      color: "#FFFFFF",
      width: "100%",
      textAlign: "center",
    },
    totalDesktopHeader: {
      margin: "25px",
    },
    orderDesktop: {
      marginTop: "40px",
      fontSize: "0.8vw",
      fontWeight: "800",
      lineHeight: "30px",
    },
    mobileView: {
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
      backgroundColor: "#EEF6EE",
    },
    farmOrderHistory: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#EEF6EE",
      height: "100%",
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
      width: "93vw",
      gap: "20px",
    },

    farmButton: {
      height: "50px",
    },
  }));

  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.mobileView}>
        <Box className={classes.farmOrderHistory}>
          <section className={classes.farmHeaderSection}>
            <h1 className={classes.farmHeader}>Order History</h1>
          </section>

          <section className={classes.farmTotalSection}>
            <p className={classes.farmTotal}>Total:</p>
            <p className={classes.farmDate}>Date:</p>
          </section>

          <Box className={classes.farmButtonsSection}>
            <Button
              className={classes.farmButton}
              type="button"
              variant="contained"
              color="secondary"
            >
              New orders
            </Button>

            <Button
              className={classes.farmButton}
              type="button"
              variant="contained"
              color="secondary"
            >
              In progress orders
            </Button>

            <Button
              className={classes.farmButton}
              type="button"
              variant="contained"
              color="secondary"
            >
              Completed orders
            </Button>

            <Button
              className={classes.farmButton}
              type="button"
              variant="contained"
              color="secondary"
            >
              Problem orders
            </Button>
            {/* <FarmerOrderItem /> */}
          </Box>
        </Box>
      </Box>
      <Box className={classes.desktopView}>
        <Box className={classes.totalDesktop}>
          <h2 className={classes.totalDesktopHeader}>Total: $1200.85</h2>
        </Box>
        <Box className={classes.orderDesktop}>
          <h1>Order History</h1>
        </Box>
        <Box className={classes.desktopContainer}>
          <TabsUnstyled defaultValue={0}>
            <TabsList>
              <Tab>New Orders</Tab>
              <Tab>In Progress </Tab>
              <Tab>Completed</Tab>
              <Tab>Problems</Tab>
            </TabsList>
            <TabPanel value={0}>
            {" "}
              <div className={classes.panelContainer}>
                <div className={classes.panelContainer}>
                {
                  orderHistory.map((data) => {
                    return <FarmerOrderItem data={data} />
                  })
                }
                </div>
              </div>
            </TabPanel>
            <TabPanel value={1}>
              {" "}
              <div className={classes.panelContainer}>
                <div className={classes.panelContainer}>
                {
                  orderHistory.map((data) => {
                    return <FarmerOrderItem data={data} />
                  })
                }
              </div>
              </div>
            </TabPanel>
            <TabPanel value={2}>
              {" "}
              <div className={classes.panelContainer}>
              <div className={classes.panelContainer}>
                {
                  orderHistory.map((data) => {
                    return <FarmerOrderItem data={data} />
                  })
                }
                </div>
              </div>
            </TabPanel>
            <TabPanel value={3}>
              {" "}
              <div className={classes.panelContainer}>
              <div className={classes.panelContainer}>
                {
                  orderHistory.map((data) => {
                    return <FarmerOrderItem data={data} />
                  })
                }
                </div>
              </div>
            </TabPanel>
          </TabsUnstyled>
        </Box>
      </Box>
    </Box>
  );
};

export default FarmerOrderHistory;
