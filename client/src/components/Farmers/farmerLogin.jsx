import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Alert, Button, CircularProgress, FormControl, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, Snackbar, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { login } from "../../auth";


const FarmerLogin = () => {

    const useStyles = makeStyles((theme) => ({
        farmerLogin: {
            backgroundColor: theme.palette.primary.a100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            height: "100%",
            [theme.breakpoints.down("md")]: {
                height: "unset"
            }
        },
        farmerLoginHeading: {
            color: "#182918",
            margin: 0,
        },
        farmerLoginContent: {
            backgroundColor: "white",
            width: "400px", // check with designers
            padding: "50px",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            border: `1px solid ${theme.palette.primary.main}`,
            [theme.breakpoints.down("md")]: {
                backgroundColor: "transparent",
                border: "none",
                padding: "40px 0px",
                width: "80%"
            },
        },
        formControl: {
            display: "flex",
            flexDirection: "column",
            color: "black"
        },
        buttonContainer: {
            textAlign: "center",
            paddingTop: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px"
        },
        loginButton: {
            color: "white !important",
            width: "200px", // check with designers
            [theme.breakpoints.down("md")]: {
                borderRadius: "24px",
                width: "154px",
                height: "51px",
                margin: "10px 0px"
            },
        },
        noAccount: {
            color: "black"
        },
        logo: {

            display: "none",
            [theme.breakpoints.down("md")]: {
                width: "234px",
                height: "234px",
                display: "block"
            },
        },
        textField: {
            width: "100%"
        },
        label: {
            color: "black !important",
            fontWeight: "bold !important"
        },
        snackbar: {
            backgroundColor: "yellow"
        }
    }));

    const [email, setEmail] = useState('');
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('success');
    const [message, setMessage] = useState("");

    const navigate = useNavigate();
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const anchorOrigin = {
        vertical: "bottom",
         horizontal: "center"
    }

    const classes = useStyles();

    const farmerLogin = async (e) => {
        setButtonDisabled(true);
        const loginData = {
            email,
            password: values.password,
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/farmer/login`, loginData);
            setMessage(response.data.message);
            setOpen(true);

            const user = {
                id: response.data.id,
                email: response.data.email,
                name: response.data.name
            }

            login(user);

            setTimeout(() => {
                navigate('../farmer/home');
                setButtonDisabled(false);
            }, 2000);
        } catch (error) {
            setSeverity('error');
            setOpen(true);
            setButtonDisabled(false);
            setMessage(error.response.data.message);
        }
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <form className={classes.farmerLogin}>
            <Snackbar anchorOrigin={anchorOrigin} open={open} autoHideDuration={3000} onClose={handleAlertClose}>
                <Alert className={classes.snackbar} onClose={handleAlertClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
            <img className={classes.logo} src="../assets/team3_farmingo_final.png" alt="Logo" />
            <div className={classes.farmerLoginContent}>

                <div className={classes.formControl}>
                    <InputLabel className={classes.label}>Email</InputLabel>
                    <FormControl variant="outlined">
                        <OutlinedInput
                            value={email}
                            placeholder="Enter Email here"
                            onChange={(e) => setEmail(e.target.value)}
                            startAdornment={<InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </FormControl>
                </div>
                <div className={classes.formControl}>
                    <InputLabel className={classes.label}>Password</InputLabel>
                    <FormControl variant="outlined">
                        <OutlinedInput
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            placeholder="Enter Password here"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
                <div>
                    <div className={classes.buttonContainer}>
                        <Button disabled={buttonDisabled} className={classes.loginButton} onClick={farmerLogin} variant="contained" color="secondary">
                            
                        {buttonDisabled ? <CircularProgress size="1.5rem" style={{marginRight: "8px"}} color="primary"/> : null} Login</Button>
                        <Link className={classes.noAccount} to="../farmer/signup">Don't have an account ?</Link>
                        <Link className={classes.noAccount} to="../forgotpassword">Forgot Password ?</Link>

                    </div>
                </div>
            </div>

        </form >
    )
}

export default FarmerLogin;