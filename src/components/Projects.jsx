import { motion } from "framer-motion";
import React from "react";
import data from "../data";

const Projects = () => {
  return (
    <>
      <div className='relative pt-12' id='projects'>
        <section className='text-gray-600 body-font py-10 relative'>
          <div className='project-title text-center'>
            <p className='title-font sm:text-6xl text-3xl mb-4 font-interBold text-gray-100'>
              Things I have build.
            </p>
          </div>
          <div className='px-5 py-24 mx-auto relative'>
            {data.map((slide) => {
              return (
                <div
                  key={slide.name}
                  className='flex flex-wrap -mx-4 mb-10 relative justify-center items-center'
                >
                  <div className='mb-10 pl-4'>
                    <motion.div
                      initial='offscreen'
                      whileInView='onscreen'
                      viewport={{ once: true, amount: 0.8 }}
                      className='card-container rounded-sm overflow-hidden'
                    >
                      <motion.div
                        variants={{
                          offscreen: { y: 300 },
                          onscreen: {
                            y: 0,
                            transition: {
                              type: "spring",
                              bounce: 0.4,
                              duration: 0.8,
                            },
                          },
                        }}
                      >
                        <img
                          alt='content'
                          style={{ height: "18rem", width: "35rem" }}
                          src={slide.image}
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                  <motion.div
                    className='-ml-12 relative'
                    initial='offscreen'
                    whileInView='onscreen'
                    viewport={{ once: true, amount: 0.8 }}
                  >
                    <motion.div
                      variants={{
                        offscreen: { opacity: 0 },
                        onscreen: {
                          opacity: 1,
                          transition: {
                            type: "easeIn",
                            bounce: 0.4,
                            duration: 0.8,
                          },
                        },
                      }}
                    >
                      <div className='flex justify-end items-center transition-all'>
                        <h2 className='title-font text-3xl font-interBold text-gray-100 mt-6 mb-3'>
                          {slide.name}
                        </h2>
                      </div>
                      <div className=' p-5 rounded-sm bg-slate-900 w-[30rem]'>
                        <p className='leading-relaxed text-base text-slate-200'>
                          {slide.description}
                        </p>
                      </div>
                      <div className='p-2 font-roboto max-w-[30rem]'>
                        <small className='flex justify-end text-slate-300 text-sm flex-wrap'>
                          {slide.tech.map((el) => {
                            return (
                              <span key={el} className='mr-2 text-xs mt-3 bg-gray-800 p-2 py-1'>
                                {el}
                              </span>
                            );
                          })}
                        </small>
                      </div>
                      <div className='flex justify-end items-center mt-2'>
                        <a
                          href={slide.github}
                          type='button'
                          className='flex mx-2 bg-white border-0 p-1 focus:outline-none hover:bg-cyan-300 rounded-full animate-bounce'
                        >
                          <img
                            src='/assets/github.png'
                            className='h-7 w-7'
                            alt=''
                          />
                        </a>
                        <a
                          href={slide.project}
                          type='button'
                          className='flex mx-2 bg-white border-0 p-1 focus:outline-none hover:bg-cyan-300 rounded-full animate-bounce'
                        >
                          <img
                            src='/assets/link.png'
                            className='h-7 w-7'
                            alt=''
                          />
                        </a>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
