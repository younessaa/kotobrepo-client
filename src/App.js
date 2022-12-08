import './App.css';
import { Navigate, BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Libraries from './pages/Libraries';
import Books from './pages/Books';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Results from './pages/Results';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/libraries" element={<Libraries />}/>
        <Route path="/books" element={<Books />}/>
        <Route path="/contactus" element={<ContactUs />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/results" element={<Results />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
