import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

function CustomerLogin() {
    const useStyles = makeStyles((theme) => ({
        customerLogin: {
            backgroundColor: theme.palette.primary.a100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            height: "100%"
        },
        customerLoginHeading: {
            color: "#182918",
            margin: 0,
        },
        customerLoginContent: {
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
            textAlign: "center",
        },
        loginButton: {
            color: "white !important",
            width: "50%"
        }
    }));

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const classes = useStyles();

    const customerLogin = async (e) => {
        e.preventDefault();
    }

    return (
        <form className={classes.customerLogin}>
            <h2 className={classes.customerLoginHeading}>Welcome</h2>
            <div className={classes.customerLoginContent}>
                <div className={classes.formControl}>
                    <label htmlFor="email">Email</label>
                    <TextField value={email} type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={classes.formControl}>
                    <label htmlFor="password">Password</label>
                    <TextField value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <div className={classes.buttonContainer}>
                        <Button className={classes.loginButton} onClick={customerLogin} variant="contained" color="primary">Login</Button>
                    </div>

                </div>
            </div>

        </form>
    )
}

export default CustomerLogin;