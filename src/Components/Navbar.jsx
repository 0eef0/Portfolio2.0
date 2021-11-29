import React, { useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Navbar = () => {
    const [currPage, setCurrPage] = useState('home');

    const currAway = () => {
        switch (currPage) {
            case 'home':
                homeAway();
                break;
            case 'contact':
                contactAway();
                break;
            case 'project':
                projectAway();
                break;
            case 'resume':
                resumeAway();
                break;
            default:
                break;
        }
    }
    const setPage = (page) => {
        switch(page){
            case 'home':
                currAway();
                setTimeout(() => {
                    homeAppear();
                }, 1000);
                break;
            case 'project':
                currAway();
                setTimeout(() => {
                    projectAppear();
                }, 1000);
                break;
            case 'resume':
                currAway();
                setTimeout(() => {
                    resumeAppear();
                }, 1000);
                break;
            case 'contact':
                currAway();
                setTimeout(() => {
                    contactAppear();
                }, 1000);
                break;
            default:
                break;
        }
        setCurrPage(page);
    }

    const homeAppear = () => {
        document.getElementsByClassName('homeDiv')[0].style.zIndex = 10;
        let elems = document.getElementsByClassName('homeSection');
        for(let i = 0; i < elems.length; i++){
            elems[i].classList.remove('leave');
        }
    }
    const homeAway = () => {
        document.getElementsByClassName('homeDiv')[0].style.zIndex = 0;
        let temp = document.getElementsByClassName('homeSection');
        for(let i = 0; i < temp.length; i++){
            temp[i].classList.add('leave');
        }
    }

    const projectAppear = () => {
        document.getElementsByClassName('projectDiv')[0].style.zIndex = 10;
        let elems = document.getElementsByClassName('project');
        for(let i = 0; i < elems.length; i++){
            elems[i].classList.add('active');
            elems[i].classList.remove('inactive');
        }
    }
    const projectAway = () => {
        document.getElementsByClassName('projectDiv')[0].style.zIndex = 0;
        let temp = document.getElementsByClassName('project');
        for(let i = 0; i < temp.length; i++){
            temp[i].classList.add('inactive');
            temp[i].classList.remove('active');
        }
    }

    const resumeAppear = () => {
        document.getElementsByClassName('resumeDiv')[0].style.zIndex = 10;
        let elems = document.getElementsByClassName('resume');
        for(let i = 0; i < elems.length; i++){
            elems[i].classList.add('active');
            elems[i].classList.remove('inactive');
        }
    }
    const resumeAway = () => {
        document.getElementsByClassName('resumeDiv')[0].style.zIndex = 0;
        let temp = document.getElementsByClassName('resume');
        for(let i = 0; i < temp.length; i++){
            temp[i].classList.add('inactive');
            temp[i].classList.remove('active');
        }
    }

    const contactAppear = () => {
        document.getElementsByClassName('contactDiv')[0].style.zIndex = 10;
        document.getElementById('emailForm').classList.add('active');
        document.getElementById('emailForm').classList.remove('inactive');
    }
    const contactAway = () => {
        document.getElementsByClassName('contactDiv')[0].style.zIndex = 0;
        document.getElementById('emailForm').classList.add('inactive');
        document.getElementById('emailForm').classList.remove('active');
    }

    return (
        <div id='navbar'>
            <div className={(currPage === 'home') ? 'primary' : '' } onClick={() => {setPage('home')}}><h1>Home</h1></div>
            <div className={(currPage === 'project') ? 'primary' : '' } onClick={() => {setPage('project')}}><h1>Projects</h1></div>
            <div className={(currPage === 'resume') ? 'primary' : '' } onClick={() => {setPage('resume')}}><h1>Resume</h1></div>
            <div className={(currPage === 'contact') ? 'primary' : '' } onClick={() => {setPage('contact')}}><h1>Contact</h1></div>

            <section id='mediaLinks'>
                <a href='https://github.com/TheCapn-MEC' target='_blank' rel='noreferrer'><AiFillGithub /></a>
                <a href='https://www.linkedin.com/in/ethan-roldan-29a9b420a/' target='_blank' rel='noreferrer'><AiFillLinkedin /></a>
            </section>
        </div>
    )
}

export default Navbar
