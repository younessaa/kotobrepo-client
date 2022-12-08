import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer/Footer';
import MainHeader from '../components/Header/MainHeader'
import LibraryCard from '../components/Library/LibraryCard';
import { getLibrariesData } from '../global/data/librariesData'

const Libraries = () => {
  const libraries = getLibrariesData();
  return (
    <>
      <MainHeader title={"Libraries"} />
      <Container>
        <Row>
          {
            libraries.map((library) => {
              return (
                <Col xs={3}>
                  <LibraryCard 
                    library_image={library.image}
                    library_name={library.name}
                    library_phone={library.phone}
                    library_adresse={library.adress}
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

export default Libraries
