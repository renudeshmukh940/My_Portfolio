import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import TransitionEffect from '@/components/TransitionEffect';

const projectsData = [
    {
        id: 1,
        title: 'Zomato Business Analysis',
        category: 'Data Analyst',
        tag: 'data_analyst',
        image: '/images/projects/zomato.png',
        description: "The data used here is sourced from Zomato's comprehensive dataset covering various aspects of food sales across India. This meticulous process yields actionable insights, empowering data-driven decision-making for the company. Used different types of customized visualization (bar charts, pie chart, donut chart, clustered bar chart etc).",
        techStack: 'Tech Stack: SQL, Data Analysis, PowerBI',
        link: '/DemoProject3',
        video: '',
        code: 'https://github.com/renudeshmukh940/'
    },
    {
        id: 2,
        title: 'Object Detection',
        category: 'Machine Learning',
        tag: 'machine_learning',
        image: '/images/projects/obj.png',
        description: "This is a machine learning project for object detections using transfer learning Using CoCo Dataset for training. This application takes an image and generate a prediction confidence for each category present inside the image and draw a rectangle around them. Using Tranfer learning the Application works 60% faster and 40% more efficient than the standard Approach.",
        techStack: 'Tech Stack: Deep Learning, Transfer Learning, NextJS, APIs',
        link: '/ObjectDetection',
        video: 'https://firebasestorage.googleapis.com/v0/b/newtry-d602d.appspot.com/o/objectDetection.mp4?alt=media&token=77e06830-85df-49b8-9a6b-b8183ac2f7e4',
        code: 'https://github.com/renudeshmukh940/My_Portfolio/blob/main/src/pages/ObjectDetection.js'
    },
    {
        id: 3,
        title: 'Pizza Sales Analysis',
        category: 'Data Analyst',
        tag: 'data_analyst',
        image: '/images/projects/sales.png',
        description: "Used complex parameters to drill down in worksheet and customization using filters and slicers. Created connections, joined new tables, calculations to manipulate data and enabled user driven parameters for visualizations.Used different types of customized visualization (bar charts, pie chart, donut chart, clustered bar chart etc)",
        techStack: 'Tech Stack: SQL, Data Analysis, PowerBI',
        link: '/DemoProject1',
        video: '',
        code: 'https://github.com/renudeshmukh940/Sales_DataAnalysis'
    },
    {
        id: 4,
        title: 'eCommerce Analysis',
        category: 'Data Analyst',
        tag: 'data_analyst',
        image: '/images/projects/ecommerce.png',
        description: 'This is a project build using PowerBI and SQL. I used SQL for data filtering and cleaning, where as I used PowerBi for the Dashboard Making for better Data visualization and understanding on the key notes that may or may not affect the Pizza Sales in the Pizza Hut. The Data Set which is used to build this analysis is taken from the open source data hub',
        techStack: 'Tech Stack: Data Analysis, SQL, PowerBI',
        link: '/DemoProject2',
        video: '',
        code: 'https://github.com/renudeshmukh940/ECommerece_Data_Analysis'
    },

    {
        id: 5,
        title: 'Cancer Classification',
        category: 'Deep Learning',
        tag: 'machine_learning',
        image: '/images/projects/cc.png',
        description: "This is a Deep Learning project based on the Adenocarcinomas, Which occur most commonly in the: bowel around 90% of bowel cancers are adenocarcinomas, which begin in the glandular tissue lining of the bowel. Most breast cancers are adenocarcinomas. They begin in the milk producing glands in the breast. This is an End-to-End Project which includes CI/CD pipeline and development.This project is done using Modular Coding and using Random Forest as ML Algorithm and Flask as Frontend and Backend Server",
        techStack: 'Tech Stack: AWS EC2, S3, ECR, git Actions, MlFLow, DVC, Dagshub',
        link: '',
        video: 'https://firebasestorage.googleapis.com/v0/b/newtry-d602d.appspot.com/o/cancer_classification.mp4?alt=media&token=567c6522-feec-4ce9-8848-72eb7f978c0c',
        code: 'https://github.com/renudeshmukh940/Chest-Cancer-Detection'
    },
    {
        id: 6,
        title: 'Job Search AGENTIC Model',
        category: 'SAAS-AI',
        tag: 'sda',
        image: '/images/projects/job.png',
        description: "This is a SAAS Application which searchs job posting when given positons and companies name. The Artificial Intelligence Agent uses Internet to search for all the given position in given companies and return the Job Posting Links. The application is build using React's (Next JS) as Frontend and Python's Flask as Backend Server. It uses Large Language Model like (gpt-4, mixtrl, Gemini etc) and Agents to do the jobs using Custom Tools(like Search Engine - Serper or DuckDuckGO) and Prompt Engineering",
        techStack: 'Tech Stack: LLMs, Agents, Flask, Prompt Engineering, React NextJS, APIS, Hooks, CrewAI',
        link: '',
        video: 'https://firebasestorage.googleapis.com/v0/b/newtry-d602d.appspot.com/o/Job%20Searching%20Agent%20-%20Made%20with%20Clipchamp.mp4?alt=media&token=4e862d09-47d1-4604-b942-66403e7c8f52',
        code: 'https://github.com/renudeshmukh940/Job-Posting-Search-Agent'
    },
    {
        id: 7,
        title: 'Violence Detection',
        category: 'Machine Learning',
        tag: 'machine_learning',
        image: '/images/projects/violence.jpg',
        description: "A Violence Detection Project which detects certain kinds of activity (like Fighting, Abuse, Arson etc) as Violence. This project is build using Deep Learning algorithms like LSTM(Long Sort-Term Memory) for memory, CNNs(Convolutional Neural Nets) and InceptionNet as Transfer Learning. This project uses Flask and Html as Frontend and Backend Server for the project and shows violence in real time with frame target counter",
        techStack: 'Tech Stack: Deep Learning, Transfer Learning, CNNs, LSTM, Python, Flask, SocketIO, Inception V-NET',
        link: '',
        video: 'https://firebasestorage.googleapis.com/v0/b/newtry-d602d.appspot.com/o/violence_detection_video.mp4?alt=media&token=40857c30-3972-47dd-8ffd-e05c214e44dc',
        code: 'https://github.com/renudeshmukh940/violencedetection'
    },

    {
        id: 8,
        title: 'Get Nutrition-AI',
        category: 'Artificial Intelligence',
        tag: 'ai',
        image: '/images/projects/NUTRITION.jpg',
        description: "This is an Android Application build using flutter SDK in dart named SavantGen which is a personal AI Assistant and also contains feature of ATS Resume Scan. It can Detect Missing Keywords, Improvise the Content writing on the resume, Guide how to improve for targeted JOB's Positions. Contains an Admin Dashboard where Admin can control the User's trials or increases their attempts",
        techStack: 'Tech Stack: Python, LLMs, Agents, CrewAI, API, Gradio',
        link: '',
        video: 'https://firebasestorage.googleapis.com/v0/b/newtry-d602d.appspot.com/o/Nutrition-AI.mp4?alt=media&token=75229000-c38d-454a-807c-9b82df174bc5',
        code: 'https://github.com/renudeshmukh940/Nutritionist_AI'
    },
    {
        id: 9,
        title: 'ATS Resume Checker - AI',
        category: 'Artificial Intelligence',
        tag: 'ai',
        image: '/images/projects/ats1.png',
        description: "The ATS Resume Checker is a tool designed to simplify the job application process by providing a comprehensive analysis of your resume against a provided job description. The primary goal is to enhance your chances of success in the applicant tracking system (ATS) by ensuring your resume aligns with the requirements of the targeted job",
        techStack: 'Tech Stack: Python, LLMs, Streamlit, Prompt Engineering',
        link: '',
        video: '',
        code: 'https://github.com/renudeshmukh940/ATS_Resume_Checker'
    },
    {
        id: 10,
        title: 'ATS-Resume Scanner App',
        category: 'AI-Software',
        tag: 'sda',
        image: '/images/projects/ats1.png',
        description: "ATS Resume Scan: SavantGen's flagship feature revolutionizes job applications by detecting missing keywords and refining resume content and improvise the content of the resume. Personalized Guidance: Users receive tailored suggestions and actionable insights to optimize their resumes for specific job positions. Career Development: SavantGen fosters a collaborative environment, offering invaluable support on the journey to professional success",
        techStack: 'Tech Stack: Flutter, Dart, Firebase, Firebase-Cloud, Rest-API, LLMs',
        link: '',
        video: 'https://firebasestorage.googleapis.com/v0/b/newtry-d602d.appspot.com/o/savantGEN.mp4?alt=media&token=e0bae2d9-ec42-4ff7-ba98-e4e420bfd5eb',
        code: 'https://github.com/Saurabh7Goku/SavantGen-AI'
    },
    {
        id: 11,
        title: 'Chat Application AI',
        category: 'Artificial Intelligence',
        tag: 'ai',
        image: '/images/projects/chatbot.jpg',
        description: "This is a Artificial Intelligence Application which will answer to your queries real quick and effortlessly using Large Language Models. We leverage state-of-the-art language models hosted on the Hugging Face Model Hub to power our chat bot. The backend of our Chat Bot is built using Python, a versatile and powerful programming language The user interface of our application is developed using Streamlit",
        techStack: 'Tech Stack: Python, Streamlit, LLM, API, HuggingFace and Huggingface Spaces',
        link: '',
        video: '',
        code: 'https://github.com/renudeshmukh940/ChatApp',

    },
    {
        id: 12,
        title: 'Billboards Data Analysis',
        category: 'Data Analysis',
        tag: 'data_analyst',
        image: '/images/projects/billboards.png',
        description: "This is a data anlysis of Billboard top-100 charts songs having various music styles from Classic, Rock to Jazz Users can interactively choose a year/genre range they are interested in to get a closer look at subtleties. For each song, I count the number of duplicate lines that appear in the lyrics, This can be used as a rough measure of repetition in the song content, that is the more duplicate lines in the lyrics, the more repetitive a song is. Using the Natural Language Toolkit (NLTK) for Python, I used the VADER model for parsimonious rule-based sentiment analysis of each song's lyrics, Each song was run through a sentiment analyzer and output an object with data about its sentiment",
        techStack: 'Tech Stack: Python, JavaScript, Data analysis, NLTK, NLP, rule-based sentiment analysis',
        link: '',
        video: '',
        code: 'https://github.com/renudeshmukh940/Billboard_DataAnalysis',
    },

];

const filters = [
    { label: 'Latest', value: 'Latest' },
    { label: 'Data Analyst', value: 'data_analyst' },
    { label: 'Machine Learning', value: 'machine_learning' },
    { label: 'SAAS Projects', value: 'sda' },
    { label: 'Artificial Intelligence', value: 'ai' },
];

const Projects = () => {
    const [filter, setFilter] = useState('Latest');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = filter === 'Latest' ? projectsData : projectsData.filter(project => project.tag === filter);

    return (
        <>
            <Head>
                <title>Renu | Projects Page</title>
                <meta name='description' content='Showcase of my personal projects and work.' />
            </Head>
            <TransitionEffect />

            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-8 px-4 sm:px-8 md:px-16 lg:px-24'>
                    <AnimatedText text={'Personal Projects'} className='pb-4 text-4xl sm:text-5xl lg:text-6xl text-center' />
                    
                    <div className="container mx-auto">
                        
                        {/* Improved Filter Buttons */}
                        <div className="flex flex-wrap items-center justify-center gap-3 my-10">
                            {filters.map((f) => (
                                <button
                                    key={f.value}
                                    onClick={() => setFilter(f.value)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                        filter === f.value
                                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/40 scale-105'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                                    }`}
                                >
                                    {f.label}
                                </button>
                            ))}
                        </div>

                        {/* Project Cards Grid */}
                        <motion.div
    key={filter}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    // Added w-full and pt-8 here to ensure it stretches across the container
    className="w-full pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12"
>
    {filteredProjects.slice(0, 9).map((project) => (
                                <div 
                                    key={project.id} 
                                    className="group flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                                >
                                    {/* Card Image Area */}
                                    <div className="relative w-full h-56 overflow-hidden bg-gray-50 cursor-pointer" onClick={() => setSelectedProject(project)}>
                                        <Image 
                                            className='object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out' 
                                            src={project.image} 
                                            alt={project.title} 
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                    
                                    {/* Card Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-4">
                                            <h4 className="text-xl font-bold text-gray-900 line-clamp-2">{project.title}</h4>
                                        </div>
                                        <p className="text-sm font-medium text-blue-600 mb-6 bg-blue-50 inline-block w-max px-3 py-1 rounded-full">
                                            {project.category}
                                        </p>
                                        
                                        <div className="mt-auto flex items-center gap-3">
                                            <button 
                                                className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200" 
                                                onClick={() => setSelectedProject(project)}
                                            >
                                                About Project
                                            </button>
                                            {project.link && project.link.trim() !== '' && (
                                                <a 
                                                    href={project.link} 
                                                    target='_blank' 
                                                    rel="noreferrer"
                                                    className="flex-1 text-center bg-blue-50 hover:bg-blue-100 text-blue-700 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200"
                                                >
                                                    View Live
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </Layout>
            </main>

            {/* Right Side Panel (Drawer) for Project Details */}
            <AnimatePresence>
                {selectedProject && (
                    <>
                        {/* Background Overlay */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" 
                            onClick={() => setSelectedProject(null)} 
                        />

                        {/* Sliding Panel */}
                        <motion.div 
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full sm:w-[450px] md:w-[500px] bg-white z-50 shadow-2xl overflow-y-auto flex flex-col"
                        >
                            {/* Panel Header */}
                            <div className="sticky top-0 bg-white/80 backdrop-blur-md z-10 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                                <h2 className="text-2xl font-extrabold text-gray-900">{selectedProject.title}</h2>
                                <button 
                                    className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors" 
                                    onClick={() => setSelectedProject(null)}
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>

                            {/* Panel Content */}
                            <div className="p-6 flex flex-col gap-6">
                                {/* Media / Video */}
                                {selectedProject.video ? (
                                    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-inner">
                                        <video controls src={selectedProject.video} className="w-full h-full object-cover" />
                                    </div>
                                ) : (
                                    <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-sm">
                                        <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
                                    </div>
                                )}

                                {/* Description */}
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">Overview</h3>
                                    <ul className="space-y-2 text-gray-600 leading-relaxed list-disc pl-5">
                                        {selectedProject.description
                                            .split('.')
                                            .filter(sentence => sentence.trim() !== '')
                                            .map((sentence, index) => (
                                                <li key={index} className="pl-1">{sentence.trim()}.</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div className="bg-blue-50 p-4 rounded-xl">
                                    <h3 className="text-sm font-bold text-blue-900 mb-1">Technologies Used</h3>
                                    <p className="text-blue-700 text-sm font-medium">{selectedProject.techStack.replace('Tech Stack: ', '')}</p>
                                </div>

                                {/* Action Buttons */}
                                <div className='flex gap-4 pt-4 mt-auto'>
                                    {selectedProject.link && (
                                        <a 
                                            href={selectedProject.link} 
                                            target='_blank' 
                                            rel="noreferrer"
                                            className="flex-1 bg-blue-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/30"
                                        >
                                            View Application
                                        </a>
                                    )}
                                    <a 
                                        href={selectedProject.code} 
                                        target='_blank' 
                                        rel="noreferrer"
                                        className="flex-1 bg-gray-900 text-white text-center py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                                    >
                                        Source Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default Projects;
