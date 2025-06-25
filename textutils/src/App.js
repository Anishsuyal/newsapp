import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark mode enabled", "success");
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="textutils" aboutText="About" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About mode={mode}/>} />
            <Route path="/textform" element={<TextForm heading="Enter the text here" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
