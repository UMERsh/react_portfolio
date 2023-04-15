import React from 'react'
import '../_frontend.scss'
import Typewriter from 'typewriter-effect';
import cv from 'assets/My_cv.pdf'

export default function Hero() {
    return (
        <div className='container-fluid text-white hero-section '>
            <div className="row ">
                <div className="col ">
                    <div className="container mx-0 mx-sm-3 px-3 px-md-5">
                        <h1>I'm Umer Shafiq</h1>
                        {/* <span>i am</span> */}
                        <Typewriter
                            options={{
                                strings: ['Web Developer', 'Web Design','Creative Design'],
                                autoStart: true,
                                loop: true,
                                delay:100,
                                wrapperClassName: "type-writer",
                                cursorClassName:"type-writer-cursor"
                            }}

                        />
                        <a href={cv} className="btn btn-dark px-5 py-2 fs-5 rounded-0 mt-5   button-styling " download="Umer Shafiq">Download CV</a>

                    </div>
                </div>
            </div>
        </div>
    )
}
