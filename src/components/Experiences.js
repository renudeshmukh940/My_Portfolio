import React, { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import LiIcon from './LiIcon';
import Head from 'next/head';
import TransitionEffect from './TransitionEffect';
import Layout from './Layout';
import AnimatedText from './AnimatedText';


// Sub-component for individual project entries (no position/company heading)
const ProjectDetails = ({ project, time, address, workList }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <span className='inline-block px-3 py-1 mb-2 text-sm font-bold text-primary bg-primary/10 rounded-full border border-primary/20'>
                    📂 {project}
                </span>
                <div className='capitalize font-medium text-black md:text-sm sm:text-sm xs:text-sm mb-4 font-bold'>
                    {time} | {address}
                </div>
                <div className='font-medium w-full md:text-sm'>
                    <ul className='space-y-3'>
                        {workList.map((item, index) => (
                            <li key={index} className='flex gap-2 text-black'>
                                <span className='text-primary font-bold'>•</span>
                                <span className='font-semibold'>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </li>
    );
};

// Standalone component for entries with their own position/company (e.g. Intern)
const Details = ({ position, company, time, address, workList }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-12 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg mb-1' >
                    {position}&nbsp; <span className='text-primary capitalize'>@ {company}</span>
                </h3>
                <div className='capitalize font-medium text-black md:text-sm sm:text-sm xs:text-sm mb-4 font-bold'>
                    {time} | {address}
                </div>
                <div className='font-medium w-full md:text-sm'>
                    <ul className='space-y-3'>
                        {workList.map((item, index) => (
                            <li key={index} className='flex gap-2 text-black'>
                                <span className='text-primary font-bold'>•</span>
                                <span className='font-semibold'>{item}</span>
                            </li>
                        ))}
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
            <title>Renu | Experience</title>
            <meta name='description' content='Professional experience of Renu Deshmukh' />
        </Head>
        <TransitionEffect />
        <main>
            <Layout> 
                <AnimatedText text={'Professional Journey'} className='mb-16 xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter' />
  
                <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] sm:w-full xs:w-full md:w-full'>
                    <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-1 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]' />
                    
                    <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>

                        {/* ── MPOnline Limited — shown once ── */}
                        <li className='w-[60%] mx-auto md:w-[80%] mt-0 mb-2'>
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, type: "spring" }}
                            >
                                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg mb-1'>
                                   Software Developer&nbsp; <span className='text-primary capitalize'>@ MPOnline Limited</span>
                                </h3>
                            </motion.div>
                        </li>

                        <ProjectDetails 
                            project='MPBSE (Madhya Pradesh Board of Secondary Education) Project'
                            time='01/2026 - Current' 
                            address='Bhopal'
                            workList={[
                                "Developed and maintained application modules for Classes 9th–12th, including Main Form, Late Fee Form, and Edit Application Form.",
                                "Contributed to the Result Module, ensuring accurate data processing and seamless result display.",
                                "Implemented AI-based face validation to verify student photo uploads and prevent incorrect or mismatched images.",
                                "Developed AI-driven document validation to detect blank, blurred, or unreadable images/PDFs, improving data quality.",
                                "Applied validation checks to ensure uploaded documents meet clarity and readability standards.",
                                "Designed and optimized SQL queries and stored procedures for efficient data handling.",
                                "Technologies: ASP.NET (C#), MVC, SQL Server, JavaScript, Python, n8n, LLM APIs."
                            ]}
                        />

                        <ProjectDetails 
                            project='OSMS (Online School Management System) Project'
                            time='01/2026 - Current' 
                            address='Bhopal'
                            workList={[
                                "Designed and implemented an end-to-end AI pipeline to extract structured data from handwritten school registers using OCR and image processing.",
                                "Utilized EasyOCR/Tesseract for handwritten text recognition and applied preprocessing techniques (noise removal, image enhancement) to improve extraction accuracy.",
                                "Built a data post-processing module to map unstructured OCR output into structured tabular format aligned with original register columns.",
                                "Developed a scalable backend system to store extracted data into SQL Server with validation and error handling mechanisms.",
                                "Created an interactive UI to visualize extracted data in grid format and implemented Excel export functionality for reporting and analysis.",
                                "Reduced manual data entry effort by automating digitization of handwritten records and improved operational efficiency."
                            ]}
                        />

                        <ProjectDetails 
                            project='WCDR (Women and Child Development) Project'
                            time='11/2024 - Current' 
                            address='Bhopal'
                            workList={[
                                "Developed and maintained core modules including Application Form, Edit Application, Document Verification, and Objection Management.",
                                "Implemented vacancy collection system across multiple administrative levels (State, District, Block, CDPO, DPO).",
                                "Contributed to Pre-Provisional and Final Merit List generation for Worker and Helper posts.",
                                "Designed and deployed an AI-powered chatbot using n8n workflows and LLM APIs integrated with the Chayan Portal.",
                                "Worked on AI-driven automation workflows to streamline repetitive processes and reduce manual effort.",
                                "Performed data validation, bug fixing, and performance optimization to ensure stable system functionality.",
                                "Technologies: ASP.NET MVC, C#, SQL Server, Python, n8n, LLM APIs."
                            ]}
                        />

                        <ProjectDetails 
                            project='MPPSC (Madhya Pradesh Public Service Commission) Project'
                            time='07/2023 - 11/2024' 
                            address='Bhopal'
                            workList={[
                                "Designed Power BI dashboards to visualize application trends, objection resolution rates, and refund analytics, improving decision-making by 20%.",
                                "Developed and optimized SQL queries to process 100,000+ candidate records for workflows, results, and refunds.",
                                "Worked on Application, Edit, and Court Case modules, implementing dynamic business logic based on government rules.",
                                "Automated admit card and call letter generation using ASP.NET MVC and SQL Server, improving operational efficiency.",
                                "Built an AI-powered system to extract and process data from handwritten registers and 40-60 page rulebooks using OCR and LLMs.",
                                "Designed an end-to-end pipeline to convert unstructured handwritten/PDF data into structured format for form generation.",
                                "Conducted security audits implementing DoS protection, CAPTCHA, and input validation for large-scale systems."
                            ]}
                        />

                        {/* ── ART Technology — separate entry ── */}
                        <Details 
                            position='Intern' 
                            company='ART technology' 
                            time='03/2023 - 05/2023' 
                            address='Bhopal'
                            workList={[
                                "Worked extensively with SQL Server (SSMS, SSIS) to design, optimize, and maintain dynamic SQL scripts and queries.",
                                "Developed custom reports and dashboards using Power BI and SSRS for data visualization.",
                                "Built web scraping scripts using Python to extract data from various sources supporting decision-making workflows.",
                                "Leveraged Python for cleaning, transforming, and integrating scraped data into analytical tools."
                            ]}
                        />
                    </ul>
                </div>
                <div className='my-40'> </div>
            </Layout>
        </main>
        </>
    );
}

export default Experience;
