
import { useState } from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import Image from 'next/image';

// Data Source
const projectsData = [
    {
        id: 1,
        title: 'Zomato Business Analysis',
        category: 'Data Analyst',
        tag: 'data_analyst',
        image: '/images/projects/zomato.png',
        description: "The data used here is sourced from Zomato's comprehensive dataset covering various aspects of food sales across India. This meticulous process yields actionable insights, empowering data-driven decision-making for the company. Used different types of customized visualization (bar charts, pie chart, donut chart, clustered bar chart etc).",
        techStack: 'SQL, Data Analysis, PowerBI',
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
        techStack: 'Deep Learning, Transfer Learning, NextJS, APIs',
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
        description: "Used complex parameters to drill down in worksheet and customization using filters and slicers. Created connections, joined new tables, calculations to manipulate data and enabled user driven parameters for visualizations. Used different types of customized visualization (bar charts, pie chart, donut chart, clustered bar chart etc).",
        techStack: 'SQL, Data Analysis, PowerBI',
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
        description: 'This is a project build using PowerBI and SQL. I used SQL for data filtering and cleaning, where as I used PowerBi for the Dashboard Making for better Data visualization and understanding on the key notes that may or may not affect the Pizza Sales in the Pizza Hut. The Data Set which is used to build this analysis is taken from the open source data hub.',
        techStack: 'Data Analysis, SQL, PowerBI',
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
        description: "This is a Deep Learning project based on the Adenocarcinomas, Which occur most commonly in the: bowel around 90% of bowel cancers are adenocarcinomas. Most breast cancers are adenocarcinomas. This is an End-to-End Project which includes CI/CD pipeline and development. This project is done using Modular Coding and using Random Forest as ML Algorithm and Flask as Frontend and Backend Server.",
        techStack: 'AWS EC2, S3, ECR, Git Actions, MlFLow, DVC, Dagshub',
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
        description: "This is a SAAS Application which searchs job posting when given positons and companies name. The Artificial Intelligence Agent uses Internet to search for all the given position in given companies and return the Job Posting Links. The application is build using React's (Next JS) as Frontend and Python's Flask as Backend Server.",
        techStack: 'LLMs, Agents, Flask, Prompt Engineering, NextJS, CrewAI',
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
        description: "A Violence Detection Project which detects certain kinds of activity (like Fighting, Abuse, Arson etc) as Violence. This project is build using Deep Learning algorithms like LSTM(Long Sort-Term Memory) for memory, CNNs(Convolutional Neural Nets) and InceptionNet as Transfer Learning.",
        techStack: 'Deep Learning, CNNs, LSTM, Python, Flask, Inception V-NET',
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
        description: "This is an Android Application build using flutter SDK in dart named SavantGen which is a personal AI Assistant and also contains feature of ATS Resume Scan. It can Detect Missing Keywords, Improvise the Content writing on the resume, Guide how to improve for targeted JOB's Positions.",
        techStack: 'Python, LLMs, Agents, CrewAI, API, Gradio',
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
        description: "The ATS Resume Checker is a tool designed to simplify the job application process by providing a comprehensive analysis of your resume against a provided job description. The primary goal is to enhance your chances of success in the applicant tracking system (ATS).",
        techStack: 'Python, LLMs, Streamlit, Prompt Engineering',
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
        description: "ATS Resume Scan: SavantGen's flagship feature revolutionizes job applications by detecting missing keywords and refining resume content. Personalized Guidance: Users receive tailored suggestions and actionable insights to optimize their resumes for specific job positions.",
        techStack: 'Flutter, Dart, Firebase, Rest-API, LLMs',
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
        description: "This is a Artificial Intelligence Application which will answer to your queries real quick and effortlessly using Large Language Models. We leverage state-of-the-art language models hosted on the Hugging Face Model Hub to power our chat bot.",
        techStack: 'Python, Streamlit, LLM, API, HuggingFace',
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
        description: "This is a data anlysis of Billboard top-100 charts songs having various music styles from Classic, Rock to Jazz. Using the Natural Language Toolkit (NLTK) for Python, I used the VADER model for parsimonious rule-based sentiment analysis of each song's lyrics.",
        techStack: 'Python, JavaScript, Data analysis, NLTK, NLP',
        link: '',
        video: '',
        code: 'https://github.com/renudeshmukh940/Billboard_DataAnalysis',
    },
];

const Projects = () => {
    const [filter, setFilter] = useState('Latest');
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    };

    const handleClosePanel = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'unset'; // Restore scroll
    };

    const filteredProjects = filter === 'Latest' 
        ? projectsData 
        : projectsData.filter(project => project.tag === filter);

    const filterButtons = [
        { label: 'Latest', value: 'Latest' },
        { label: 'Data Analyst', value: 'data_analyst' },
        { label: 'Machine Learning', value: 'machine_learning' },
        { label: 'SAAS Projects', value: 'sda' },
        { label: 'Artificial Intelligence', value: 'ai' },
    ];

    return (
        <>
            <Head>
                <title>Renu | Projects Page</title>
                <meta name='description' content='Renu Deshmukh Portfolio Projects' />
            </Head>
            <TransitionEffect />

            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-8 px-4 sm:px-8 lg:px-16'>
                    <AnimatedText text={'Imagination Meets Code'} className='pb-4 mb-8 lg:!text-6xl sm:text-4xl xs:text-3xl' />
                    
                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {filterButtons.map((btn) => (
                            <button
                                key={btn.value}
                                onClick={() => setFilter(btn.value)}
                                className={`px-5 py-2 text-sm sm:text-base font-medium rounded-full border-2 transition-all duration-300 ease-out
                                    ${filter === btn.value 
                                        ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/30' 
                                        : 'bg-transparent text-dark border-gray-300 hover:border-blue-500 hover:text-blue-500'
                                    }`}
                            >
                                {btn.label}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 w-full"
                    >
                        {filteredProjects.slice(0, 9).map((project, index) => (
                            <motion.div 
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
                            >
                                {/* Image Container */}
                                <div className="relative h-48 sm:h-56 overflow-hidden border-b border-gray-100">
                                    <Image 
                                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' 
                                        src={project.image} 
                                        alt={project.title} 
                                        width={600} 
                                        height={400} 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Content */}
                                <div className="p-5 flex flex-col">
                                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">{project.category}</span>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-1">{project.title}</h3>
                                    
                                    <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
                                        {project.link && (
                                            <a 
                                                href={project.link} 
                                                target='_blank' 
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="text-sm font-medium text-blue-500 hover:text-blue-700 underline underline-offset-4"
                                            >
                                                View Live
                                            </a>
                                        )}
                                        <button 
                                            onClick={() => handleProjectClick(project)} 
                                            className={`text-sm font-medium px-4 py-1.5 rounded-lg bg-gray-900 text-white hover:bg-gray-700 transition-colors ${project.link ? '' : 'w-full text-center'}`}
                                        >
                                            Details
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </Layout>
            </main>

            {/* Right Side Panel (Slide-in Modal) */}
            <AnimatePresence>
                {selectedProject && (
                    <>
                        {/* Backdrop */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleClosePanel}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                        />

                        {/* Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white shadow-2xl z-50 overflow-y-auto"
                        >
                            <div className="p-8 relative">
                                {/* Close Button */}
                                <button 
                                    onClick={handleClosePanel} 
                                    className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-red-500 hover:text-white transition-colors z-10"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>

                                {/* Panel Content */}
                                <div className="mt-8">
                                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-4">
                                        {selectedProject.category}
                                    </span>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{selectedProject.title}</h2>
                                    
                                    {/* Video or Image */}
                                    <div className="w-full rounded-xl overflow-hidden mb-6 shadow-sm bg-gray-100 aspect-video">
                                        {selectedProject.video ? (
                                            <video 
                                                controls 
                                                className="w-full h-full object-cover" 
                                                src={selectedProject.video}
                                            />
                                        ) : (
                                            <Image 
                                                src={selectedProject.image} 
                                                alt={selectedProject.title} 
                                                width={800} 
                                                height={450} 
                                                className="w-full h-full object-cover"
                                            />
                                        )}
                                    </div>

                                    {/* Description */}
                                    <div className="mb-8">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Project Overview</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                                            {selectedProject.description}
                                        </p>
                                    </div>

                                    {/* Tech Stack Badges */}
                                    <div className="mb-8">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.techStack.split(',').map((tech, index) => (
                                                <span 
                                                    key={index} 
                                                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium border border-gray-200"
                                                >
                                                    {tech.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-4 pt-4 border-t border-gray-100">
                                        {selectedProject.link && (
                                            <a 
                                                href={selectedProject.link} 
                                                target='_blank' 
                                                rel="noopener noreferrer"
                                                className="flex-1 text-center bg-blue-600 text-white py-3 px-4 rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/30"
                                            >
                                                Live Demo
                                            </a>
                                        )}
                                        <a 
                                            href={selectedProject.code} 
                                            target='_blank' 
                                            rel="noopener noreferrer"
                                            className={`flex-1 text-center bg-gray-900 text-white py-3 px-4 rounded-xl font-medium hover:bg-gray-800 transition-colors ${!selectedProject.link ? 'w-full' : ''}`}
                                        >
                                            View Code
                                        </a>
                                    </div>
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
