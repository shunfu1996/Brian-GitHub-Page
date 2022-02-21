import './App.css';
import { Home } from './components/intro/Home';
import { Project } from './components/Project/Project';
import { Contact } from './components/Contact/Contact';
import { ErrorPage } from './Error'
import {BrowserRouter as Router, Routes, Route/* , Link */ } from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router basename='/Brian-GitHub-Page'>
        {/* <nav>
          <Link to="/home"> Home </Link>
          <Link to="/project"> About </Link>
          <Link to="/contact"> Profile </Link>
        </nav> */}
        <Routes>
          <Route path="/Brian-GitHub-Page" exact element={<Home />} />
          <Route path="/project" element={<Project /> } />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
      {/* <Header />
      <Home />
      <Project />
      <Contact /> */}
      
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
