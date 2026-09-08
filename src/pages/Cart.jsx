import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <>
      <Header />
      <div className="container pt-5 my-5">
          <h1 className='text-primary'>Cart Summary</h1>
          <div className="row mb-5">
            <div className="col-md-8 border rounded p-5">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>...</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Title</td>
                    <td><img width={'50px'} height={'50px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUFLbRb2cnIPrrg_zzlcSqz7vbpmU05rMxYydG6qyFlQ&s=10" alt="Product image" /></td>
                    <td>
                      <div className="d-flex">
                        <button className="btn fs-1">-</button>
                        <input style={{width:'50px'}} type="text" className='form-control' value={10} readOnly />
                        <button className="btn fs-1">+</button>
                      </div>
                    </td>
                    <td>$10</td>
                    <td><button className="btn text-danger fs-4">X</button></td>
                  </tr>
                </tbody>
              </table>
              <div className="float-end mt-3">
                <button className="btn btn-danger">Empty Cart</button>
                <Link to={'/'} className='btn btn-primary ms-5'>Shop More</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="rounded p-5 shadow border">
                <h3>Total <span>5</span>Items</h3>
                <h3>Total Amount: <span className='text-danger'>$999</span></h3>
                <hr />
                <div className="d-grid">
                  <button className="btn btn-success">CHECKOUT</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Cart
