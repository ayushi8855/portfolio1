import React from 'react'
import { Container } from 'react-bootstrap'
import Address from '../Components/Address/Address'
import Form from '../Components/Form'


function Contact() {
    return (
        <Container id="contact" >
         <Address/>
         <Form/>
      </Container>
    )
}

export default Contact