import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Link } from 'react-router-dom'
import '../styles/payment.css'
import { CiWarning } from "react-icons/ci";
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Payment() {
    const location = useLocation()
    const navigate = useNavigate()
    const id = location?.pathname?.split("/")[2]
    const [movies, setMovies] = React.useState([])
    const query = new URLSearchParams(location.search);
    const selectedSeatsParam = query.get('selectedSeats');
    const selectedSeats = selectedSeatsParam ? selectedSeatsParam.split(',') : [];
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedButton, setSelectedButton] = useState(null);
    const [profile, setProfile] = React.useState([])
    const [fullname, setFullname] = React.useState([])
    const [email, setEmail] = React.useState([])
    const [phone_number, setPhonenumber] = React.useState([])

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    }


    useEffect(() => {
    
        axios
          .get(`${process.env.REACT_APP_BASE_URL}/products/${id}`)
          .then((response) => setMovies(response?.data?.data[0]))
          .catch((err) => {
            console.log('error :', err);
          });
    
        const calculatedTotalPrice = movies.price * selectedSeats.length;
        setTotalPrice(calculatedTotalPrice);
      }, [id, movies.price, selectedSeats]);
    

    useEffect(() => {
        if (!localStorage.getItem("auth")) {
            navigate("/login")
        } else {
            const user_id = localStorage.getItem("user_id")
            axios
                .get(`${process.env.REACT_APP_BASE_URL}/users/${user_id}`)
                .then((response) => {
                    setProfile(response?.data?.data[0])
                    setFullname(profile.fullname)
                    setEmail(profile.email)
                    setPhonenumber(profile.phone_number)
                })
        }
    }, [])


    return (
        <>
            <Navbar />

            <div className="parent">
                <div className="payment-info">
                    <h1>Payment Info</h1>
                    <div className="text-start p-3 bg-white text-dark list-payment" style={{ borderRadius: '11px' }}>

                        <div className="row">
                            <h6 className="col-6">Date & time</h6>
                            <h6 className="col-6 text-end"></h6>
                        </div>
                        <hr />
                        <div className="row">
                            <h6 className="col-6">Movie title</h6>
                            <h6 className="col-6 text-end">{movies.title}</h6>
                        </div>
                        <hr />
                        <div className="row">
                            <h6 className="col-6">Cinema name</h6>
                            <h6 className="col-6 text-end">CineOne 21</h6>
                        </div>
                        <hr />
                        <div className="row">
                            <h6 className="col-6">Number of tickets</h6>
                            <h6 className="col-6 text-end">{selectedSeats.length}</h6>
                        </div>
                        <hr />
                        <div className="row">
                            <h6 className="col-6">Total payment</h6>
                            <h6 className="col-6 text-end">{totalPrice}</h6>
                        </div>
                    </div>


                </div>



                <div className="payment-method">
                    <h1>Personal Info</h1>
                    <div className="text-start p-3 bg-white text-dark list-payment" style={{ borderRadius: '11px' }}>
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Full Name</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" value={profile.fullname}></input>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="text" class="form-control" value={profile.email}></input>
                            </div>
                            <div class="mb-3">
                                <label for="phone" class="form-label">Phone Number</label>
                                <input type="text" class="form-control" value={profile.phone_number}></input>
                            </div>
                            <div class="p-3 text-primary-emphasis bg-warning-subtle border border-warning-subtle rounded-3 d-flex align-items-center">
                                <CiWarning size={25} />Fill your data correctly.
                            </div>
                        </form>




                    </div>
                </div>



                <div className="personal-info">
                    <h1>Choose a payment method</h1>
                    <div className="text-start p-3 bg-white text-dark list-payment" style={{ borderRadius: '11px' }}>
                        <div class="container text-center">
                            <div class="row align-items-start align-items-center justify-content-center m-3">
                                <button className={`button-pay col-2 pay-option d-flex align-items-center justify-content-center ${selectedButton === 'google' ? 'active' : ''}`} onClick={() => handleButtonClick('google')}>
                                    <img src={require("../assets/google.png")} />
                                </button>
                                <button className={`button-pay col-2 pay-option d-flex align-items-center justify-content-center ${selectedButton === 'visa' ? 'active' : ''}`} onClick={() => handleButtonClick('visa')} >
                                    <img src={require("../assets/visa.png")} />
                                </button>
                                <button className={`button-pay col-2 pay-option d-flex align-items-center justify-content-center ${selectedButton === 'gopay' ? 'active' : ''}`} onClick={() => handleButtonClick('gopay')}>
                                    <img src={require("../assets/gopay.png")} />
                                </button>
                                <button className={`button-pay col-2 pay-option d-flex align-items-center justify-content-center ${selectedButton === 'paypal' ? 'active' : ''}`} onClick={() => handleButtonClick('paypal')}>
                                    <img src={require("../assets/paypal.png")} />
                                </button>
                            </div>
                            <div class="row align-items-start align-items-center justify-content-center m-3">
                                <button className={`button-pay col-2 pay-option d-flex align-items-center justify-content-center ${selectedButton === 'dana' ? 'active' : ''}`} onClick={() => handleButtonClick('dana')}>
                                    <img src={require("../assets/dana.png")} />
                                </button>
                                <button className={`button-pay col-2 pay-option d-flex align-items-center justify-content-center ${selectedButton === 'bca' ? 'active' : ''}`} onClick={() => handleButtonClick('bca')}>
                                    <img src={require("../assets/bca.png")} />
                                </button>
                                <button className={`button-pay col-2 pay-option d-flex align-items-center justify-content-center ${selectedButton === 'bri' ? 'active' : ''}`} onClick={() => handleButtonClick('bri')}>
                                    <img src={require("../assets/bri.png")} />
                                </button>
                                <button className={`button-pay col-2 pay-option d-flex align-items-center justify-content-center ${selectedButton === 'ovo' ? 'active' : ''}`} onClick={() => handleButtonClick('ovo')}>
                                    <img src={require("../assets/ovo.png")} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='row text-center justify-content-center'>
                        <Link to={`/seat/${id}`} className="col-4 btn btn-lg  mt-4 me-5 checkout-now">Previous step</Link>
                        <Link to={'/payment'} className="col-4 btn btn-lg  mt-4 ms-5 change-movie">Checkout Now</Link>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}
