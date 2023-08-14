import React from 'react'
import Navbar from '../components/navbar'
import Login from './Login'
import Footer from '../components/footer'
import Loader from '../components/loader'

export default function Home() {
  return (
    <div className="App">
      <header>
        <Navbar />
        
        <div className="container">
          <div className="row flex-column flex-lg-row mt-5">
            <div className="col-md-6 col-xs-10 align-self-center order-2 order-md-1 ">
              <h2 className="text-center text-lg-start fw-bolder fs-1 text-primary mt-5">
                Discover Recipe & <br />
                Delicious Food
              </h2>
              <div className="search-bar">
                <input
                  className="search-box form-control form-control-lg mt-5"
                  placeholder="search restaurant, food"
                 
                />
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-md-4 col-lg-4 col-xs-8 col-sm-8 order-1 order-md-1">
              <img
                className="rounded img-fluid mx-auto d-block"
                src="/img/1.jpg"
                alt="img-header"
              />
            </div>
          </div>
        </div>

        <div className="bg_yellow"></div>
      </header>

    </div>
  )
}
