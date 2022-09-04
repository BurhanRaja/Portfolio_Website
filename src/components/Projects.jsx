import { motion } from 'framer-motion'
import React from 'react'



const Projects = () => {
    const slides = [1, 2, 3, 4, 5, 6]
    return (
        <>
            <div className='relative' id='projects'>
                <section className="text-gray-600 body-font py-10 relative">
                    <div className="project-title text-center">
                        <p className='title-font sm:text-6xl text-3xl mb-4 font-interBold text-gray-100'>Things I have build.</p>
                    </div>
                    <div className="px-5 py-24 mx-auto relative">
                        {slides.map((slide) => {
                            return <div key={slide} className="flex flex-wrap -mx-4 mb-10 relative justify-center items-center">
                                <div className="mb-10 pl-4">
                                    <motion.div initial="offscreen"
                                        whileInView="onscreen"
                                        viewport={{ once: true, amount: 0.8 }} className="card-container rounded-sm overflow-hidden">
                                        <motion.div variants={{
                                            offscreen: { y: 300 }, onscreen: { y: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
                                        }} >
                                            <img alt="content" style={{ 'height': '26rem', 'width': '25rem' }} src="/assets/Burhan.jpg" />
                                        </motion.div>
                                    </motion.div>
                                </div>
                                <motion.div className='-ml-12 relative' initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{ once: true, amount: 0.8 }}>
                                    <motion.div variants={{
                                        offscreen: { opacity: 0 }, onscreen: { opacity: 1, transition: { type: 'easeIn', bounce: 0.4, duration: 0.8 } }
                                    }}>
                                        <div className="flex justify-end items-center transition-all">
                                            <h2 className="title-font text-3xl font-interBold text-gray-100 mt-6 mb-3">Project</h2>
                                        </div>
                                        <div className=' p-5 rounded-sm bg-slate-900'>
                                            <p className="leading-relaxed text-base w-96 text-slate-200">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                                        </div>
                                        <div className='p-2 font-roboto'>
                                            <small className='flex justify-end text-slate-300 text-sm'>
                                                <span className='mr-2'>VSCode</span>
                                                <span className='mr-2'>Reactjs</span>
                                                <span className='mr-2'>Nodejs</span>
                                            </small>
                                        </div>
                                        <div className="flex justify-end items-center mt-2">
                                            <button className="flex mx-2 bg-white border-0 p-1 focus:outline-none hover:bg-cyan-300 rounded-full animate-bounce"><img src="/assets/github.png" className='h-7 w-7' alt="" /></button>
                                            <button className="flex mx-2 bg-white border-0 p-1 focus:outline-none hover:bg-cyan-300 rounded-full animate-bounce"><img src="/assets/link.png" className='h-7 w-7' alt="" /></button>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        })}
                        
                    </div>
                </section >
            </div >
        </>
    )
}

export default Projects
