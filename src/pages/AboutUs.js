import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../components/Footer/Footer'
import Logo from '../components/Header/Logo'
import MainHeader from '../components/Header/MainHeader'
import '../styles/AboutUs.css'

const AboutUs = () => {
  return (
    <>
      <MainHeader title={"AboutUs"} />
      <Container className='d-block text-center mb-5'>
        <div className='mt-2 mb-4 logoAboutUs'>
          <Logo />
        </div>
        <div className='aboutUsText inter-font'>
          Many libraries have created a presence on the Web, but have we really thought about why we want to be there? Should library Web sites be grounded in the past or look forward to the future, or both? This discussion group will focus on various issues related to the mission and role of the library Web site, including the following:
          <ul>
            <li>the different missions of academic, public, and special library Web sites</li>
            <li>how mission impacts the content of a Web site</li>
            <li>supporting the parent institution through the Web site</li>
            <li>the threefold mission of higher education</li>
            <li>the difference between the purpose and the function of a Web site</li>
            <li>the universal role of librarians as selectors, organizers, and disseminators as applied to the Web</li>
            <li>the future scope of library Web sites: gateway, surrogate, or virtual library?</li>
          </ul>
          Intended audience: anyone with an interest in library Web sites, especially those who wish to clarify the nature and purpose of their own library Web site.
          <br /> <br />
          Many libraries have created a presence on the Web, but have we really thought about why we want to be there? Should library Web sites be grounded in the past or look forward to the future, or both? This paper will focus on various issues related to the mission and role of the library Web site, including the topic of what a library Web site should look like if it is to be true to its mission and role.
        </div>

      </Container>
      <Footer />
    </>
  )
}

export default AboutUs
