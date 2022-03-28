import React from 'react'
import { makeStyles } from "@mui/styles";
import { display, fontWeight } from '@mui/system';
export default function TransactionFail() {
    const useStyles = makeStyles((theme) => ({
        data:{

        },
        bigdiv:{
            width:"100%",
            height:"100%",
            backgroundColor:"#EEF6EE",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        },
        innerdiv:{
            width:"546px",
            height:"491px",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"white",
            border:"1px solid #74C26C",
            borderRadius:"20px",
            [theme.breakpoints.between('xs', 'sm')]: {
                width:"263.05px",
                height:"264.08px"
              },
        },
        data:{
            fontSize:"40px",
            width:"502px",
            height:"180px",
            textAlign:"center",
            fontWeight:"700",
            lineHeight:"50px",
            display:"flex",
            alignItems:"center",
            margin:"22px",
            letterSpacing:"1",
            [theme.breakpoints.between('xs', 'sm')]: {
                width:"263px",
                height:"94px",
                fontSize:"18px",
                lineHeight:"27px",
                display:"flex",
                alignItems:"center",
                textAlign:"center"
              },

        },
        imagesuccessful:{
            width:"132px",
            height:"132px",
            [theme.breakpoints.between('xs', 'sm')]: {
                width:"69px",
                height:"69px"
            }
        },
        image:{
            width:"132px",
            height:"132px",
            [theme.breakpoints.between('xs', 'sm')]: {
                width:"69px",
                height:"69px"
            }
        }

    }));

    const classes = useStyles();
  return (
    <div className={classes.bigdiv}>
        <div className={classes.innerdiv}>
            <div className={classes.data}>Error.Something went wrong. Please try again.</div>
            <div className={classes.imagesuccessful}><img className={classes.image} src="" alt="" /></div>
        </div>
    </div>
  )
}