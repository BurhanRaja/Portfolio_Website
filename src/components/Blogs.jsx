import React from "react";
import Button from "./Button";

const Blogs = () => {
  return (
    <div>
      {/* bg-gradient-to-t from-[#67b7db] to-transparent */}
      <div className=' relative w-full' style={{ height: "29rem" }} id='blog'>
        <section className='text-gray-600 body-font w-full relative'>
          <div className='container px-5 py-12 mx-auto'>
            <div className='flex flex-col text-center w-full mb-12'>
              <h1 className='title-font sm:text-6xl text-center text-3xl mb-4 font-interBold text-gray-100'>
                Learn and Share.
              </h1>
              <p className='lg:w-2/3 mx-auto leading-relaxed text-lg text-slate-100'>
                I share my knowledge and all the learnings about Programming and
                Development. It contains content around the world of Computer
                Science. Check it out by clicking on the button below.
              </p>
            </div>
            <div className='lg:w-1/2 md:w-2/3 mx-auto'>
              <div className='flex flex-wrap -m-2'>
                <div className='p-2 w-full'>
                  <a href='https://burhanraja.hashnode.dev/' target='_blank'>
                    <Button name='Read More' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;
