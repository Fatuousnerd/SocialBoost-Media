import React, { useState, useEffect } from "react";
import "./navbar.scss";
import Subs from "./subs/Subs";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
    const [currentSection, setCurrentSection] = useState("home");

    const handleScroll = () => {
        const sections = document.querySelectorAll("section");
        let current = "home";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const children = section.children;
            if (window.scrollY >= sectionTop - 60) {
                Array.from(children).forEach(child => {
                    current = child.id;
                });
            }
        });

        setCurrentSection(current);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <div className="navbar">
            <Sidebar/>
            <a href="#home">
                <div className="logo">
                    <img src="./favicon-removebg-preview.png" alt="LOGO" />
                </div>
            </a>
            <Subs/>
            <div className="links">
                <div className="one">
                    <ul>
                        <li><a href="#home" className={currentSection === "home" ? "active" : ""}>Home</a></li>
                        <li><a href="#about" className={currentSection === "about" ? "active" : ""}>About Us</a></li>
                        <li><a href="#services" className={currentSection === "services" ? "active" : ""}>Services</a></li>
                        <li><a href="#reviews" className={currentSection === "reviews" ? "active" : ""}>Reviews</a></li>
                        <li><a href="#contact" className={currentSection === "contact" ? "active" : ""}>Contact Us</a></li>
                    </ul>
                </div>
                <div className="two">
                    <ul>
                        <li><a target="_blank" href="https://form.jotform.com/242062498395566">Get Started!</a></li>
                        <li><a target="_blank" href="https://form.jotform.com/242062498395566" className="crt">Boost Your Brand!</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Navbar;
