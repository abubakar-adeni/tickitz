import React from 'react'
import '../styles/seat.css'
import { useState } from 'react'
import Navbar from '../components/navbar'
import { useNavigate } from 'react-router-dom'

export default function Test() {
  const seatA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const seatB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const seatC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const seatD = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate()
  const handleSeatClick = (blockName, seatNumber) => {
    const seatId = `${blockName}-${seatNumber}`;
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const selectedSeatText = selectedSeats.length > 0
    ? `Selected seats: ${selectedSeats.join(", ")}`
    : "Choose your seat";

  React.useEffect(() => {
    !localStorage.getItem("auth") && navigate("/login");
  }, []);



  return (
    <>
      <Navbar />
      <div class="container-fluid bg-light text-dark pb-5">

        <div class="row">
          <div class="col-6 mt-5 ms-2">
            <h2>Movie Selected</h2>
            <div className="movie-selected bg-white text-dark p-4 rounded-3 d-flex align-items-center" style={{ height: '20vh' }}>
              <img src={require("../assets/CineOne.png")}></img>
              <button type="button" class="btn ms-auto change-movie" >Change Movie</button>
            </div>
          </div>
          <div class="col-5 rounded-3 mt-5">
            <h2>Order Info</h2>
            <div className="movie-selected bg-white text-dark p-4 rounded-3 text-center">
              <img src={require("../assets/CineOne.png")}></img>
              <div class="text-start p-2">Movie selected
                <p className='text-start fe'></p>
              </div>
              <div class="text-start p-2">One ticket price
                <p className='text-start fe'></p>
              </div>
              <hr />
              <div class="text-start p-2 fw-bold">Total Payment
                <p className='text-start fe'></p>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-5 ms-2 gap-3 text-center justify-content-center">
          <div class="col-9 bg-white text-dark rounded-3">
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
          {/* <div class="col-4 bg-white text-dark rounded-3">
                        <h2>Movie Selected</h2>
                        <div className="movie-selected bg-white text-dark p-4 rounded-3">
                            <img src={require("../assets/CineOne.png")}></img>
                            <button type="button" class="btn btn-primary float-end" >Change Movie</button>
                        </div>
                    </div> */}
        </div>
        <div className='row text-center justify-content-center'>
          <button type="button" className="col-2 btn btn-lg  mt-4 me-5 checkout-now">Change Your Movie</button>
          <button type="button" className=" col-2 btn btn-lg  mt-4 ms-5 change-movie">Checkout Now</button>
        </div>
      </div>
    </>
  )
}
