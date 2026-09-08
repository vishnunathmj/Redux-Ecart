import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function WishList() {
  return (
    <>
      <Header />
      <div className="container my-5">
        <>
        <h1 className="pt-5 text-primary">User Wishlist</h1>
        <div className="row pt-5">
          {/* Duplicate column accordingly */}
          <div className="col-md-3 mb-2">
            {/* card */}
            <Card style={{ width: '18rem' }}>
              <Card.Img style={{height:'250px'}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUFLbRb2cnIPrrg_zzlcSqz7vbpmU05rMxYydG6qyFlQ&s=10" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <div className="d-flex justify-content-evenly">
                  <button className="btn text-danger fs-4"><FontAwesomeIcon icon={faHeartCircleXmark} /></button>
                  <button className="btn text-success fs-4"><FontAwesomeIcon icon={faCartPlus} /></button>
                  
                </div>
                {/* <Link to={'product/id'} className='btn btn-primary'>View More</Link> */}
              </Card.Body>
            </Card>
          </div>
        </div>
        </>
      </div>
    </>
  )
}

export default WishList
