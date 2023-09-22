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
import Skeleton from "react-loading-skeleton";


export default function Movies() {
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

            <section className="container-fluid text-center" style={{ height: '500px' }}>
                <div className="row justify-content-start justify-content-md-center">
                    <div className="col-12 col-md-4 movier" >
                        <div className="movie-image border border-dark-subtle" style={{ width: '40vh', height: '55vh' }}>
                            {isLoading ? (<Skeleton height={'50vh'}/>) : (
                                <img className='movies-buy' src={movies.movies_picture} alt="movie-picture" loading="lazy"/>
                            )}
                        </div>
                    </div>
                    <div className="col col-sm-12typo" style={{ width: '130vh', height: '60vh' }}>
                        <div className="description-movie mt-5">
                            {isLoading ? ( <Skeleton count={1} height={40} style={{ marginBottom: '10px'}}/> ) : ( 
                            <h1 className='title-movie'>{movies.title}</h1> )}
                            {isLoading ? ( <Skeleton count={1} /> ) : (
                            <p className='genre-movie'>{movies.category || <Skeleton count={1} />}</p> )}
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
                            { isLoading ? ( <Skeleton count={1} width={'100%'}/> ) : (
                            <p className='synopsis'>
                                {movies.description }
                            </p>)}
                        </div>
                    </div>
                </div>
                <div className="showtimes row" style={{ backgroundColor: '#F5F6F8', height: '550px' }}>
                    <h4 className='mt-5 text-center fw-bold'>Showtimes and Tickets</h4>
                    <di v className="row justify-content-center">
                        <div className="col-1 me-5">
                            <div className="dropdown ">
                                <button className="btn btn-outline-secondary btn-lg  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <HiOutlineCalendar className='me-2' /> dd/mm/yy</button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Jakarta</a></li>
                                    <li><a className="dropdown-item" href="#">Bandung</a></li>
                                    <li><a className="dropdown-item" href="#">Makassar</a></li>
                                </ul>
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
                    </di>
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
                <Footer />
            </section>
        </>
    )
}
