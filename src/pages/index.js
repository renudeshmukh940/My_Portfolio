import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import profilePic from '../../public/images/profile/yellow_img.png'
import heroViz from 'C:/Users/Vidhv/.gemini/antigravity/brain/e2e83edb-8573-498c-a8eb-7daa44c6b8e3/gold_data_viz_hero_1777145340447.png'
import AnimatedText from '@/components/AnimatedText'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightbulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from '@/components/TransitionEffect'
import { motion } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-20, 0, -20],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Renu Deshmukh | Data Analyst Portfolio</title>
        <meta name="description" content="Portfolio of Renu Deshmukh, a Data Analyst specializing in SQL, Python, and Power BI." />
      </Head>
      <TransitionEffect />
      <main className='flex flex-col items-center text-dark w-full min-h-screen bg-[#fafaf9] overflow-hidden relative'>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_-20%,#fef3c7,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-100/20 rounded-full blur-[120px] -z-10" />
        
        <Layout className='pt-16 md:pt-24 sm:pt-32'>
          <div className='flex items-center justify-between w-full lg:flex-col gap-12'>
            
            {/* Left Section: Visuals */}
            <div className='w-1/2 md:w-full flex items-center justify-center relative lg:scale-100'>
              
              {/* Main Visual Composition */}
              <motion.div 
                variants={floatingAnimation}
                initial="initial"
                animate="animate"
                className="relative w-full max-w-[400px] aspect-square group"
              >
                {/* Background Viz Image */}
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden rotate-6 group-hover:rotate-3 transition-transform duration-700 shadow-2xl opacity-60">
                   <Image src={heroViz} alt="Data Visualization" fill className="object-cover" priority />
                </div>

                {/* Profile Image Wrapper */}
                <div className="absolute inset-4 rounded-[2rem] overflow-hidden -rotate-3 group-hover:rotate-0 transition-transform duration-700 shadow-2xl bg-white border-[8px] border-white z-10">
                   <Image 
                     src={profilePic} 
                     alt="Renu Deshmukh" 
                     className='w-full h-auto transform group-hover:scale-105 transition-transform duration-700' 
                     priority
                     sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                   />
                </div>

                {/* Floating Tech Badges */}
                <motion.div 
                  animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl z-20 border border-amber-100"
                >
                  <span className="text-amber-600 font-bold text-sm">Python / SQL</span>
                </motion.div>

                <motion.div 
                  animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -bottom-8 -left-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl z-20 border border-amber-100"
                >
                  <span className="text-orange-600 font-bold text-sm">Power BI Specialist</span>
                </motion.div>
              </motion.div>

              {/* Luminous Aura behind elements */}
              <div className='absolute w-[70%] h-[70%] bg-amber-400/10 rounded-full blur-[100px] -z-10' />
            </div>

            {/* Right Section: Content */}
            <div className='w-1/2 flex flex-col items-start self-center sm:w-full lg:w-full lg:items-center lg:text-center pl-12 lg:pl-0'>
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-amber-50 border border-amber-100 text-amber-700 font-bold text-xs uppercase tracking-widest animate-bounce">
                Available for New Projects
              </div>
              
              <AnimatedText 
                text="Decoding Data. Driving Decisions. Delivering Impact."
                className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-2xl font-black text-black leading-tight' 
              />
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className='my-8 text-lg font-medium md:text-base sm:text-sm text-gray-600 leading-relaxed max-w-xl'
              >
                Hi, I&apos;m <span className="text-dark font-bold underline decoration-amber-400 decoration-4 underline-offset-4">Renu Deshmukh</span> — a passionate Data Analyst specializing in turning complex datasets into clear, actionable insights. 
                I bridge the gap between technical complexity and business value through expert data storytelling.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className='flex items-center self-start lg:self-center gap-6'
              >
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Link href="/RenuResume.pdf" target='_blank'
                    className='flex items-center bg-gradient-to-br from-amber-500 to-orange-600 text-white p-2 px-5 rounded-full
                    text-base font-bold hover:shadow-[0_10px_20px_-5px_rgba(245,158,11,0.4)] transition-all duration-300 group whitespace-nowrap'
                    download={true} >
                    View Resume <LinkArrow className={'w-4 ml-1.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300'} />
                  </Link>
                </motion.div>
                <Link href="/contacts"
                  className='text-lg font-bold capitalize text-dark relative group'>
                  Contact Me
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>

              {/* Quick Contact Links */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-12 flex items-center gap-8 text-gray-400"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-widest mb-1">Email</span>
                  <a href="mailto:deshmukhrenu4@gmail.com" className="text-dark text-sm font-bold hover:text-amber-600 transition-colors">deshmukhrenu4@gmail.com</a>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-widest mb-1">Location</span>
                  <span className="text-dark text-sm font-bold">Nagpur, India</span>
                </div>
              </motion.div>
            </div>

          </div>
        </Layout>

        {/* Floating Decorative Icon */}
        <motion.div 
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className='absolute right-12 bottom-12 w-24 opacity-20 pointer-events-none md:hidden text-amber-500'
        >
          <Image src={lightbulb} alt="Decorative" className='w-full h-auto brightness-75' />
        </motion.div>

        <HireMe />
      </main >
    </>
  )
}
