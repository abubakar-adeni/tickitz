import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { isMobile } from 'react-device-detect';
import '../styles/card.css';

export default function NowShowing() {
  const [nowShowing, setNowShowing] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/products`)
      .then((response) => {
        setNowShowing(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <section className={`container-fluid position-relative ${isMobile ? 'carousel-container' : ''}`} style={{ backgroundColor: '#F5F6F8', height: '650px' }}>
        <h4 className='fw-bold now-showing position-absolute top-0 start-0 m-4'>Now Showing</h4>
        <div>
          <Link to={`/view-all`} className='font-bold view-all text-decoration-none  m-5 position-absolute top-0 end-0 '>
            view all
          </Link>
        </div>

        {isMobile ? (
          <Carousel className='text-center'>
            {nowShowing.slice(5, 10).map((film) => (
              <Carousel.Item key={film.id}>
                <div className="movie-container">
                  <div className="gambar">
                    <img className='apa-aja' src={film.movies_picture} alt={film.title} />
                  </div>
                  <div className='body-card '>
                    <h5 className='card-text'>{film.title}</h5>
                    <p className='genre'>{film.category}</p>
                    <Link to={`/movies/${film.id}`} className="btn btn-outline-primary details">Details</Link>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <div>
            {nowShowing.slice(5, 10).map((film) => (
              <div key={film.id} className="movie-container">
                <div className="gambar">
                  <img className='apa-aja' src={film.movies_picture} alt={film.title} />
                </div>
                <div className='body-card '>
                  <h5 className='card-text'>{film.title}</h5>
                  <p className='genre'>{film.category}</p>
                  <Link to={`/movies/${film.id}`} className="btn btn-outline-primary details">Details</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
