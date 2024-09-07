import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-scroll';
import './Footer.css';

function Footer({ darkmode }) {
    return (

        <footer className="footer">
            <div className={`${darkmode ? 'about-line' : ''}`}>
            </div>

            <div className="footer-container">

                <div className="fleft1">
                    <ul>

                        <li>
                            <a href="https://leetcode.com/u/ravi44">Leetcode</a>

                        </li>
                       
                        <li>
                            <a href="https://github.com/raviranjannits">Github</a>


                        </li>
                        
                    </ul>
                </div>

                <div className="fleft3">


                    <ul>
                        <Link spy={true} to='About' smooth={true} ><li>About</li></Link>
                        <Link spy={true} to='Services' smooth={true} ><li>Skills</li></Link>
                        <Link spy={true} to='Projects' smooth={true} ><li>Projects</li></Link>
                        <Link spy={true} to='Contact' smooth={true} ><li>Contact</li></Link>
                    </ul>
                </div>

                <div className="fright2">
                    <a
                        href="https://www.linkedin.com/in/ravi-nits/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Icon icon="radix-icons:linkedin-logo" />
                    </a>
                   
                </div>

            </div>


            <p className="footer__text">
                © 2024 raviranjan patel. All rights reserved.
            </p>


        </footer>
    );
}

export default Footer;
