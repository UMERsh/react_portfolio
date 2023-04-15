import React, { useState } from 'react'
import { Link as Linked, animateScroll as scroll } from 'react-scroll'
import './_navbar.scss'


export default function Navbar() {
    const [color, setColor] = useState(false)


    const changeColor = () => {
        if (window.scrollY >= 220) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    return (
        <>
            <nav class={`navbar navbar-expand-lg navbar-dark  ${color ? "bg-dark position-fixed  py-3" : "bg-transparent"}`}  >
                <div class="container">
                    <Linked class={`navbar-brand ${color ? "text-info" : ""}`} onClick={() => scroll.scrollToTop()}>Umer</Linked>
                    <a class="btn navbar-toggler border-secondary  " type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation" href="#offcanvasExample">
                        <span class="navbar-toggler-icon"></span>
                    </a>
                    <div class="collapse navbar-collapse offcanvas offcanvas-top " id="navbarSupportedContent">
                        <div class="offcanvas-header w-100 d-flex d-lg-none">
                            <Linked class={`navbar-brand ${color ? "text-info" : ""}`} onClick={() => scroll.scrollToTop()} data-bs-toggle="offcanvas">Usman</Linked>
                            <button type="button" class="bg-white btn-close ms-auto" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <ul class="navbar-nav w-100 d-flex justify-content-end">
                            <li class="nav-item text-center ms-4 mb-2 mb-lg-0 ">
                                <Linked class={`nav-link active ${color ? "text-info" : ""}`}  aria-current="page" onClick={() => scroll.scrollToTop()} data-bs-toggle="offcanvas">HOME</Linked>
                            </li>
                            <li class="nav-item text-center ms-4 mb-2 mb-lg-0">
                                <Linked class={`nav-link ${color ? "text-info" : ""}`} to="about-section" data-bs-toggle="offcanvas">ABOUT</Linked>
                            </li>
                            <li class="nav-item text-center ms-4 mb-2 mb-lg-0">
                                <Linked class={`nav-link ${color ? "text-info" : ""}`}  to="skills-section" data-bs-toggle="offcanvas">SKILLS</Linked>
                            </li>
                            <li class="nav-item text-center ms-4 mb-2 mb-lg-0">
                                <Linked class={`nav-link ${color ? "text-info" : ""}`} to="services-section"  data-bs-toggle="offcanvas">SERVICES</Linked>
                            </li>
                            <li class="nav-item text-center ms-4 mb-2 mb-lg-0">
                                <Linked class={`nav-link ${color ? "text-info" : ""}`} to="portfolio-section"  data-bs-toggle="offcanvas">PORTFOLIO</Linked>
                            </li>
                            <li class="nav-item text-center ms-4 mb-2 mb-lg-0">
                                <Linked class={`nav-link ${color ? "text-info" : ""}`} to="contact-section"  data-bs-toggle="offcanvas">CONTACT</Linked>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



        </>
    )
}
