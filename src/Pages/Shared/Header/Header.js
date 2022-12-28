import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from "../../../images/icon/logo.png"

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} bg="dark" variant='dark' expand={expand} fixed='top'>
          <Container>
            <Navbar.Brand as={Link} to="/">
             <img src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src={logo} alt="logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/home">Home</Nav.Link>
                  <Nav.Link href="/home#services">Service</Nav.Link>
                  <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                  <Nav.Link as={Link} to="/about">About</Nav.Link>
                  {user ? <NavDropdown
                    title="Profile"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleSignOut}>
                      Sign Out
                    </NavDropdown.Item>
                  </NavDropdown> :
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                  }
                </Nav>
            
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;