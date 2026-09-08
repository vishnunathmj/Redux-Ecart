import React, { useEffect } from 'react'
import Header from '../components/Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/slice/productSlice';

function Products() {

  const { loading, allProducts, error } = useSelector(state => state.productReducer)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <>
      <Header />
      <div className="m-5">
        {
          loading ?
            <div className="text-center fw-bolder py-5">Loading...</div>
            :
            <div className="row pt-5">
              {/* Duplicate column accordingly */}
              {
                allProducts.length > 0 ?
                  <div className="col-md-3 mb-2">
                    {/* card */}
                    <Card style={{ width: '18rem' }}>
                      <Card.Img style={{ height: '250px' }} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUFLbRb2cnIPrrg_zzlcSqz7vbpmU05rMxYydG6qyFlQ&s=10" />
                      <Card.Body className='text-center'>
                        <Card.Title>Card Title</Card.Title>
                        <Link to={'product/id'} className='btn btn-primary'>View More</Link>
                      </Card.Body>
                    </Card>
                  </div>
                  :
                  <div className="text-center fw-bolder py-5">Product Not Found!!!</div>

              }
            </div>
        }
      </div>
    </>
  )
}

export default Products
