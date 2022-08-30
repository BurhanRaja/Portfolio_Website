import React from 'react'
import { Parallax } from 'react-scroll-parallax'

const Rocketblastoff = () => {
    return (
        <Parallax speed={30}>
            <img src="/assets/rocket.png" alt="Jupiter" className='absolute -rotate-45 left-40' style={{ 'height': '20rem', 'width': '20rem' }} />
        </Parallax>
    )
}

export default Rocketblastoff
