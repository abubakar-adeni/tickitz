import React, { useState } from 'react';
import Navbar from '../components/navbar'
import { AiOutlineSearch } from "react-icons/ai";
import '../styles/viewAll.css'
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Loader from '../components/loader';
import axios from 'axios'


export default function ViewALL() {
    const [listMovies, setListMovies] = React.useState([])
    const [isLoading, setIsLoading] = useState(false);
    React.useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_BASE_URL}/products`)
            .then((response) => {
                setListMovies(response?.data?.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

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
    //         "image": "/pulpfiction.jpg"
    //     },
    //     {
    //         "id": 5,
    //         "title": "Pulp Fiction",
    //         "genre": "Crime, Drama",
    //         "image": "/toystory.jpg"
    //     },
    //     {
    //         "id": 6,
    //         "title": "Meg 2: The Trench",
    //         "genre": "Action, Science Fiction, Horror",
    //         "image": "/meg2.jpg"
    //     },
    //     {
    //         "id": 7,
    //         "title": "Ragnarok ",
    //         "genre": "Sci-Fi & Fantasy, Drama, Mystery",
    //         "image": "/ragnarok.jpg"
    //     },
    //     {
    //         "id": 8,
    //         "title": "Elemental",
    //         "genre": "Animation, Comedy, Fantasy, Romance",
    //         "image": "/elemental.jpg"
    //     },
    //     {
    //         "id": 9,
    //         "title": "Midway",
    //         "genre": "Action, War, History, Adventure",
    //         "image": "/midway.jpg"
    //     },
    //     {
    //         "id": 10,
    //         "title": "Spider-Man",
    //         "genre": "Animation, Action, Adventure",
    //         "image": "/spiderman.jpg"
    //     }
    // ];
    return (
        <>
            <Navbar />
            <section className='movie-background' style={{
                height: '1100px'
            }}>
                <div class="container-fluid text-center p-3">
                    <div class="row">
                        <div class="col-auto me-auto">
                            <h1>List Movie</h1>
                        </div>
                        <div class="col-auto">
                            <div className="input-group">
                                <input
                                    className="form-control"
                                    id="search"
                                    name="search"
                                    placeholder="Search Movie Name"
                                    autoComplete="off"
                                />
                                <button
                                    className={`btn btn-outline-primary search`}
                                    type="button"
                                > <AiOutlineSearch />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {isLoading ? (
                    <Loader />
                ) : (
                    <div className="movie-list" style={{
                        height: '930px', width: '90%', margin:
                            '0 auto'
                    }}>


                        {listMovies.map((film) => (
                            <div key={film.id} className="movie-container" style={{ margin: "25px" }}>
                                <div className="gambar">
                                    <img className='apa-aja' src={film.movies_picture} />
                                </div>
                                <div className='body-card'>
                                    <h5 className='card-text'>{film.title}</h5>
                                    <p className='genre'>{film.genre}</p>
                                    <Link to={`/movies/${film.id}`} className="btn btn-outline-primary details">Details</Link>
                                </div>
                            </div>
                        ))}

                    </div>
                )}
            </section>
            <Footer />
        </>
    )
}
