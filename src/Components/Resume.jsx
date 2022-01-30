import React, {useState, useEffect} from 'react';
import MTA from '../Images/mta.png';

const Resume = () => {
    const [left, setLeft] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setLeft(window.scrollY);
        })
    }, [])

    return (
        <div className='resumeDiv' style={{left: `${left * 0.025}%`}}>
            <div className='resume single'>
                <h1><span className="flicker">Education</span></h1>
                <ul>
                    <li>Attends Mountain Ridge High School</li>
                    <ul>
                            <li>3.98 Unweighted GPA</li>
                            <li>4.41 Weighted GPA</li>
                            <li>Graduating in May 2022</li>
                    </ul>
                </ul>
            </div>
            <div className='resume single'>
                <h1>Skills</h1>
                <ul>
                    <li>Excellent Time Management Skills</li>
                    <li>Very Determined Work Ethic</li>
                    <li>Gets things done when they need to be done</li>
                    <li>Adapts to change very quickly</li>
                    <li>Detail Oriented</li>
                    <li>Good communication and leadership skills</li>
                    <li>Can consistently type 50-60 wpm</li>
                    <li>Good technological skills</li>
                </ul>
            </div>
            <div className='resume single'>
                <h1>Awards</h1>
                <ul>
                    <li>FBLA Graphic Design Regionals - Third Place</li>
                    <li>FBLA Graphic Design State - Finalist</li>
                </ul>
            </div>
            <div className='resume single'>
                <h1>Community <span className="flicker">Service</span></h1>
                <ul>
                    <li>Frequent tutor at West-MEC</li>
                    <li>Always helps out at West-MEC special events</li>
                    <li>Occasionally volunteers at St. Mary's Food Bank</li>
                    <li>Is a blood donor</li>
                </ul>
            </div>
            <div className='resume double'>
                <h1><span className="flicker">Experience</span>/Certs</h1>
                <div className='lists'>
                    <div className='experience'>
                        <h3>West-MEC Coding Student</h3>
                        <ul>
                            <li><p>Learning basic web development and problem-solving skills</p></li>
                            <li><p>Learning professional workplace practices</p></li>
                        </ul>
                    </div>
                    <div className='experience'>
                        <h3>FBLA Member/Officer</h3>
                        <ul>
                            <li><p>Acted as Chapter Treasurer in 2020-2021</p></li>
                            <li><p>Acted as Chapter President in 2021-2022</p></li>
                            <li><p>Leads general chapter meetings</p></li>
                        </ul>
                    </div>
                    <div className='certification'>
                        <img src={MTA} alt="MTA Certification" />
                        <h3 style={{textAlign:'center'}}>MTA Certification</h3>
                    </div>
                </div>
            </div>
            <div className='resume double'>
                <h1>Work <span className="flicker">History</span></h1>
                <p>Will add to this when there is stuff to add</p>
            </div>
        </div>
    )
}

export default Resume
