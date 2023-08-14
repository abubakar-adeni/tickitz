import React from 'react'
import '../logo.svg'
function Footer() {
    return (
        <>
            <div className="row footer-info">
                <div className="first-div col-md-3 col-sm-12">
                    <img src={require("../assets/Tickitz1.png")} alt="logo-footer" />
                    <p>Stop waiting in line. Buy tickets <br /> conveniently, watch movies quietly</p>
                </div>
                <div className="third-div col-md-3 col-sm-12">
                    <h6>Our Sponsor</h6><ul class="footer-nav">
                        <li class="item"><a class="link" href="/">
                            <img src={require('../assets/ebu.svg')} alt="ebu id cinema" /></a>
                        </li><li class="item">
                            <a class="link" href="/">
                                <img id="cineone" src="../assets/cineone.svg" alt="cineone cinema" />
                            </a>
                        </li>
                        <li class="item">
                            <a class="link" href="/">
                                <img id="hiflix" src="../assets/hiflix.svg" alt="hiflix cinema" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer
