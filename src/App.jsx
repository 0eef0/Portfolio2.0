import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Projects from './Components/Projects';

const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Contact />
            <Resume />
            <Projects />
        </div>
    )
}

export default App
