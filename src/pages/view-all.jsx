import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar'
import { AiOutlineSearch } from "react-icons/ai";
import '../styles/viewAll.css'
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Loader from '../components/loader';
import axios from 'axios'


export default function ViewALL() {
    const [listMovies, setListMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchResult, setSearchResult] = useState([]);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        window.scroll(0, 0)
        axios
            .get(`${process.env.REACT_APP_BASE_URL}/products`)
            .then((response) => {
                setListMovies(response?.data?.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleSearch = () => {
        setIsLoading(false);
        axios
            .get(`${process.env.REACT_APP_BASE_URL}/products?keyword=${keyword}`)
            .then((response) => {
                setSearchResult(response?.data?.data);
            })
            .catch((error) => {
                console.log(error);
                setSearchResult([]);
            });
    };

    return (
        <>
            <Navbar />
            <section className='movie-background'>
                <div className="container-fluid text-center p-3">
                    <div className="row">
                        <div className="col-auto me-auto">
                            <h1>List Movie</h1>
                        </div>
                        <div className="col-auto">
                            <div className="input-group">
                                <input
                                    className="form-control"
                                    id="search"
                                    name="search"
                                    placeholder="Search Movie Name"
                                    autoComplete="off"
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.keyCode === 13) {
                                            handleSearch();
                                        }
                                    }}
                                />
                                <button
                                    className={`btn btn-outline-primary search`}
                                    type="button"
                                    onClick={handleSearch}
                                >
                                    <AiOutlineSearch />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="movie-list" style={{ height: '930px', width: '90%', margin: '0 auto' }}>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        searchResult.length > 0 ? (
                            
                            searchResult.map((film) => (
                                <div key={film.id} className='movie-container' style={{ margin: '25px'  }}>
                                    <div className='gambar'>
                                        <img className='apa-aja' src={film.movies_picture} alt={film.title} loading='lazy'/>
                                    </div>
                                    <div className='body-card'>
                                        <h5 className='card-text'>{film.title}</h5>
                                        <p className='genre'>{film.category}</p>
                                        <Link to={`/movies/${film.id}`} className='btn btn-outline-primary details'>Details</Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            listMovies.map((film) => (
                                <div key={film.id} className='movie-container' style={{ margin: '25px' }}>
                                    <div className='gambar'>
                                        <img className='apa-aja' src={film.movies_picture} alt={film.title} />
                                    </div>
                                    <div className='body-card'>
                                        <h5 className='card-text'>{film.title}</h5>
                                        <p className='genre'>{film.category}</p>
                                        <Link to={`/movies/${film.id}`} className='btn btn-outline-primary details'>Details</Link>
                                    </div>
                                </div>
                            ))
                        )
                    )}
                </div>
            </section>
            <Footer />
        </>
    )
}
