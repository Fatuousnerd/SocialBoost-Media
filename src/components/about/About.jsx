import "./about.scss";
import { motion } from "framer-motion";
import { ArrowCircleRight } from "@mui/icons-material";
import useDeviceType from "../useDeviceType/useDeviceType";

const aboutVariants = {
    initial:{
        x:-100,
        opacity:.5
    },
    initialM:{
        x:-200,
        opacity:.5
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:.5, 
            staggerChildren:.25
        }
    },
};

const missionVariants = {
    initial:{
        x:100,
        opacity:.5
    },
    initialM:{
        x:200,
        opacity:.5
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:.5, 
            staggerChildren:.25
        }
    },
};

const imageVariants = {
    initial:{
        opacity:0,
    },
    animate:{
        opacity:1,
        transition:{
            duration:2,
            delay:1,
            staggerChildren:.5
        }
    }
}

const About = () => {

    const { isMobile, isTablet, isDesktop } = useDeviceType();

    const initial = isDesktop ? 'initial' : isMobile ? 'initialM' : 'initial';

  return (
    <div className="about" id="about">
        <div className="up">
            <motion.div className="textContainer" variants={aboutVariants} initial={initial} whileInView="animate"> 
                <motion.h1 className="title" variants={aboutVariants}>
                    About Us
                </motion.h1>
                {isDesktop &&
                    <motion.h1 variants={aboutVariants}>
                        <motion.span variants={aboutVariants}>SocialBoost Media </motion.span> 
                        Elevating Brands Worldwide <br /> with <span>Expert Marketing</span> Solutions.
                    </motion.h1>
                }
                {isMobile &&
                    <motion.h1 variants={aboutVariants}>
                        SocialBoost Media: Elevating Brands with <span>Expert Marketing</span> Solutions.
                    </motion.h1>
                }
                    {isDesktop &&
                        <motion.p variants={aboutVariants}>
                            SocialBoost Media, is dedicated to revolutionizing digital marketing businesses worldwide. 
                            With a passion for innovation and a commitment to excellence, we specialize in crafting bespoke Meta & Google ad campaigns that propel brands to new heights of success. 
                            Our team of experts combines strategic thinking with cutting-edge technology to deliver results, ensuring that every client receives tailored solutions that drive growth, engagement & sales. Whether you're looking to enhance your online presence, optimize ad performance, or develop a perfect web platform, We are your trusted partner for achieving unparalleled success in the digital realm.
                        </motion.p>
                    }
                    {isMobile &&
                        <motion.p variants={aboutVariants}>
                            SocialBoost Media revolutionizes digital marketing with innovative Meta & Google ad campaigns. 
                            Our experts deliver tailored solutions that drive growth, engagement, and sales. 
                            Enhance your online presence and achieve unparalleled success with us.
                        </motion.p>
                    }
                <a target="_blank" href="https://form.jotform.com/242062498395566">
                    <motion.button>Join Us <ArrowCircleRight /></motion.button>
                </a>
            </motion.div>

            <motion.div className="imageContainer" variants={imageVariants} initial={initial} whileInView="animate">
                <motion.div className="image" variants={imageVariants}>
                    <motion.div className="d1" variants={imageVariants}>
                        <motion.img src="./Marketing_Illustrations-removebg-preview.png" alt=""  variants={imageVariants}/>
                    </motion.div>
                    <motion.div className="d2" variants={imageVariants}>
                        <motion.img src="./Hauptstadtdesigner__Hero_Illustration-removebg-preview.png" alt="" variants={imageVariants}/>
                    </motion.div>
                </motion.div>
            </motion.div>

        </div>

        <div className="down">
            <motion.div className="imageWrapper" variants={imageVariants} initial={initial} whileInView="animate">
                <motion.img variants={imageVariants} src="./3D_Data_Chart_Illustration1-removebg-preview.png" alt="" />
            </motion.div>

            <motion.div className="textWrapper" variants={missionVariants} initial={initial} whileInView="animate">
                <motion.h1 variants={missionVariants}>Our Mission</motion.h1>
                {isDesktop &&
                    <motion.h4 variants={missionVariants}>
                        Always Striving to Deliver the <span>Best Marketing</span> Solutions in Every Aspect.
                    </motion.h4>
                }
                {isMobile &&
                    <motion.h4 variants={missionVariants}>
                        Crafting Strategies that <span>Elevate</span> Your Brand and Drive <span>Growth</span>.
                    </motion.h4>
                }
                {isDesktop &&
                    <motion.p variants={missionVariants}>
                        We prioritize understanding your business goals and challenges. 
                        From consultation to execution, we create strategies that resonate with your audience, elevate your brand, and exceed expectations. 
                        Discover strategic digital marketing and web development with us for sustained growth in the digital age.
                    </motion.p>
                }
                {isMobile &&
                    <motion.p variants={missionVariants}>
                        We create strategies that resonate with your audience and elevate your brand. 
                        Discover digital marketing and web development for sustained growth.
                    </motion.p>
                }
                <a target="_blank" href="https://form.jotform.com/242062498395566">
                    <motion.button variants={missionVariants}>Grow With Us <ArrowCircleRight/></motion.button>
                </a>
            </motion.div>
        </div>
    </div>
  )
}

export default About