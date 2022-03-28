import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { forwardRef } from "react";
import { imageGallery } from "../../constants/constant";

const FarmerGallery = (props) => {

    const Transition = forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const useStyles = makeStyles((theme) => ({
        imageContainer: {
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            height: "fit-content"

        },
        image: {
            width: "100%",
            gap: "40px",
        },
        closeDialog: {
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "24px"
        },
        buttonContainer: {
            height: "fit-content"
        }
    }));

    const classes = useStyles();



    return (
        <Dialog
            open={props.open}
            TransitionComponent={Transition}
            keepMounted
            fullScreen
            onClose={props.handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <div className={classes.closeDialog}>
            <Button onClick={props.handleClose}>X</Button>
            </div>
            <DialogTitle>Choose from Gallery</DialogTitle>
            <DialogContent className={classes.imageContainer}>
                {
                    imageGallery.map((data) => {
                        return <Button className={classes.buttonContainer}><img className={classes.image} src={data.url} alt={data.id} /></Button>
                    })
                }
            </DialogContent>
        </Dialog>
    )
}

export default FarmerGallery;