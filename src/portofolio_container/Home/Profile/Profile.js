import React from 'react';
import Typical from 'react-typical';
import "./Profile.css";

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://www.facebook.com/edyalex.craciun.7'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href="https://www.instagram.com/1eduaard/">
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='https://www.linkedin.com/in/eduard-craciun-b61a42252/'>
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                            <a href='https://twitter.com/Eduaard_12'>
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>
                    </div>

                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Eduard</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Student 😮",
                                        1000,
                                        "Ethusiastic Dev 💻",
                                        1000,
                                        "Future Full-Stack Developer 😏",
                                        1000,
                                        "React Developer 😃",
                                        1000,

                                    ]}
                                />
                            </h1>
                        </span>
                        <span className='profile-role-tagline'>
                            A student who wants to have a career in Web/Mobile Development as a Full Stack Developer.
                        </span>
                    </div>
                    <div className='profile-options'>
                        <a href="mailto:eduardcraciun21@gmail.com?body=My custom mail body"></a>
                        <button className='btn primary-btn'>
                            Hire Me{" "}
                        </button>
                        <a href='Eduard_Craciun_CV.pdf' download='Eduard_Craciun_CV.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    )
}
