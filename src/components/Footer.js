import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (  
    <footer className="footer text-center py-md-5 pt-4 pb-5">
      <Card className="bg-dark text-white">
      {/* <Card.Header>Featured</Card.Header> */}
      <Card.Body>
        <Card.Title>Dakarbiodiversité S.A.R.L</Card.Title>
        <Card.Text>
        <ul class="list-w3">
					<li><span class="fa mr-1 fa-map-marker"><FaMapMarkerAlt /></span>Siège : Villa BD 01 – CITE AKYS – Bambilor – Rufisque - Dakar - Sénégal </li>
					<li class="my-2"><span class="fa mr-1 fa-phone"><FaPhoneAlt /></span>+1 514 953 3356 (whatsapp) / +221 70 678 02 66 / +221 77 555 95 04</li>
					<li class=""><span class="fa mr-1 fa-envelope"><FaEnvelope /></span><a href="mailto:info@example.com"> dakarbio@dakarbiodiversite.com</a></li>
				</ul>
        Appui-conseil et Stratégies dans le domaine de l’agriculture, 
de l’agro-industrie et de la production animale.
        </Card.Text>
        <Button variant="primary">Plus de détails</Button>
      </Card.Body>
      <Card.Footer className="text-muted">© 2022 Demand. All rights reserved | Design by FM-Tech Inc.</Card.Footer>
    </Card>
  </footer>
  );
}
 
export default Footer;