import { Route,Routes } from 'react-router-dom';
import Home from './Routes/Home/Home';
import Resume from './Routes/Resume/Resume';
import About from './Routes/About/About';
import Contact from './Routes/Contact/Contact';
import Entry from './Routes/Entry/Entry';
import './App.css';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Entry />}/>
      <Route path="home" element={<Home />}/>
      <Route path="resume" element={<Resume />}/>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact />}/>
    </Routes>
  );
}

export default App;
