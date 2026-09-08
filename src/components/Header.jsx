import { faCartShopping, faHeart, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <Navbar expand="lg" className="bg-primary fixed-top">
      <Container>
        <Navbar.Brand><Link to={'/'} className='text-light text-decoration-none fw-bold'><FontAwesomeIcon icon={faTruckFast} />E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Item><input type='text' className='form-control rounded' placeholder='Search the Products...'/></Nav.Item>
          <Link to={'/wishlist'} className='text-light text-decoration-none fw-bold'><FontAwesomeIcon icon={faHeart} />Wishlist <Badge pill className='bg-secondary'>10</Badge></Link>
          <Link to={'/cart'} className='text-light text-decoration-none fw-bold'><FontAwesomeIcon icon={faCartShopping} />Cart <Badge pill className='bg-secondary'>10</Badge></Link>

            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
