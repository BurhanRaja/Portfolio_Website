import React from 'react'
import { Parallax } from 'react-scroll-parallax'

const Rocketblastoff = () => {
    return (
        <Parallax translateX={[-10, 80]} translateY={[-200, -800]} className='absolute h-40 w-1/2 '>
            <img src="/assets/rocket.png" alt="Rocket" className='absolute left-28' style={{ 'height': '15rem', 'width': '15rem' }} />
        </Parallax>
    )
}

export default Rocketblastoff
