import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../styles/profile.css'
import { Modal, Button } from "react-bootstrap"
import { BsThreeDots } from "react-icons/bs"
import Tabs from '../components/Tabs'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { AiFillDelete } from "react-icons/ai"
import Loader from '../components/loader'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Profile() {

  const [showModal, setShowModal] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);


  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    const imageURL = URL.createObjectURL(selectedImage);
    setUploadedImage(imageURL);
  };

  const handleSaveChanges = () => {
    handleCloseModal();
  };

  const navigate = useNavigate()
  const [profile, setProfile] = React.useState([])
  const [profile_picture, setProfilepicture] = React.useState([])
  const [fullname, setFullname] = React.useState([])
  const [email, setEmail] = React.useState([])
  const [phone_number, setPhonenumber] = React.useState([])
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/login")
    } else {
      const user_id = localStorage.getItem("user_id")
      setIsLoading(true);
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/users/${user_id}`)
        .then((response) => {
          setProfile(response?.data?.data[0])
          setFullname(profile.fullname)
          setEmail(profile.email)
          setPhonenumber(profile.phone_number)
          setIsLoading(false);
        })
    }
  }, [])

  const handleUpdate = () => {
    axios
      .patch(`${process.env.REACT_APP_BASE_URL}/users`, {
        fullname,
        email,
        phone_number,
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

  const handleUpdateProfilePicture = () => {
    setIsLoading(true);
    const formData = new FormData()
    formData.append("photo", profile_picture)
    axios
      .patch(`${process.env.REACT_APP_BASE_URL}/users/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setIsLoading(false);
        Swal.fire({
          title: "Success Update Profile Picture!",
          text: "Success Update Profile Picture!",
          icon: "success",
        }).then(() => {
          window.location.href = "/profile"
        })
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error)
        Swal.fire({
          title: "Error!",
          text: error?.response?.data?.message ?? "Something wrong in our App!",
          icon: "error",
        })
      })
  }


  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-3">
              <p className={`h4 info`}>Info</p>
              <div className={`dropdown custom-dropdown dots`}>
                <button
                  className={`btn dropdown-toggle arrow`}
                  type="button"
                  id="dropdownMenuButton"
                  onClick={handleShowModal}
                >
                  <BsThreeDots size={24} /> {/* Ganti ukuran ikon sesuai kebutuhan */}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a className="dropdown-item text-center" href="#">Edit Image</a></li>
                </ul>
              </div>
              <div className="card-body  text-center pt-5 ">
              {isLoading ? (
        <Skeleton width={200} height={200} circle={50} />
      ) : (
        <img
          src={profile.profile_picture }
          alt="profile"
          className="img img-thumbnail rounded-circle w-50"
          style={{
            width: '200px',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '50%',
          }}
        />
      )}
                {/* <img src={profile.profile_picture || <Skeleton count={2}/>} alt="profile" className='img img-thumbnail rounded-circle w-50' style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                }} /> */}
                <h2 className='pt-3'>{profile.fullname || <Skeleton count={1}/> }</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <Tabs />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Modal for Editing Image */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3">
              <label htmlFor="imageUpload" className="form-label">
                Select Image:
              </label>
              <input
                type="file"
                className="form-control"
                id="imageUpload"
                accept="image/*"
                onChange={(e) => {
                  handleImageUpload(e);
                  setProfilepicture(e.target.files[0]);
                }}
              />
            </div>
            {/* Display the uploaded image */}
            {uploadedImage && (
              <div className="mb-3">
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  className="img-thumbnail"
                  style={{ maxWidth: "100px" }}
                />
              </div>
            )}

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          {isLoading ? <Loader /> : <Button variant="primary" onClick={handleUpdateProfilePicture}> Save Changes </Button>}


        </Modal.Footer>
      </Modal>
      <Footer />
    </>
  )
}
