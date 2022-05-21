import Nav from './components/Navbar';
import './App.css';
import './App.scss';
import Lead from './components/Lead'

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Lead />
      </main>
    </div>
  );
}

export default App;
