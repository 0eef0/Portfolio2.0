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
            <div className='resume single'>Education</div>
            <div className='resume single'>Skills</div>
            <div className='resume single'>Awards</div>
            <div className='resume single'>Community Service</div>
            <div className='resume double'>Experience/Certs</div>
            <div className='resume double'>Work History</div>
        </div>
    )
}

export default Resume
