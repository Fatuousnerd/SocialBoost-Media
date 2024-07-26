import React from 'react';
import { motion } from 'framer-motion';

const Test = () => {
    const variants = {
        initial: { x: -400 },
        animate: { x: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            variants={variants}
            style={{ width: '100%', height: '100px', background: 'red', overflow: 'hidden' }}
        >
            Animate me!
        </motion.div>
    );
};

export default Test;
