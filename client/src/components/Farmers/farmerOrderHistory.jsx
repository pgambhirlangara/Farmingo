import { Button, Skeleton } from "@mui/material";
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
import { useState } from "react";
import { useEffect } from "react";

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
  top: 330px;
  background-color: white;
  z-index: 100;
  position: absolute;
  width: 60vw;
  padding: 50px 35px;
  border: 1px solid #74c26c;
  border-radius: 0 24px 24px 24px;
  @media (min-width: 1900px) {
    top: 330px;
  }
  @media (min-width: 1700px) and (max-width: 1900px) {
    top: 320px;
  }
  @media (min-width: 1300px) and (max-width: 1700px) {
    top: 315px;
  }
  @media (min-width: 900px) and (max-width: 1300px) {
    top: 300px;
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
      letterSpacing: "1px",
    },
    totalDesktopHeader: {
      margin: "20px",
      marginTop: "85px",
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
    tabSpan: {
      marginTop: "10px",
    },
  }));

  const classes = useStyles();
  const [showData, setShowData] = useState(false);
  const [total, setTotal] = useState(623);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(orderHistory);
    changeTab();
  }, []);

  const changeTab = () => {
    setShowData(false);
    setTimeout(() => {
      setShowData(true);
    }, 2000);
  };

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
          <h2 className={classes.totalDesktopHeader}>Total: ${total}</h2>
        </Box>
        <Box className={classes.orderDesktop}>
          <h1>Order History</h1>
        </Box>
        <Box className={classes.desktopContainer}>
          <TabsUnstyled defaultValue={0} onChange={changeTab}>
            <TabsList>
              <Tab>
                <span className={classes.tabSpan}>New Orders</span>
              </Tab>
              <Tab>
                <span className={classes.tabSpan}>In Progress</span>
              </Tab>
              <Tab>
                <span className={classes.tabSpan}>Completed</span>
              </Tab>
              <Tab>
                <span className={classes.tabSpan}>Problems</span>
              </Tab>
            </TabsList>
            <TabPanel value={0}>
              <div className={classes.panelContainer}>
                <div className={classes.panelContainer}>
                  {data.map((item) => {
                    if (item.new) {
                      if (!showData) {
                        console.log("hello");
                        return (
                          <Box sx={{ pt: 0.5 }} padding="30px">
                            <Skeleton
                              variant="rectangular"
                              width={140}
                              height={118}
                            />
                            <Skeleton width={140} />
                            <Skeleton width="40%" />
                          </Box>
                        );
                      } else {
                        return <FarmerOrderItem data={item} />;
                      }
                    }
                  })}
                </div>
              </div>
            </TabPanel>
            <TabPanel value={1}>
              {" "}
              <div className={classes.panelContainer}>
                <div className={classes.panelContainer}>
                  {data.map((item) => {
                    if (!item.complete) {
                      if (!showData) {
                        return (
                          <Box sx={{ pt: 0.5 }} padding="30px">
                            <Skeleton
                              variant="rectangular"
                              width={140}
                              height={118}
                            />
                            <Skeleton width={140} />
                            <Skeleton width="40%" />
                          </Box>
                        );
                      } else {
                        return <FarmerOrderItem data={item} />;
                      }
                    }
                  })}
                </div>
              </div>
            </TabPanel>
            <TabPanel value={2}>
              {" "}
              <div className={classes.panelContainer}>
                <div className={classes.panelContainer}>
                  {orderHistory.map((data) => {
                    if (data.complete) {
                      return <FarmerOrderItem data={data} />;
                    }
                  })}
                </div>
              </div>
            </TabPanel>
            <TabPanel value={3}>
              {" "}
              <div className={classes.panelContainer}>
                <div className={classes.panelContainer}>
                  {orderHistory.map((data) => {
                    if (data.issue) {
                      return <FarmerOrderItem data={data} />;
                    }
                  })}
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
