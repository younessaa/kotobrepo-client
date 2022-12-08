import React from 'react'
import Header from './Header'
import './MainHeader.css'

const MainHeader = ({title}) => {
  return (
    <div className='mainHeader'>
        <Header />
        <div className='title-header d-flex justify-content-center mb-2 mt-2'>
            <p className='font-kaushan text-center'>{title}</p>
        </div>
    </div>
  )
}

export default MainHeader
