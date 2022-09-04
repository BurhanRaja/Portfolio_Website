import { motion } from 'framer-motion'
import React from 'react'

const Button = (props) => {
    return (
        <div>
            <motion.button whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} className="flex mx-auto text-white py-2 px-8 focus:outline-none bg-gradient-to-r from-sky-500 via-indigo-600 to-blue-700 font-roboto font-bold hover:text-white rounded text-lg">{props.name}</motion.button>
        </div>
    )
}

export default Button
