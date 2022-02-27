import { makeStyles } from "@mui/styles";
import { useState } from "react";
import InputComponent from "../../../utils/input";
import ButtonComponent from "../../../utils/button";


function CustomerLogin(){
    const useStyles = makeStyles((theme) => ({
        customerLogin: {
            backgroundColor: theme.palette.primary.a100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px"
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
        }
    }));

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [contact, setContact] = useState(0);
    const [address, setAddress] = useState("");

    const classes = useStyles();

    const Login = async (e) => {
        e.preventDefault();
    }

    return(  
        <form className={classes.customerLogin}>
        <h2 className={classes.customerLoginHeading}>Welcome</h2>
        <div className={classes.customerLoginContent}>
            <div className={classes.formControl}>
                <label htmlFor="name">User name</label>
                <InputComponent onChange={(e) => setName(e.target.value)} />
            </div>
            <div className={classes.formControl}>
                <label htmlFor="password">Password</label>
                <InputComponent type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
               <input type="checkbox"></input> Remember me
            </div>
            <div>

            <div className={classes.buttonContainer}>
                <ButtonComponent onClick={Login} type="contained" theme="secondary" text="Login" />
            </div>
            <div><a href="">Forgot Password</a></div>

            </div>
        </div>

    </form>
    )
}

export default CustomerLogin;