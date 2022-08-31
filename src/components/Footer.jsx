import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer class="text-gray-200 body-font bg-slate-900">
                <div class="container px-5 py-2 mx-auto flex items-center justify-center sm:flex-row ">
                    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <span className="ml-3 text-2xl text-white font-interBold">&lt; <span className='text-cyan-400'>B</span> &gt;</span>
                    </a>
                    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 Burhanuddin Raja
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
