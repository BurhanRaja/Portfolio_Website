import { motion } from 'framer-motion'
import React from 'react'
import Button from './Button'

const Navbar = () => {

    // const navigationItems = [{ name: 'About', pathTo: '/path#about' }, { name: 'Projects', pathTo: '/path#projects' }, { name: 'Blogs', pathTo: '/path#blog' }, { name: 'Contact', pathTo: '/path#contact' }]

    return (
        <motion.header className="text-gray-600 body-font bg-black"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9 }}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium font-nunito items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-2xl text-white font-interBold">&lt; <span className='text-cyan-400'>B</span> &gt;</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center mr-5">
                </nav>
                <div className="inline-flex items-center text-base md:mt-0 rounded-sm">
                    <Button name="My Resume" />
                </div>
            </div>
        </motion.header>
    )
}

export default Navbar
