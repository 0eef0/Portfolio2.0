import React, {useState, useEffect} from 'react'

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
                <h1>Education</h1>
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
                <h1>Community Service</h1>
                <ul>
                    <li>Frequent tutor at West-MEC</li>
                    <li>Always helps out at West-MEC special events</li>
                    <li>Occasionally volunteers at St. Mary's Food Bank</li>
                    <li>Is a blood donor</li>
                </ul>
            </div>
            <div className='resume double'>
                <h1>Experience/Certs</h1>
            </div>
            <div className='resume double'>
                <h1>Work History</h1>
                <p>Will add to this when there is stuff to add</p>
            </div>
        </div>
    )
}

export default Resume
