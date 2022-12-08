import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import BookCard from '../components/Book/BookCard';
import Footer from '../components/Footer/Footer';
import MainHeader from '../components/Header/MainHeader'
import { getBooksData } from '../global/data/booksData'

const Books = () => {
  const books = getBooksData();
  return (
    <>
      <MainHeader title={"Books"} />
      <Container>
        <Row>
          {
            books.map((book) => {
              return (
                <Col xs={3}>
                  <BookCard 
                    image={book.image}
                    title={book.title}
                    library_name={book.library_name}
                    price={book.price}
                  />
                </Col>
              )
            })
          }
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Books
