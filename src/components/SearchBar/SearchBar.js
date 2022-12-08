import React, { useState } from 'react';
import { Container, Row, Col, NavDropdown, Form, Button} from 'react-bootstrap';
import './SearchBar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import searchIcon from '../../assets/svg/searchIcon.svg';
import { Link, useNavigate } from 'react-router-dom';

const SearchBar = ({search, searchType}) => {
    const [value, setValue] = useState(search ?? "");
    const [type, setType] = useState(searchType ?? "books");
    const navigate = useNavigate();

    const handleChange = (e) => {
        console.log("Value to search : ", e.target.value);
        setValue(e.target.value);
    }

    const handleSelect = (selected) => {
        console.log("type search selected : ", selected.target.value);
        setType(selected.target.value.toLowerCase());
    }

    const handleKeyPress = (e) => {
        
        if(e.key === 'Enter'){
            e.preventDefault();
            console.log('enter press here! ', e.target.value);
            setValue(e.target.value);
            navigate('/results?search='+e.target.value+"&type="+type)
        }
    }
  return (
    <Container fluid>
        <Form className="d-flex searchForm d-flex justify-content-center">
            <Form.Select aria-label="Default select books" className='selectBooks' onChange={handleSelect}>
                {
                    type === "books" ?
                    <>
                    <option value="books" selected><p className='selectOption'>Books</p></option>
                    <option value="quotes"><p className='selectOption'>Quotes</p></option>
                    </>
                    :
                    <>
                        <option value="books"><p className='selectOption'>Books</p></option>
                        <option value="quotes" selected><p className='selectOption'>Quotes</p></option>
                    </>
                }
                
            </Form.Select>
                
            <Form.Group className='bg-white d-flex justify-content-center searchBar'>
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 searchInput"
                    aria-label="Search"
                    value={value}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                />
                <Link to={"/results?search="+value+"&type="+type}>
                    <img className='text-center searchIcon' src={searchIcon} width="30" height="31" alt='search' />
                </Link>
            </Form.Group>
        </Form>
    </Container>
  )
}

export default SearchBar
