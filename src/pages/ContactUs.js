import React, { useState } from 'react'
import { Form, Button, Container, Modal } from 'react-bootstrap'
import Footer from '../components/Footer/Footer'
import MainHeader from '../components/Header/MainHeader'
import '../styles/ContactUs.css'

const ContactUs = () => {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    object: "",
    message: ""
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleShow();
    setValues({
      firstName: "",
      lastName: "",
      email: "",
      object: "",
      message: ""
    });
  }

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  }
  return (
    <>
      <MainHeader title={"ContactUs"} />
      <div className="text-center">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="formGroup mb-3" controlId="firstName">
            <Form.Control type="text" placeholder="Fist Name" name="firstName" value={values.firstName} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="formGroup mb-3" controlId="lastName">
            <Form.Control type="text" placeholder="Last Name" name="lastName" value={values.lastName} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="formGroup mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" name="email" value={values.email} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="formGroup mb-3" controlId="object">
            <Form.Control type="text" placeholder="Object" name="object" value={values.object} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="formGroup message mb-3" controlId="message">
            <Form.Control as="textarea" type="text" placeholder="Message" name="message" value={values.message} onChange={handleChange} cols="40" rows="5" />
          </Form.Group>

          <button className='btn-send-cu' type="submit">
            Submit
          </button>
        </Form>
      </div>

      <Footer />


      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thanks !!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>We will get back to you soon</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ContactUs
