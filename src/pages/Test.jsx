import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { HiUserGroup } from 'react-icons/hi'
import qrCodeSvg from '../assets/qr-code.svg';

export default function Test() {
    return (
        <>
            <Navbar />
            <div className="container-fluid" style={{ backgroundColor: '#F5F6F8', height: '600px', border: '1px solid red' }}>
                <div className="container text-center  bg-white mt-5" style={{ borderRadius: '15px' }}>
                    <div className="row align-items-start">
                        <h1 className='mt-3'>Proof of Payment</h1>
                        <div className="col d-flex justify-content-center">
                            <div className="p-3 mt-4 bg-black text-white" style={{ width: '80%', borderRadius: '20px 20px 0 0' }}>
                                <div className="row align-items-start">
                                    <div className="col">
                                        <img src={require("../assets/Tickitz1.png")} alt="logo-tickitz" />
                                    </div>
                                    <div className="col">
                                        <h5>Admit One</h5>
                                    </div>
                                    <div className="col">
                                        <img src={require("../assets/Tickitz1.png")} alt="logo-tickitz" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container text-center" style={{ backgroundColor: 'white', width: '80%', height: '330px', border: '1px solid #DEDEDE', borderRadius: '0 0 20px 20px' }}>
                        <div class="row justify-content-between mt-5">
                            <div class="col-4">
                                <div class="row">
                                    <div>APA</div>
                                    <div>Kenapa</div>
                                </div>
                            </div>
                            <div class="col-4">
                                <img src={qrCodeSvg} alt="qr" width="250" height="250" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
