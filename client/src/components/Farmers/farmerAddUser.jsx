import { useState } from "react";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import { Alert, Button, CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Snackbar, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Province as provinceList } from "../../constants/constant";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/system";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

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
            marginTop: "100px",
            [theme.breakpoints.down("md")]: {
                display: "none"
            }
        },
        farmerSignupSubHeading: {
            margin: 0,
            padding: "0px 80px",
            [theme.breakpoints.down("md")]: {
                display: "none"
            }

        },
        farmerSignupContent: {
            backgroundColor: "white",
            width: "50%",
            padding: "50px",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            margin: "40px",
            border: `1px solid ${theme.palette.primary.main}`,
            [theme.breakpoints.down("md")]: {
                backgroundColor: "transparent",
                border: "none",
                padding: "0px",
                width: "80%",
                marginTop: 0
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
        signupButton: {
            color: "white !important",
            width: "200px", // check with designers
            [theme.breakpoints.down("md")]: {
                borderRadius: "24px",
                width: "154px",
                height: "51px",
                margin: "10px 0px"
            },
        },
        logo: {
            display: "none",
            [theme.breakpoints.down("md")]: {
                width: "234px",
                height: "234px",
                display: "block"
            },
        },
    }));

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [contact, setContact] = useState(0);
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('success');
    const [message, setMessage] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    // const [zipCode, setZipCode] = useState("");
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });

    const anchorOrigin = {
        vertical: "top", horizontal: "center"
    }

    const navigate = useNavigate();


    const classes = useStyles();

    const signup = async (e) => {
        setButtonDisabled(true);
        const signupData = {
            name,
            email,
            password: values.password,
            contact,
            province,
            city
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/farmer/register`, signupData);
            if (response) {
                console.log(response);
                setMessage(response.data.message);
                setOpen(true);
                setTimeout(() => {
                    setButtonDisabled(false);
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
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <form className={classes.farmerSignup}>
                <img className={classes.logo} src="../assets/team3_farmingo_final.png" alt="Logo" />
            <Snackbar anchorOrigin={anchorOrigin} open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>

            <h2 className={classes.farmerSignupHeading}>Add User</h2>
            <h3 className={classes.farmerSignupSubHeading}>A second user can be added to your account to help you manage it
            </h3>
            <div className={classes.farmerSignupContent}>
                <div className={classes.formControl}>
                    <InputLabel>Name</InputLabel>
                    <FormControl variant="outlined">
                        <OutlinedInput
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            startAdornment={<InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                            required
                        />
                    </FormControl>
                </div>
                <div className={classes.formControl}>
                    <InputLabel>Email</InputLabel>
                    <FormControl variant="outlined">
                        <OutlinedInput
                            placeholder="Your Email"
                            value={email}
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            startAdornment={<InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                            required
                        />
                    </FormControl>
                </div>
                <div className={classes.formControl}>
                    <InputLabel>Contact</InputLabel>
                    <FormControl variant="outlined">
                        <OutlinedInput
                            value={contact}
                            placeholder="Your Contact"
                            type="number"
                            onChange={(e) => setContact(e.target.value)}
                            startAdornment={<InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                            required
                        />
                    </FormControl>
                </div>
                <div className={classes.formControl}>
                    <Box display="grid" gridTemplateColumns="auto auto" gap="20px">
                        <div className={classes.formControl}>
                            <InputLabel>Province</InputLabel>
                            <Select
                                placeholder="Your Province"
                                value={province}
                                required
                                onChange={(e) => setProvince(e.target.value)}
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
                                placeholder="Your City"
                                value={city}
                                required
                                onChange={(e) => setCity(e.target.value)}
                            >
                                {province ?
                                    provinceList.find((pr) => pr.name === province)
                                        .cities.map((city, index) => <MenuItem key={index} value={city}>{city}</MenuItem>)
                                    : []
                                }
                            </Select>
                        </div>
                    </Box>
                </div>
                <div className={classes.formControl}>
                    <InputLabel>Password</InputLabel>
                    <FormControl variant="outlined">
                        <OutlinedInput
                            placeholder="Your Password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
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
                    {buttonDisabled ? <CircularProgress size="1.5rem" style={{marginRight: "8px"}} color="primary"/> : null}
                        <Button disabled={buttonDisabled} className={classes.signupButton} onClick={signup} variant="contained" color="primary" >Add User</Button>
                    </div>

                </div>
            </div>
        </form>
    )
}

export default FarmerSignup;