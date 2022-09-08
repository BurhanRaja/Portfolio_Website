import React from 'react'

const Loading = () => {
    return (
        <div className='bg-gradient-to-r from-[#030a2c] to-black flex flex-col p-10'
            style={{ "height": "100%", "width": "100%" }}>
            <div className="flex my-auto mx-auto flex-col">
                <img src="/assets/space-loading.gif" alt="Space" className='h-72 w-72' />
                <p className='text-center text-xl font-roboto font-bold text-white'>Loading...</p>
            </div>


        </div>
    )
}

export default Loading
