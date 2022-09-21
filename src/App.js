import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from "react-router-bootstrap"

function App() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand >The Shop</Navbar.Brand>
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link >Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/About">
                <Nav.Link >About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Shop">
                <Nav.Link >Shop</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Cart">
                <Nav.Link >Cart</Nav.Link>
              </LinkContainer>
            </Nav>        
          </Container>
        </Navbar>
      </>
    );
}

export default App
