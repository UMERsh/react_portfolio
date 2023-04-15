import React from 'react'
import picture1 from 'assets/umer.jpg'

export default function About() {

    return (
        <div className="container rounded my-5  " id='about-section'>
            <div className="row py-5">
                {/* animation */}
                <div className='dots'></div>
                <div className='dots'></div>
                <div className="col-12 col-lg-5 d-flex align-items-center justify-content-center">
                    <img src={picture1} className="rounded-4 w-50" alt="" />
                </div>
                <div className="col-12 col-lg-7 mt-5 mt-lg-0 d-flex flex-column justify-content-center">
                    <h2 className='text-info fw-bold'>ABOUT ME</h2>
                    <div className='my-5 ' >I'm professional Web Developer & Web Designer based in Pakistan working on different projects. I can build awesome Designs with different programming languages. </div>
                    <div className="row">
                        <div className="col-4 col-sm-2 text-info"><b>Name:</b></div>
                        <div className="col"> Umer Shafiq</div>
                    </div>
                    <div className="row">
                        <div className="col-4 col-sm-2 text-info"><b>Data of Birth:</b></div>
                        <div className="col"> June 03,2000</div>
                    </div>
                    <div className="row">
                        <div className="col-4 col-sm-2 text-info"><b>Address:</b></div>
                        <div className="col"> Gulshan e Rehman Phase#2 Burewala Pakistan</div>
                    </div>
                    <div className="row">
                        <div className="col-4 col-sm-2 text-info"><b>Email:</b></div>
                        <div className="col"><a href="mailto:umershafiq513@gmail.com" className='text-white text-decoration-none'>umershafiq513 @gmail.com</a></div>
                    </div>
                    <div className="row">
                        <div className="col-4 col-sm-2 text-info"><b>Phone:</b></div>
                        <div className="col"> <a href='tel:+923176836091' className='text-white text-decoration-none'> +92 3176836091</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
