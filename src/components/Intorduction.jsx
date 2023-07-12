import { motion } from "framer-motion";
import React from "react";

const Intorduction = () => {
  const getRandomColor = () => {
    const letters = "0123456789abcdef";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <div
      className="lg:p-16 md:p-14 sm:p-12 p-5 mt-10 bg-gradient-to-r from-[#01030c] to-black"
    >
      <div className="flex justify-evenly items-center flex-wrap-reverse lg:flex-row md:flex-col-reverse">
        <div
          className="max-w-1000 lg:w-[60%] md:w-[90%] sm:w-[100%] flex justify-start sm:justify-center lg:items-center md:items-start sm:items-start items-center md:mt-5 relative py-5 px-4"
        >
          <motion.div
            className="flex lg:text-start md:text-center sm:text-center lg:items-start md:items-center sm:items-center text-center items-center flex-col"
            initial={{ opacity: 0.4, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            <div className="hello my-2">
              <p className="text-cyan-400 font-roboto text-base">
                <span className="">Hi,</span> <span className="">I am</span>
              </p>
            </div>
            <div className="name">
              <p className="text-slate-200 xl:text-7xl lg:text-6xl md:text-6xl sm:text-5xl text-4xl font-interBold my-2">
                Burhauddin Raja.
              </p>
              <p className="text-slate-400 xl:text-6xl lg:text-5xl md:text-5xl sm:text-4xl text-3xl font-interBold my-2">
                A Full Stack Developer.
              </p>
            </div>
            <div className="download-resume mt-5"></div>
          </motion.div>
        </div>
        <div className="flex justify-center lg:w-[40%] md:w-[40%] sm:w-[80%]">
          <img
            src="/assets/space-loading.gif"
            alt="Space"
            className=" w-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Intorduction;
