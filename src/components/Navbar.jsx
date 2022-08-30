import { motion } from 'framer-motion'
import React from 'react'

const Navbar = () => {

    const navigationItems = [{ name: 'About', pathTo: '/#about' }, { name: 'Projects', pathTo: '/#projects' }, { name: 'Experience', pathTo: '/#experience' }, { name: 'Contact', pathTo: '/#contact' }, { name: 'Blogs', pathTo: 'https://burhan-techblogs.netlify.app/' }]

    return (
        <motion.header className="text-gray-600 body-font bg-slate-900"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9 }}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium font-nunito items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-2xl text-white font-interBold">&lt; <span className='text-cyan-400'>B</span> &gt;</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center mr-5">
                    {navigationItems.map((navItem, index) => {
                        return <a href={`${navItem.pathTo}`} className="mr-5 hover:text-cyan-400 hover:cursor-pointer text-gray-100" key={index}><span className='text-cyan-400 font-roboto font-bold ml-2 mr-1'>{index + 1}.</span>{navItem.name}</a>
                    })}
                </nav>
                <button className="inline-flex font-roboto items-center text-cyan-400 bg-slate-900 border-2 border-cyan-400 py-1 px-3 focus:outline-none hover:bg-cyan-900 text-base md:mt-0 rounded-sm">My Resume
                </button>
            </div>
        </motion.header>
    )
}

export default Navbar
