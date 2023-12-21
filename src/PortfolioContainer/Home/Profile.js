import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
export default function () {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                        <a href='#'>
                            <i class="fa fa-facebook-square"></i>
                        </a>
                        <a href='#'>
                            <i class="fa fa-google-plus-square"></i>
                        </a>
                        <a href='#'> 
                            <i class="fa fa-instagram"></i>
                        </a>
                        <a href='#'>
                            <i class="fa fa-youtube-square"></i>
                        </a>
                        <a href='#'>
                            <i class="fa fa-twitter"></i>
                        </a>
                    </div>

                </div>

                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'm <span className='highlighted-text'> Name</span>
                    </span>
                </div>

                <div className='profile-details-role'> 
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Luis Dev",
                                1000,
                                "Front-end Dev",
                                1000,
                                "Skils",
                                1000,
                                "React",
                                1000,
                                "PHP",
                                1000
                            ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                            my description ...
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                            {""}
                            Hire me{""}
                    </button> 
                    <a href='#' download=''>
                        <button className='btn highlighted-btn'>
                            Get Resume
                        </button>
                    </a> 
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
            </div>
        </div>
    </div>
  )
}
