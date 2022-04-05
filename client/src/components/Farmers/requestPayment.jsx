import { Alert, Button, Card, CircularProgress, FormControl, InputAdornment, InputLabel, OutlinedInput, Snackbar } from "@mui/material";
import { useState } from "react";
import EmailIcon from '@mui/icons-material/Email';
import axios from "axios";
import AccountCircle from '@mui/icons-material/AccountCircle';

const RequestPayment = () => {

    const [amount, setAmount] = useState();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('success');
    const [message, setMessage] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(false);


    const requestPayment = async () => {
        setButtonDisabled(true);
        const data = {
            email,
            amount,
            name
        }
        
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/farmer/requestpayment`, data);
            if (response) {
                setOpen(true);
                setMessage(response.data.message);
                setButtonDisabled(false);
            }
        } catch (error) {
            setSeverity('error');
            setOpen(true);
            setButtonDisabled(false);
            setMessage(error.response.data.message);
        }

    }


    const anchorOrigin = {
        vertical: "bottom",
        horizontal: "center"
    }

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    return (
       <Card>
            <FormControl fullWidth sx={{ m: 1 }} style={{
            height: "calc(100vh - 270px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            backgroundColor: "#ECF4EC"
        }}>
            <Snackbar anchorOrigin={anchorOrigin} open={open} autoHideDuration={3000} onClose={handleAlertClose}>
                <Alert onClose={handleAlertClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
            <h2>Request Payment From Customer</h2>
            <OutlinedInput
                value={name}
                type="text"
                style={{ width: "400px" }}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter customer Name"
                startAdornment={<InputAdornment position="start"><AccountCircle /></InputAdornment>}
            />
            <OutlinedInput
                id="outlined-adornment-amount"
                value={email}
                type="email"
                style={{ width: "400px" }}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter customer email"
                startAdornment={<InputAdornment position="start"><EmailIcon /></InputAdornment>}
            />
            <OutlinedInput
                id="outlined-adornment-amount"
                value={amount}
                style={{ width: "400px" }}
                placeholder="Enter the amount"
                onChange={(e) => setAmount(e.target.value)}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
            <Button disabled={buttonDisabled} onClick={requestPayment} style={{ color: "white", width: "300px" }} variant="contained" color="primary">
            {buttonDisabled ? <CircularProgress size="1.5rem" style={{ marginRight: "8px" }} color="primary" /> : null}

                Submit</Button>
        </FormControl>
       </Card>
    )
}

export default RequestPayment;