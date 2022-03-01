import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, InputLabel, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();

    const classes = useStyles();

    const login = async (e) => {
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
            <h2 className={classes.farmerLoginHeading}>Welcome!</h2>
            <h3 className={classes.farmerLoginSubHeading}></h3>
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
                <Button  onClick={login} variant="contained" color="primary" >Login</Button>
                </div>

                </div>
            </div>

        </form>
    )
}

export default FarmerLogin;