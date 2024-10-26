import "./contact.scss";
import { motion } from "framer-motion";
import { Instagram, Mail, Phone, X } from "@mui/icons-material";

const variants = {
    initial:{
        y:10,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration: .5,
            delay:.5,
            staggerChildren:1,
        },
    },
};

const sendEmail = (e) => {
    e.preventDefault()

    const sm = document.getElementById('sm');

    emailjs.init({
        publicKey: 'yFNDsfwT8__PnMjDk',
      });

    emailjs.sendForm('service_ey11r7z', 'template_76uicad', '#myForm').then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          sm.style.color = 'green';
          sm.innerHTML = "Message Sent!";
        },
        (error) => {
          console.log('FAILED...', error);
          sm.style.color = 'red';
          sm.innerHTML = "Failed!! Message Not Sent! Try Again";

        },
      );
}

const Contact = () => {
  return (
    <div className="contact" id="contact">
        <motion.div className="island" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="text" variants={variants}>
                <motion.h1 variants={variants}>Contact Us</motion.h1>
            </motion.div>

            <motion.div className="hold" variants={variants}>

                <motion.div className="form" variants={variants}>
                    <motion.h1 variants={variants}>Leave Us A Message</motion.h1>
                    <motion.form action="" id="myForm" onSubmit={sendEmail} variants={variants}>
                        <motion.input type="text" placeholder="Name" name="name" variants={variants}/>
                        <motion.input type="email" placeholder="Mail Address" name="email" variants={variants}/>
                        <motion.input type="text" placeholder="Subject" name="subject" variants={variants}/>
                        <motion.textarea placeholder="Message" name="message" rows={4} variants={variants}></motion.textarea>
                        <motion.button type="submit" variants={variants}>Send</motion.button>
                    </motion.form>
                        <motion.div className="msg">
                            <motion.small id="sm" ></motion.small>
                        </motion.div>
                </motion.div>

            </motion.div>
                <motion.div className="address">
                    <motion.div className="socials">
                        <ul>
                            <li><a target="_blank" href="https://x.com/SBMediaz"><X/> </a></li>
                            <li><a target="_blank" href="https://instagram.com/sociallboostmedia"><Instagram/> </a></li>
                            <li><a target="_blank" href="mailto:socialboostmedia@protonmail.com"><Mail/> </a></li>
                            <li><a target="_blank" href="tel:+254745610061"><Phone/> </a></li>
                            {/* <li><a href="">Facebook</a></li> */}
                        </ul>
                    </motion.div>
                    
                </motion.div>

        </motion.div>
    </div>
  )
}

export default Contact