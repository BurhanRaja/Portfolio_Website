import { ParallaxProvider } from 'react-scroll-parallax';
import About from './components/About';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intorduction from './components/Intorduction';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className='App bg-gradient-to-b from-black to-[#030a2c] overflow-hidden'>
      <ParallaxProvider>
        <Navbar />
        <main >
          {/* <ParallexIntro /> */}
          <Loading />
          <Intorduction />
          <About />
          <Skills />
          {/* <RollingSatellite /> */}
          <Projects />
          {/* <Moon /> */}
          <Blogs />
          {/* <RocketblastOff /> */}
          <Contact />
          <Footer />
        </main>
      </ParallaxProvider>
    </div>
  );
}

export default App;
