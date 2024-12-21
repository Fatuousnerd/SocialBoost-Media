import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./pricingMobile.scss";
import "../pricing.scss";
import { useRef } from "react";
import { AdsClick, Code, MarkEmailRead } from "@mui/icons-material";
import { Data } from "../Data";
import {useSharedState} from "../../order/SharedContext"
import ExtForm from "../../order/ExtForm"

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
    const { sharedState, setSharedState } = useSharedState();
    const { scrollYProgress } = useScroll({
        target: ref,
        //offset:["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-600, 600])
    // style={{ y }}
    
    const handleOpen = () => {
        setSharedState(true)
    };

    return (
        <section>
            {sharedState && <ExtForm/>}
            <a onClick={handleOpen}>
                <motion.div className="content">
                    <h1>{item.name}</h1>
                    <p className='desc'>{item.desc}</p>
                    <motion.div className="bn">
                        {item.text.map((line, index) => (
                            <p className='txt' key={index}>{line}</p>
                        ))}
                    </motion.div>
                    <motion.p className='cta'><i>{item.cta}</i></motion.p>
                    <motion.p className="price">{item.price}</motion.p>
                </motion.div>
            </a>
        </section>
    )
}

const PricingMobile = () => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div className="pricingMobile" id="services" ref={ref}>
            <div className="progress">
                <h1>Pricing</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {Data.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
};

export default PricingMobile
