import React from 'react';
import { Link } from 'react-router-dom'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Navbar = () => {
    const currPage = window.location.pathname;
    const changePage = (page) => {
        document.getElementsByClassName('primary')[0].classList.add('flicker');
        switch(currPage){
            case '/':
                let home = document.getElementsByClassName('homeSection');
                for(let i = 0; i < home.length; i++){
                    home[i].classList.add('inactive');
                }
                break;
            case '/projects':
                let projects = document.getElementsByClassName('project');
                for(let i = 0; i < projects.length; i++){
                    projects[i].classList.add('inactive');
                }
                break;
            case '/resume':
                let resumes = document.getElementsByClassName('resume');
                for(let i = 0; i < resumes.length; i++){
                    resumes[i].classList.add('inactive');
                }
                break;
            case '/contact':
                let contact = document.getElementById('emailForm');
                contact.classList.add('inactive');
                break;
            default:
                break;
        }
        setTimeout(() => {
            window.location.pathname = page;
        }, 1000);
    }

    return (
        <div id='navbar'>
            <div className={(currPage === '/') ? 'primary' : '' }><h1><Link to='/'>Home</Link></h1></div>
            <div className={(currPage === '/projects') ? 'primary' : '' }><h1><Link to='/projects'>Projects</Link></h1></div>
            <div className={(currPage === '/resume') ? 'primary' : '' }><h1><Link to='/resume'>Resume</Link></h1></div>
            <div className={(currPage === '/contact') ? 'primary' : '' }><h1><Link to='/contact'>Contact</Link></h1></div>

            <section id='mediaLinks'>
                <a href='https://github.com/TheCapn-MEC' target='_blank' rel='noreferrer'><AiFillGithub /></a>
                <a href='https://www.linkedin.com/in/ethan-roldan-29a9b420a/' target='_blank' rel='noreferrer'><AiFillLinkedin /></a>
            </section>
        </div>
    )
}

export default Navbar
