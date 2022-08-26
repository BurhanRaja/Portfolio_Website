import Intorduction from './components/Intorduction';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App bg-slate-800">
      <Navbar />
      <main>
        <Intorduction />
      </main>
    </div>
  );
}

export default App;
