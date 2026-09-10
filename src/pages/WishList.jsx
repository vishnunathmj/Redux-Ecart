import React from 'react'
import Header from '../components/Header'
import Card from 'react-bootstrap/Card';
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/slice/wishlistSlice';

function WishList() {
  const userWishlist = useSelector(state => state.wishlistReducer)
  console.log(userWishlist);
  const dispatch = useDispatch()

  return (
    <>
      <Header />
      <div className="container my-5">
        {
          userWishlist?.length > 0 ?
            <>
              <h1 className="pt-5 text-primary">User Wishlist</h1>
              <div className="row pt-5">
                {/* Duplicate column accordingly */}
                {
                  userWishlist?.map(item => (
                    <div key={item?.id} className="col-md-3 mb-2">
                      {/* card */}
                      <Card style={{ width: '18rem' }}>
                        <Card.Img style={{ height: '250px' }} variant="top" src={item?.thumbnail} />
                        <Card.Body>
                          <Card.Title>{item?.title}</Card.Title>
                          <div className="d-flex justify-content-evenly">
                            <button onClick={()=>dispatch(removeFromWishlist(item?.id))} className="btn text-danger fs-4"><FontAwesomeIcon icon={faHeartCircleXmark} /></button>
                            <button className="btn text-success fs-4"><FontAwesomeIcon icon={faCartPlus} /></button>

                          </div>
                          {/* <Link to={'product/id'} className='btn btn-primary'>View More</Link> */}
                        </Card.Body>
                      </Card>
                    </div>
                  ))
                }
              </div>
            </>
            :
            <div style={{ height: '100vh' }}>
              <img className='w-25' src="https://cdn.dribbble.com/userupload/29471897/file/original-445e7655908c71a77099cdca6b1528e1.gif" alt="Wishlist empty" />
              <h1>Your wishlist is empty</h1>
              <Link to={'/'} className='btn btn-primary'>Add More..</Link>
            </div>
        }
      </div>
    </>
  )
}

export default WishList
