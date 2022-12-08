import React from 'react';
import { Container, Row, Col, NavDropdown, Form, Button} from 'react-bootstrap';
import './Book.css';
import { FaPhoneAlt, FaMapMarked } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

const Book = ({image, title, author, library_name, price, library_phone, library_adress, lang, quantity}) => {
  return (
    <Container className='book'>
      <Row>
        <Col xs={3}>
            <img src={image} className="bookImage" />
        </Col>
        <Col xs={9} className="mt-2 ">
            <div className='bookTitle'>
                {title}
            </div>
            <div className='bookAuthor'>
                by {author} (Author)
            </div>
            <Container className='libraryDetails'>
                <Row>
                    <Col xs={5}>
                        <Row>
                            <Col xs={3}>
                                <div className='bookValue'>
                                    Library:
                                </div>
                            </Col>
                            <Col xs={9} className='bookLibrary'>
                                <div>
                                    {library_name} 
                                </div>
                                <div>
                                    <FaPhoneAlt className='faIcon'/> {library_phone}
                                </div>
                                <div>
                                    <FaMapMarked className='faIcon'/> {library_adress} 
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={2}>
                        <div className='bookValue'>
                            Qunatity:
                        </div>
                        <div className='bookLabel'>
                            {quantity}
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className='bookValue'>
                            <BiWorld />
                        </div>
                        <div className='bookLabel'>
                            {
                                lang === "en" ?
                                "English" : "Arabic"
                            }
                        </div>
                    </Col>
                    <Col xs={2}>
                        <div className='bookValue'>
                            Price
                        </div>
                        <div className='bookPrice'>
                            <sup>$</sup>{price}
                        </div>
                    </Col>
                </Row>
            </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Book
