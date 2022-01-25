import React from 'react';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Projects from './Components/Projects';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/resume' element={<Resume />} />
                    <Route path='/projects' element={<Projects />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
