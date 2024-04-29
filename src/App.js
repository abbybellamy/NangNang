import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Dictionary from './pages/Dictionary';
import Learn from './pages/Learn';
import NoPage from './pages/NoPage';
//import Dictonary from './Dictonary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="contents">
        <BrowserRouter>
          <Routes>
            <Route index element = {<Home />} />
            <Route path="/home" element = {<Home />} />
            <Route path="/about" element = {<About />} />\
            <Route path="/dictionary" element = {<Dictionary />} />
            <Route path="/learn" element = {<Learn />} />
            <Route path="/*" element = {<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}


export default App;
