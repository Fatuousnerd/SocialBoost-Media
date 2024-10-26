import "./hero.scss";
import HeroSVG from "./HeroSVG";
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { motion } from "framer-motion";
import { Handshake, PersonPin, Psychology, QueryStats, Storage } from "@mui/icons-material";
import { useEffect } from "react";

const titleVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1.5,
            staggerChildren: .5,
        }
    },
    scrollButton: {
        opacity: 1,
        transition: {
            duration: 2,
        }
    }
};

const imageVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 5,
        }
    }
};

const textVariants = {
    initial: {
        y: -100,
    },
    animate: {
        y: 0,
        transition: {
            duration: 2,
        }
    }
};

const sliderVariants = {
    initial: {
        y: "5%",
    },
    animate: {
        y: "-5%",
        transition: {
            duration: 3.5,
            repeat: Infinity,
            repeatType: "mirror",
            staggerChildren: .5,
        }
    }
};

const Hero = () => {
    return (
        <div className="hero" id="home">
            <div className="radial-bg"></div>
            <div className="wrapper">
                <div className="left">
                    <motion.div className="title" variants={titleVariants} initial="initial" animate="animate">
                        <motion.h1 variants={titleVariants}>
                            <motion.span variants={titleVariants}>Boost </motion.span>  Your
                            Content <motion.span variants={titleVariants}> Editing</motion.span> With
                            <motion.span variants={titleVariants}> SocialBoost</motion.span> Media.
                        </motion.h1>
                    </motion.div>

                    <motion.div className="text" variants={textVariants} initial="initial" animate="animate">
                        <motion.p variants={textVariants}>
                            Enhance Your Brand with <span>SocialBoost</span> Media. <br />
                            The <span>leading agency</span> for expert <span>Short-Form Editing</span>.
                        </motion.p>
                    </motion.div>

                    <div className="buttons">
                        <a target="_blank" href="https://form.jotform.com/242062498395566">
                            <button>Get Started</button>
                        </a>
                        <a href="#contact">
                            <button className="fr">Contact Us Now</button>
                        </a>
                    </div>
                    <div className="skills">
                        <div className="item">
                            <Storage style={{ color: "#f1bfsa" }} />
                            <p>Data-Driven</p>
                        </div>
                        <div className="item">
                            <QueryStats style={{ color: "#b470bd" }} />
                            <p>Results-Oriented</p>
                        </div>
                        <div className="item">
                            <Psychology style={{ color: "#909090" }} />
                            <p>Innovative</p>
                        </div>
                        <div className="item">
                            <LightbulbIcon style={{ color: "#f4b76b" }} />
                            <p>Strategic</p>
                        </div>
                        <div className="item">
                            <PersonPin style={{ color: "#20b846" }} />
                            <p>Audience Focused</p>
                        </div>
                    </div>
                </div>

                <motion.div className="right" variants={sliderVariants} initial="initial" animate="animate">
                    <HeroSVG />

                    <motion.div className="round-i" variants={sliderVariants}>
                        <motion.img variants={imageVariants} initial="initial" animate="animate" src="./Digital_Marketing_Company_in_jaipur-removebg-preview.png" alt="Boost Your Marketing" />
                    </motion.div>
                </motion.div>

            </div>

            <div className="bottom">
                <div className="collab">
                    <h1>
                        10+
                    </h1>
                    <h6>
                        Partnerships
                    </h6>
                </div>
                {/* <motion.div className="companies" >
                <img src="./hero.png" alt="" />
                <h3>FanFlare Media</h3>
            </motion.div>
            <motion.div className="companies" >
                <img src="./hero.png" alt="" />
                <h3>CSWC</h3>
            </motion.div>
            <motion.div className="companies" >
                <img src="./hero.png" alt="" />
                <h3>CryptoPulse</h3>
            </motion.div>
            <motion.div className="companies" >
                <img src="./hero.png" alt="" />
                <h3>PennyWise</h3>
            </motion.div>
            <motion.div className="companies" >
                <img src="./hero.png" alt="" />
                <h3>Oura</h3>
            </motion.div> */}
            </div>
        </div>
    )
}

export default Hero