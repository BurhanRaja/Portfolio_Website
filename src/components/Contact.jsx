import React from 'react'
import Button from './Button'

const Clouds = () => {
    return (
        <div className="">
            {/* <img src="/assets/cloud-bg.jpg" className='absolute' style={{ 'height': '48rem', 'width': '100%', 'overflow': 'hidden' }} alt="" /> */}

            <section className="text-gray-600 body-font relative inline-block align-middle w-full" id='contact'>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="title-font sm:text-6xl text-center text-3xl mb-4 font-interBold text-gray-100">Get in touch.</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-300">I am currently looking for oppurtunities as a Full Stack Developer. My inbox is always open to anyone who wants to connect with me.</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-full">
                                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvmZDsfphTRhwSqdhpNWKMDBbrHbxjpLzjmcxszblwjCvrFVlGvmgHCrZXhHxHCJsCTknV">
                                    <Button name="Say Hello" />
                                </a>
                                <p className='my-3 text-center text-white'>Or Connect with me on</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-social flex flex-row justify-center w-full mb-12 mt-2">
                        <div className="twitter-btn mx-2">
                            <a href="https://twitter.com/Burhan_Raja52">
                                <button className="flex mx-auto bg-white hover:bg-cyan-400 font-bold rounded-full text-lg p-1"><img src="/assets/twitter.png" alt="" className='h-10 w-10' /></button>
                            </a>
                        </div>
                        <div className="linkedin-btn mx-2">
                            <a href="https://www.linkedin.com/in/burhanuddin-raja-261b1617b/">
                                <button className="flex mx-auto bg-white hover:bg-cyan-400 font-bold rounded-full text-lg p-1"><img src="/assets/linkedin.png" alt="" className='h-10 w-10' /></button>
                            </a>
                        </div>
                        <div className="github-btn mx-2">
                            <a href="https://github.com/BurhanRaja">
                                <button className="flex mx-auto  bg-white hover:bg-cyan-400 font-bold rounded-full text-lg p-1"><img src="/assets/github.png" alt="" className='h-10 w-10' /></button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Clouds
