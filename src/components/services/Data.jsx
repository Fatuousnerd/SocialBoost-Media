import { AdsClick, ArrowRight, Code, Filter1, Filter2, Filter3, MarkEmailRead } from "@mui/icons-material";

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

export const services = [
    {
        id: 1,
        textVariants: textVariants,
        variants: cardVariants,
        pic: "./2.png",
        color: "#0B1215",
        bg: "blue",
        icon: <Filter1 />,
        title: "Engaging Short-Form Content Editing",
        description: "Boost engagement and capture attention with our expertly crafted short-form content edits. We bring out the best in your video content to resonate with your audience and elevate your brand's impact.",
    },
    {
        id: 2,
        textVariants: textVariants,
        variants: cardVariants,
        pic: "./3.png",
        color: "#0B1215",
        bg: "indigo",
        icon: <Filter2 />,
        title: "Social Media Optimization",
        description: "Elevate your brand's social presence with content strategies that make a difference. From trend-driven edits to optimized posting schedules, we ensure your content stands out and reaches the right audience.",
    },
    {
        id: 3,
        textVariants: textVariants,
        variants: cardVariants,
        pic: "./4.png",
        color: "#0B1215",
        bg: "pink",
        icon: <Filter3 />,
        title: "Custom Content Strategy",
        description: "Achieve impactful growth with content strategies tailored to your brand. Our team crafts data-driven plans for short-form content that maximizes reach, engagement, and growth across social media platforms.",
    },
];