import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

const App = () => {
    const [currPage, setCurrPage] = useState('home');

    return (
        <div>
            <Navbar />
            <Home />
        </div>
    )
}

export default App
