import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Province as provinceList } from "../../constants/constant";

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
        },
        farmerSignupSubHeading: {
            margin: 0,
            padding: "0px 80px"
        },
        farmerSignupContent: {
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
    const [name, setName] = useState('');
    const [contact, setContact] = useState(0);
    const [address, setAddress] = useState("");
    const [province, setProvince] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [city, setCity] = useState("");

    const classes = useStyles();

    const signup = async (e) => {
        e.preventDefault();
    }

    return (
        <form className={classes.farmerSignup}>
            <h2 className={classes.farmerSignupHeading}>Create a profile</h2>
            <h3 className={classes.farmerSignupSubHeading}></h3>
            <div className={classes.farmerSignupContent}>
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
                <div className={classes.formControl}>
                   
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

                </div>
                <div className={classes.formControl}>
                <InputLabel>Password</InputLabel>
                    <TextField required type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>

                <div className={classes.buttonContainer}>
                    <Button variant="contained" onClick={signup} color="primary" >Signup</Button>
                </div>

                </div>
            </div>

        </form>
    )
}

export default FarmerSignup;