import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./servicesMobile.scss";
import { useRef } from "react";
import { AdsClick, Code, MarkEmailRead } from "@mui/icons-material";
import { services } from "../Data";

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

const Single = ({ item }) => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        //offset:["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-600, 600])

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref} style={{ background: item.bg }}>
                        <img src={item.pic} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <a target="_blank" href="https://form.jotform.com/242062498395566">
                            <button>Work With Us!</button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const ServicesMobile = () => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div className="servicesMobile" id="services" ref={ref}>
            <div className="progress">
                <h1>Our Services</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {services.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
};

export default ServicesMobile
