import About from './components/About';
import Intorduction from './components/Intorduction';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App bg-slate-900">
      <Navbar />
      <main>
        <Intorduction />
        <About />
      </main>
    </div>
  );
}

export default App;
