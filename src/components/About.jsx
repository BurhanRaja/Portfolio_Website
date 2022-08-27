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
                            <img src="/assets/Burhan.jpg" alt="Burhanuddin Raja" className='h-52 w-48 rounded-xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
