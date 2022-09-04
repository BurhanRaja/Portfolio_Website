import { ParallaxProvider } from 'react-scroll-parallax';
import About from './components/About';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intorduction from './components/Intorduction';
import Moon from './components/Moon';
import Navbar from './components/Navbar';
import ParallexIntro from './components/ParallexIntro';
import Projects from './components/Projects';
import RocketblastOff from './components/Rocketblastoff';
import RollingSatellite from './components/RollingSatellite';

function App() {
  return (
    <div className='App bg-gradient-to-b from-black to-[#000d4e] overflow-hidden'>
      <ParallaxProvider>
        <Navbar />
        <main >
          <ParallexIntro />
          <Intorduction />
          <About />
          <RollingSatellite />
          <Projects />
          <Moon />
          <Blogs />
          <RocketblastOff />
          <Contact />
          <Footer />
        </main>
      </ParallaxProvider>
    </div>
  );
}

export default App;
