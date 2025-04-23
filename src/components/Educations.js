import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion';
import LiIcon from './LiIcon';
import Head from 'next/head';
import TransitionEffect from './TransitionEffect';
import Layout from './Layout';
import AnimatedText from './AnimatedText';


const Details = ({ type, course, time, address }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 200 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}

        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-sm' >
                {type}&nbsp;
            </h3>
            <span className='capitalize font-medium text-dark/60 md:text-sm sm:text-sm xs:text-xs'>
                {address}
            </span><br />
            <span className='capitalize font-medium text-primary md:text-sm sm:text-sm xs:text-xs'>
                {time}
            </span>
            <p className='font-medium w-full md:text-sm sm:text-sm xs:text-xs'>
                {course}
            </p>
        </motion.div>
    </li>
}

function Education() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })
    return (
        <>
        <Head>
            <title>
                Renu | Education
            </title>
            <meta name='description' content='any description' />
        </Head>
        <TransitionEffect />
        <main>
            <Layout> <AnimatedText text={'Educations'} className='mb-8 xs:text-2xl sm:text-3xl md:text-4xl' />
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] sm:w-full xs:w-full md:w-full'>
                <motion.div style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-1 w-[6px] h-full bg-green-500 origin-top md:w-[2px] md:left-[30px] xs:left-[20px]' />
                <div className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details type={'Bachelors Of Technology In Computer Science'}
                        course={'Relevat Course included  Data Analytics, SQL, Python, Data Structure & Algorithms'}
                        time={'AUG 2019 - JUNE 2023'}
                        address={'Rajiv Gandhi Proudyogiki Vishwavidyalaya Bhopal(M.P)'}
                    />
                    <Details type={'Higher Seconday School (12th Board) In Mathematics'}
                        course={'Relevat Course included Maths, Physics, Chemistry'}
                        time={'APR 2018 - MAR 2019'}
                        address={'Urban Higher Secondary School Balaghat [M.P.]'}
                    />
                    <Details type={'Senior Seconday School (10th Board) In Mathematics'}
                        course={'Relevat Course included Maths, Physics, Chemistry, Social Science'}
                        time={'APR 2016 - MAR 2017'}
                        address={'Urban Higher Secondary School Balaghat [M.P.]'}
                    />
                </div>
            </div>
            <div className='pb-40'></div>
        </Layout>
        </main>
        </>
    )
}

export default Education