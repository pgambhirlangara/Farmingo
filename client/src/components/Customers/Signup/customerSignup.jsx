import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import ButtonComponent from "../../utils/button";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import axios from "axios";
import { Box } from "@mui/system";
import { Province as provinceList } from "../../../constants/constant";

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
            textAlign: "center"
        }
    }));

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [contact, setContact] = useState(0);
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [zipCode, setZipCode] = useState("");


    const classes = useStyles();

    const signup = async (e) => {
        const signupData = {
            email,
            password,
            name,
            contact,
            city,
            province,
            zipCode
        }
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/customer/register`, signupData);

    }

    return (
        <form className={classes.customerSignup}>
            <h2 className={classes.customerSignupHeading}>Create a profile</h2>
            <h3 className={classes.customerSignupSubHeading}>You can establish a unique identity of your farm by creating a new
                profile of your farm in wich to upload a list of your products.</h3>
            <div className={classes.customerSignupContent}>
                <div className={classes.formControl}>
                    <InputLabel>Name</InputLabel>
                    <TextField type="text" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className={classes.formControl}>
                    <InputLabel>Email</InputLabel>
                    <TextField type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={classes.formControl}>
                    <InputLabel>Contact</InputLabel>
                    <TextField type="number" onChange={(e) => setContact(e.target.value)} />
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
                             { province ? 
                                provinceList.find((pr) => pr.name === province)
                                .cities.map((city , index) => <MenuItem key={index} value={city}>{city}</MenuItem>)
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
                    <TextField type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>

                    <div className={classes.buttonContainer}>
                        <ButtonComponent onClick={signup} type="contained" theme="primary" text="Signup" />
                    </div>

                </div>
            </div>
        </form>
    )
}

export default CustomerSignup;