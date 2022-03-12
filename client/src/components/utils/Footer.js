import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const Footer = () => {
  const useStyles = makeStyles((theme) => ({
    footer: {
      background: "#182918",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "70% 30%",
      justifyContent: "space-around",
      alignItems: "center",
      gap: "20px",
      padding: 10,
      color: "white",
      [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "100%",
        padding: 0,
        textAlign: "center",
        paddingBottom: "20px"
      },
    },
    arrowButton: {
      background: "#FDC350 !important",
      marginRight: "20px",
      height: "100%",
      width: "98px",
      flexBasis: "20%"
    },
    arrowIcon: {
      width: "16px",
      height: "16px",
    },
    footerLogo: {
      width: "100px",
    },
    link: {
      textDecoration: "none",
      color: "white",
    },
    footerLeftSection: {
      padding: "0px 150px",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      [theme.breakpoints.down("md")]: {
        padding: "8px",
        alignItems: "center"
      },
    },
    footerRightSection: {
      display: "flex",
      color: "white",
      gap: "10px",
      flexDirection: "column",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        justifyContent: "center",
        flexDirection: "row"
      },
    },
    textField: {
      width: "50%",
      background: "#d1d4d1", // Check with Designers
      borderRadius: "10px",
      flexBasis: "80%",
    },
    emailContainer: {
      display: "grid",
      gap: "20px",
    },
    textFieldContainer: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      [theme.breakpoints.down("md")]: {
        justifyContent: "center",
      },
    },
    footerTitle: {
      margin: 0
    },
    footerSubtitle: {
      margin: 0
    }
  }));

  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.footerLeftSection}>
        <img
          className={classes.footerLogo}
          src="../assets/team3_farmingo_positive_final.png"
          alt="logo"
        />
        <h3 className={classes.footerTitle}>Subscribe to keep up with the latest news</h3>
        <div className={classes.emailContainer}>
          <div className={classes.textFieldContainer}>
            <TextField
            id="subscribeInput"
              color="secondary"
              className={classes.textField}
              placeholder="Email"
            />
            <Button className={classes.arrowButton} variant="contained">
              <img
                className={classes.arrowIcon}
                alt="arrow"
                src="../assets/arrow.png"
              />
            </Button>
          </div>
          <p className={classes.footerSubtitle}>
            by submitting this form,you acknowledge that you have the terms of
            our Privacy Statement
          </p>
        </div>
      </div>

      <div className={classes.footerRightSection}>
        <Link className={classes.link} to="/farmer/home">
          Solutions
        </Link>
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
