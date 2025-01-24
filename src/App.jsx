import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/HomePage';
import About from './Component/AboutPage';
import Learn from './Component/LearnPage';
import Portofolio from './Component/PortofolioPage';
import Contact from './Component/ContactPage';
import Blog from './Component/BlogPage';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      
    </Router>
  );
}

export default App;
