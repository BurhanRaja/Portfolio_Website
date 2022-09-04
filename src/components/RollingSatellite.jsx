import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const RollingSatellite = () => {
    return (
        <>
            <Parallax
                translateX={[-10, 150]}
                translateY={[10, 240]}
                easing={'easeInOut'}
                className=' relative'
            >
                <img src="/assets/space-station.png" alt="Satellite" className='satellite-img h-64 w-64 -rotate-45' />
            </Parallax>
        </>
    )
}

export default RollingSatellite
