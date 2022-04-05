import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';
import { Faqfarmer as farmData } from '../../constants/constant';

export default function Faqfarmer() {


  const useStyles = makeStyles((theme) => ({
    faqTitle: {
      marginTop: "80px",
      textAlign: "center"
    },
    faqContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "40px",
      [theme.breakpoints.down("md")]: {
        margin: "0px",
      }
    },
    faqSummary: {
      maxWidth: "600px",
      color: "#879487",
      [theme.breakpoints.down("md")]: {
        margin: "40px",
      }
    },
    accordianContainer: {
      maxWidth: "600px",
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    },
    accordian: {
      padding: "20px",
      border: "1px solid #74C26C",
      borderRadius: "20px !important",
    },
    question: {
      fontWeight: "bold !important"
    }
  }));

  const classes = useStyles();


  return (
    <div className={classes.faqContainer}>
      <h2 className={classes.faqTitle}>FAQs</h2>
      <p className={classes.faqSummary}>Here is a list of frequently asked questions and answers on a website concerning topics such as hours, shipping and handling, product information.</p>
      <div className={classes.accordianContainer}>
        {
          farmData.map((data) => {
            return (
              <Accordion className={classes.accordian}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.question}>{data.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    { data.answer }
                  </Typography>
                </AccordionDetails>
              </Accordion>
            )
          })
        }
      </div>
    </div>

  )
}
