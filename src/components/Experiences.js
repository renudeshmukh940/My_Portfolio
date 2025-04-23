import React, { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import LiIcon from './LiIcon';
import Head from 'next/head';
import TransitionEffect from './TransitionEffect';
import Layout from './Layout';
import AnimatedText from './AnimatedText';


const Details = ({ position, company, time, address, work1, work2, work3 }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 200 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg' >
                    {position}&nbsp; <p className='w-full text-primary capitalize'>@ {company}</p>
                </h3>
                <span className='capitalize font-medium text-dark/60 md:text-sm sm:text-sm xs:text-sm'>
                    {time} | {address}
                </span>
                <div className='font-medium w-full md:text-sm'>
                    <ul>
                        <li>• {work1}</li><br />
                        <li>• {work2}</li><br />
                        <li>• {work3}</li>
                    </ul>
                </div>
            </motion.div>
        </li>
    );
};

function Experience() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });
    return (
        <>
        <Head>
            <title>
                Renu | Experience
            </title>
            <meta name='description' content='any description' />
        </Head>
        <TransitionEffect />
        <main>
            <Layout> <AnimatedText text={'Experience'} className='mb-8 xs:text-2xl sm:text-3xl md:text-4xl' />
  
  
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] sm:w-full xs:w-full md:w-full'>
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-1 w-[6px] h-full bg-green-500 origin-top md:w-[2px] md:left-[30px] xs:left-[20px]' />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    
                    
                    <Details position={' Assistant System Engineer'} company={'MP Online Limited;'} time={'Jun 2023 - Current'} address={'Bhopal'}
                        work1=' MPPSC Project:
Actively working on the MPPSC portal, ensuring smooth functionality and timely delivery across major modules such as Application Form, Objection, Call Letter, Admit Card, and Refunds.'
                        work2='Technologies Used:
ASP.NET MVC, SQL Server, JavaScript, HTML, CSS, Reporting Server, jQuery, Bootstrap'
                        work3='Role & Contributions:
Developed secure application forms, ShowRecipt and Unpaid application form with OTP verification, integrated SMS/email confirmations, and receipt generation. Managed end-to-end workflows for objections and result processing, including question jumbling logic. the generate of Admit Cards and Call Letters based on candidate eligibility. Streamlined refund and refund objection processes with proper validations. Regularly conducted security audits, implementing DoS protection, CAPTCHA, input validation, and access control to ensure portal safety and compliance.' />
                    
                    
                    <Details position={'Intern'} company={'ART technology'} time={'MAR 2023 - MAY 2023'} address={'Bhopal'}
                        work1=' Technologies Used :
SQL Server (SSMS, SSIS) | Power BI | Python | Web Scraping'
                        work2='SQL Server & Power BI :
Worked extensively with SQL Server using SSMS and SSIS to design, optimize, and maintain dynamic SQL scripts and queries. Proficient in all key SQL command types (DDL, DML, DCL, DQL, TCL), with a focus on data accuracy and integrity. Developed custom reports and dashboards using Power BI and SSRS, enabling clear visualization of data and performance metrics.'
                        work3='Python & Web Scraping :
Completed small-scale projects using Python for data automation and analysis. Built web scraping scripts to extract data from various sources, supporting reporting and decision-making workflows. Leveraged Python for cleaning, transforming, and integrating scraped data into analytical tools like Power BI.' />
                </ul>
            </div>
        <div className='my-40'> </div>
        </Layout>
        </main>
        </>
    );
}

export default Experience;
