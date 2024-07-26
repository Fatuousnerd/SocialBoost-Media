import "../../global.scss";
import "./services.scss";
import ServicesMobile from "./servicesMobile/ServicesMobile";
import useDeviceType from "../useDeviceType/useDeviceType";
import { useRef } from "react";
import { motion } from "framer-motion";
import { AdsClick, ArrowRight, Code, MarkEmailRead } from "@mui/icons-material";

const cardVariants = {
    initial:{
        opacity:0,
        y:-100,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:.25,
        }
    },
};

const textVariants = {
    initial:{
        opacity:0,
        // y:-100,
    },
    animate:{
        opacity:1,
        // y:0,
        transition:{
            duration:1,
            delay:.25,
            staggerChildren:2,
        }
    },
};

const services = [
    {
        id:1,
        textVariants:textVariants,
        variants:cardVariants,
        pic:"./3D_SEO_Illustrations-removebg-preview.png",
        color:"#0B1215",
        bg:"blue",
        icon:<AdsClick/>,
        title:"Expert Google & Meta Ads Campaigns",
        description:"Drive targeted traffic and boost conversions with our expert Google and Meta (Facebook & Instagram) ad campaigns. Maximize your ROI with tailored strategies crafted for your business goals.",
    },
    {
        id:2,
        textVariants:textVariants,
        variants:cardVariants,
        pic:"./dribbble_web_design-removebg-preview.png",
        color:"#0B1215",
        bg:"indigo",
        icon:<Code/>,
        title:"Custom Web Development Services",
        description:"Transform your online presence with our custom web development services. From responsive designs to robust e-commerce solutions, we build websites that engage users and achieve business objectives.",
    },
    {
        id:3,
        textVariants:textVariants,
        variants:cardVariants,
        pic:"./download-removebg-preview (1).png",
        color:"#0B1215",
        bg:"pink",
        icon:<MarkEmailRead/>,
        title:"Effective E-Mail Marketing Solutions",
        description:"Enhance customer engagement and drive sales with our effective e-mail marketing solutions. From personalized campaigns to automated workflows, we help you build lasting relationships and maximize ROI.",
    },
];

const Single = ({item}) => {

    const ref = useRef()

    return(
        <motion.div className="card" variants={item.variants}> 
            <motion.div className="imageCarry" style={{background:item.bg}} variants={item.variants}>
                <motion.img src={item.pic} alt="" variants={item.variants}/>
            </motion.div>
            <motion.div className="main" variants={item.variants}>
                <motion.div className="icon" variants={item.variants} style={{color:item.color}}>
                        {item.icon}
                </motion.div>
                <motion.h1 variants={item.variants}>{item.title}</motion.h1>
            </motion.div>
            <motion.p variants={item.variants}>{item.description}</motion.p>
            <motion.a target="_blank" href="https://form.jotform.com/242062498395566" variants={item.variants}>
                Get Started <ArrowRight/>
            </motion.a>
        </motion.div>
    )
}


const Services = () => {

    const { isMobile, isTablet, isDesktop } = useDeviceType();

  return (
    <>
        {
            isDesktop &&
                <div className="services" id="services">
                    <div className="top">
                        <motion.div className="title" variants={textVariants} initial="initial" whileInView="animate">
                            <motion.h2 variants={textVariants}>Our Services</motion.h2>
                            <motion.h1 variants={textVariants}>
                                Fostering a dynamic and interactive digital marketing experience at SocialBoost Media.
                            </motion.h1>
                        </motion.div>

                        <motion.div className="cardWrapper" variants={cardVariants} initial="initial" whileInView="animate">
                        {services.map(item=>(
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
        {isMobile && <ServicesMobile/>}
    </>
  )
}

export default Services