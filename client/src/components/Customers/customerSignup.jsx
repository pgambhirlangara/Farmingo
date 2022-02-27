import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Alert, Button, InputLabel, MenuItem, Select, Snackbar, TextField } from "@mui/material";
import axios from "axios";
import { Box } from "@mui/system";
import { Province as provinceList } from "../../constants/constant";
import { Link, useNavigate } from "react-router-dom";

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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px"
        },
        signupButton: {
            color: "white !important",
            width: "50%"
        },
        alreadyAccount: {
            color: theme.palette.secondary.main
        }
    }));

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [contact, setContact] = useState(0);
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('success');
    const [message, setMessage] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const navigate = useNavigate();

    const classes = useStyles();

    const signup = async (e) => {
        setButtonDisabled(true);
        const signupData = {
            email,
            password,
            name,
            contact,
            city,
            province,
            zipCode
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/customer/register`, signupData);
            if (response) {
                console.log(response);
                setMessage(response.data.message);
                setOpen(true);
                setButtonDisabled(false);
                setTimeout(() => {
                    navigate('../customer/login');
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
        <form className={classes.customerSignup}>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>

                <Alert onClose={handleClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
            <h2 className={classes.customerSignupHeading}>Create a profile</h2>
            <h3 className={classes.customerSignupSubHeading}>You can establish a unique identity of your farm by creating a new
                profile of your farm in wich to upload a list of your products.</h3>
            <div className={classes.customerSignupContent}>
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
                <Box display="grid" gridTemplateColumns="auto auto" gap="20px">
                    <div className={classes.formControl}>
                        <InputLabel>Province</InputLabel>
                        <Select
                            value={province}
                            onChange={(e) => setProvince(e.target.value)}
                            label="Province"
                        >
                            {
                                provinceList.map(({ name }, index) => {
                                    return <MenuItem key={index} value={name}>{name}</MenuItem>
                                })
                            }
                        </Select>
                    </div>
                    <div className={classes.formControl}>
                        <InputLabel>City</InputLabel>
                        <Select
                            disabled={!province}
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            label="City"
                        >
                            {province ?
                                provinceList.find((pr) => pr.name === province)
                                    .cities.map((city, index) => <MenuItem key={index} value={city}>{city}</MenuItem>)
                                : []
                            }
                        </Select>
                    </div>
                </Box>
                <div className={classes.formControl}>
                    <InputLabel>Zip Code</InputLabel>
                    <TextField type="text" onChange={(e) => setZipCode(e.target.value)} />
                </div>
                <div className={classes.formControl}>
                    <InputLabel>Password</InputLabel>
                    <TextField required type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>

                    <div className={classes.buttonContainer}>
                        <Button disabled={buttonDisabled} className={classes.signupButton} onClick={signup} variant="contained" color="primary" >Signup</Button>
                        <Link className={classes.alreadyAccount} to="../customer/login">Already have an account ?</Link>
                    </div>

                </div>
            </div>
        </form>
    )
}

export default CustomerSignup;