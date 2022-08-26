import React from 'react'

const About = () => {
    return (
        <div className='container px-28 py-8'>
            <div className="mx-auto max-w-1000 h-96">
                <div className="flex text-center flex-col">
                    <div className="about-title relative flex justify-start">
                        <p className='font-myName text-gray-200 text-4xl'><span className='font-introHello text-cyan-400 text-2xl mx-2'>1.</span>About Me</p>
                        <hr className='absolute top-5 left-64 w-80 opacity-30' />
                    </div>
                    <div className="flex">
                        <div className="about">
                            <p>This is about me Hello</p>
                        </div>
                        <div className="image">
                            <div className="my-image relative inline-block after:content-[''] after:h-52 after:w-48 after:absolute after:border-cyan-400 after:border-2 after:top-2 after:left-4 after:rounded-xl">
                                <div className="absolute top-0 left-0 h-52 w-48">
                                    <img src="/assets/Burhan.jpg" alt="Burhanuddin Raja" className='h-52 w-48 rounded-xl' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
