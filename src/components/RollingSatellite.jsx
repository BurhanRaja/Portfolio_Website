import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const RollingSatellite = () => {
    return (
        <Parallax
        translateX={[-10, 110]}
        easing="easeInOutCirc"
        className='py-8 relative'
        >
            <img src="/assets/satellite.png" alt="Satellite" className='satellite-img h-36 w-36 animate-spin'/>
        </Parallax>
    )
}

export default RollingSatellite
