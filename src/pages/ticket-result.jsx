import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import qrCodeSvg from '../assets/qr-code.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { FormatRupiah } from '@arismun/format-rupiah'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useMediaQuery } from 'react-responsive'

export default function Ticket() {
    const location = useLocation()
    const isMobile = useMediaQuery({ maxWidth: 600 })
    const id = location?.pathname?.split("/")[2]
    const [movies, setMovies] = React.useState([])
    const navigate = useNavigate()
    const queryParams = new URLSearchParams(location.search);
    const date = queryParams.get('date');
    const count = queryParams.get('count');
    const seats = queryParams.get('seats');
    const price = queryParams.get('price');


    useEffect(() => {
        window.scroll(0, 0)
        if (!localStorage.getItem("auth")) {
            navigate("/login");
        }
        axios
            .get(`${process.env.REACT_APP_BASE_URL}/products/${id}`)
            .then((response) => setMovies(response?.data?.data[0]))
            .catch((err) => {
                console.log("error :", err)
            })
    }, []);

    return (
        <>
            <Navbar />
            {isMobile ? (
                <section className='container text-center' style={{ height: '700px' }}>
                    <h1 className='mt-5'>Proof of Payment</h1>
                    <div className="col">
                    <img src={qrCodeSvg} alt="qr" width="250" height="250" />
                    </div>
                    <hr className='dotted-hr'/>
                    <div className="body-mobile text-center">
                        <h1>{movies.title}</h1>
                        <p>{movies.category}</p>
                    </div>
                    <div className="description-mobile text-center">
                        <div className="row">
                            <div className="col">
                                <h6 className="fw">Date</h6>
                                <p className='fe'>{date || <Skeleton count={1} />}</p>
                            </div>
                            <div className="col">
                                <h6 className="fw">Time</h6>
                                <p className='fe'>18:00 pm</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <h6 className="fw">Count</h6>
                                <p className='fe'>{count || <Skeleton count={1} />}</p>
                            </div>
                            <div className="col fw">
                                <h6 className="fw">Seat</h6>
                                <p className='fe'>{seats || <Skeleton count={1} />}</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-around border border-grey-subtle rounded m-3">
                            <h5 className='p-2 mt-2 align-self-center fw'>Total</h5>
                            <h5 className='p-2 mt-2 align-self-center fw'><FormatRupiah value={price || <Skeleton count={1} />} /></h5>
                        </div>
                    </div>
                </section>
            ) : (
                <div className="container-fluid" style={{ backgroundColor: '#F5F6F8', height: '700px' }}>
                    <div className="container text-center bg-white" style={{ borderRadius: '15px', height: '580px' }}>
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
                                <div class="col ms-3">
                                    <div className="row mb-3">
                                        <div className="col-6 text-start fw">Movie
                                            <p className='text-start fe'>{movies?.title || <Skeleton count={1} />}</p>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col text-start fw">Date
                                            <p className='text-start fe'>{date || <Skeleton count={1} />}</p>
                                        </div>
                                        <div className="col-2 text-start fw">Time
                                            <p className='text-start fe'>18:00</p>
                                        </div>
                                        <div className="col-8 text-start fw">Category
                                            <p className='text-start fe'>{movies?.category || <Skeleton count={1} />}</p>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col text-start fw">Count
                                            <p className='text-start fe'>{count || <Skeleton count={1} />}</p>
                                        </div>
                                        <div className="col-2 text-start fw">Price
                                            <p className='text-start fe'><FormatRupiah value={price || <Skeleton count={1} />} /></p>
                                        </div>
                                        <div className="col-8 text-start fw">Seats
                                            <p className='text-start fe'>{seats || <Skeleton count={1} />}</p>
                                        </div>
                                    </div>
                                    {/* <div className="row ">
                                    <div className="col text-start fw">Count
                                        <p className=' fe'>APA</p>
                                    </div>
                                    <div className="col text-start fw">Seats
                                        <p className='text-start fe'></p>
                                    </div>
                                    <div className="col text-start fw">Price
                                        <p className='text-start fe'></p>
                                    </div>
                                </div> */}
                                </div>
                                <div className="col-4 d-flex align-items-center justify-content-center">
                                    <hr className="vertical-line" style={{ height: '100%', border: '3px dotted black', margin: '0' }} />
                                    <img src={qrCodeSvg} alt="qr" width="250" height="250" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    )
}
