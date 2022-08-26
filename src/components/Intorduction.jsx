import React from 'react'

const Intorduction = () => {
    return (
        <div className='container px-28 py-16 mt-10'>
            <div className="mx-auto max-w-1000 h-96">
                <div className="flex text-center items-center flex-col">
                    <div className="hello my-2">
                        <p className='text-cyan-400 font-introHello text-base'><span className=''>Hi,</span> <span className=''>I am</span></p>
                    </div>
                    <div className="name">
                        <p className='text-gray-200 text-7xl font-myName my-2'>Burhanuddin Raja.</p>
                        <p className='text-gray-400 text-6xl font-myName my-5'>I am a Full Stack Developer.</p>
                    </div>
                    <div className="download-resume mt-5">
                        <button className="inline-flex font-introHello items-center text-cyan-400 bg-slate-900 border-2 border-cyan-400 py-2 px-5 focus:outline-none hover:bg-cyan-900 text-base mt-4 md:mt-0 rounded-sm">My Resume
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intorduction
