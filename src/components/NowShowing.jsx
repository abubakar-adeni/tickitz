import React from 'react'

import { Link } from 'react-router-dom';
export default function NowShowing() {
    return (
        <>
            <section className='container-fluid position-relative' style={{ backgroundColor: '#F5F6F8', height: '500px' }}>
                <h4 className='fw-bold now-showing position-absolute top-0 start-0 m-4'>Now Showing</h4>
                <div>
                    <Link to={"/"} className='font-bold view-all text-decoration-none  m-5 position-absolute top-0 end-0 '>
                        view all
                    </Link>
                </div>
            </section>
        </>
    )
}
