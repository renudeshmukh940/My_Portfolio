import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GithubIcon, LinkedInIcon, HackerRankIcon } from './Icons'
import { motion, AnimatePresence } from "framer-motion";
import Logo from './Logo'

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    const isActive = router.asPath === href;

    return (
        <Link href={href} className={`${className} relative group px-4 py-2 flex items-center justify-center transition-all duration-300`}>
            {/* Pill Background Hover */}
            <span className={`absolute inset-0 bg-slate-900/5 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500 ${isActive ? 'scale-100 bg-slate-900/5' : ''}`} />
            
            <span className={`relative font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-500 
                ${isActive ? 'text-slate-900' : 'text-slate-900/60 group-hover:text-slate-900 group-hover:tracking-[0.4em]'}`}>
                {title}
            </span>
            
            {/* Minimal Dot indicator */}
            <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-slate-900 rounded-full transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'}`} />
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();
    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return (
        <button className={`${className} relative group text-light my-4 text-3xl font-black uppercase tracking-[0.3em] transition-all duration-300 hover:tracking-[0.5em]`} onClick={handleClick}>
            {title}
            <span className={`h-[4px] inline-block bg-white absolute left-1/2 -translate-x-1/2 -bottom-2 transition-[width] ease duration-500
                ${router.asPath === href ? 'w-8' : "w-0"}
                `}>
                &nbsp;
            </span>
        </button>
    )
}

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        }
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`w-full px-12 py-4 font-medium flex items-center justify-between fixed top-0 z-50 transition-all duration-500 lg:px-8 md:px-6 sm:px-4 bg-white/95 backdrop-blur-xl ${scrolled ? 'py-3 shadow-sm border-b border-gray-100' : 'py-5'}`}>
            
            {/* NEW BRAND LOGO / NAME */}
            <div className="flex items-center justify-center z-50">
                <Logo />
                <Link href="/" className="ml-3 hidden sm:inline-block">
                    <span className="text-xl font-black tracking-tighter text-dark uppercase">Renu Deshmukh</span>
                </Link>
            </div>

            {/* HAMBURGER FOR MOBILE */}
            <button className={`flex-col justify-center items-center hidden lg:flex z-50 group`} onClick={handleClick}>
                <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </button>

            {/* DESKTOP NAV CONTAINER */}
            <div className='w-full flex justify-between items-center lg:hidden'>
                
                {/* CENTERED LINKS */}
                <nav className="flex-1 flex items-center justify-center gap-2">
                    <CustomLink href="/" title="Home" />
                    <CustomLink href="/about" title="About" />
                    <CustomLink href="/CompanyProjects" title="Company Projects" />
                    <CustomLink href="/projects" title="Projects" />
                    <CustomLink href="/ExperiencesPage" title="Experiences" />
                    <CustomLink href="/achievements" title="Achievements" />
                    
                    <CustomLink href="/blogs" title="Blogs" />

                    
                    <CustomLink href="/contacts" title="Contact" />
                </nav>

                {/* SOCIALS */}
                <nav className='flex items-center justify-center flex-wrap gap-4'>
                    <motion.a href="https://github.com/renudeshmukh940" target={"_blank"}
                        whileHover={{ y: -3, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className='w-6 text-gray-400 hover:text-dark transition-colors'>
                        <GithubIcon />
                    </motion.a>

                    <motion.a href="https://www.linkedin.com/in/renu-deshmukh-2a422a1b1/" target={"_blank"}
                        whileHover={{ y: -3, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className='w-6 text-gray-400 hover:text-[#0A66C2] transition-colors'>
                        <LinkedInIcon />
                    </motion.a>

                    <motion.a href="https://www.hackerrank.com/profile/deshmukhrenu4" target={"_blank"}
                        whileHover={{ y: -3, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className='w-7 text-gray-400 hover:text-[#0894d4] transition-colors'>
                        <HackerRankIcon/>
                    </motion.a>
                </nav>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className='min-w-[85vw] flex flex-col z-30 justify-between items-center fixed top-1/2 left-1/2 
                        -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/90 rounded-[2.5rem] backdrop-blur-2xl py-32 shadow-2xl'>
                        <nav className='flex items-center flex-col justify-center gap-4'>
                            <CustomMobileLink href="/" title="Home" toggle={handleClick} />
                            <CustomMobileLink href="/about" title="About" toggle={handleClick} />
                             <CustomMobileLink href="/CompanyProjects" title="Company Projects" toggle={handleClick} />
                            <CustomMobileLink href="/projects" title="Projects" toggle={handleClick} />
                            <CustomMobileLink href="/achievements" title="Achievements" toggle={handleClick} />
                            <CustomMobileLink href="/ExperiencesPage" title="Experiences" toggle={handleClick} />
                            <CustomMobileLink href="/blogs" title="Blogs" toggle={handleClick} />
                            
                            <CustomMobileLink href="/contacts" title="Contact" toggle={handleClick} />
                        </nav>

                        <nav className='flex items-center justify-center flex-wrap mt-12 gap-8'>
                            <motion.a href="https://github.com/renudeshmukh940" target={"_blank"}
                                whileHover={{ scale: 1.2, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                                className='w-8 text-light dark:text-dark'>
                                <GithubIcon />
                            </motion.a>
                            <motion.a href="https://www.linkedin.com/in/renu-deshmukh-2a422a1b1/" target={"_blank"}
                                whileHover={{ scale: 1.2, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                                className='w-8 text-light dark:text-dark'>
                                <LinkedInIcon />
                            </motion.a>
                            <motion.a href="https://www.hackerrank.com/profile/deshmukhrenu4" target={"_blank"}
                                whileHover={{ scale: 1.2, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                                className='w-8 text-light dark:text-dark'>
                                <HackerRankIcon/>
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default NavBar

