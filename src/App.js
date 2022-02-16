import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './components/intro/Home';
import { Project } from './components/Project/Project';
import { Contact } from './components/Contact/Contact';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Project />
      <Contact />
      
      <header className="App-header">
        <h1>Hello My Name is Brian</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
