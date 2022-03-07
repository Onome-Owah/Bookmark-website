import React from 'react'
import './Navbar.css'
import { Navbar, Nav, Container} from 'react-bootstrap'
import book from '/Users/onomeowah/Desktop/SCHOOL PROJECTS/React/secondreactproject/src/Images/logo-bookmark.svg'




const Navbars = () => {
  return (
    <div>
      <Navbar bg="" expand="sm">
  <Container>
    <Navbar.Brand><img src={book} alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">FEATURES</Nav.Link>
        <Nav.Link href="#link">PRICING</Nav.Link>
        <Nav.Link href="#link">CONTACT</Nav.Link>
        <button className='log'>LOGIN</button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </div>
  )
}

export default Navbars