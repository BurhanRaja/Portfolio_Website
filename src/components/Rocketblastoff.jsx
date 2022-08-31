import React from 'react'
import { Parallax } from 'react-scroll-parallax'

const Rocketblastoff = () => {
    return (
        <Parallax speed={30} translateX={[-20, 30]} translateY={[-100, -300]} className='absolute h-64 w-full'>
            <img src="/assets/rocket.png" alt="Rocket" className='relative left-28' style={{ 'height': '20rem', 'width': '20rem' }} />
        </Parallax>
    )
}

export default Rocketblastoff
