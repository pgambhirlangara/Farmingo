import { Button, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { testimonials } from "../../constants/constant";

const Welcome = () => {

    const useStyles = makeStyles((theme) => ({
        banner: {
            height: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "907px",
            width: "100% !important",
            backgroundImage: "url(./assets/landing-page.jpg), linear-gradient(90deg, rgba(91, 175, 97, 0.5) 1.28%, rgba(248, 177, 51, 0.5) 105.7%)",
            backgroundBlendMode: "multiply",
            [theme.breakpoints.down("md")]: {
                height: "800px"
            }
        },
        link: {
            textDecoration: "none",
        },
        bannerContent: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            height: "100%",
            padding: "0px 246px",
            justifyContent: "center",
            [theme.breakpoints.down("md")]: {
                padding: 0
            }
        },
        bannerButton: {
            display: "flex",
            gap: "20px",

        },
        button: {
            width: "267px",
            height: "51px",
            color: "white !important",
            [theme.breakpoints.down("md")]: {
                width: "154px",
                height: "51px"
            }
        },
        bannerTitle: {
            color: "white",
            fontSize: "40px", // TODO: Make pixel perfect,
            textAlign: "center",
            [theme.breakpoints.down("md")]: {
                fontSize: "24px",
                padding: "13px"
            }
        },
        featureSectionIcon: {
            width: "64px",
            height: "64px"
        },
        featureSection: {
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            backgroundColor: "white",
            height: "400px",
            padding: "0px 200px",
            backgroundColor: "#EEF6EE",
            [theme.breakpoints.down("md")]: {
                gridTemplateColumns: "100%",
                height: "fit-content",
                padding: "20px 0px"
            }
        },
        featureSectionItem: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0px 40px"
        },
        joinUsSection: {
            display: "grid",
            gridTemplateColumns: "auto auto",
            padding: "84px",
            [theme.breakpoints.down("md")]: {
                gridTemplateColumns: "100%",
                padding: "0"
            }
        },
        rightSectionImage: {
            backgroundImage: `url('./assets/new.jpg'), linear-gradient(90deg, rgba(91, 175, 97, 0.6) 1.28%, rgba(248, 177, 51, 0.6) 105.7%);`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "60px",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            [theme.breakpoints.down("md")]: {
                padding: 12
            },
            backgroundBlendMode: "multiply",

        },
        leftSectionTitle: {
            fontSize: "30px",
            [theme.breakpoints.down("md")]: {
                fontSize: "30px",
                margin: 0
            }
        },
        rightSectionTitle: {
            fontSize: "35px",
            textAlign: "center",
            [theme.breakpoints.down("md")]: {
                fontSize: "30px",
            }
        },
        leftSection: {
            padding: "60px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            justifyContent: "center",
            [theme.breakpoints.down("md")]: {
                padding: "40px",
                gap: "8px"
            }
        },
        rightSectionDescription: {
            fontSize: "30px",
            textAlign: "center",
            [theme.breakpoints.down("md")]: {
                fontSize: "20px",
            }
        },
        testimonialSection: {
            display: "grid",
            gridTemplateColumns: "repeat(4, auto)",
            gap: "20px",
            margin: "0px 300px",
            textAlign: "center",
            [theme.breakpoints.down("md")]: {
                gridTemplateColumns: "100%",
                margin: "0px 20px"
            }
        },
        testimonialSectionContainer: {
            backgroundColor: "#EEF6EE",
            padding: "20px"
        },
        testimonialImage: {
            width: "100%",
            borderRadius: "16px",
        },
        testimonialHeading: {
            textAlign: "center"
        },
        whiteLogo: {
            display: "none",
            [theme.breakpoints.down("md")]: {
                display: "block",
                width: "236px",
                height: "236px",
                marginTop: "100px"
            }
        },
        divider:{
            width: "80%"
        },
        leftSectionDescription: {
            color: "#58a85d",
            fontSize: "20px"
        },
        joinUsButton: {
            width: "154px"
        }
    }));

    const classes = useStyles();


    return (
        <section>
            <div className={classes.banner}>
                <div className={classes.bannerContent}>
                    <img className={classes.whiteLogo} src="./assets/team3_farmingo_positive_final.png" alt="" />
                    <h1 className={classes.bannerTitle}>
                        Buy locally from farmers and access
                        a B2B digital marketplace
                        that offers fair food trade
                    </h1>
                    <div className={classes.bannerButton}>
                        <Link className={classes.link} to="farmer/login" >
                            <Button className={classes.button} variant="contained">Farmer</Button>
                        </Link>
                        <Link className={classes.link} to="customer/login"><Button className={classes.button} color="secondary" variant="contained">Customer</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={classes.featureSection}>
                <div className={classes.featureSectionItem}>
                    <img className={classes.featureSectionIcon} src="./assets/home_1.svg" alt="home1" />
                    <h3>Secure Payment</h3>
                    <p>Integrated and secure platform payment processes</p>
                </div>
                <div className={classes.featureSectionItem}>
                    <img className={classes.featureSectionIcon} src="./assets/home_2.svg" alt="home1" />
                    <h3>Unlimited access</h3>
                    <p>Unlimited access to a global
                        market from anywhere, at anytime.</p>
                </div>
                <div className={classes.featureSectionItem}>
                    <img className={classes.featureSectionIcon} src="./assets/home_3.svg" alt="home1" />
                    <h3>User-friendly platform</h3>
                    <p>A user-friendly platform that generates market opportunity for farmers and industry buyers.</p>
                </div>
            </div>
            <div className={classes.joinUsSection}>
                <div className={classes.leftSection}>
                    <h2 className={classes.leftSectionTitle}>
                        DO YOU WORK AS A LOCAL FARMER? HERE’S WHY YOU SHOULD JOIN US
                    </h2>
                    <Divider className={classes.divider} />
                    <p className={classes.leftSectionDescription}>  As a farmer, you sell directly to customers rather than through distributors. We market your brand, handle orders, and more, all while you benefit from an online presence that will help you build a loyal customer base. You are paid</p>
                    <Divider className={classes.divider} />
                    <Link className={classes.link} to="farmer/createprofile" >
                    <Button variant="contained" color="secondary" className={classes.joinUsButton}>Join us</Button>
                    </Link>
                </div>

                <div className={classes.rightSection}>
                    <div className={classes.rightSectionImage}>
                        <h2 className={classes.rightSectionTitle}>
                            EXPERIENCE THE BEST THAT YOUR LOCAL FARMERY HAS TO OFFER
                        </h2>
                        <p className={classes.rightSectionDescription}>
                            FarminGo is excited to announce the opening of our first location inside of Canada in South Vancouver, as well as the trade of local and fresh produce from your local farmers.
                        </p>
                    </div>
                </div>
            </div>

            <div className={classes.testimonialSectionContainer}>
                <h1 className={classes.testimonialHeading}>CUSTOMER LOVE US!</h1>
                <div className={classes.testimonialSection}>
                    {
                        testimonials.map((data) => {
                            return (
                                <div className={classes.testimonialSectionContent}>
                                    <img src={data.image} alt={data.name} className={classes.testimonialImage} />
                                    <h4>{data.name}</h4>
                                    <p>{data.comment}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Welcome;