import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/card.css'
import { useState } from 'react'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function NowShowing() {
    const [nowShowing, setNowShowing] = React.useState([])
    // const films = [
    //     {
    //         "id": 1,
    //         "title": "Avengers: Endgame",
    //         "genre": "Action, Adventure, Sci-Fi",
    //         "image": "/avenger.jpg"
    //     },
    //     {
    //         "id": 2,
    //         "title": "Inception",
    //         "genre": "Action, Adventure, Sci-Fi",
    //         "image": "/inception.jpg"
    //     },
    //     {
    //         "id": 3,
    //         "title": "The Shawshank Redemption",
    //         "genre": "Drama",
    //         "image": "/shawshank.jpg"
    //     },
    //     {
    //         "id": 4,
    //         "title": "Toy Story",
    //         "genre": "Animation, Adventure, Comedy",
    //         "image": "/toystory.jpg"
    //     },
    //     {
    //         "id": 5,
    //         "title": "Pulp Fiction",
    //         "genre": "Crime, Drama",
    //         "image": "/pulpfiction.jpg"
    //     }
    // ];

    React.useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_BASE_URL}/products`)
            .then((response) => {
                setNowShowing(response?.data?.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <>
            <section className='container-fluid position-relative' style={{ backgroundColor: '#F5F6F8', height: '650px' }}>
                <h4 className='fw-bold now-showing position-absolute top-0 start-0 m-4'>Now Showing</h4>
                <div>
                    <Link to={`/view-all`} className='font-bold view-all text-decoration-none  m-5 position-absolute top-0 end-0 '>
                        view all
                    </Link>
                </div>

                {nowShowing.slice(5, 10).map((film) => (
                    <div key={film.id} className="movie-container">
                        <div className="gambar">
                            <img className='apa-aja' src={film.movies_picture || <Skeleton count={3}/>} />
                        </div>
                        <div className='body-card '>
                            <h5 className='card-text'>{film.title || <Skeleton count={1}/>}</h5>
                            <p className='genre'>{film.category || <Skeleton count={1}/>}</p>
                            <Link to={`/movies/${film.id}`} class="btn btn-outline-primary details">Details</Link>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}
