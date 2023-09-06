import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/card.css'
import axios from 'axios'

export default function UpcomingMovies() {
    const [upcomingMovies, SetListPopular] = React.useState([])

    React.useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_BASE_URL}/products`)
            .then((response) => {
                SetListPopular(response?.data?.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <>
            <section className='container-fluid position-relative container-parents' style={{ backgroundColor: 'white', height: '650px' }}>
                <h4 className='fw-bold upcoming position-absolute top-0 start-0 m-4'>Upcoming Movies</h4>
                <div>
                    <Link to={"/view-all"} className='font-bold view-all text-decoration-none  m-5 position-absolute top-0 end-0 '>
                        view all
                    </Link>
                </div>



                {upcomingMovies.slice(0, 5).map((film) => (
                    <div className="movie-container">
                        <div className="gambar">
                            <img className='apa-aja' src={film.movies_picture} />
                        </div>
                        <div className='body-card'>
                            <h5 className='card-text'>{film.title}</h5>
                            <p className='genre'>{film.category}</p>
                            <Link to={`/movies/${film.id}`} className="btn btn-outline-primary details">Details</Link>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}
