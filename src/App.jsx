import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Projects from './Components/Projects';

const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Contact />
            <Projects />
        </div>
    )
}

export default App
