import React from 'react'
import { Container } from 'react-bootstrap'
import { FaPhoneAlt, FaMapMarked } from "react-icons/fa"
import './LibraryCard.css'

const LibraryCard = ({library_image, library_name, library_phone, library_adresse}) => {
  return (
    <Container className='library inter-font text-center'>
      <img src={library_image} className="libraryImage" alt="library image" />

      <div className='libraryName'>
        {library_name}
      </div>
      <div className='libraryPhone'>
        <FaPhoneAlt /> {library_phone}
      </div>
      <div className='libraryAdresse'>
        <FaMapMarked /> {library_adresse}
      </div>
    </Container>
  )
}

export default LibraryCard
