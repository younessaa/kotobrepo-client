import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './BookCard.css'

const BookCard = ({image, title, price, library_name}) => {
  return (
    <Container className='library inter-font text-center'>
      <img src={image} className="bookCardImage" alt="book image" />

      <div className='bookCardTitle'>
        {title}
      </div>
      <Container className='mt-2'>
        <Row>
            <Col xs={8} className='bookCardLibName'>
                {library_name} (Library)
            </Col>
            <Col xs={4} className='bookCardPrice'>
                <sup>$</sup>{price}
            </Col>
        </Row>  
      </Container>
    </Container>
  )
}

export default BookCard
