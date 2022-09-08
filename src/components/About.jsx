import React from 'react';

const About = () => {
    return (
        <section className="text-gray-600 body-font relative" style={{'height': '50rem'}} id='about'> 
            <h1 className="title-font sm:text-6xl text-center text-3xl mb-4 font-interBold text-gray-100">About Me.
                    </h1>
            <div className="mx-auto max-w-1000 relative py-5 px-4 flex text-center items-center flex-row">
                <div className="lg:flex-grow md:w-full md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <p className="mb-8 text-lg text-slate-400">Hello! Myself Burhanuddin Raja. I am a Full Stack Developer. My interest in Tech started during my Bachelors in Business Administration. I attended a webinar related to Data Science which was life changing for me. At that very moment I decided to pursue my career in Tech.
                    </p>
                    <p className="mb-8 text-lg text-slate-400">
                        I started with basic web development HTML, CSS, Javascript. Then, I directly jumped onto Python and learned Machine Learning, Deep Learning but as I moved further I figured that this was too advance for me. So, I decided to built my career in Web Developemnt and later learn these advance technologies.
                    </p>
                    <p className="mb-8 text-lg text-cyan-400">
                        Currently, I am looking for oppurtunities in tech as a Full Stack Web Developer.
                    </p>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded h-96 w-96" alt="hero" src="/assets/Burhan.jpg" />
                </div>
            </div>
        </section>
    )
}

export default About
    