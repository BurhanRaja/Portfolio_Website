import React from "react";

const About = () => {
  return (
    <section
      className="text-gray-600 body-font relative pt-32"
      style={{ height: "50rem" }}
      id="about"
    >
      <h1 className="title-font sm:text-6xl text-center text-3xl mb-4 font-interBold text-gray-100">
        About Me.
      </h1>
      <div className="mx-auto w-[80%] relative py-5 px-4 flex text-center items-center">
        <div className="lg:flex-grow md:w-full md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="mb-8 text-lg text-slate-400">
            A self-taught developer, disciplined with learning and constantly
            seeking out new resources to improve my skills. I have always been
            curious about technology and fascinated by the power it holds to
            transform the world. As a result, I have dedicated myself to pursue
            a career in this field.
          </p>
          <p className="mb-8 text-lg text-slate-400">
            My experience working with Java and Javascript has helped me develop
            a strong foundation in fundamental programming concepts.
            Additionally, using the MERN stack has given me valuable experience
            building full-stack applications. Always eager to continue expanding
            my knowledge and working with various languages and frameworks. I
            would also love to learn and work with technologies like blockchain
            and machine learning.
          </p>
          <p className="mb-8 text-lg text-cyan-400">
          Seeking opportunities in the tech industry that will challenge me and allow me to continue learning and growing as a developer. Excited to contribute to new innovations and working with teams.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded w-[90%]"
            alt="hero"
            src="/assets/Burhan.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
