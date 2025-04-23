import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Skill Component with angle & dynamic radius
const Skill = ({ name, angle, radius }) => {
    const radians = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radians);
    const y = radius * Math.sin(radians);

    return (
        <motion.div
            className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
                p-4 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 
                sm:bg-transparent sm:text-dark xs:bg-transparent xs:text-dark'
            initial={{ x: 0, y: 0 }}
            whileInView={{ x, y }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
        >
            {name}
        </motion.div>
    );
};

const Skills = () => {
    const [radius, setRadius] = useState(150);

    useEffect(() => {
        const updateRadius = () => {

            const width = window.innerWidth;
            if (width >= 1280) setRadius(250);        // xl screens
            else if (width >= 1024) setRadius(220);   // lg screens
            else if (width >= 768) setRadius(180);    // md screens
            else if (width >= 640) setRadius(140);    // sm screens
            else setRadius(100);                      // xs screens
        };

        updateRadius();
        window.addEventListener('resize', updateRadius);

        return () => window.removeEventListener('resize', updateRadius);
    }, []);

    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>

            <div className='w-full h-screen relative flex items-center justify-center 
              rounded-full bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 
              lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]'>

                {/* Central Skill */}
                <motion.div
                    className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
                      py-3 px-6 shadow-dark cursor-pointer absolute lg:p-5 md:p-3 xs:text-xs xs:p-1 sm:text-xs'
                    whileHover={{ scale: 1.2 }}
                >
                    Data Science
                </motion.div>

                {/* Skill Bubbles */}
                <Skill name="Power BI" angle={5} radius={radius} />
                <Skill name="Tableau" angle={25} radius={radius} />
                <Skill name="SQL" angle={50} radius={radius} />
                <Skill name="Python" angle={75} radius={radius} />
                <Skill name="Pandas" angle={100} radius={radius} />
                <Skill name="NumPy" angle={125} radius={radius} />
                <Skill name="Statistics" angle={150} radius={radius} />
                <Skill name="Data Cleaning" angle={175} radius={radius} />
                <Skill name="EDA" angle={190} radius={radius} />
                <Skill name="Machine Learning" angle={210} radius={radius} />
                <Skill name="Data Visualization" angle={235} radius={radius} />
                <Skill name="Dashboards" angle={275} radius={radius} />
                <Skill name="Business Intelligence" angle={314} radius={radius} />
                <Skill name="Report Automation" angle={332} radius={radius} />
                <Skill name="ETL" angle={348} radius={radius} />

                {/* Decorative Rings */}
                <div className="absolute w-[40%] h-[40%] border border-black rounded-full opacity-10" />
                <div className="absolute w-[60%] h-[60%] border border-black rounded-full opacity-20" />
                <div className="absolute w-[80%] h-[80%] border border-black rounded-full opacity-10" />
                <div className="absolute w-[100%] h-[100%] border border-black rounded-full opacity-20" />
            </div>
        </>
    );
};

export default Skills;
