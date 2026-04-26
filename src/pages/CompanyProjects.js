import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import TransitionEffect from '@/components/TransitionEffect';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectCard = ({ type, title, client, description, highlights, techStack, image, link }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="w-full relative flex flex-col items-start justify-start p-12 lg:p-8 bg-white rounded-[3rem] border border-gray-100 shadow-2xl shadow-slate-200/50 mb-20 md:mb-12"
        >
            {/* Badge removed from absolute position to avoid overlap */}


            <div className="w-full grid grid-cols-12 gap-12 lg:gap-8 group">
                {/* Left Side: Project Image */}
                <a href={link} target="_blank" rel="noopener noreferrer" className="col-span-5 lg:col-span-12 relative h-[400px] md:h-[300px] rounded-2xl overflow-hidden shadow-xl border border-gray-100 block">
                    <Image 
                        src={image} 
                        alt={title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        priority
                    />
                </a>

                {/* Right Side: Content */}
                <div className="col-span-7 lg:col-span-12 flex flex-col pt-0">
                    <div className="mb-6">
                        <span className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-black uppercase tracking-wider rounded-full shadow-lg shadow-blue-500/20">
                            {type}
                        </span>
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-[0.3em] text-gray-400 mb-2">
                        {title}
                    </h3>
                    <h2 className="text-4xl md:text-3xl font-black text-blue-600 mb-6 tracking-tight">
                        {client}
                    </h2>
                    
                    <div className="text-gray-500 font-medium text-lg md:text-base leading-relaxed mb-10 max-w-4xl">
                        {description.split('\n').map((point, index) => (
                            <p key={index} className="flex items-start gap-2 mb-2">
                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 shrink-0" />
                                <span>{point.replace(/^- /, '')}</span>
                            </p>
                        ))}
                    </div>

                    {/* Highlights Grid */}
                    <div className="flex flex-wrap gap-4 mb-12">
                        {highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-4 bg-gray-50/80 px-8 py-5 rounded-2xl border border-gray-100/50">
                                <span className="text-2xl font-black text-black leading-none">{h.value}</span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 leading-none">{h.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Tech Stack Breakdown */}
                    <div className="space-y-6">
                        {Object.entries(techStack).map(([category, skills], i) => (
                            <div key={i} className="flex items-start md:flex-col md:items-start gap-4">
                                <div className="min-w-[140px] flex items-center gap-2 pt-1">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{category}</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((s, j) => (
                                        <span key={j} className="px-4 py-1.5 bg-indigo-50/50 text-indigo-600 text-[10px] font-bold rounded-lg border border-indigo-100/50 hover:bg-indigo-600 hover:text-white transition-all cursor-default">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Right Action */}
                    <div className="mt-12 flex justify-end w-full">
                        <a href={link} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 bg-blue-600/10 hover:bg-blue-600 p-2 pr-10 pl-6 rounded-full transition-all duration-500">
                            <span className="text-blue-600 group-hover:text-white font-bold text-sm">View Case Study</span>
                            <div className="w-10 h-10 bg-blue-600 group-hover:bg-white rounded-full flex items-center justify-center -mr-8 transition-all shadow-xl">
                                <svg className="w-5 h-5 text-white group-hover:text-blue-600 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const CompanyProjects = () => {
    const projects = [
        {
            type: "Government Service & Operations Automation",
            title: "MPBSE (Madhya Pradesh Board of Secondary Education)",
            client: "MPBSE - Bhopal",
            description: "- Developed and maintained application modules for Classes 9th–12th, including Main Form, Late Fee Form, and Edit Application Form\n- Contributed to the Result Module, ensuring accurate data processing and seamless result display\n- Implemented AI-based face validation to verify student photo uploads and prevent incorrect or mismatched images\n- Developed AI-driven document validation to detect blank, blurred, or unreadable images/PDFs, improving data quality and reducing manual verification\n- Applied validation checks to ensure uploaded documents meet clarity and readability standards\n- Performed bug fixing, data validation, and performance optimization to maintain system stability\n- Designed and optimized SQL queries and stored procedures for efficient data handling\n- Collaborated with cross-functional teams for requirement analysis, testing, and timely delivery",
            highlights: [
                { value: "AI-Validation", label: "Image Quality" },
                { value: "9th-12th", label: "Scaling" },
                { value: "Result", label: "Automation" }
            ],
            techStack: {
                "Framework": ["ASP.NET (C#)", "MVC", "JavaScript"],
                "Database": ["SQL Server", "Stored Procedures", "Optimization"],
                "AI/Automation": ["Python", "AI Image Validation", "Face Recognition", "n8n", "LLM APIs"]
            },
            image: "/images/projects/mpbse.png",
            link: "https://mpbse.mponline.gov.in/MPBSE/MPBSE"
        },
        {
            type: "Chayan Portal",
            title: "WCD(WOMEN AND CHILD DEVELOPMENT) ",
            client: "Recuritment service",
            description: "- Developed and maintained core modules including Application Form, Edit Application, Document Verification, and Objection Management\n- Implemented vacancy collection system across multiple administrative levels (State, District, Block, CDPO, DPO)\n- Contributed to Pre-Provisional and Final Merit List generation for Worker and Helper posts\n- Designed and deployed an AI-powered chatbot using n8n workflows and LLM APIs, integrated with the Chayan Portal to automate user query handling\n- Worked on AI-driven automation workflows to streamline repetitive processes and reduce manual effort\n- Performed data validation, bug fixing, and performance optimization to ensure stable and accurate functionality\n- Supported Objection Calling & Verification modules, ensuring smooth workflow and correct data processing\n- Developed and optimized SQL queries and stored procedures for efficient data operations\n- Actively participated in UAT, functional testing, and system stabilization",
            highlights: [
                { value: "n8n", label: "AI Chatbot" },
                { value: "State-Wide", label: "Recruitment" },
                { value: "Merit", label: "Automation" }
            ],
            techStack: {
                "Backend": ["ASP.NET MVC", "C#", "SQL Server"],
                "AI/Automation": ["n8n", "Python", "LLM APIs", "Chatbot Design"],
                "Testing": ["UAT", "Functional Testing", "System Stabilization"]
            },
            image: "/images/projects/wcdr.png",
            link: "https://chayan.mponline.gov.in/Portal/Services/WCDR/WCDRHome.aspx"
        },
        {
            type: "Educational Grant & Scholarship Workflow",
            title: "OSMS MANAGEMENT SYSTEM",
            client: "Online School Management System",
            description: "- Designed and implemented an end-to-end AI pipeline to extract structured data from handwritten school registers using OCR and image processing techniques\n- Utilized EasyOCR/Tesseract for handwritten text recognition and applied preprocessing techniques (noise removal, image enhancement)\n- Built a data post-processing module to map unstructured OCR output into structured tabular format\n- Developed a scalable backend system to store extracted data into SQL Server with validation and error handling\n- Created an interactive UI to visualize extracted data in grid format and implemented Excel export functionality\n- Reduced manual data entry effort by automating digitization of handwritten records and improved operational efficiency",
            highlights: [
                { value: "EasyOCR", label: "Handwritten" },
                { value: "98%", label: "Reduction" },
                { value: "Pipeline", label: "Automation" }
            ],
            techStack: {
                "OCR Tech": ["EasyOCR", "Tesseract", "Image Processing"],
                "Backend": ["SQL Server", "Validation Layer", "Excel Export"],
                "Frontend": ["Data Grid UI", "Visualization", "Reporting"]
            },
            image: "/images/projects/osms.png",
            link: "https://osms.mponline.gov.in/Portal/SMS/Home/Home.aspx"
        },
        {
            type: "Public Service Recruitment & Data Systems",
            title: "MPPSC EXAMINATION PORTAL",
            client: "Madhya Pradesh Public Service Commission",
            description: "- Designed Power BI dashboards to visualize MPPSC application trends, objection resolution rates, and refund analytics, improving decision-making by 20%\n- Optimized SQL queries to process 100,000+ candidate records for application workflows, result generation, and refund validations\n- Worked on Application, Edit, and Court Case modules, implementing dynamic business logic based on government rules\n- Automated admit card and call letter generation using ASP.NET MVC and SQL Server\n- Streamlined objection handling and refund processes, reducing processing time by 15%\n- Conducted security audits implementing DoS protection, CAPTCHA, and input validation\n- Built an AI-powered system to extract and process data from handwritten registers and 60-page PDF rulebooks using OCR and LLM techniques\n- Designed end-to-end pipeline to convert unstructured PDF data into structured format for form generation\n- Automated requirement extraction from rulebooks and developed structured grid UI with Excel export",
            highlights: [
                { value: "100K+", label: "Records" },
                { value: "20%", label: "Better Decisions" },
                { value: "OCR/LLM", label: "Extraction" }
            ],
            techStack: {
                "Framework": ["ASP.NET", "C#", "MVC", "Razor"],
                "Data/BI": ["Power BI", "SQL Server", "Analytics", "Optimization"],
                "Security": ["DoS Protection", "CAPTCHA", "Input Validation"],
                "AI/Data": ["OCR", "LLM", "Requirement Extraction", "PDF Processing"]
            },
            image: "/images/projects/mppsc.png",
            link: "https://mppsc.mponline.gov.in/Portal/Examinations/MPPSC/Attestation/Home/Home.aspx"
        },
        {
            type: "Community Research & AI Development",
            title: "AI FOUNDATION CLUB",
            client: "In House Project",
            description: "A collaborative platform for AI researchers and enthusiasts to share insights on Transformers, Large Language Models, and Generative AI. Leading architectural discussions and community-driven projects to push the boundaries of open-source intelligence.",
            highlights: [
                { value: "Community", label: "Driven" },
                { value: "Cutting-Edge", label: "Research" },
                { value: "Global", label: "Reach" }
            ],
            techStack: {
                "AI/ML": ["LLMs", "Transformers", "Python", "PyTorch"],
                "Web Portal": ["Next.js", "React", "Framer Motion"],
                "Collaboration": ["GitHub", "Discord API", "Discussion Boards"],
                "Content": ["Markdown", "Static Site Generation", "SEO"]
            },
            image: "/images/projects/aiclub.png",
            link: "https://ai-club-sepia.vercel.app/"
        }
    ];

    return (
        <>
            <Head>
                <title>Renu | Company Projects</title>
                <meta name="description" content="Professional company projects and client assignments managed by Renu Deshmukh." />
            </Head>
            <TransitionEffect />
            <main className='w-full flex flex-col items-center justify-center bg-gray-50/50 min-h-screen'>
                <Layout className='pt-16'>
                    <AnimatedText 
                        text="Company Projects" 
                        className='mb-20 lg:!text-7xl md:!text-6xl sm:!text-5xl xs:!text-4xl' 
                    />
                    
                    <div className='flex flex-col items-center justify-center w-full'>
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default CompanyProjects;
