import Home from "./components/Home";
import { Routes, Route, Router } from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Login from "./components/Login";
import Services from "./components/Services";




function App() {
  return (
       
      <div>
    
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route exact path="/about" element={ <About/> } />
        <Route exact path="/contact" element={ <Contact/> } />
        <Route exact path="/gallery" element={ <Gallery/> } />
        <Route exact path="/login" element={ <Login/> } />
        <Route exact path="/services" element={ <Services/> } />
      </Routes>
    

      </div>
    
  );
}

export default App;
