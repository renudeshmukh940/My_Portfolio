import React from 'react'
import Link from 'next/link'
import { GithubIcon, LinkedInIcon, HackerRankIcon } from './Icons'
import Logo from './Logo'

const Footer = () => {
    return (
        <footer className="w-full py-8 px-8 xl:px-16 lg:px-12 md:px-10 sm:px-6 bg-gray-100 flex items-center justify-center font-mont">
            <div className="w-full max-w-[1400px] bg-white rounded-[1.5rem] p-8 md:p-6 flex flex-col items-center justify-center relative shadow-2xl shadow-slate-200/50 border border-gray-100">
                
                {/* Top Section */}
                <div className="w-full grid grid-cols-5 lg:grid-cols-1 gap-12 items-start mb-6">
                    
                    {/* Left Column: Brand Info (2/5 ratio) */}
                    <div className="col-span-2 lg:col-span-1 flex flex-col items-start justify-start">
                        <div className="flex items-center justify-center mb-4 group">
                            <Logo />
                            <Link href="/">
                                <span className="text-xl font-black tracking-tighter text-black uppercase ml-4">Renu Deshmukh</span>
                            </Link>
                        </div>
                        <p className="text-sm text-gray-500 mb-6 max-w-sm leading-relaxed font-medium">
                            Renu Deshmukh transforms complex data into actionable insights and builds scalable AI-driven solutions that deliver real business impact.
                        </p>
                        <div className="flex items-center justify-center gap-5">
                            <Link href="https://www.hackerrank.com/profile/deshmukhrenu4" target="_blank" className="w-6 text-gray-400 hover:text-[#0894d4] transition-colors"><HackerRankIcon /></Link>
                            <Link href="https://www.linkedin.com/in/renu-deshmukh-2a422a1b1/" target="_blank" className="w-6 text-gray-400 hover:text-black transition-all hover:scale-110 duration-300"><LinkedInIcon /></Link>
                            <Link href="https://github.com/renudeshmukh940" target="_blank" className="w-6 text-gray-400 hover:text-black transition-all hover:scale-110 duration-300"><GithubIcon /></Link>
                        </div>
                    </div>

                    {/* Right Column: Links (3/5 ratio) */}
                    <div className="col-span-3 lg:col-span-1 grid grid-cols-3 sm:grid-cols-2 gap-8 md:gap-6">
                        {/* Work Column */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold uppercase text-gray-400 text-[10px] tracking-[0.4em] mb-1">Work</h3>
                            <ul className="flex flex-col gap-2 text-gray-500 font-semibold text-sm">
                                <li><Link href="/projects" className="hover:text-black hover:translate-x-2 transition-all inline-block duration-300 text-gray-600">Personal Projects</Link></li>
                                <li><Link href="/CompanyProjects" className="hover:text-black hover:translate-x-2 transition-all inline-block duration-300 text-gray-600">Company Projects</Link></li>
                                <li><Link href="/achievements" className="hover:text-black hover:translate-x-2 transition-all inline-block duration-300 text-gray-600">Achievements</Link></li>
                            </ul>
                        </div>

                        {/* Resources Column */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold uppercase text-gray-400 text-[10px] tracking-[0.4em] mb-1">Resources</h3>
                            <ul className="flex flex-col gap-2 text-gray-500 font-semibold text-sm">
                                <li><Link href="/Blog/Blog1" className="hover:text-black hover:translate-x-2 transition-all inline-block duration-300 text-gray-600">Blogs</Link></li>
                                <li><Link href="/ObjectDetection" className="hover:text-black hover:translate-x-2 transition-all inline-block duration-300 text-gray-600">Object Detection</Link></li>
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div className="flex flex-col gap-4">
                            <h3 className="font-bold uppercase text-gray-400 text-[10px] tracking-[0.4em] mb-1">Company</h3>
                            <ul className="flex flex-col gap-2 text-gray-500 font-semibold text-sm">
                                <li><Link href="/about" className="hover:text-black hover:translate-x-2 transition-all inline-block duration-300 text-gray-600">About</Link></li>
                                <li><Link href="/CompanyProjects" className="hover:text-black hover:translate-x-2 transition-all inline-block duration-300 text-gray-600">Company Project</Link></li>
                                <li><Link href="/contacts" className="hover:text-black hover:translate-x-2 transition-all inline-block duration-300 text-gray-600">Contact</Link></li>
                                <li><Link href="/" className="hover:text-black hover:translate-x-2 transition-all inline-block duration-300 text-gray-600">Home</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="w-full border-t border-gray-100 mt-6 pt-4 flex items-center justify-between md:flex-col md:gap-4 text-gray-400 text-[12px] font-medium">
                    <span className="opacity-80">© {new Date().getFullYear()} Renu Deshmukh. All rights reserved.</span>
                    <span className="tracking-widest uppercase text-[10px] text-gray-400/70 border-b border-gray-400/20 pb-1">Designed & Built with precision</span>
                </div>

                
            </div>
        </footer>
    )
}

export default Footer
