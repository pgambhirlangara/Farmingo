import { Button } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    button: {
        color: "white !important",
        borderRadius: "13px",
    },
});

const ButtonComponent = (props) => {



    const classes = useStyles();
    return <Button onClick={props.onClick} variant={props.type} color={props.theme} className={classes.button}>{props.text}</Button>
}

export default ButtonComponent;