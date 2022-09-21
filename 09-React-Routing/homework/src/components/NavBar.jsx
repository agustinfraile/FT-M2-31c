import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from "./SearchBar"

export default function NavBar({onSearch}) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>

            <Navbar.Brand>Clima-App</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                
                <Link to='/'>
                  <Nav.Item>Home</Nav.Item>
                </Link>
                
                <Link to='/about'>
                  <Nav.Item>About</Nav.Item>
                </Link>

              </Nav>
              
            </Navbar.Collapse>
        </Container>
        
        <SearchBar
          onSearch={onSearch}
        />
    </Navbar>
  )
}
