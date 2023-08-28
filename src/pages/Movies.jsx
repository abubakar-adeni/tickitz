import React, { useState, useEffect } from "react";
import Navbar from '../components/navbar'
import '../styles/movies.css'
import { HiOutlineLocationMarker } from "react-icons/hi"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { useLocation } from "react-router-dom";

export default function Movies() {
    const location = useLocation()
    const id = location?.pathname?.split("/")[2]
    const [movies, setMovies] = React.useState([])
    const navigate = useNavigate()


    useEffect(() => {
        window.scroll(0, 0)
        // if (!localStorage.getItem("auth")) {
        //     navigate("/login");
        // }
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

            <section class="container-fluid text-center" style={{ height: '500px' }}>
                <div class="row justify-content-start">
                    <div class="col-4 movier" >
                        <div className="movie-image border border-dark-subtle" style={{ width: '40vh', height: '55vh' }}>
                            <img className='movies-buy' src={movies.movies_picture} alt="" />
                        </div>
                    </div>
                    <div class="col-8 typo" style={{ width: '130vh', height: '60vh' }}>
                        <div className="description-movie">
                            <h1 className='title-movie'>{movies.title}</h1>
                            <p className='genre-movie'>{movies.category}</p>
                            <div className="date-release">
                                <div class="row row-cols-4 row-movie">
                                    <div class="col col-6 text-start fw">Release Date
                                        <p className='text-start fe'>{movies.release_date}</p>
                                    </div>
                                    <div class="col col-6 text-start fw">Duration
                                        <p className='text-start fe'>{movies.duration}</p>
                                    </div>
                                    <div class="col col-6 text-start fw">Directed by
                                        <p className='text-start fe'>{movies.director}</p>
                                    </div>
                                    <div class="col col-6 text-start fw">Cast
                                        <p className='text-start fe'>{movies.cast}</p>
                                    </div>
                                </div>
                            </div>
                            <hr className='long-hr' />
                            <div className="sinopsis-release">
                                <h6 className='fw-bold'>Synopsis</h6>
                            </div>
                            <p className='synopsis'>
                            {movies.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="showtimes row" style={{ backgroundColor: '#F5F6F8', height: '500px' }}>
                    <h4 className='mt-5 text-center fw-bold'>Showtimes and Tickets</h4>
                    <div class="row justify-content-evenly">
                        <div class="col-4">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <HiOutlineLocationMarker className='me-2' /> Location
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Jakarta</a></li>
                                    <li><a class="dropdown-item" href="#">Bandung</a></li>
                                    <li><a class="dropdown-item" href="#">Makassar</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <HiOutlineLocationMarker className='me-2' /> Location
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Jakarta</a></li>
                                    <li><a class="dropdown-item" href="#">Bandung</a></li>
                                    <li><a class="dropdown-item" href="#">Makassar</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="container text-center">
                        <div class="row d-lg-flex flex-row justify-content-center align-items-center">
                            <div class="p-2 mb-2 col-md-4 border border-secondary-subtle" style={{}}>
                                <img src={require("../assets/Tickitz1.png")}></img>
                            </div>
                            <div class="p-2 mb-2 col-md-4 border border-secondary-subtle" style={{}}>
                                <img src={require("../assets/Tickitz1.png")}></img>

                            </div>


                            <div class="card" style={{ width: "18rem" }}>
                                <img src={require("../assets/Tickitz1.png")} class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}
