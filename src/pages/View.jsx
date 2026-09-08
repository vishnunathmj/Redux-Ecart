import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function View() {
  return (
    <>
      <Header />
      <div className="container my-5 ">
        <div className="row pt-5 align-items-center" >
          <div className="col-lg-6 text-center">
            <img className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUFLbRb2cnIPrrg_zzlcSqz7vbpmU05rMxYydG6qyFlQ&s=10" alt="Product image" />
            <div className="d-flex justify-content-evenly mt-5">
              <button className='btn btn-info rounded'>ADD TO WISHLIST</button>
              <button className='btn btn-success rounded'>ADD TO CART</button>
            </div>
          </div>
          <div className="col-lg-6">
            <h1>Title</h1>
            <h2 className="text-danger">$10</h2>
            <h4>Brand: </h4>
            <h4>Category</h4>
            <h4>Discription</h4>
            <h5>Client Reviews</h5>
            <div className="border rounded p-2 shadow my-1">
              <p><span className='fw-bolder'>Name: </span>message</p>
              <p>Rating : 4 <FontAwesomeIcon icon={faStar} /></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default View
