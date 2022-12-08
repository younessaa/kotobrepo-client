import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Logo';
import './Header.css';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="none" variant="light">
        <Container>
            <Navbar.Brand> <Link to='/'><Logo /></Link></Navbar.Brand>
            <Nav className="mr-auto bg-white rounded headerNav">
                <NavLink className='nav-link navLink' to="/">
                    Home
                </NavLink>
                <NavLink className='nav-link navLink' to="/libraries">
                    Libraries
                </NavLink>
                <NavLink className='nav-link navLink' to="/books">
                    Books
                </NavLink>
                <NavLink className='nav-link navLink' to="/contactus">
                    Contact Us
                </NavLink>
                <NavLink className='nav-link navLink' to="/aboutus">
                    About Us
                </NavLink>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header
