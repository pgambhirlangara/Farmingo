import { Alert, Button, Checkbox, FormControlLabel, Snackbar, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import FormGroup from '@mui/material/FormGroup';

function FarmerLogin() {
    const useStyles = makeStyles((theme) => ({
        farmerLogin: {
            backgroundColor: theme.palette.primary.a100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            height: "100%"
        },
        farmerLoginHeading: {
            color: "#182918",
            margin: 0,
            [theme.breakpoints.down("md")]:
            {
                display:"none!important"
            }
        },
        farmerLoginContent: {
            backgroundColor: "white",
            width: "50%",
            padding: "50px",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            border: `1px solid ${theme.palette.primary.main}`,
            [theme.breakpoints.down("md")]:
            {
                border:"none!important",
                backgroundColor:"#ECF4EC"
            }
        },
        formControl: {
            display: "flex",
            flexDirection: "column",
        },
        buttonContainer: {
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px"
        },
        loginButton: {
            color: "white !important",
            width: "50%",
            backgroundColor:"#F15922!important"
            
        },
        noAccount: {
            color: theme.palette.secondary.main
        },
        logoimg:{
            width:"50%",
            height:"150px",
            [theme.breakpoints.up("md")]:{
                    display:"none"

            }
            
        },
        textboxes:{
            [theme.breakpoints.down("md")]:
            {
                
                backgroundColor:"white"
            }

        }
    }));

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('success');
    const [message, setMessage] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const classes = useStyles();
    const navigate = useNavigate();

    const farmerLogin = async (e) => {
        setButtonDisabled(true);
        const signupData = {
            email,
            password,
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/farmer/login`, signupData);
            if (response) {
                console.log(response);
                setMessage(response.data.message);
                setOpen(true);
                setButtonDisabled(false);
                setTimeout(() => {
                    navigate('../home');
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
        <form className={classes.farmerLogin}>

            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
            <div className={classes.logoimg}>LOGO</div>
            <h2 className={classes.farmerLoginHeading}>Welcome</h2>
            <div className={classes.farmerLoginContent}>
                <div className={classes.formControl}>
                    <label htmlFor="email">Email</label>
                    <TextField className={classes.textboxes} required value={email} placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={classes.formControl}>
                    <label htmlFor="password">Password</label>
                    <TextField className={classes.textboxes} required value={password} placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className={classes.check}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox/>} label = "Remember me "/>
                    </FormGroup>
                    </div>
                <div>
                    <div className={classes.buttonContainer}>
                        <Button disabled={buttonDisabled} className={classes.loginButton} onClick={farmerLogin} variant="contained" color="primary">Login</Button>
                        <Link className={classes.noAccount} to="../farmer/signup">Don't have an account ?</Link>
                        <Link className={classes.noAccount} to="#">Forgot Password</Link>
                    </div>
                </div>
            </div>

        </form>
    )
}

export default FarmerLogin;