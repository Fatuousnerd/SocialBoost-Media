import "./about.scss";
import { motion } from "framer-motion";
import { ArrowCircleRight } from "@mui/icons-material";
import useDeviceType from "../useDeviceType/useDeviceType";

const aboutVariants = {
    initial: {
        x: -100,
        opacity: .5
    },
    initialM: {
        x: -200,
        opacity: .5
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: .5,
            staggerChildren: .25
        }
    },
};

const missionVariants = {
    initial: {
        x: 100,
        opacity: .5
    },
    initialM: {
        x: 200,
        opacity: .5
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: .5,
            staggerChildren: .25
        }
    },
};

const imageVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 2,
            delay: 1,
            staggerChildren: .5
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
                            Elevating Brands with <span>Expert Short-Form</span> Editing.
                        </motion.h1>
                    }
                    {isMobile &&
                        <motion.h1 variants={aboutVariants}>
                            SocialBoost Media: Elevating Brands with <span>Expert Content Editing.</span>
                        </motion.h1>
                    }
                    {isDesktop &&
                        <motion.p variants={aboutVariants}>
                            SocialBoost Media transforms brands with high-quality, impactful short-form content editing. Powered by innovation and excellence, we create dynamic edits that capture attention, drive engagement, and elevate your brand’s social media presence.
                        </motion.p>
                    }
                    {isMobile &&
                        <motion.p variants={aboutVariants}>
                            SocialBoost Media transforms brands with dynamic short-form content editing.
                            Our experts deliver tailored edits that boost engagement, amplify growth,
                            and elevate your brand's online presence.
                            Partner with us for unparalleled success in the digital landscape.
                        </motion.p>
                    }
                    <a target="_blank" href="https://form.jotform.com/242062498395566">
                        <motion.button>Join Us <ArrowCircleRight /></motion.button>
                    </a>
                </motion.div>

                <motion.div className="imageContainer" variants={imageVariants} initial={initial} whileInView="animate">
                    <motion.div className="image" variants={imageVariants}>
                        <motion.div className="d1" variants={imageVariants}>
                            <motion.img src="./2.png" alt="" variants={imageVariants} />
                        </motion.div>
                        <motion.div className="d2" variants={imageVariants}>
                            <motion.img src="./3.png" alt="" variants={imageVariants} />
                        </motion.div>
                    </motion.div>
                </motion.div>

            </div>

            <div className="down">
                <motion.div className="imageWrapper" variants={imageVariants} initial={initial} whileInView="animate">
                    <motion.img variants={imageVariants} src="./4.png" alt="" />
                </motion.div>

                <motion.div className="textWrapper" variants={missionVariants} initial={initial} whileInView="animate">
                    <motion.h1 variants={missionVariants}>Our Mission</motion.h1>
                    {isDesktop &&
                        <motion.h4 variants={missionVariants}>
                            Always Striving to Deliver the <span>Best Editing</span> Solutions in Every Aspect.
                        </motion.h4>
                    }
                    {isMobile &&
                        <motion.h4 variants={missionVariants}>
                            Crafting <span>Edits</span> that <span>Amplify Your Brand</span> and Drive Growth.
                        </motion.h4>
                    }
                    {isDesktop &&
                        <motion.p variants={missionVariants}>
                            We prioritize understanding your goals and challenges to create strategies
                            that resonate with your audience and elevate your brand.
                            From consultation to execution,
                            we deliver results that exceed expectations and drive sustained growth
                            in the digital age.
                        </motion.p>
                    }
                    {isMobile &&
                        <motion.p variants={missionVariants}>
                            We create content that resonates with your audience, enhances engagement,
                            and elevates your brand.
                            Discover expert short-form content editing for sustained digital impact.
                        </motion.p>
                    }
                    <a target="_blank" href="https://form.jotform.com/242062498395566">
                        <motion.button variants={missionVariants}>Grow With Us <ArrowCircleRight /></motion.button>
                    </a>
                </motion.div>
            </div>
        </div>
    )
}

export default About