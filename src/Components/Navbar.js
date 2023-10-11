import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar({ ActiveTab }) {
    const navigate = useNavigate()
    return (
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a onClick={() => navigate("/")} className="navbar-brand p-0">
                <h1 className="m-0">FreenzaTech</h1>
                {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav mx-auto py-0">
                    <a style={{ cursor: "pointer" }} className={`nav-item nav-link ${ActiveTab === 1 ? 'active' : ''}`} onClick={() => navigate("/")} >Home</a>
                    <a style={{ cursor: "pointer" }} className={`nav-item nav-link ${ActiveTab === 2 ? 'active' : ''}`} onClick={() => navigate("/About")}>About</a>
                    <a style={{ cursor: "pointer" }} className={`nav-item nav-link ${ActiveTab === 3 ? 'active' : ''}`} onClick={() => navigate("/Service")}>Service</a>
                    <a style={{ cursor: "pointer" }} className={`nav-item nav-link ${ActiveTab === 4 ? 'active' : ''}`} onClick={() => navigate("/Project")}>Project</a>
                    {/* <!-- <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div className="dropdown-menu m-0">
                    <a href="team.html" className="dropdown-item">Our Team</a>
                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                    <a href="404.html" className="dropdown-item">404 Page</a>
                </div>
            </div> --> */}
                    <a className={`nav-item nav-link ${ActiveTab === 5 ? 'active' : ''}`} style={{ cursor: "pointer" }} onClick={() => navigate("/Contact")}>Contact</a>
                </div>
                <a style={{ cursor: "pointer" }} onClick={() => navigate("/ApplyForCourse")}
                    className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block"
                >Apply For Course</a>
            </div>
        </nav>
    )
}

export default Navbar
