import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { CiWarning } from 'react-icons/ci';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../styles/payment.css';

export default function Payment() {
    const location = useLocation();
    const navigate = useNavigate();
    const id = location?.pathname?.split('/')[2];
    const [movies, setMovies] = useState([]);
    const query = new URLSearchParams(location.search);
    const selectedSeatsParam = query.get('selectedSeats');
    const selectedSeats = selectedSeatsParam ? selectedSeatsParam.split(',') : [];
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedButton, setSelectedButton] = useState(null);
    const [profile, setProfile] = useState({});
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhonenumber] = useState('');
    const [isPaymentMethodSelected, setIsPaymentMethodSelected] = useState(false);

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
        setIsPaymentMethodSelected(true);
    };

    const handleCheckout = () => {
        const paymentData = {
            movie_id: id,
            payment_date: new Date().toISOString(),
            amount: totalPrice,
        };

        axios
            .post(`${process.env.REACT_APP_BASE_URL}/pay`, paymentData)
            .then((response) => {
                if (response.data.status) {
                    updatePaymentStatus(selectedButton);
                    Swal.fire({
                        icon: 'success',
                        title: 'Payment Successful',
                        text: 'Your payment has been successfully processed.',
                        confirmButtonText: 'OK',
                    }).then(() => {
                        const dataToPass = {
                            date: new Date(paymentData.payment_date).toLocaleDateString(),
                            count: selectedSeats.length,
                            seats: selectedSeats.join(', '),
                            price: totalPrice,
                            movieTitle: movies.title,
                        };
                        const queryParams = new URLSearchParams(dataToPass).toString();
                        window.location.href = `/ticket/${id}?${queryParams}`;
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Payment Failed',
                        text: 'Sorry, there was an issue processing your payment.',
                    });
                }
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Payment Failed',
                    text: 'An error occurred while processing your payment.',
                });
            });
    };

    const updatePaymentStatus = (newStatus) => {
        const paymentData = {
            payment_id: id,
            new_status: newStatus,
        };

        axios
            .post(`${process.env.REACT_APP_BASE_URL}/update_payment_status`, paymentData)
            .then((response) => {
                if (response.data.status) {

                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        window.scroll(0, 0)
        axios
            .get(`${process.env.REACT_APP_BASE_URL}/products/${id}`)
            .then((response) => {
                setMovies(response?.data?.data[0]);
                const calculatedTotalPrice = response?.data?.data[0]?.price * selectedSeats.length;
                setTotalPrice(calculatedTotalPrice);
            })
            .catch((err) => {
                console.log('error :', err);
            });
    }, []);

    useEffect(() => {
        if (!localStorage.getItem('auth')) {
            navigate('/login');
        } else {
            const user_id = localStorage.getItem('user_id');
            axios
                .get(`${process.env.REACT_APP_BASE_URL}/users/${user_id}`)
                .then((response) => {
                    const userData = response?.data?.data[0];
                    setProfile(userData);
                    setFullname(userData?.fullname);
                    setEmail(userData?.email);
                    setPhonenumber(userData?.phone_number);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, []);

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
                            <h6 className="col-6 text-end">{movies?.title}</h6>
                        </div>
                        <hr />
                        <div className="row">
                            <h6 className="col-6">Cinema name</h6>
                            <h6 className="col-6 text-end">CineOne 21</h6>
                        </div>
                        <hr />
                        <div className="row">
                            <h6 className="col-6">Number of tickets</h6>
                            <h6 className="col-6 text-end">{selectedSeats?.length}</h6>
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
                                <input type="email" class="form-control" id="exampleInputEmail1" value={profile?.fullname}></input>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="text" class="form-control" value={profile?.email}></input>
                            </div>
                            <div class="mb-3">
                                <label for="phone" class="form-label">Phone Number</label>
                                <input type="text" class="form-control" value={profile?.phone_number}></input>
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
                        <button className="col-4 btn btn-lg  mt-4 ms-5 change-movie" onClick={handleCheckout} disabled={!isPaymentMethodSelected}>Pay your order</button>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}
