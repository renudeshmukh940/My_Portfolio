import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import Link from 'next/link'
import { motion } from 'framer-motion'

const BlogCard = ({ title, date, excerpt, link, category }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative bg-white/80 backdrop-blur-md rounded-[2rem] border border-blue-50 overflow-hidden shadow-[0_10px_30px_rgba(59,130,246,0.05)] hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500"
        >
            <div className="w-full aspect-video relative overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10">
                <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-110 transition-transform duration-700">
                    <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-full text-[8px] font-black uppercase tracking-widest shadow-lg">
                        {category}
                    </span>
                </div>
            </div>

            <div className="p-8 flex flex-col justify-between">
                <div>
                    <span className="text-blue-500 font-bold text-[9px] uppercase tracking-widest">{date}</span>
                    <h3 className="text-xl font-black text-slate-900 mt-2 mb-3 group-hover:text-pink-600 transition-colors leading-tight line-clamp-2">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-6">{excerpt}</p>
                </div>
                
                <Link href={link} className="inline-flex items-center gap-2 text-slate-900 font-black uppercase text-[9px] tracking-widest group/btn">
                    Read More 
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover/btn:bg-gradient-to-r group-hover/btn:from-blue-600 group-hover/btn:to-pink-600 group-hover/btn:translate-x-1 transition-all duration-300">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                </Link>
            </div>
        </motion.div>
    )
}

const Blogs = () => {
    const [search, setSearch] = useState('');
    const [activeTab, setActiveTab] = useState('All');

    const blogs = [
        {
            title: "AI Agents: The Future of Automation and Intelligence",
            date: "Sept 14, 2025",
            excerpt: "A deep dive into AI Agents — architecture, workflows, and code.",
            link: "/Blog/Blog1",
            category: "Gen-AI"
        },
       
        {
            title: "Transformers in Deep Learning",
            date: "March 23, 2026",
            excerpt: "A complete guide to the architecture that changed everything.",
            link: "/Blog/Blog3",
            category: "Machine Learning"
        },
        {
            title: "Generative AI: The New Frontier",
            date: "April 25, 2026",
            excerpt: "Generative AI is reshaping industries, automating tasks, and unlocking new creative possibilities.",
            link: "/Blog/Blog4",
            category: "Gen-AI"
        }
    ];

    const filteredBlogs = blogs.filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(search.toLowerCase());
        const matchesTab = activeTab === 'All' || blog.category === activeTab;
        return matchesSearch && matchesTab;
    });

    const categories = ['All', 'Machine Learning', 'Gen-AI'];

    return (
        <>
            <Head>
                <title>Renu Deshmukh | Blogs</title>
                <meta name="description" content="Explore technical articles on AI and Automation." />
            </Head>
            <TransitionEffect />
            <main className="w-full flex flex-col items-center justify-center bg-[#fafafa] min-h-screen relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-100/30 rounded-full blur-[120px] -z-10" />

                <Layout className="pt-20 pb-40">
                    <div className="flex flex-col items-center justify-center text-center">
                        <AnimatedText 
                            text="Our Stories" 
                            className="!text-6xl lg:!text-5xl md:!text-4xl sm:!text-3xl font-black text-slate-900 tracking-tighter" 
                        />
                        <p className="max-w-xl text-slate-500 font-medium text-base mt-4 mb-12">
                            Dive into my latest technical thoughts and technical insights.
                        </p>

                        {/* Search & Filters */}
                        <div className="w-full max-w-2xl flex flex-col gap-6 mb-16">
                            <div className="flex flex-wrap items-center justify-center gap-3">
                                {categories.map(cat => (
                                    <button 
                                        key={cat}
                                        onClick={() => setActiveTab(cat)}
                                        className={`px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all duration-300 border
                                            ${activeTab === cat 
                                                ? 'bg-gradient-to-r from-blue-600 to-pink-600 text-white border-transparent shadow-lg' 
                                                : 'bg-white text-slate-400 border-slate-100 hover:text-slate-900'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            <div className="relative w-full rounded-2xl overflow-hidden group">
                                <span className="absolute inset-y-0 left-6 flex items-center text-slate-300 group-focus-within:text-blue-500 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </span>
                                <input 
                                    type="text" 
                                    placeholder="Search articles..." 
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full py-5 pl-16 pr-6 text-base font-bold bg-white text-slate-900 placeholder:text-slate-200 focus:outline-none transition-all border border-slate-100 rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Blog Grid - 3 Columns */}
                    <div className="grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-8 w-full">
                        {filteredBlogs.length > 0 ? (
                            filteredBlogs.map((blog, index) => (
                                <BlogCard key={index} {...blog} />
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center text-slate-300 font-bold uppercase tracking-widest">
                                No articles found
                            </div>
                        )}
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default Blogs
