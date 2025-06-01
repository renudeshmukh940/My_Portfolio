import AnimatedText from '@/components/AnimatedText'
import React, { useEffect, useRef } from 'react'
import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import profilePic from "../../public/images/profile/pic.png"
import { useMotionValue, useSpring, useInView } from 'framer-motion';
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

function about() {
    return (
        <>
            <Head>
                <title>
                    Renu | About Page
                </title>
                <meta name='description' content='any description' />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-6'>
                    <AnimatedText text="Welcome to the About section" className='mb-16 lg:!text-5xl sm:!text-3xl xs:!text-xl sm:pb-2' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/55'>
                                Introductions
                            </h2>
                            <p className='font-medium sm:text-sm md:text-lg xl:text-lg'>
                                Hi There, I&apos;m a Assistant System Engineer at MPOnline Limited Bhopal. I am working on ASP.Net , C# , SQL technologies. I am working 
                                on MPPSC Project and WCDR Project and also  working on G2G Report and Finance Report.
                            </p>

                            <p className='my-4 font-medium sm:text-sm md:text-lg xl:text-lg'>I’m interested in Python Programming, DBMS, SQL, WEB Development, Data Analysis, Data Science.
                            I’m currently learning Data visualization, Machine Learning.


                            </p>

                            <p className='font-medium sm:text-sm md:text-lg xl:text-lg'>Recently worked on a project where AI was used to automate data analysis tasks such as querying, transforming, and visualizing data using SQL and Power BI. The system interacted with users to understand business requirements, clarify data flow, and deliver actionable insights. A custom-built interface executed SQL queries, processed datasets, and generated dynamic Power BI reports. The AI also assisted in solving analytical problems and responding to data-driven business queries, enhancing decision-making and reporting efficiency.
                            </p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-soild border-dark bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8 '>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark ' />
                            <Image src={profilePic} alt="Renu" className="w-full h-auto rounded-2xl" priority
                                sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                            />
                        </div>
                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-5xl sm:text-3xl xs:text-3xl'>
                                    20+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/65 xl:text-center md:text-base sm:text-base xs:text-sm'>Months Of Experience </h2>
                            </div>
                            
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-5xl sm:text-3xl xs:text-3xl'>
                                    <AnimatedNumber value={10} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/65 xl:text-center md:text-lg sm:text-base xs:text-sm'>projects Completed</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-5xl sm:text-3xl xs:text-3xl'>
                                    <AnimatedNumber value={4} />
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/65 xl:text-center md:text-lg sm:text-base xs:text-sm'>PowerBI Dashboards</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />

                    
                    <Educations />
                  
                </Layout>
            </main>
        </>
    )
}

export default about
