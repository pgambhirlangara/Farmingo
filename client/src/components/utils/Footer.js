import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const Footer = () => {
  const useStyles = makeStyles((theme) => ({
    footer: {
      background: "#182918",
      position: "fixed",
      bottom: 0,
      width: "100%",
      display: "grid",
      gridTemplateColumns: "30% 40% 30%",
      justifyContent: "space-around",
      alignItems: "center",
      gap: "20px",
      padding: 10,
      color: "white",
      [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "100%",
        padding: 0,
        textAlign: "center"
    }
    },
    arrowButton: {
      background: "#FDC350 !important",
      width: "fit-content",
      marginRight: "20px",
    },
    arrowIcon: {
      width: "16px",
      height: "16px",
    },
    footerLogo: {
      width: "100px",
      [theme.breakpoints.down("md")]: {
        display: "none"
      }
    },
    link: {
      textDecoration: "none",
      color: "white",
    },
    footerRightSection: {
      display: "flex",
      color: "white",
      gap: "30px",
      [theme.breakpoints.down("md")]: {
        justifyContent: "center"
      }
    },
    textField: {
      width: "50%",
    },
    emailContainer: {
      display: "grid",
      gap: "20px",
      [theme.breakpoints.down("md")]: {
        display: "none"
      }
    },
    textFieldContainer: {
        display: "flex", 
        alignItems: "center",
        gap: "20px",
        justifyContent: "center"
    }
  }));

  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.footerLeftSection}>
        <img
          className={classes.footerLogo}
          src="./assets/team3_farmingo_positive_final.png"
          alt="logo"
        />
      </div>
      <div className={classes.emailContainer}>
        <div className={classes.textFieldContainer}>
          <TextField
            color="secondary"
            className={classes.textField}
            placeholder="Email"
          />
          <Button className={classes.arrowButton} variant="contained">
            <img
              className={classes.arrowIcon}
              alt="arrow"
              src="./assets/arrow.png"
            />
          </Button>
        </div>
        {/* <div>Subscrible to keep up with the latest news</div>
        <div>
          By submitting this form you acknowledge that you have the terms of our
          Privacy Statements
        </div> */}
      </div>

      <div className={classes.footerRightSection}>
        <Link className={classes.link} to="/farmer/home">
          Home
        </Link>
        <Link className={classes.link} to="/farmer/home">
          Services
        </Link>
        <Link className={classes.link} to="/farmer/home">
          Contact
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
