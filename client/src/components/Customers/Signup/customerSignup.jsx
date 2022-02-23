import { useState } from "react";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import ButtonComponent from "../../utils/button";
import InputComponent from "../../utils/input";

const CustomerSignup = () => {

    const useStyles = makeStyles((theme) => ({
        customerSignup: {
            backgroundColor: theme.palette.primary.a100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px"
        },
        customerSignupHeading: {
            color: "#182918",
            margin: 0,
        },
        customerSignupSubHeading: {
            margin: 0,
            padding: "0px 80px"
        },
        customerSignupContent: {
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
        <form className={classes.customerSignup}>
            <h2 className={classes.customerSignupHeading}>Create a profile</h2>
            <h3 className={classes.customerSignupSubHeading}>You can establish a unique identity of your farm by creating a new
                profile of your farm in wich to upload a list of your products.</h3>
            <div className={classes.customerSignupContent}>
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

export default CustomerSignup;