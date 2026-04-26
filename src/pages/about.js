import AnimatedText from '@/components/AnimatedText'
import React, { useEffect, useRef } from 'react'
import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import profilePic from "../../public/images/profile/my_img.jpg"
import { useMotionValue, useSpring, useInView, motion } from 'framer-motion';
import Skills from '@/components/Skills';
import TransitionEffect from '@/components/TransitionEffect';
import Educations from './Educations';

const AnimatedNumber = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const containerVars = {
    initial: { opacity: 0, scale: 0.98 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            staggerChildren: 0.15,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1]
        }
    }
}

const itemVars = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const floatingAnim = {
    animate: {
        y: [0, -15, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
}

function About() {
    return (
        <>
            <Head>
                <title>Renu Deshmukh | Data Visionary</title>
                <meta name='description' content='Learn about Renu Deshmukh, a Data Scientist and System Engineer.' />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center bg-[#fdfaff] relative overflow-hidden'>
                {/* Cyber-Atmosphere background glows */}
                <div className="absolute top-[5%] left-0 w-full h-[500px] bg-blue-100/30 -z-10 blur-[100px]" />
                <div className="absolute top-[10%] -right-[10%] w-[600px] h-[600px] bg-pink-100/30 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-purple-100/20 rounded-full blur-[150px] -z-10" />

                <Layout className='pt-16 pb-32 px-12 lg:px-8 md:px-6'>
                    <AnimatedText text="Passion Fuels Purpose." className='mb-24 lg:!text-6xl md:!text-5xl sm:!text-4xl text-slate-900 font-black tracking-tighter' />
                    
                    <motion.div 
                        variants={containerVars}
                        initial="initial"
                        animate="animate"
                        className='grid w-full grid-cols-8 gap-16 xl:gap-8 md:flex md:flex-col'
                    >
                        {/* Text Content */}
                        <motion.div variants={itemVars} className='col-span-3 flex flex-col items-start justify-start order-1'>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-blue-600 to-pink-600 text-white text-[9px] font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-500/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                Professional Narrative
                            </div>
                            <h2 className='mb-8 text-3xl font-black text-slate-900 uppercase tracking-tighter'>Introduction</h2>
                            
                            <div className="space-y-6 text-slate-600 font-medium leading-[1.8]">
                                <p>
                                    Hi There, I&apos;m an <span className="text-blue-600 font-black">Assistant System Engineer</span> at MPOnline Limited Bhopal. Specialist in ASP.Net, C#, and SQL architecture, engineering solutions for high-stakes projects like MPPSC and WCDR.
                                </p>
                                <p>
                                    Embedded at the intersection of <span className="text-slate-900 font-black">Data Analysis</span> and <span className="text-slate-900 font-black">Web Development</span>, I architect systems that don&apos;t just store information, but drive strategy.
                                </p>
                                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-[2.5rem] shadow-[0_15px_40px_rgba(59,130,246,0.05)] border border-blue-50 relative group overflow-hidden transition-all duration-500 hover:border-pink-200">
                                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-600 to-pink-600 rounded-full" />
                                    <p className="italic text-slate-600">
                                        &quot;Automating analysis through AI—recently architected a system using SQL and Power BI that translates business requirements into dynamic, actionable intelligence.&quot;
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Profile Image card with Float animation */}
                        <motion.div variants={itemVars} className='col-span-3 order-2'>
                            <motion.div 
                                variants={floatingAnim}
                                initial="initial"
                                animate="animate"
                                className='relative h-max rounded-[3.5rem] p-4 bg-gradient-to-tr from-blue-200 via-indigo-100 to-pink-200 shadow-2xl border border-white'
                            >
                                <div className="rounded-[3rem] overflow-hidden shadow-inner bg-white">
                                    <Image src={profilePic} alt="Renu Deshmukh" className="w-full h-auto transform hover:scale-105 transition-transform duration-1000" priority
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -z-10" />
                                <div className="absolute -top-8 -left-8 w-32 h-32 bg-pink-600/10 rounded-full blur-3xl -z-10" />
                            </motion.div>
                        </motion.div>

                        {/* Stats Section */}
                        <motion.div variants={itemVars} className='col-span-2 flex flex-col items-end justify-between xl:flex-row xl:items-center order-3 xl:gap-8'>
                            <StatCard value={34} label="Months Exp." />
                            <StatCard value={10} label="Projects" />
                            <StatCard value={4} label="Dashboards" />
                        </motion.div>
                    </motion.div>

                    <SectionWrapper label="Skillset" color="blue">
                        <Skills />
                    </SectionWrapper>

                    <SectionWrapper label="Education" color="pink">
                        <Educations />
                    </SectionWrapper>
                </Layout>
            </main>
        </>
    )
}

const StatCard = ({ value, label }) => (
    <div className='flex flex-col items-end justify-center xl:items-center p-8 bg-gradient-to-tr from-white via-blue-50/20 to-pink-50/20 backdrop-blur-xl rounded-[2.5rem] shadow-[0_15px_40px_rgba(59,130,246,0.04)] border border-blue-100/50 w-full mb-6 group hover:border-pink-300 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-700 relative overflow-hidden'>
        {/* Subtle decorative glow inside card */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-400/5 rounded-full blur-2xl group-hover:bg-pink-400/10 transition-colors" />
        
        <span className='inline-block text-7xl font-black md:text-5xl tracking-tighter bg-gradient-to-br from-blue-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500'>
            <AnimatedNumber value={value} />+
        </span>
        <h2 className='text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mt-2 block group-hover:text-slate-900 transition-colors'>{label}</h2>
    </div>
)

const SectionWrapper = ({ children, label, color }) => (
    <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mt-40 relative group"
    >
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ${color === 'blue' ? 'bg-blue-600' : 'bg-pink-600'} text-white font-black px-12 py-3 rounded-2xl uppercase tracking-[0.4em] text-[10px] shadow-2xl z-10`}>
            {label}
        </div>
        <div className={`pt-24 bg-white/30 backdrop-blur-md rounded-[4rem] shadow-[0_30px_60px_rgba(59,130,246,0.04)] border ${color === 'blue' ? 'border-blue-100/50' : 'border-pink-100/50'} p-12 lg:p-8`}>
            {children}
        </div>
    </motion.div>
)

export default About
