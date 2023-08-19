import React from 'react'
import { Link } from 'react-router-dom'

export default function UpComingMovies() {
  return (
    <>
     <section className='container-fluid position-relative' style={{ backgroundColor: 'white', height: '500px' }}>
                <h4 className='fw-bold upcoming position-absolute top-0 start-0 m-4'>Upcoming Movies</h4>
                <div>
                    <Link to={"/"} className='font-bold view-all text-decoration-none  m-5 position-absolute top-0 end-0 '>
                        view all
                    </Link>
                </div>
            </section>
    </>
  )
}
