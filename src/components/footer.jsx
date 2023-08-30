import React from 'react'
import ebu from '../assets/ebu.png'
import hiflix from '../assets/hiflix.png'
import cineone from '../assets/CineOne.png'
import yt from '../assets/yt.png'
import twitter from '../assets/twitter.png'
import fb from '../assets/fb.png'
import ig from '../assets/ig.png'
import styles from '../styles/Footer.css'

function Footer() {
    return (
        <>
            <div>
                {" "}
                <footer>
                    <div className="container mt-2">
                        <div className="row mb-5">
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-md-0">
                                <img src={require('../assets/Tickitz1.png')} className="logo" alt="Logo Tickitz" />
                                <p>
                                    Stop waiting in line. Buy tickets
                                    <br />
                                    conveniently, watch movies quietly.
                                </p>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12 mb-4 mb-md-0 pl-0">
                                <p className="explore nav-link">Explore</p>
                                <nav className="nav explore flex-row flex-md-column mt-1 mt-md-0">
                                    <a className="nav-link mt-md-0 " href="/">
                                        Cinemas
                                    </a>
                                    <a className="nav-link" href="/">
                                        Movies List
                                    </a>
                                    <a className="nav-link" href="/">
                                        My Ticket
                                    </a>
                                    <a className="nav-link" href="/">
                                        Notification
                                    </a>
                                </nav>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-md-0 pl-0">
                                <p className="our-sponsor nav-link">Our Sponsor</p>
                                <nav className="nav sponsor flex-row flex-md-column align-items-center align-items-md-start mt-1 mt-md-0">
                                    <a className="nav-link" href="/">
                                        <img src={ebu} alt="Ebv" />
                                    </a>
                                    <a className="nav-link" href="/">
                                        <img src={cineone} alt="CineOne" />
                                    </a>
                                    <a className="nav-link" href="/">
                                        <img src={hiflix} alt="Hiflix" />
                                    </a>
                                </nav>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12 mb-4 mb-md-0 pl-0">
                                <p className="follow-us nav-link">Follow Us</p>
                                <nav className="nav follow-us flex-row flex-md-column mt-1 mt-md-0">
                                    <a className="nav-link d-flex align-items-center" href="/">
                                        <img src={fb} className="facebook" alt="ok" />
                                        <span>Tickitz Cinema id</span>
                                    </a>
                                    <a className="nav-link d-flex align-items-center" href="/">
                                        <img src={ig} className="instagram" alt="ok" />
                                        <span>tickitz.id</span>
                                    </a>
                                    <a className="nav-link d-flex align-items-center" href="/">
                                        <img src={twitter} className="twitter" alt="ok" />
                                        <span>tickitz.id</span>
                                    </a>
                                    <a className="nav-link d-flex align-items-center" href="/">
                                        <img src={yt} className="youtube" alt="ok" />
                                        <span>Tickitz Cinema id</span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                        <div className="row pb-5">
                            <div className="col d-flex align-items-center justify-content-start justify-content-md-center">
                                <p className="copyright">
                                    © 2021 Tickitz. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer
