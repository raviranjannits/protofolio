import React from 'react'
import './Education.css'
import cotton from '../../img/cotton.png';
import nits from '../../img/nits.png';
const Education = ({darkmode}) => {
    return (
        <div className='education' id='Education'>
            <div className={`${darkmode ? 'about-line' : ''}`}>
            </div>
            <div className='about-me'>
                My<span className='me'> Education</span>
            </div>
            <div className="education-container">
                <p> <span className='inverted'>"</span> Education is the key that unlocks endless possibilities and fuels the pursuit of knowledge <span className='inverted'>"</span></p>
                <div className="nits">
                    <div className="clg">
                        <img src={nits} alt="nits" />
                    </div>
                    <div className="clginfo">
                        <h3>Bachelor of Technology | Computer Science</h3>
                        <a href='https://nits.ac.in' target='_blank' rel='noreferrer'>National Institute of Technology,Silchar</a >
                        <p>2021-Present |</p>
                    </div>
                </div>
                <div className="nits">
                    <div className="clg">
                        <img src={cotton} alt="A.N. COLLEGE" />
                    </div>
                    <div className="clginfo">
                        <h3>High School | Science</h3>
                        <a href='https://ancpatna.ac.in/' target='_blank' rel='noreferrer'>A.N.COLLEGE, Patna</a >
                        <p>2019-2021 | percentage-86</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
