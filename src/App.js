import { Route,Routes,useLocation } from 'react-router-dom';
import Home from './Routes/Home/Home';
import Resume from './Routes/Resume/Resume';
import About from './Routes/About/About';
import Contact from './Routes/Contact/Contact';
import Entry from './Routes/Entry/Entry';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  const location = useLocation();
  return (
    <div className='App'>
    {location?.pathname!=='/' && <Navbar />}
    <Routes>
      <Route path="/" element={<Entry />}/>
      <Route path="home" element={<Home />}/>
      <Route path="resume" element={<Resume />}/>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact />}/>
    </Routes>
    {location?.pathname!=='/' && <Footer />}
    </div>
  );
}

export default App;
