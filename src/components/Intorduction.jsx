import { motion } from 'framer-motion';
import React from 'react';
import Typewriter from 'typewriter-effect';

const Intorduction = () => {

    const getRandomColor = () => {
        const letters = '0123456789abcdef'
        let color = '#'

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color
    }
    return (
        <div className='container px-28 py-16 mt-10'>
            <div className="mx-auto max-w-1000 h-96">
                <motion.div className="flex text-center items-center flex-col"
                    initial={{ opacity: 0.4, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeOut", duration: 1 }}>
                    <div className="hello my-2">
                        <p className='text-cyan-400 font-introHello text-base'><span className=''>Hi,</span> <span className=''>I am</span></p>
                    </div>
                    <div className="name">
                        <p className='text-gray-200 text-7xl font-myName my-2'>
                            Burhauddin Raja.
                        </p>
                    </div>
                    <div className="job-title my-5">
                        <p className='text-gray-400 text-6xl font-myName text-center'>
                        <span className='font-introHello'><Typewriter
                            options={{
                                strings: ['Full Stack.', 'Frontend.', 'Backend.', 'DevOps.'],
                                autoStart: true,
                                loop: true}}>
                                    </Typewriter>
                                </span>
                            </p>
                    </div>
                    <div className="download-resume mt-5">
                        <button className="inline-flex font-introHello items-center text-cyan-400 bg-slate-900 border-2 border-cyan-400 py-2 px-5 focus:outline-none hover:bg-cyan-900 text-base mt-4 md:mt-0 rounded-sm">My Resume
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Intorduction
