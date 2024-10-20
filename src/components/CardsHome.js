import Card from 'react-bootstrap/Card'

const CardsHome = () => {
  return ( 
    <div className='row justify-content-md-center'>
      <Card className="col col-lg-3 mr-2">
        <Card.Body>
          <Card.Title> Une solution souple et efficace </Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>
            Le bureau de représentation est une solution souple et efficace. Structure flexible et légère, le bureau de liaison ou de représentation ne dispose pas, à l'inverse d'une filiale, d'entité juridique et fiscale propre.
          </Card.Text>
          <Card.Link href="services#service-1">Lire Plus</Card.Link>
        </Card.Body>
      </Card>
      <Card className="col col-lg-3 mr-2">
        <Card.Body>
          <Card.Title>Appui de Dakar Biodiversité dans vos procédures administratives </Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>
          Une fois votre décision clairement prise, Dakar Biodiversité peut vous accompagner dans les démarches administratives pour donner naissance à votre bureau de représentation commerciale. 

          </Card.Text>
          <Card.Link href="services#service-2">Lire Plus</Card.Link>
        </Card.Body>
    </Card>
    <Card className="col col-lg-3">
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Card.Link href="#">Lire Plus</Card.Link>
        </Card.Body>
    </Card>
    </div>
   );
}
 
export default CardsHome;