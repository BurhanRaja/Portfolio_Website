import React from "react";

const About = () => {
  return (
    <section
      className="text-gray-600 body-font relative lg:pt-28 md:pt-20 sm:pt-16 p-12 px-4"
      id="about"
    >
      <h1 className="title-font lg:text-5xl md:text-4xl text-5xl text-center mb-4 font-interBold text-gray-100">
        About Me.
      </h1>
      <div className="mx-auto lg:w-[95%] relative py-5 px-4 flex text-center justify-center items-center flex-wrap-reverse">
        <div className="lg:flex-grow md:w-full flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="mb-8 text-lg text-slate-400 text-center">
            A self-taught developer, disciplined with learning and constantly
            seeking out new resources to improve my skills. I have always been
            curious about technology and fascinated by the power it holds to
            transform the world. As a result, I have dedicated myself to pursue
            a career in this field.
          </p>
          <p className="mb-8 text-lg text-slate-400 text-center">
            My experience working with Java and Javascript has helped me develop
            a strong foundation in fundamental programming concepts.
            Additionally, using the MERN stack has given me valuable experience
            building full-stack applications. Always eager to continue expanding
            my knowledge and working with various languages and frameworks. I
            would also love to learn and work with technologies like blockchain
            and machine learning.
          </p>
          <p className="mb-8 text-lg text-cyan-400 text-center">
          Seeking opportunities in the tech industry that will challenge me and allow me to continue learning and growing as a developer. Excited to contribute to new innovations and working with teams.
          </p>
        </div>
        <div className="flex justify-center items-center lg:mb-5 md:mb-8 sm:mb-6 mb-6">
          <img
            className="object-cover object-center rounded lg:w-[60%] md:w-[50%] sm:w-[50%] w-[70%]"
            alt="hero"
            src="/assets/Burhan.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
