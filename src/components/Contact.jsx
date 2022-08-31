import React from 'react'
import { Parallax } from 'react-scroll-parallax'

const Clouds = () => {
    return (
        <div className="">
            <img src="/assets/cloud-bg.jpg" className='absolute' style={{ 'height': '48rem', 'width': '100%', 'overflow':'hidden' }} alt="" />

            <section class="text-gray-600 body-font relative inline-block align-middle w-full">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h1 class="title-font sm:text-6xl text-center text-3xl mb-4 font-interBold text-gray-100">Get in touch.</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-lg">I am currently looking for oppurtunities as a Full Stack Developer. My inbox is always open to anyone who wants to connect with me.</p>
                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-2">
                            <div class="p-2 w-full">
                                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvmZDsfphTRhwSqdhpNWKMDBbrHbxjpLzjmcxszblwjCvrFVlGvmgHCrZXhHxHCJsCTknV">
                                    <button class="flex mx-auto text-black border-2 border-sky-900 py-2 px-8 focus:outline-none hover:bg-sky-800 font-bold hover:text-white rounded text-lg">Say Hello</button>
                                </a>
                                <p className='my-3 text-center'>Or Connect with me on</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-social flex flex-row justify-center w-full mb-12 mt-2">
                        <div className="twitter-btn mx-2">
                            <a href="https://twitter.com/Burhan_Raja52">
                            <button class="flex mx-auto hover:bg-cyan-300 text-black bg-white rounded-full text-lg p-1"><img src="/assets/twitter.png" alt="" className='h-10 w-10' /></button>
                            </a>
                        </div>
                        <div className="linkedin-btn mx-2">
                            <a href="https://www.linkedin.com/in/burhanuddin-raja-261b1617b/">
                            <button class="flex mx-auto hover:bg-cyan-300 text-black bg-white rounded-full text-lg p-1"><img src="/assets/linkedin.png" alt="" className='h-10 w-10' /></button>
                            </a>
                        </div>
                        <div className="github-btn mx-2">
                            <a href="https://github.com/BurhanRaja">
                            <button class="flex mx-auto hover:bg-cyan-300 text-black bg-white rounded-full text-lg p-1"><img src="/assets/github.png" alt="" className='h-10 w-10' /></button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Parallax
                translateX={[-10, 280]}
                easing={'easeIn'}
                className=''
            >
                <img src="/assets/plane.png" alt="Satellite" className='satellite-img h-48 w-48' />
            </Parallax>

        </div>
    )
}

export default Clouds
