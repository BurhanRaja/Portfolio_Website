import React from 'react';

const About = () => {
    return (
        <section className="text-gray-600 body-font relative" style={{'height': '30rem'}}> 
            <h1 className="title-font sm:text-6xl text-center text-3xl mb-4 font-interBold text-gray-100">About Me
                    </h1>
            <div className="mx-auto max-w-1000 relative py-5 px-4 flex text-center items-center flex-row">
                <div className="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <p className="mb-8 text-lg text-slate-400">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded h-96 w-96" alt="hero" src="/assets/Burhan.jpg" />
                </div>
            </div>
        </section>
    )
}

export default About
