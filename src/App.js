import { ParallaxProvider } from 'react-scroll-parallax';
import About from './components/About';
import Intorduction from './components/Intorduction';
import Navbar from './components/Navbar';
import ParallexIntro from './components/ParallexIntro';
import Projects from './components/Projects';
import Rocketblastoff from './components/Rocketblastoff';
import RollingSatellite from './components/RollingSatellite';

function App() {
  return (
    <div className="App" style={{ 'backgroundImage': " url('/assets/Space.jpg')", 'backgroundSize': 'cover', 'overflow': 'hidden' }}>
      <ParallaxProvider>
        <Navbar />
        <main>
          <ParallexIntro />
          <Intorduction />
          <About />
          <RollingSatellite />
          <Projects />
          <Rocketblastoff />
          <About />
        </main>
      </ParallaxProvider>
    </div>
  );
}

export default App;
