import { Navbar, Intro, Services, Projects, About, Education, Contact, Footer, Certifications } from './Components/index';
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <ToastContainer className="toast-conatiner" />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Intro />
      <About darkmode={darkMode} />
      <Services darkmode={darkMode} />
      <Education darkmode={darkMode} />
      <Projects darkmode={darkMode} />
      <Certifications darkmode={darkMode} />
      <Contact darkmode={darkMode} />
      <Footer darkmode={darkMode} />
    </div>
  );
}
export default App;