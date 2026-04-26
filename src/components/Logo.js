import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className='flex items-center justify-center'>
            <MotionLink 
                href="/"
                className='w-12 h-12 bg-black text-light flex items-center justify-center rounded-2xl text-xl font-black relative group shadow-xl'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="flex items-center justify-center relative">
                    <span className="text-white">R</span>
                    <span className="bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">D</span>
                    
                    {/* Pixel/Square accents inspired by the image */}
                    <div className="absolute -top-1 -right-2 flex flex-wrap w-2 h-2 gap-[1px]">
                        <div className="w-1 h-1 bg-amber-400 rounded-[1px] animate-pulse" />
                        <div className="w-1 h-1 bg-yellow-500 rounded-[1px]" />
                        <div className="w-[1.5px] h-[1.5px] bg-yellow-300 rounded-[0.5px] absolute -right-1 -top-1" />
                    </div>
                </div>
            </MotionLink>
        </div>
    )
}

export default Logo