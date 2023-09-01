import React from 'react'
import '../styles/profile.css'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { HiChevronDown } from "react-icons/hi"
import { useLocation } from 'react-router-dom'

export default function Tabs() {
    const navigate = useNavigate()
    const [profile, setProfile] = React.useState([])
    const [fullname, setFullname] = React.useState([])
    const [email, setEmail] = React.useState([])
    const [phone_number, setPhonenumber] = React.useState([])
    const [password, setPassword] = React.useState([])
    const [confirmPassword, setConfirmPassword] = React.useState([])

    const location = useLocation();
    const query = new URLSearchParams(location.search)
    const date = query.get('date');
    const movieTitle = query.get('movieTitle')
    const count = query.get('count')
    const seats = query.get('seats')
    const price = query.get('price')


    React.useEffect(() => {
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
                    setPassword(profile.password)
                })
        }
    }, [])

    const handleUpdate = () => {
        axios
            .patch(`${process.env.REACT_APP_BASE_URL}/users`, {
                fullname,
                email,
                phone_number,
                password,
            })
            .then((response) => {
                Swal.fire({
                    title: "Update Profile Success",
                    text: "Update Profile Success",
                    icon: "success",
                })
                    .then(() => {
                        window.location.href = "/profile"
                    })
            })
            .catch((error) => {
                Swal.fire({
                    title: "Update Profile Failed",
                    text: error?.response?.data?.message ?? "Something wrong in our app",
                    icon: "error",
                })
            })
    }

    const handlePasswordUpdate = () => {
        if (password !== confirmPassword) {
            Swal.fire({
                title: "Password Mismatch",
                text: "New Password and Confirm Password do not match",
                icon: "error",
            });
            return;
        }
        axios
            .patch(`${process.env.REACT_APP_BASE_URL}/users`, {
                password,
            })
            .then((response) => {
                Swal.fire({
                    title: "Update Password Success",
                    text: "Update Password Success",
                    icon: "success",
                })
                    .then(() => {
                        window.location.href = "/profile";
                    });
            })
            .catch((error) => {
                Swal.fire({
                    title: "Update Password Failed",
                    text: error?.response?.data?.message ?? "Something wrong in our app",
                    icon: "error",
                });
            });
    };

    return (
        <>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active fw-bold" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fw-bold" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Order History</button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="details-informasi">
                        <p className='h6 mt-4 fw-bold' style={{ color: '#5f2eea' }}>Details Information</p>
                        <hr className='opacity-100' />
                        <div className="form-container">
                            <Form className="responsive-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="d-flex justify-content-between">
                                    <Form.Group className="mb-3 flex-grow-1">
                                        <Form.Label for="name" >Name</Form.Label>
                                        <Form.Control type="Name" defaultValue={profile.fullname} onChange={(e) => {
                                            setFullname(e.target.value)
                                        }} placeholder="Enter full name" />
                                    </Form.Group>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <Form.Group className="mb-3 flex-grow-1">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" defaultValue={profile.email} onChange={(e) => {
                                            setEmail(e.target.value)
                                        }} />
                                    </Form.Group>

                                    <Form.Group className="mb-3 flex-grow-1 phone-number">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="tel" placeholder="Enter phone number" defaultValue={profile.phone_number} onChange={(e) => {
                                            setPhonenumber(e.target.value)
                                        }} />
                                    </Form.Group>
                                </div>

                                <div className="d-flex justify-content-start">
                                    <Button type="submit" className='update-changes' onClick={handleUpdate}>Update Changes</Button>
                                </div>
                            </Form>
                        </div>
                    </div>

                    <div className="accounts mt-5">
                        <p className='h6 fw-bold' style={{ color: '#5f2eea' }}>Accounts and Privacy</p>
                        <hr className='opacity-100' />
                        <div className="form-container">
                            <Form className="responsive-form">
                                <div className="d-flex justify-content-between">
                                    <Form.Group className="mb-3 flex-grow-1">
                                        <Form.Label>New Password</Form.Label>
                                        <Form.Control type="password" placeholder="Write your New password" value={confirmPassword} onChange={(e) => {
                                            setPassword(e.target.value);
                                            setConfirmPassword(e.target.value);
                                        }} />
                                    </Form.Group>

                                    <Form.Group className="mb-3 flex-grow-1 last-name">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => {
                                            setPassword(e.target.value);

                                        }} />
                                    </Form.Group>
                                </div>
                                <div className="d-flex justify-content-start">
                                    <Button className='update-changes' onClick={handlePasswordUpdate}>Update Changes</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>


                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                    <div className="container text-center border border-dark-subtle rounded mt-2">
                        <div className="row" style={{ height: '250px'}} >
                            <div className="col-8 text-start border date mt-3">{date}</div>
                            <div className="w-100"></div>
                            <div className="col-4 border ">
                                <h4 className='text-start movie-name'>{movieTitle}</h4>
                            </div>
                            <div className="col-8 text-end">
                                <img src={require('../assets/CineOne.png')} alt="cinema" className='text-end' />
                            </div>
                            <hr />
                            <div className="col-6 border border-primary-subtle text-start">
                                <button type="button" className="btn btn-primary btn-lg " disabled>Ticket in active</button>
                            </div>
                            <div className="col-6 text-end">
                                <button type="button" className="btn ">
                                    <h5> See Details <HiChevronDown /></h5>
                                </button>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
