import React from 'react'

const Navbar = () => {

    const navigationItems = [{name:'About', pathTo: '/#about'}, {name:'Projects', pathTo: '/#projects'}, {name:'Experience', pathTo: '/#experience'}, {name:'Contact', pathTo: '/#contact'}]

    return (
        <header className="text-gray-600 body-font bg-slate-900">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src='/assets/b-letter.png' alt='B Letter' className='h-10' />
                    <span className="ml-3 text-xl text-white">Burhanuddin Raja</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center mr-5">
                    {navigationItems.map((navItem, index) => {
                    return <a href={`/${navItem.pathTo}`} className="mr-5 hover:text-cyan-400 hover:cursor-pointer text-gray-100" key={index}><span className='text-cyan-400 font-spanNum font-bold ml-2 mr-1'>{index+1}.</span>{navItem.name}</a>
                    })}
                </nav>
                <button className="inline-flex items-center text-cyan-400 bg-slate-900 border-2 border-cyan-400 py-2 px-5 focus:outline-none hover:bg-cyan-900 text-base mt-4 md:mt-0">Resume
                </button>
            </div>
        </header>
    )
}

export default Navbar
