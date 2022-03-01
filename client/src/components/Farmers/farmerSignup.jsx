import { useState } from "react";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import { Alert, Button, InputLabel, MenuItem, Select, Snackbar, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";

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
            color: "black"
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
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('success');
    const [message, setMessage] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const navigate = useNavigate();


    const classes = useStyles();

    const signup = async (e) => {
        setButtonDisabled(true);
        const signupData = {
            name,
            email,
            password,
            contact, 
            address
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/farmer/register`, signupData);
            if (response) {
                console.log(response);
                setMessage(response.data.message);
                setOpen(true);
                setButtonDisabled(false);
                setTimeout(() => {
                    navigate('../farmer/login');
                }, 1000);
            }
        } catch (error) {
            setSeverity('error');
            setOpen(true);
            setButtonDisabled(false);
            setMessage(error.response.data.message);
        }

    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <form className={classes.farmerSignup}>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>

                <Alert onClose={handleClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
            <h2 className={classes.farmerSignupHeading}>Create a profile</h2>
            <h3 className={classes.farmerSignupSubHeading}>After creating a profile, you can 
            add your farms and products. After that interact with your customers to expand the business.
            </h3>
            <div className={classes.farmerSignupContent}>
                <div className={classes.formControl}>
                    <InputLabel>Name</InputLabel>
                    <TextField required type="text" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className={classes.formControl}>
                    <InputLabel>Email</InputLabel>
                    <TextField required type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={classes.formControl}>
                    <InputLabel>Contact</InputLabel>
                    <TextField required type="number" onChange={(e) => setContact(e.target.value)} />
                </div>
                <div className={classes.formControl}>
                    <InputLabel>Address</InputLabel>
                    <TextField type="text" onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className={classes.formControl}>
                    <InputLabel>Password</InputLabel>
                    <TextField required type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>

                    <div className={classes.buttonContainer}>
                        <Button disabled={buttonDisabled} className={classes.signupButton} onClick={signup} variant="contained" color="primary" >Signup</Button>
                        <Link className={classes.alreadyAccount} to="../farmer/login">Already have an account ?</Link>
                    </div>

                </div>
            </div>
        </form>
    )
}

export default FarmerSignup;