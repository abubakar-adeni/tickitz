import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import NowShowing from '../components/NowShowing';
import styles from '../styles/Home.css';
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'
import UpComingMovies from '../components/UpcomingMovies';

export default function Home() {
  return (
    <>
      <Navbar />
      <header>
        <div className="container mt-5">
          <div className="row align-items-center">
            <div className="col-12 col-sm-12 col-lg-6">
              <p className="mt-1 mt-md-3 mt-lg-5">
                Nearest Cinema, Newest Movie,
              </p>

              <h1>Find out now!</h1>
            </div>
            <div className="col-12 col-sm-12 mt-5 mt-lg-0 col-lg-6 d-flex justify-content-center container-card">
              <div className="card-movie">
                <img src={banner1} className="card-img-top" alt="ok" />
              </div>
              <div className="card-movie">
                <img src={banner2} className="card-img-top" alt="ok" />
              </div>
              <div className="card-movie">
                <img src={banner3} className="card-img-top" alt="ok" />
              </div>
            </div>
          </div>
        </div>
      </header>

    <NowShowing />

    <UpComingMovies />

      <section className="join">
        <div className="container">
          <div className="jumbotron bg-white">
            <p>Be the vanguard of the</p>
            <h1>Moviegoers</h1>
            <form className="form-inline join-now">
              <div className="row">
                <div className="col-sm-12 col-md-7 mt-3">
                  <input
                    type="text"
                    className="form-control w-100"
                    placeholder="Type your email"
                  />
                </div>
                <div className="col-12 col-md-5">
                  <button
                    className="btn mt-3 btn-join-now w-100"
                    type="submit"
                  >
                    Join now
                  </button>
                </div>
              </div>
            </form>
            <p className="text-join-now">
              By joining you as a Tickitz member,
              <br />
              we will always send you the <br /> latest updates via email
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
