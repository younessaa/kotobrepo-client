import React, { useState } from 'react';
import Header from '../components/Header/Header';
import { Container, Row, Col, NavDropdown, Form, Button} from 'react-bootstrap';
import '../styles/Home.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import searchIcon from '../assets/svg/searchIcon.svg';
import Footer from '../components/Footer/Footer';
import SearchBar from '../components/SearchBar/SearchBar';


const Home = () => {
    
  return (
    <div className='home'>
        <Header />
        <div className='title-header d-flex justify-content-center mb-2 mt-2'>
            <p className='font-kaushan text-center'>Satisfy the thirst of knowledge</p>
        </div>

        <SearchBar />

        <div className='d-flex justify-content-center mb-5 mt-5'>
            <div className='font-kodchasan text-center join-us'>Have you a library ? Join us</div>
        </div>
        <div className='d-flex justify-content-center mb-5 mt-3'>
            <button className='btn-join-us'><span className='font-inter'>Sing in</span></button>
        </div>
        
        <Footer />
    </div>
  )
}

export default Home
