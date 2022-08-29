import React from 'react'

const Projects = () => {
    return (
        <div>
            <section class="text-gray-600 body-font text-center py-10 relative">
                <div className="project-title">
                    <p className='title-font sm:text-6xl text-3xl mb-4 font-interBold text-gray-100'>Projects</p>
                </div>
                <div class="px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -mx-4 -mb-10 text-center justify-center">
                        <div class="sm:w-1/2 mb-10 px-4">
                            <div class="rounded-lg h-64 overflow-hidden">
                                <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501" />
                            </div>
                            <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Buy YouTube Videos</h2>
                            <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                            <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects
