import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ type, course, time, address, color }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-16 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]'>
            <LiIcon reference={ref} color={color} />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
            >
                <h3 className='capitalize font-black text-2xl sm:text-xl xs:text-lg text-slate-900 tracking-tight' >
                    {type}
                </h3>
                <div className={`capitalize font-bold ${color === 'blue' ? 'text-blue-600' : 'text-pink-600'} text-sm tracking-widest mt-2`}>
                    {address}
                </div>
                <div className='capitalize font-black text-slate-400 text-xs mt-1 uppercase tracking-[0.2em]'>
                    {time}
                </div>
                <p className='font-medium w-full mt-4 text-slate-600 leading-relaxed'>
                    {course}
                </p>
            </motion.div>
        </li>
    );
};

function Education() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })
    return (
        <div className='py-20'>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] sm:w-full xs:w-full md:w-full'>
                <motion.div style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-1 w-[4px] h-full bg-gradient-to-b from-blue-600 to-pink-600 origin-top md:w-[2px] md:left-[30px] xs:left-[20px]' />
                
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details 
                        type='Bachelors Of Technology In Computer Science'
                        course='Relevant Coursework: Data Analytics, SQL, Python, Data Structure & Algorithms'
                        time='AUG 2019 - JUNE 2023'
                        address='Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal (M.P)'
                        color="blue"
                    />
                    <Details 
                        type='Higher Secondary (12th) - Mathematics'
                        course='Focus: Mathematics, Physics, Chemistry'
                        time='APR 2018 - MAR 2019'
                        address='Urban Higher Secondary School, Balaghat (M.P.)'
                        color="pink"
                    />
                    <Details 
                        type='Senior Secondary (10th)'
                        course='Focus: Mathematics, Science, Social Science'
                        time='APR 2016 - MAR 2017'
                        address='Urban Higher Secondary School, Balaghat (M.P.)'
                        color="blue"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education