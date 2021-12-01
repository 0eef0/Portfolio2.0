import React, {useState, useEffect} from 'react';
import Minesweeper from '../Images/Minesweeper.PNG';
import Portfolio1 from '../Images/Portfolio1.0.PNG';
import charDex from '../Images/charmanderDex.PNG';
import hummus from "../Images/baby'sFirst.PNG";
import mkwiiapi from '../Images/mkwiiapi.PNG';

const Projects = () => {
    const [left, setLeft] = useState(0);


    useEffect(() => {
    window.addEventListener('scroll', () => {
        if(window.innerWidth >= 720){
            setLeft(window.scrollY);
        }
    })
    }, [])

    return (
        <div className='projectDiv' style={{left: `${left * 0.01 + 5}%`}}>
            {/* Coming soon div */}
            <div className='project' style={{
                display:'flex',
                alignItems:'center',
                order: 2
            }}>
                <h1 style={{
                    color:'white',
                    fontSize:'calc(2vw + 2vh)',
                    textAlign:'center',
                }}>More to come soon!</h1>
            </div>

            {/* Minesweeper */}
            <div className='project newest'>
                <img src={Minesweeper} alt="minesweeper" />
                <div className='info'>
                    <h1>Minesweeper</h1>
                    <p>I found a minesweeper api on rapidAPI. So I decided to take a crack at faithfully recreating minesweeper as best I can, with a formerly functional global high score system on top.</p>
                    <a href="https://github.com/TheCapn-MEC/Minesweeper" target="_blank" rel="noreferrer"><button style={{left:'10%'}}><p>See the Repo</p></button></a>
                    <a href="https://roldanreactminesweeper.netlify.app/" target="_blank" rel="noreferrer"><button style={{right:'10%'}}><p>Visit Site</p></button></a>
                </div>
            </div>

            {/* original portfolio */}
            <div className='project'>
                <img src={Portfolio1} alt="Portfolio" />
                <div className='info'>
                    <h1>Portfolio 1.0</h1>
                    <p>Every portfolio has to start somewhere. A "game" is not where I thought my first portfolio would go. This project really tested my JS, jQuery, and HTML implementation.</p>
                    <a href="https://github.com/TheCapn-MEC/PortfolioPage" target="_blank" rel="noreferrer"><button style={{left:'10%'}}><p>See the Repo</p></button></a>
                    <a href="https://thecapn-mec.github.io/PortfolioPage/" target="_blank" rel="noreferrer"><button style={{right:'10%'}}><p>Visit Site</p></button></a>
                </div>
            </div>

            {/* Baby's first website */}
            <div className='project'>
                <img src={hummus} alt="Hummus Recipe" />
                <div className="info">
                    <h1>Hummus Recipe</h1>
                    <p>This one is NOT here because I'm proud of it or anything. This is here to show my growth from this point to every other project on my portfolio (yes, this was my first website).</p>
                    <a href="https://github.com/TheCapn-MEC/Hummus-Recipe" target="_blank" rel="noreferrer"><button style={{left:'10%'}}><p>See the Repo</p></button></a>
                    <a href="https://thecapn-mec.github.io/Hummus-Recipe/" target="_blank" rel="noreferrer"><button style={{right:'10%'}}><p>Visit Site</p></button></a>
                </div>
            </div>

            {/* Charmander Pokedex */}
            <div className='project reordered'>
                <img src={charDex} alt="Charmander Data" />
                <div className="info">
                    <h1>Charmander Pokedex</h1>
                    <p>Want to know more about the Charmander evolution line? This basic Vue project will fulfill all of your Charmander knowledge desires.</p>
                    <a href="https://github.com/Giles-Aiden/pokemon-json" target="_blank" rel="noreferrer"><button style={{left:'10%'}}><p>See the Repo</p></button></a>
                    <a href="https://giles-aiden.github.io/pokemon-json/#/" target="_blank" rel="noreferrer"><button style={{right:'10%'}}><p>Visit Site</p></button></a>
                </div>
            </div>

            {/* Mario Kart Wii API */}
            <div className='project reordered'>
                <img src={mkwiiapi} alt="Mario Kart Wii API Docs" />
                <div className="info">
                    <h1>Mario Kart Wii API Docs</h1>
                    <p>This is the start of a series of side projects based around Mario Kart Wii. This contains time trial records, vehicle stats, and character stats in Mario Kart Wii.</p>
                    <a href="https://github.com/TheCapn-MEC/marioKartWiiAPI" target="_blank" rel="noreferrer"><button style={{left:'10%'}}><p>See the Repo</p></button></a>
                    <a href="https://thecapn-mec.github.io/marioKartWiiAPI/" target="_blank" rel="noreferrer"><button style={{right:'10%'}}><p>Visit Site</p></button></a>
                </div>
            </div>
        </div>
    )
}

export default Projects
