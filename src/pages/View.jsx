import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { addToWishlist } from '../redux/slice/wishlistSlice'


function View() {

  const { id } = useParams()
  const { allProducts } = useSelector(state => state.productReducer)
  const [product, setProduct] = useState({})
  console.log(product);

  const dispatch = useDispatch()
  const userWishlist = useSelector(state => state.wishlistReducer)

  useEffect(() => {
    setProduct(allProducts?.find(item => item.id == id))
  }, [])


  const handleWishlist = () => {
    console.log("handleWishlist");
    const existingproduct = userWishlist?.find(item => item?.id == product?.id)
    if (existingproduct) {
      Swal.fire({
        title: "Sorry",
        text: "Product already in the wishlist",
        icon: "error",
        confirmButtonText:"OK"
      });
    }
    else{
      dispatch(addToWishlist(product))
      Swal.fire({
        title: "Success",
        text: "Product added in the wishlist",
        icon: "success",
        confirmButtonText:"OK"
      });
    }
  }



  return (
    <>
      <Header />
      <div className="container my-5 ">
        <div className="row pt-5 align-items-center" >
          <div className="col-lg-6 text-center">
            <img className='img-fluid' src={product?.thumbnail} alt="Product image" />
            <div className="d-flex justify-content-evenly mt-5">
              <button onClick={handleWishlist} className='btn btn-info rounded'>ADD TO WISHLIST</button>
              <button className='btn btn-success rounded'>ADD TO CART</button>
            </div>
          </div>
          <div className="col-lg-6">
            <h1>{product?.title}</h1>
            <h2 className="text-danger">${product?.price}</h2>
            <h4>Brand : {product?.brand}</h4>
            <h4>Category : {product?.category}</h4>
            <h4>Discription : {product?.description}</h4>
            <h5>Client Reviews : </h5>
            {product.reviews?.map((item, index) => (
              <div key={index} className="border rounded p-2 shadow my-1">
                <p><span className='fw-bolder'>{item?.reviewerName}</span>{item?.comment}</p>
                <p>Rating : {item?.rating} <span className='text-warning'>< FontAwesomeIcon icon={faStar} /></span></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default View
