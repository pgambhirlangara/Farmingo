import  React, {  useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function MainSearch() {



    const [searchList, setSearchList] = useState([]);
    useEffect(() => {
        fetchFarmData();
    }, [])


    const useStyles = makeStyles((theme) => ({
        container: {
            // backgroundImage: "url('../assets/farmer_home_banner.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "calc(100vh - 64px)",
            position: "relative",
            background: "grey",
        },
        search: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        }
    }));

    const navigate = useNavigate();
    const classes = useStyles();

    const fetchFarmData = async (event) => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/farm`);
        console.log(response.data.data);
        setSearchList(response.data.data);
    }

    const options = searchList.map((option) => {
        return {
            firstLetter: option.category ? option.category : "Random",
            ...option,
        };
    });

    const openProducts = (event, value) => {

        navigate(`../customer/products/${value._id}`);
    }

    return (
        <div className={classes.container}>
            <Autocomplete
                color="secondary"
                onChange={openProducts}
                className={classes.search}
                options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                groupBy={(option) => option.firstLetter}
                getOptionLabel={(option) => option.farmName}
                sx={{ width: "60%" }}
                renderInput={(params) => <TextField fullWidth placeholder='Search for Farms' {...params}  />}
            />
        </div>
    );
}
