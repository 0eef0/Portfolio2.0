import React from 'react';
import Me from '../Images/Me.PNG';

const Home = () => {
    return (
        <div className='homeDiv' id='test'>
            <div className='homeSection'>
                <h1>Hello!</h1>
                <p>
                    My name is Ethan Roldan. I am a front-end web developer. I learned to code at the West-MEC Coding program from 2020-2022. Since then I've been working on a multitude of languages, including HTML, CSS, JS, React, and Node.js just to name a few examples.
                </p>
            </div>
            <div className='homeSection'>
                <h1>Random Facts</h1>
                <ul>
                    <li>I have a <span><em>mild</em></span> sweet tooth.</li>
                    <li>I <em>love</em> food a lot more than a normal person.</li>
                    <li>I am a <strong>MASTER</strong> of Mario Kart Wii</li>
                    <li>My favorite video game genre is RPGs</li>
                    <li>My favorite anime at the moment is Seven Deadly Sins</li>
                </ul>
            </div>
            <div style={{padding: '0', background:'#222'}} className='homeSection'>
                <img src={Me} alt='Headshot' />
            </div>
            <div className='homeSection'>
                <h1>A bit about myself</h1>
                <p>

                </p>
            </div>
        </div>
    )
}

export default Home
