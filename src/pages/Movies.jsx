import React, { useState, useEffect } from "react";
import Navbar from '../components/navbar'
import '../styles/movies.css'
import { HiOutlineCalendar, HiChevronDown, HiOutlineLocationMarker, HiRewind } from "react-icons/hi"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { FormatRupiah } from '@arismun/format-rupiah'
import Footer from "../components/footer"
import Skeleton from "react-loading-skeleton"
import { useMediaQuery } from 'react-responsive'


export default function Movies() {
    const isMobile = useMediaQuery({ maxWidth: 600 })
    const location = useLocation()
    const id = location?.pathname?.split("/")[2]
    const [movies, setMovies] = React.useState([])
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = React.useState(true)


    useEffect(() => {
        window.scroll(0, 0)
        // if (!localStorage.getItem("auth")) {
        //     navigate("/login");
        // }
        axios
            .get(`${process.env.REACT_APP_BASE_URL}/products/${id}`)
            .then((response) => {
                setMovies(response?.data?.data[0])
                setIsLoading(false)
            })
            .catch((err) => {
                console.log("error :", err)
            })
    }, []);


    return (
        <>
            <Navbar />
            {isMobile ? (
                <section class="container-fluid">
                    <div class="d-flex justify-content-center m-5 border border-dark-subtle rounded-2" style={{ height: '50vh' }}>
                        {isLoading ? (<Skeleton height={'20rem'} width={'13rem'} />) : (
                            <img className='movies-picture' src={movies.movies_picture} alt="movie-picture" loading="lazy" />
                        )}
                    </div>
                    <div className="body-mobile text-center">
                        <h1>{movies.title}</h1>
                        <p>{movies.category}</p>
                    </div>
                    <div className="description-mobile text-center">
                        <div className="row">
                            <div className="col">
                                <h6 className="fw">Release Date</h6>
                                <p className='fe'>{movies.release_date || <Skeleton count={1} />}</p>
                            </div>
                            <div className="col">
                                <h6 className="fw">Duration</h6>
                                <p className='fe'>{movies.duration || <Skeleton count={1} />}</p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <h6 className="fw">Direction</h6>
                                <p className='fe'>{movies.director || <Skeleton count={1} />}</p>
                            </div>
                            <div className="col fw">
                                <h6 className="fw">Cast</h6>
                                <p className='fe'>{movies.cast || <Skeleton count={1} />}</p>
                            </div>
                        </div>
                        <hr />
                        <div class="d-flex flex-column text-start mb-3">
                            <h5 className='fw-bold mb-3'>Synopsis</h5>
                            <p className='synopsis'>
                                {movies.description}
                            </p>
                        </div>
                    </div>
                    <div className="showtimes row" style={{ backgroundColor: '#F5F6F8', height: '850px' }}>
                        <div class="container-mobile">
                            <div class="row">
                                <h5 className="text-center mt-4">Showtimes and Tickets</h5>
                            </div>
                            <div className="input d-flex justify-content-center mt-2">
                                <input type="date" className='form-control-sm' style={{ backgroundColor: '#F5F6F8', border: '1px solid #6E777F', borderRadius: '4px' }} />
                                <div className="dropdown ms-3">
                                    <button className="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                                    >
                                        <HiOutlineLocationMarker className='me-2' /> Location
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Jakarta</a></li>
                                        <li><a className="dropdown-item" href="#">Bandung</a></li>
                                        <li><a className="dropdown-item" href="#">Makassar</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex flex-column mt-3">
                                <div className="p-2 mb-2 col-md-4" style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div className="card justify-content-center align-items-center border border-light-subtle" style={{ width: '20rem', height: '20rem', borderRadius: '15px' }}>
                                        <div className="card-body">
                                            <img src={require("../assets/CineOne.png")} />
                                            <h6 className="card-subtitle mb-2 text-muted mt-1">Jl. Rasuna Said No. 12</h6>
                                            <hr />
                                            <div class="row mt-3">
                                                <div class="col-4 mb-4">21:00</div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-4">Price</div>
                                                <div class="col-8 text-end"><FormatRupiah value={movies.price} /></div>
                                            </div>
                                            <Link to={`/seat/${id}`} className="btn book-now mt-5 d-flex justify-content-center">Book now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 mb-2 col-md-" style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div className="card justify-content-center align-items-center border border-light-subtle" style={{ width: '20rem', height: '20rem', borderRadius: '15px' }}>
                                        <div className="card-body">
                                            <img src={require("../assets/CineOne.png")} />
                                            <h6 className="card-subtitle mb-2 text-muted mt-1">Jl. Sudirman No. 1</h6>
                                            <hr />
                                            <div class="row mt-3">
                                                <div class="col-4 mb-4">21:00</div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-4">Price</div>
                                                <div class="col-8 text-end"><FormatRupiah value={movies.price} /></div>
                                            </div>
                                            <Link to={`/seat/${id}`} className="btn book-now mt-5 d-flex justify-content-center">Book now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <section className="container-fluid text-center" style={{ height: '1100px'}}>
                    <div className="row justify-content-start justify-content-md-center">
                        <div className="col-12 col-md-4 movier" >
                            <div className="movie-image border border-dark-subtle" style={{ width: '40vh', height: '55vh' }}>
                                {isLoading ? (<Skeleton height={'50vh'} />) : (
                                    <img className='movies-buy' src={movies.movies_picture} alt="movie-picture" loading="lazy" />
                                )}
                            </div>
                        </div>
                        <div className="col col-sm-12typo" style={{ width: '130vh', height: '60vh' }}>
                            <div className="description-movie mt-5">
                                {isLoading ? (<Skeleton count={1} height={40} style={{ marginBottom: '10px' }} />) : (
                                    <h1 className='title-movie'>{movies.title}</h1>)}
                                {isLoading ? (<Skeleton count={1} />) : (
                                    <p className='genre-movie'>{movies.category || <Skeleton count={1} />}</p>)}
                                <div className="date-release">
                                    <div className="row row-cols-4 row-movie">
                                        <div className="col col-6 text-start fw">Release Date
                                            <p className='text-start fe'>{movies.release_date || <Skeleton count={1} />}</p>
                                        </div>
                                        <div className="col col-6 text-start fw">Duration
                                            <p className='text-start fe'>{movies.duration || <Skeleton count={1} />}</p>
                                        </div>
                                        <div className="col col-6 text-start fw">Directed by
                                            <p className='text-start fe'>{movies.director || <Skeleton count={1} />}</p>
                                        </div>
                                        <div className="col col-6 text-start fw">Cast
                                            <p className='text-start fe'>{movies.cast || <Skeleton count={1} />}</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className='long-hr' />
                                <div className="sinopsis-release">
                                    <h6 className='fw-bold'>Synopsis</h6>
                                </div>
                                {isLoading ? (<Skeleton count={1} width={'100%'} />) : (
                                    <p className='synopsis'>
                                        {movies.description}
                                    </p>)}
                            </div>
                        </div>
                    </div>
                    <div className="showtimes row" style={{ backgroundColor: '#F5F6F8', height: '550px' }}>
                        <h4 className='mt-5 text-center fw-bold'>Showtimes and Tickets</h4>
                        <div className="row justify-content-center">
                            <div className="col-2">
                                <div className="form-group d-flex">
                                    <label htmlFor="datePicker" className="me-2"></label>
                                    <input
                                        type="date"
                                        className="form-control-lg"
                                        id="datePicker"
                                        placeholder="Select Date"
                                        style={{ backgroundColor: '#F5F6F8', border: '1px solid #6C757D' }}
                                    />
                                </div>
                            </div>
                            <div className="col-1 ms-5">
                                <div className="dropdown">
                                    <button className="btn btn-outline-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                                    >
                                        <HiOutlineLocationMarker className='me-2' /> Location
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Jakarta</a></li>
                                        <li><a className="dropdown-item" href="#">Bandung</a></li>
                                        <li><a className="dropdown-item" href="#">Makassar</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="container text-center">
                            <div className="row d-lg-flex flex-row justify-content-center align-items-center mt-5">
                                <div className="p-2 mb-2 col-md-4" style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div className="card justify-content-center align-items-center border border-light-subtle" style={{ width: '20rem', height: '20rem', borderRadius: '15px' }}>
                                        <div className="card-body">
                                            <img src={require("../assets/CineOne.png")} />
                                            <h6 className="card-subtitle mb-2 text-muted mt-1">jl. Rasuna Said No. 12</h6>
                                            <hr />
                                            <div class="row mt-3">
                                                <div class="col-4 mb-4">21:00</div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-4">Price</div>
                                                <div class="col-8 text-end"><FormatRupiah value={movies.price} /></div>
                                            </div>
                                            <Link to={`/seat/${id}`} className="btn book-now mt-5">Book now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 mb-2 col-md-4" style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div className="card justify-content-center align-items-center border border-light-subtle" style={{ width: '20rem', height: '20rem', borderRadius: '15px' }}>
                                        <div className="card-body">
                                            <img src={require("../assets/CineOne.png")} />
                                            <h6 className="card-subtitle mb-2 text-muted mt-1">Jl. Sudirman No. 1</h6>
                                            <hr />
                                            <div class="row mt-3">
                                                <div class="col-4 mb-4">21:00</div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-4">Price</div>
                                                <div class="col-8 text-end"><FormatRupiah value={movies.price} /></div>
                                            </div>
                                            <Link to={`/seat/${id}`} className="btn book-now mt-5">Book now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </section>
            )}
             <Footer />
        </>
    )
}
