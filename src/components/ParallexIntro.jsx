import React from 'react'
import { Parallax } from 'react-scroll-parallax'

const ParallexIntro = () => {
    return (
        <div>
            <div className="planet-image relative">
                <Parallax speed={-20}>
                    <img src="/assets/mars.png" alt="Mars" className='absolute left-10 -translate-x-64 -translate-y-40' style={{'height': '35rem', 'width': '35rem'}} />
                </Parallax>
                <Parallax speed={-15}>
                    <img src="/assets/jupiter.png" alt="Jupiter" className='absolute right-10 translate-x-64 translate-y-64' style={{'height': '30rem', 'width': '30rem'}} />
                </Parallax>
                <Parallax speed={-10}>
                    <img src="/assets/saturn.png" alt="Saturn" className='absolute right-96 translate-y-40' style={{'height': '15rem', 'width': '15rem'}} />
                </Parallax>
            </div>
        </div>
    )
}


export default ParallexIntro
