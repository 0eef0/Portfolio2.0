import React, {useState, useEffect} from 'react';
import Minesweeper from '../Images/Minesweeper.PNG';
import Portfolio1 from '../Images/Portfolio1.0.PNG';

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
        <div className='projectDiv' style={{left: `${left * 0.01}%`}}>
            <div className='project'>
                <img src={Minesweeper} alt="minesweeper" />
                <div className='info'>
                    <h1>Minesweeper</h1>
                    <p>I found a minesweeper api on rapidAPI. So I decided to take a crack at faithfully recreating minesweeper as best I can, with a formerly functional global high score system on top.</p>
                    <button style={{left:'10%'}}><p>See the Repo</p></button>
                    <button style={{right:'10%'}}><p>Visit Site</p></button>
                </div>
            </div>
            <div className='project'>
                <img src={Portfolio1} alt="Portfolio" />
                <div className='info'>
                    <h1>Portfolio 1.0</h1>
                    <p>Every portfolio has to start somewhere. A "game" is not where I thought my first portfolio would go. This project really tested my JS, jQuery, and HTML implementation.</p>
                    <button style={{left:'10%'}}><p>See the Repo</p></button>
                    <button style={{right:'10%'}}><p>Visit Site</p></button>
                </div>
            </div>
            <div className='project' style={{
                display:'flex',
                alignItems:'center'
            }}>
                <h1 style={{
                    color:'white',
                    fontSize:'calc(2vw + 2vh)',
                    textAlign:'center',
                }}>More to come soon!</h1>
            </div>
            <div className='project'>
                1
            </div>
            <div className='project'>
                2
            </div>
            <div className='project'>
                3
            </div>
            <div className='project'>
                4
            </div>
                        <div className='project'>
                1
            </div>
            <div className='project'>
                2
            </div>
            <div className='project'>
                3
            </div>
            <div className='project'>
                4
            </div>
                                    <div className='project'>
                1
            </div>
            <div className='project'>
                2
            </div>
            <div className='project'>
                3
            </div>
            <div className='project'>
                4
            </div>
        </div>
    )
}

export default Projects
