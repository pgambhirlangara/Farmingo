import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, InputLabel, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const FarmerLogin = () => {

    const useStyles = makeStyles((theme) => ({
        farmerLogin: {
            backgroundColor: theme.palette.primary.a100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px"
        },
        farmerLoginHeading: {
            color: "#182918",
            margin: 0,
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
            [theme.breakpoints.down("md")]: {
                backgroundColor: "transparent",
                border: "none"
            },
        },
        formControl: {
            display: "flex",
            flexDirection: "column",
            color: "black"
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
            width: "50%"
        },
        noAccount: {
            color: theme.palette.secondary.main
        },
        logo: {
            width: "234px",
            height: "234px"
        }
    }));

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [buttonDisabled, setButtonDisabled] = useState(false);


    const classes = useStyles();

    const farmerLogin = async (e) => {
        setButtonDisabled(true);
        const loginData = {
            email,
            password,
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/farmer/login`, loginData);
            setTimeout(() => {
                navigate('../farmer/home');
            }, 1000);
        } catch(error) {

        }
    }

    return (
        <form className={classes.farmerLogin}>
            <img className={classes.logo} src="../assets/team3_farmingo_final.png" alt="Logo" />
            <div className={classes.farmerLoginContent}>

                <div className={classes.formControl}>
                <InputLabel>Email</InputLabel>
                <TextField required type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={classes.formControl}>
                <InputLabel>Password</InputLabel>
                <TextField required type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <div className={classes.buttonContainer}>
                        <Button disabled={buttonDisabled} className={classes.loginButton} onClick={farmerLogin} variant="contained" color="primary">Login</Button>
                        <br></br>
                        <Link className={classes.noAccount} to="../farmer/signup">Don't have an account ?</Link>
                    </div>
                </div>
            </div>

        </form>
    )
}

export default FarmerLogin;