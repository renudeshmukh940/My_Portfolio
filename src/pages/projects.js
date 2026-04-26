
import { useState } from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import Image from 'next/image';


const projectsData = [
    {
        id: 1,
        title: 'Zomato Business Analysis',
        category: 'Data Analyst',
        tag: 'data_analyst',
        image: '/images/projects/zomato.png',
        description: "The data used here is sourced from Zomato's comprehensive dataset covering various aspects of food sales across India.This meticulous process yields actionable insights, empowering data-driven decision-making for the company.Used different types of customized visualization (bar charts, pie chart, donut chart, clustered bar chart etc)",
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
        description: "This is a machine learning project for object detections using transfer learning Using CoCo Dataset for training. This application takes an image and generate a prediction confidence for each category present inside the image and draw a rectangle around them. Using Tranfer learning the Application works 60% faster and 40% more efficient than the standard Approach",
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

const Projects = () => {
    const [filter, setFilter] = useState('Latest');
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };
    const filteredProjects = filter === 'Latest' ? projectsData : projectsData.filter(project => project.tag === filter);

    const handleFilterChange = (category) => {
        setFilter(category);
    };

    const categories = [
        { name: 'Latest', tag: 'Latest' },
        { name: 'Data Analyst', tag: 'data_analyst' },
        { name: 'Machine Learning', tag: 'machine_learning' },
        { name: 'SAAS Projects', tag: 'sda' },
        { name: 'Artificial Intelligence', tag: 'ai' },
    ];

    return (
        <>
            <Head>
                <title>Renu Deshmukh | Projects</title>
                <meta name='description' content='Showcase of personal and professional projects in AI, Data Science, and Software Engineering.' />
            </Head>
            <TransitionEffect />

            <main className='w-full flex flex-col items-center justify-center bg-[#fafafa] relative overflow-hidden'>
                {/* Background decorative elements */}
                <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-pink-100/30 rounded-full blur-[120px] -z-10" />

                <Layout className='pt-16 pb-40'>
                    <div className="flex flex-col items-center justify-center text-center relative">
                        {/* Decorative background oval glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] bg-blue-100/10 rounded-[100%] blur-[120px] -z-10" />
                        
                        <AnimatedText 
                            text="Personal Projects" 
                            className="!text-8xl xl:!text-7xl lg:!text-6xl md:!text-5xl sm:!text-4xl font-black text-slate-900 tracking-tighter" 
                        />
                        <p className="max-w-2xl text-slate-500 font-medium text-lg mt-4 mb-16 leading-relaxed">
                            Developing intelligent systems and data-driven solutions to solve complex real-world problems.
                        </p>

                        {/* Oval Filter Section */}
                        <div className="w-full flex flex-wrap items-center justify-center gap-3 mb-24">
                            {categories.map(cat => (
                                <button 
                                    key={cat.tag}
                                    onClick={() => handleFilterChange(cat.tag)}
                                    className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border
                                        ${filter === cat.tag 
                                            ? 'bg-gradient-to-r from-blue-600 to-pink-600 text-white border-transparent shadow-[0_10px_30px_rgba(59,130,246,0.2)] scale-110' 
                                            : 'bg-white text-slate-400 border-slate-100 hover:text-slate-900 hover:border-blue-400'}`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Project Grid */}
                    <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-12 w-full"
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div 
                                layout
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="group relative bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-[0_10px_30px_rgba(59,130,246,0.03)] hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
                            >
                                <div className="p-8 flex flex-col h-full">
                                    <div className="w-full aspect-video rounded-3xl overflow-hidden mb-8 bg-slate-50">
                                        <Image 
                                            src={project.image} 
                                            alt={project.title} 
                                            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
                                            width={400} 
                                            height={300} 
                                            priority={index < 3}
                                        />
                                    </div>
                                    
                                    <div className="flex flex-col flex-grow">
                                        <span className="self-start px-4 py-1 bg-gradient-to-r from-blue-50 to-pink-50 text-blue-600 rounded-full text-[9px] font-black uppercase tracking-[0.15em] mb-4 border border-blue-100/50">
                                            {project.category}
                                        </span>
                                        <h3 className="text-xl font-black text-slate-900 mb-4 transition-colors leading-tight">{project.title}</h3>
                                        <p className="text-slate-500 text-xs font-medium leading-relaxed line-clamp-2 mb-8">
                                            {project.description}
                                        </p>
                                    </div>
                                    
                                    <div className="flex items-center gap-3 mt-auto">
                                        {project.link && (
                                            <a href={project.link} target='_blank' rel="noopener noreferrer" 
                                               className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-full text-[9px] font-black uppercase tracking-widest text-center shadow-lg shadow-blue-500/10 hover:shadow-pink-500/20 transition-all hover:-translate-y-0.5">
                                                View Live
                                            </a>
                                        )}
                                        <button 
                                            onClick={() => handleProjectClick(project)}
                                            className={`flex-1 py-4 bg-slate-50 text-slate-600 rounded-full text-[9px] font-black uppercase tracking-widest text-center hover:bg-slate-100 transition-all hover:shadow-md hover:-translate-y-0.5 border border-slate-100 ${!project.link ? 'w-full flex-none' : ''}`}
                                        >
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </Layout>
            </main>

            {/* Premium Details Modal */}
            {selectedProject && (
                <div className="fixed inset-0 w-full h-full flex items-center justify-center p-8 xs:p-4 z-[99] bg-slate-900/40 backdrop-blur-md overflow-hidden">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="max-w-4xl w-full max-h-[90vh] bg-white rounded-[3rem] p-12 xs:p-6 relative overflow-y-auto shadow-2xl border border-white"
                    >
                        <button className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-900 hover:bg-pink-600 hover:text-white transition-all z-50" onClick={handleCloseModal}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>

                        <div className="flex flex-col">
                            <span className="px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-[9px] font-black uppercase tracking-widest self-start mb-4">
                                {selectedProject.category}
                            </span>
                            <h2 className="text-4xl xs:text-2xl font-black text-slate-900 mb-8 tracking-tighter">{selectedProject.title}</h2>
                            
                            {selectedProject.video ? (
                                <div className="w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl bg-black mb-10">
                                    <video controls src={selectedProject.video} className="w-full h-full object-cover" />
                                </div>
                            ) : (
                                <div className="w-full aspect-video rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-blue-50 to-pink-50 flex flex-col items-center justify-center p-10 text-center mb-10 border border-slate-100">
                                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-blue-500 mb-4 shadow-xl">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">No Demo Video Available</p>
                                    <p className="text-slate-900 font-black mt-2">Visit the Deployed Link to see it in action.</p>
                                </div>
                            )}

                            <div className="grid grid-cols-3 md:grid-cols-1 gap-12">
                                <div className="col-span-2 space-y-6">
                                    <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 border-b border-slate-100 pb-3">Project Narrative</h4>
                                    <ul className="space-y-4">
                                        {selectedProject.description.split('.').filter(s => s.trim()).map((sentence, index) => (
                                            <li key={index} className="flex gap-3 text-slate-600 font-medium leading-relaxed">
                                                <span className="shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center mt-1">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                                </span>
                                                {sentence.trim()}.
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-8">
                                    <div>
                                        <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 border-b border-slate-100 pb-3 mb-6">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.techStack.replace('Tech Stack: ', '').split(', ').map((tech, i) => (
                                                <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-slate-600 font-bold text-[10px]">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col gap-3 mt-auto">
                                        {selectedProject.link && (
                                            <a href={selectedProject.link} target='_blank' rel="noopener noreferrer" className="w-full py-4 bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center shadow-lg shadow-blue-500/20">
                                                Go Live
                                            </a>
                                        )}
                                        <a href={selectedProject.code} target='_blank' rel="noopener noreferrer" className="w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest text-center hover:bg-slate-800 transition-colors">
                                            Source Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    )
}

export default Projects;
