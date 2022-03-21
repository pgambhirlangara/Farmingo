import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  MenuItem,
  Divider,
  Link,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { headersData } from "../../constants/constant";

const useStyles = makeStyles((theme) => ({
  header: {
    paddingRight: "79px",
    height: "64px",
    backgroundColor: "white !important",
    paddingLeft: "118px",
    boxShadow: "none !important",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
    [theme.breakpoints.down("md")]: {
      backgroundColor: "transparent !important",
    },
  },
  menuButton: {
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    margin: "0px 20px",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
    backgroundColor: "#EEF6EE",
    height: "100%",
  },
  farmingoLogoImage: {
    width: "200px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  headerMenuIcon: {
    width: "50px",
    height: "24px",
  },
  mobileToolbar: {
    width: "400px !important",
  },
  menuList: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid #cdcdcd",
    },
  },
  lastMenuItem: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid #cdcdcd",
      backgroundColor: `${theme.palette.secondary.main} !important`,
      color: "white !important"
    },
  },
  lastMenu: {
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
    backgroundColor: `${theme.palette.secondary.main} !important`,
    color: "white !important"
  }
}));

export default function Header() {
  const {
    header,
    menuButton,
    toolbar,
    drawerContainer,
    farmingoLogoImage,
    headerMenuIcon,
    menuList,
    lastMenu,
    lastMenuIcon,
    lastMenuItem
  } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {farmingoLogo}
        <div>
          {getMenuButtons()}
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            {getDrawerChoices()}
          </div>
        </Drawer>

        <div>{farmingoLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href, icon }, index) => {
      return (
        <Link
          className={index == 4 ? lastMenuItem : menuList}
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          {/* <Box display="flex" gap="5px" alignItems="center"> */}
          <img className={headerMenuIcon} src={icon} alt="image" />
          <MenuItem>{label}</MenuItem>

          <Divider />
        </Link>
      );
    });
  };

  const farmingoLogo = (
   <RouterLink to="/">
    <img
      className={farmingoLogoImage}
      src="/assets/HORIZONTAL.png"
      alt="logo"
    />
    </RouterLink>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href, icon }, index) => {
      return (
        <>
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: index == 4 ? lastMenu : menuButton,
            }}
          >
            <img className={headerMenuIcon} src={icon} alt="image" />
            {label}
          </Button>
        </>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
