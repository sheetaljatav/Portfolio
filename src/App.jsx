
import styles from './App.module.css';
import { About } from './components/About/About';
import { Certificate } from './components/Certificates/Certificate';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import { Hero } from './components/Hero/Hero';

import { Navbar } from './components/Navbar/Navbar';
import { Project } from './components/Projects/Project';


function App() {
  
  

  return (
    <div className = {styles.App}>
      
      < Navbar />
      <Hero />
      <About />
      < Project /> 
      
      < Experience />
      < Certificate />
      < Contact />
      
      
    
    </div>
  )
}

export default App
