import React from 'react'
import './Intro.css';
import Lottie from '../../Lotties/lottie'
import Scrolldown from '../../Lotties/ScrollDown'
import { Icon } from '@iconify/react';
const Intro = () => {
    const scrollDown = () => {
        const scrollStep = window.innerHeight / 60;
        let scrollPosition = 0;

        const scrollToPosition = () => {
            if (scrollPosition < window.innerHeight) {
                scrollPosition += scrollStep;
                window.scrollTo(0, scrollPosition);
                window.requestAnimationFrame(scrollToPosition);
            }
        };

        window.requestAnimationFrame(scrollToPosition);
    };


    return (
        <>
            <div className="intro" id='Home'>
                <div className="ileft">
                    <div className='intro-raviranjan'>Hey! I am Raviranjan </div>
                    <div className="mvng-txt">
                        <p>I'm into</p>

                            <ul className='dynamic-txts'>
                                <li><span>Full Stack Development</span></li>
                                <li><span>Competitive Programming</span></li>
                                <li><span>Tech Communities</span></li>
                            </ul>
                    </div>
                    <span>
                        Coder by day, software engineer by night. Working with web development and competitive programming to bring out the best in technology. 
                        <p className='mbl_hide'>I am deep diving more into the field of software development and trying to be better with passing time</p>
                    </span>
                </div>
                <div className="iright">
                    <a
                        href="https://www.linkedin.com/in/ravi-nits/"
                        target="_blank"
                        rel="noreferrer"
                    >

                        <Icon className='icon-social' icon="radix-icons:linkedin-logo" />
                        <p>
                            Linkedin
                        </p>
                    </a>
                    <a
                        href="https://github.com/raviranjannits"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon className='icon-social' icon="radix-icons:github-logo" />
                        <p>Github</p>
                    </a>

                    <a
                        href="https://leetcode.com/u/ravi44/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon className='icon-social' icon="cib:leetcode" />
                        <p>Leetcode</p>
                    </a>

                </div>
            </div >
            <Lottie />
            <div onClick={scrollDown}>
                <Scrolldown />
            </div>
        </>


    )
}

export default Intro
