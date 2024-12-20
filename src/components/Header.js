import React from 'react';
import { Navbar, Nav,  Container } from 'react-bootstrap';
// import { ReactComponent as Logo } from '../assets/images/logo2-with-background.svg';
import { LinkContainer } from 'react-router-bootstrap';
import Image from 'react-bootstrap/Image';

const Header = () => {
 
  return (
    <>
    <header className="App-header">
    <Container>
    <Navbar className="py-3 d-lg-flex" collapseOnSelect expand="lg" bg="light" variant="light">
    <LinkContainer to="/">
       <Navbar.Brand className='w-25'>  
         {/* <Logo  width={ 300 } height={ 120 }/> */}
         <Image src="/images/logo.png" rounded />
       </Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ms-auto">
      <LinkContainer to="/">
        <Nav.Link>Accueil</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/about">
        <Nav.Link>À Propos</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/team">
        <Nav.Link>Équipe</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/services">
        <Nav.Link>Services</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/blogPublication">
        <Nav.Link>Blog et Articles</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/contact">
        <Nav.Link>Contact</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</Container>
  </header>
 
 </>
  );
}
 
export default Header;