import React from "react";

let data = [
  {
    name: "Mayank0255/Stackoverflow-Clone-Frontend",
    github: [
      "https://github.com/Mayank0255/Stackoverflow-Clone-Frontend/pull/90",
      "https://github.com/Mayank0255/Stackoverflow-Clone-Frontend/pull/96",
      "https://github.com/Mayank0255/Stackoverflow-Clone-Frontend/pull/97",
    ],
  },
  {
    name: "Ankit-11525/e-commerce_redstore.github.io",
    github: [
      "https://github.com/Ankit-11525/e-commerce_redstore.github.io/pull/54",
    ],
  },
  {
    name: "karishmashuklaa/chic-ui",
    github: [
      "https://github.com/karishmashuklaa/chic-ui/pull/113",
      "https://github.com/karishmashuklaa/chic-ui/pull/116",
    ],
  },
  {
    name: "swapnilsparsh/30DaysOfJavaScript",
    github: ["https://github.com/swapnilsparsh/30DaysOfJavaScript/pull/959"],
  },
  {
    name: "rohitjainfsl/khClassFiles",
    github: ["https://github.com/rohitjainfsl/khClassFiles/pull/1"],
  },
];

const OpenSource = () => {
  return (
    <>
      <div className='text-center mb-10'>
        <p className='title-font sm:text-6xl text-3xl mb-4 font-interBold text-gray-100'>
          Open Source.
        </p>
        <div className='flex justify-center items-center pt-8'>
          <div>
            {data?.map((el) => {
              return (
                <div className="mb-5">
                  <div
                    key={el?.name}
                    className=' text-start p-5 rounded-sm bg-slate-900 w-[50rem]'
                  >
                    <h1 className='text-2xl text-white font-interBold mb-3'>
                      {el?.name}
                    </h1>
                  </div>
                  <div className='flex justify-end items-center mt-2'>
                    {el?.github?.map((git) => {
                      return (
                        <a
                          key={git}
                          href={git}
                          type='button'
                          className='flex mx-2 bg-white border-0 p-1 focus:outline-none hover:bg-cyan-300 rounded-full animate-bounce'
                        >
                          <img
                            src='/assets/github.png'
                            className='h-7 w-7'
                            alt=''
                          />
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenSource;
