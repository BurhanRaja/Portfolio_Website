import React from 'react'
import { Parallax } from 'react-scroll-parallax'

const Moon = () => {
    return (
            <Parallax speed={-27} className=''>
                <img src="/assets/moon.png" alt="Moon" className='absolute right-0 -translate-y-36 translate-x-72' style={{"height": "35rem", "width": "35rem"}} />
            </Parallax>
    )
}

export default Moon