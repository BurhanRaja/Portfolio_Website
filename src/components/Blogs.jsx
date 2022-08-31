import React from 'react'
import Rocketblastoff from './Rocketblastoff'

const Blogs = () => {
    return (
        <div className="bg-gradient-to-t from-[#67b7db] to-transparent relative w-full" style={{ 'height': '29rem'}}>
            <section class="text-gray-600 body-font w-full">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h1 class="title-font sm:text-6xl text-center text-3xl mb-4 font-interBold text-gray-100">Learn and Share.</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-lg text-slate-100">This is my bloging website where I talk about.</p>
                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-2">
                            <div class="p-2 w-full">
                                <a href="https://burhan-techblogs.netlify.app/">
                                    <button class="flex mx-auto text-white border-2 border-slate-600 py-2 px-8 focus:outline-none hover:bg-slate-600 font-bold hover:text-white rounded text-lg">Read More</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                <Rocketblastoff />
        </div>
    )
}

export default Blogs
