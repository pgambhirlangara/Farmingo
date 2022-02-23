import { Button } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    button: {
        color: "white !important",
    },
});

const ButtonComponent = ({ theme, text, type }) => {
    const classes = useStyles();
    return <Button variant={type} color={theme} className={classes.button}>{text}</Button>
}

export default ButtonComponent;