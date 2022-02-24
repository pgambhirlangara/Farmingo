import { useState } from "react";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import ButtonComponent from "../../utils/button";
import InputComponent from "../../utils/input";

const FarmerSignup = () => {

    const useStyles = makeStyles((theme) => ({
        farmerSignup: {
            backgroundColor: theme.palette.primary.a100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px"
        },
        farmerSignupHeading: {
            color: "#182918",
            margin: 0,
        },
        farmerSignupSubHeading: {
            margin: 0,
            padding: "0px 80px"
        },
        farmerSignupContent: {
            backgroundColor: "white",
            width: "50%",
            padding: "50px",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            border: `1px solid ${theme.palette.primary.main}`
        },
        formControl: {
            display: "flex",
            flexDirection: "column",
        },
        buttonContainer: {
            textAlign: "center"
        }
    }));

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [contact, setContact] = useState(0);
    const [address, setAddress] = useState("");

    const classes = useStyles();

    const signup = async (e) => {
        e.preventDefault();
    }

    return (
        <form className={classes.farmerSignup}>
            <h2 className={classes.farmerSignupHeading}>Create a profile</h2>
            <h3 className={classes.farmerSignupSubHeading}></h3>
            <div className={classes.farmerSignupContent}>
                <div className={classes.formControl}>
                    <label htmlFor="name">Name</label>
                    <InputComponent onChange={(e) => setName(e.target.value)} />
                </div>
                <div className={classes.formControl}>
                    <label htmlFor="email">Email</label>
                    <InputComponent type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={classes.formControl}>
                    <label htmlFor="contact">Contact</label>
                    <InputComponent type="number" onChange={(e) => setContact(e.target.value)} />
                </div>
                <div className={classes.formControl}>
                    <label htmlFor="address">Address</label>
                    <InputComponent  onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className={classes.formControl}>
                    <label htmlFor="password">Password</label>
                    <InputComponent type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>

                <div className={classes.buttonContainer}>
                    <ButtonComponent onClick={signup} type="contained" theme="primary" text="Signup" />
                </div>

                </div>
            </div>

        </form>
    )
}

export default FarmerSignup;