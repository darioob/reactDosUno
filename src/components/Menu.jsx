import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <Navbar expand='lg' bg='dark' data-bs-theme='dark'>
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link className='nav-item nav-link' to='/'>Home <i class='fa-solid fa-house'></i></Link>
            <Link className='nav-item nav-link' to='/contacto'>Contacto <i class='fa-solid fa-address-book'></i></Link>
          </Nav>
          <Navbar.Brand>Happy Cake <i class='fa-solid fa-cake-candles'></i></Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
