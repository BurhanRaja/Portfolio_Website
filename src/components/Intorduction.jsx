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
      className="px-16 py-16 mt-10 bg-gradient-to-r from-[#030a2c] to-black"
      style={{ height: "40rem" }}
    >
      <div className="flex justify-evenly items-center">
        <div
          className="max-w-1000 flex justify-start items-center relative py-5 px-4"
          style={{ height: "25rem", width: "60%" }}
        >
          <motion.div
            className="flex text-start items-start flex-col"
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
              <p className="text-slate-200 text-7xl font-interBold my-2">
                Burhauddin Raja.
              </p>
              <p className="text-slate-400 text-7xl font-interBold my-2">
                Full Stack Developer.
              </p>
            </div>
            <div className="download-resume mt-5"></div>
          </motion.div>
        </div>
        <div className="flex w-[40%]">
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
