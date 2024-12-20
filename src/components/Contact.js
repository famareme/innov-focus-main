import React, { useState } from 'react'
import InnerBanner from "./InnerBanner";
import ContactContenu from './ContactContenu'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';
import Modal from 'react-bootstrap/Modal'


const Contact = () => {
	const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
	const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
	const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

	const  handleSubmit =  (e) => {
		e.preventDefault()
		emailjs.sendForm('service_l9gg0lb', 'template_s3bakkg', e.target, 'user_KRpeoognFgW3WRNMeWQPs')
		.then((result) => {
			console.log(result.text);
			handleShow()
				setSubject('')
				setPhone('')
				setFullName('')
				setEmail('')
				setMessage('')
		}, (error) => {
				console.log(error.text);
		});
	
	}
  return ( 
		<>
    <InnerBanner />
    <section id='contact' className='container py-sm-5'>
			 <h2 className="heading mb-sm-5 mb-4">Communiquer avec<strong> nous </strong></h2>
			 <div className="row">
				 <ContactContenu />
			 <div className="col-lg-4 col-md-6 contact-form mt-md-0 mt-4">
   			 <h4 class="mb-sm-4 mb-3 w3f_title">Formulaire de contact</h4>
				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="subject">
						<Form.Label>Sujet</Form.Label>
						<Form.Control 
						type="text" 
						placeholder="Sujet" 
						value= { subject }
						name="subject"
						onChange = { (e) => setSubject(e.target.value)}
						required
						/>
					</Form.Group>
					<Form.Group controlId="fullName">
						<Form.Label>Nom</Form.Label>
						<Form.Control 
						type="text" 
						placeholder="Nom" 
						name="fullName"
						value= { fullName }
						required  
						onChange = { (e) => setFullName(e.target.value)}
						/>
					</Form.Group>
					<Form.Group controlId="phone">
						<Form.Label>Téléphone</Form.Label>
						<Form.Control 
						type="tel" 
						placeholder="Téléphone" 
						name="phone"
						pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
						value= { phone }
						onChange = { (e) => setPhone(e.target.value)}
						required 
						/>
					</Form.Group>
					<Form.Group controlId="email">
						<Form.Label>Adresse Email</Form.Label>
						<Form.Control 
						type="email" 
						name="email"
						placeholder="Entrer email" 
						value= { email }
						onChange = { (e) => setEmail(e.target.value)}
						required
						/>
						<Form.Text className="text-muted">
							Nous ne partagerons jamais votre email
						</Form.Text>
					</Form.Group>
				
					<Form.Group controlId="message">
						<Form.Label>Comment nous pouvons vous aidez?</Form.Label>
						<Form.Control as="textarea" 
						name="message"
						placeholder="Message"rows={3} 
						value= { message }
						onChange = { (e) => setMessage(e.target.value)}
						required
						/>
					</Form.Group>

					<Button variant="primary" type="submit">Envoyer</Button>
				</Form>
				<Modal show={show} onHide={handleClose}  aria-labelledby="contained-modal-title-vcenter"
      centered>
					<Modal.Header closeButton>
						<Modal.Title>Votre message a été envoyé avec succès</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>Merci d'avoir envoyé un message.</p>
						<p>Nous vous répondrons dans les plus bref délais.</p>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Fermer
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
			<div class="col-lg-4 mt-lg-0 mt-5 contact-map">
				<h4 class="mb-4 w3f_title">Position géographique</h4>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.4646938202036!2d-17.19332002489!3d14.799155285711098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1a3d6a699161b%3A0xfce2afc4b2952e66!2sBc92%20Cit%C3%A9%20Akys%20Bambilor!5e0!3m2!1sen!2sca!4v1733172344525!5m2!1sen!2sca" 
				width="100%" 
				height="95%" 
				style={{ border: 0 }}
				title="Bambilor map"
				allowfullscreen="" 
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				aria-hidden="false"
				tabIndex="0"/>
			</div>
		</div>
    </section>
		</>
   );
}
 
export default Contact;