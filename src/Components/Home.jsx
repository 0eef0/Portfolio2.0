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
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
            <div style={{padding: '0'}} className='homeSection'>
                <img src={Me} alt='Headshot' />
            </div>
            <div className='homeSection'>
                <h1>A bit about myself</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nulla repellat provident maiores a error eveniet quos ipsa sunt cum. Optio autem ad aliquam deleniti voluptate inventore ipsa est alias, ipsam suscipit qui sapiente placeat adipisci excepturi nisi quibusdam dolor.
                </p>
            </div>
        </div>
    )
}

export default Home
