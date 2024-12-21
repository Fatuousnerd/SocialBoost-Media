import "../../global.scss";
import "./services.scss";
import ServicesMobile from "./servicesMobile/ServicesMobile";
import useDeviceType from "../useDeviceType/useDeviceType";
import { services } from "./Data.jsx";
import { createContext, useContext, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AdsClick, ArrowRight, Code, MarkEmailRead } from "@mui/icons-material";
import ExtForm from "../order/ExtForm.jsx";
import { useSharedState } from "../order/SharedContext";

const cardVariants = {
    initial: {
        opacity: 0,
        y: -100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: .25,
        }
    },
};

const textVariants = {
    initial: {
        opacity: 0,
        // y:-100,
    },
    animate: {
        opacity: 1,
        // y:0,
        transition: {
            duration: 1,
            delay: .25,
            staggerChildren: 2,
        }
    },
};

export const AppearContext = createContext();

const Single = ({ item }) => {

    const { sharedState, setSharedState } = useSharedState();

    const ref = useRef()

    const handleAppear = () => {
        setSharedState(true)
        console.log(sharedState);
        

    }

    return (
        <motion.div className="card" variants={item.variants}>
            <motion.div className="imageCarry" style={{ background: item.bg }} variants={item.variants}>
                <motion.img src={item.pic} alt="" variants={item.variants} />
            </motion.div>
            <motion.div className="main" variants={item.variants}>
                <motion.div className="icon" variants={item.variants} style={{ color: item.color }}>
                    {item.icon}
                </motion.div>
                <motion.h1 variants={item.variants}>{item.title}</motion.h1>
            </motion.div>
            <motion.p variants={item.variants}>{item.description}</motion.p>
            {/* <motion.a target="_blank" href="https://form.jotform.com/242062498395566" variants={item.variants}>
                Get Started <ArrowRight />
                </motion.a> */}
            <button onClick={handleAppear}>Get Started <ArrowRight /></button>
        </motion.div>
    )
}


const Services = ({children}) => {
    const { sharedState, setSharedState } = useSharedState();

    const { isMobile, isTablet, isDesktop } = useDeviceType();

    return (
        <>
                {
                    isDesktop &&
                    <div className="services" id="services">
                        {sharedState && <ExtForm />}
                        <div className="top">
                            <motion.div className="title" variants={textVariants} initial="initial" whileInView="animate">
                                <motion.h2 variants={textVariants}>Our Services</motion.h2>
                                <motion.h1 variants={textVariants}>
                                    Fostering a dynamic and interactive digital marketing experience at SocialBoost Media.
                                </motion.h1>
                            </motion.div>

                            <motion.div className="cardWrapper" variants={cardVariants} initial="initial" whileInView="animate">
                                {services.map(item => (
                                    <Single item={item} key={item.id} />
                                ))}

                            </motion.div>

                            {/* <div className="sliders">
                            <div className="slider"></div>
                            <div className="slider"></div>
                            <div className="slider"></div>
                        </div> */}

                        </div>
                    </div>
                }
                {isMobile && <ServicesMobile />}
        </>
    )
}

export default Services