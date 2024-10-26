import "./footer.scss";
import Popup from "./popup/Popup";
import { motion } from "framer-motion";
import { Copyright, Facebook, GitHub, Instagram, LinkedIn, X, Mail, Phone } from "@mui/icons-material";
import { useState } from "react";

const  columnVariants = {
    initial:{
        opacity:0,
        y:-500,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:1,
            delay:1,
            staggerChildren:1,
        }
    },
};

const clms = [
    {
        id: 1,
        title: "Navigation",
        lnk: "",
        description: ["Home", "About", "Services", "Reviews", "Contact"],
    },
    {
        id: 2,
        title: "Contact Us",
        lnk: ["mailto:socialboostmedia@protonmail.com", "tel:+254745610061"],
        description: ["Mail", "Phone No."],
    },
    {
        id: 3,
        title: "Socials",
        lnk: ["https://instagram.com/sociallboostmedia", "https://x.com/SBMediaz", "https://github.com/Fatuousnerd"],
        description: ["Instagram", "Twitter/X", "Github"],
    },
    // {
    //     id: 4,
    //     title: "Terms & Conditions",
    //     lnk: ["https://instagram.com/username", "https://x.com/username", "https://linkedin.com/username", "https://github/com/username"],
    //     description: ["Terms", "Privacy", "Cookies"],
    // },
];

const Collumn = ({ item }) => {
    return (
        <motion.div className="clms" variants={columnVariants} initial="initial" whileInView="animate">
            <motion.p variants={columnVariants}>{item.title}</motion.p>
            <motion.ul>
                {item.description.map((desc, index) => {
                    const href = Array.isArray(item.lnk) && item.lnk[index] 
                        ? item.lnk[index] 
                        : item.lnk || `#${desc.toLowerCase().replace(/ /g, '-')}`;
                    return (
                        <motion.li key={index}><motion.a href={href}>{desc}</motion.a></motion.li>
                    );
                })}
            </motion.ul>
        </motion.div>
    );
};


const Footer = () => {

    const [showModal, setshowModal] = useState(false);

  return (
        <>
            {showModal && <Popup onClose={() => setshowModal(false)}/>}
            <div className="footer">
                <div className="wrap">
                    <div className="left">
                        <div className="logo">
                            <img src="./favicon-removebg-preview.png" alt="" />
                            <h1>SocialBoost Media</h1>
                        </div>
                        <h3>Experience the difference professional digital marketing can make. Start your journey with us today!</h3>
                    </div>
                    
                    <div className="right">
                        
                        {clms.map(item=>(
                            <Collumn item={item} key={item.id} />
                        ))}
                        
                    </div>
                </div>
                
                <div className="bottom">
                    <div className="copy">
                        <Copyright/>
                        2024 SocialBoost Media. All Rights Reserved. 
                    </div>

                    <div className="toc">
                        <li><button onClick={() => setshowModal(true)}>Terms</button></li>
                        <li><button onClick={() => setshowModal(true)}>Privacy</button></li>
                        <li><button onClick={() => setshowModal(true)}>Cookies</button></li>
                    </div>
                    
                    <div className="socials">
                        <a target="_blank" href="https://x.com/SBMediaz"><X/></a>
                        <a target="_blank" href="https://instagram.com/sociallboostmedia"><Instagram/></a>
                        <a target="_blank" href="https://github.com/Fatuousnerd"><GitHub/></a>
                        <a target="_blank" href="mailto:socialboostmedia@protonmail.com"><Mail/></a>
                        <a href="tel:+254745610061"><Phone/></a>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Footer