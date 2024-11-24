
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
// import Home from './Home';



function App() {
  return (
    <div className="App">
     <Navbar/>
     <About/>
     <Skills/> 
     <Projects/>
     <Contact/>
     <Footer/> 
     {/* <Home/> */}
     
     
     
     
    </div>
  );
}

export default App;
