import React from 'react'
import '../styles/seat.css'
import { useState } from 'react'
import Navbar from '../components/navbar'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/footer'
import { useEffect } from 'react'
import axios from 'axios'
import { useLocation } from "react-router-dom"
import { Link } from 'react-router-dom'
import { FormatRupiah } from '@arismun/format-rupiah'

export default function Test() {
  const seatA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const seatB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const seatC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const seatD = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [movies, setMovies] = React.useState([])
  const location = useLocation()
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate()
  const id = location?.pathname?.split("/")[2]
  const handleSeatClick = (blockName, seatNumber) => {
    const seatId = `${blockName}-${seatNumber}`;
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };
  const totalPrice = movies.price * selectedSeats.length;

  const selectedSeatText = selectedSeats.length > 0
    ? `Selected seats: ${selectedSeats.join(", ")}`
    : "Choose your seat";

  React.useEffect(() => {
    !localStorage.getItem("auth") && navigate("/login");
  }, []);

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
      <div className="container-fluid bg-light text-dark pb-5">

        <div className="row">
          <div className="col-6 mt-5 ms-2">
            <h2>Movie Selected</h2>
            <div className="movie-selected bg-white text-dark p-4 rounded-3 d-flex align-items-center" style={{ height: '20vh' }}>
              <h4>{movies.title}</h4>
              <Link to={'/view-all'} className="btn ms-auto change-movie" >Change Movie</Link>
            </div>
          </div>
          <div className="col-5 rounded-3 mt-5">
            <h2>Order Info</h2>
            <div className="movie-selected bg-white text-dark p-4 rounded-3 text-center">
              <img src={require("../assets/CineOne.png")}></img>
              <div className="text-start p-2">
                <div className="row">
                  <div className="col-6">Movie Selected</div>
                  <div className="col-6 text-end">{movies.title}</div>
                </div>
              </div>
              <div className="text-start p-2">
                <div className="row">
                  <div className="col-6">Date</div>
                  <div className="col-6 text-end">{movies.price}</div>
                </div>
              </div>
              <div className="text-start p-2">
                <div className="row">
                  <div className="col-6">One ticket price</div>
                  <div className="col-6 text-end"><FormatRupiah value={movies.price} /></div>
                </div>
              </div>
              <hr />
              <div className="text-start p-2 fw-bold">
                <div className="row">
                  <div className="col-6">Total Payment</div>
                  <div className="col-6 text-end"><FormatRupiah value={totalPrice}/></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 ms-2 gap-3 text-center justify-content-center">
          <div className="col-9 bg-white text-dark rounded-3">
            <h4 className='p-4'>{selectedSeatText}</h4>
            <div className="seat-container">
              <div className="seat-row"> A
                {seatA.map((seatNumber) => {
                  const seatId = `A-${seatNumber}`;
                  const isSelected = selectedSeats.includes(seatId);

                  return (
                    <label
                      key={seatId}
                      className={`custom-checkbox ${isSelected ? "checked" : ""}`}
                      htmlFor={seatId}
                    >
                      <input
                        type="checkbox"
                        id={seatId}
                        checked={isSelected}
                        onChange={() => handleSeatClick("A", seatNumber)}
                      />
                      <span className="checkmark"></span>
                    </label>
                  );
                })}
              </div>
            </div>
            <div className="seat-container">
              <div className="seat-row"> B
                {seatB.map((seatNumber) => {
                  const seatId = `B-${seatNumber}`;
                  const isSelected = selectedSeats.includes(seatId);

                  return (
                    <label
                      key={seatId}
                      className={`custom-checkbox ${isSelected ? "checked" : ""}`}
                      htmlFor={seatId}
                    >
                      <input
                        type="checkbox"
                        id={seatId}
                        checked={isSelected}
                        onChange={() => handleSeatClick("B", seatNumber)}
                      />
                      <span className="checkmark"></span>
                    </label>
                  );
                })}
              </div>
            </div>
            <div className="seat-container">
              <div className="seat-row"> C
                {seatC.map((seatNumber) => {
                  const seatId = `C-${seatNumber}`;
                  const isSelected = selectedSeats.includes(seatId);

                  return (
                    <label
                      key={seatId}
                      className={`custom-checkbox ${isSelected ? "checked" : ""}`}
                      htmlFor={seatId}
                    >
                      <input
                        type="checkbox"
                        id={seatId}
                        checked={isSelected}
                        onChange={() => handleSeatClick("C", seatNumber)}
                      />
                      <span className="checkmark"></span>
                    </label>
                  );
                })}
              </div>
            </div>
            <div className="seat-container">
              <div className="seat-row"> D
                {seatD.map((seatNumber) => {
                  const seatId = `D-${seatNumber}`;
                  const isSelected = selectedSeats.includes(seatId);

                  return (
                    <label
                      key={seatId}
                      className={`custom-checkbox ${isSelected ? "checked" : ""}`}
                      htmlFor={seatId}
                    >
                      <input
                        type="checkbox"
                        id={seatId}
                        checked={isSelected}
                        onChange={() => handleSeatClick("D", seatNumber)}
                      />
                      <span className="checkmark"></span>
                    </label>
                  );
                })}
              </div>
            </div>
            <div>
              {Array.from({ length: 10 }, (_, index) => (
                <p key={index} className="row-number">
                  {index + 1}
                </p>
              ))}
            </div>

          </div>
          {/* <div className="col-4 bg-white text-dark rounded-3">
                        <h2>Movie Selected</h2>
                        <div className="movie-selected bg-white text-dark p-4 rounded-3">
                            <img src={require("../assets/CineOne.png")}></img>
                            <button type="button" className="btn btn-primary float-end" >Change Movie</button>
                        </div>
                    </div> */}
        </div>
        <div className='row text-center justify-content-center'>
          <Link to={'/view-all'} className="col-2 btn btn-lg  mt-4 me-5 checkout-now">Change Your Movie</Link>
          <Link to={`/payment/${id}`} className="col-2 btn btn-lg  mt-4 ms-5 change-movie">Checkout Now</Link>
        </div>
      </div>  
      <Footer />
    </>
  )
}
