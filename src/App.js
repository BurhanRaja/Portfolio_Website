import { ParallaxProvider } from 'react-scroll-parallax';
import About from './components/About';
import Clouds from './components/Clouds';
import Intorduction from './components/Intorduction';
import Navbar from './components/Navbar';
import ParallexIntro from './components/ParallexIntro';
import Projects from './components/Projects';
import Rocketblastoff from './components/Rocketblastoff';
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
          <Rocketblastoff />
          <About />
          <Clouds />
        </main>
      </ParallaxProvider>
    </div>
  );
}

export default App;
