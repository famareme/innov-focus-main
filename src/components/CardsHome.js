import Card from 'react-bootstrap/Card'

const CardsHome = () => {
  return ( 
    <div className='row justify-content-md-center'>
     <Card className="col col-lg-3">
        <Card.Body>
          <Card.Title>Protection, gestion et commercialisation</Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>
          Nous accompagnons les structures de recherche (universités, instituts de recherche et centres de développement…) en leur apportant toute notre expertise dans les stratégies de protection et d’optimisation de la valorisation de leur propriété intellectuelle (brevet, droits d’auteurs, marques de commerce…) découlant de leurs travaux de recherche à travers 
          l'octroi de droits de licence d'exploitation à des entreprises tierces ou grâce à la création de spin-offs.
          </Card.Text>
          <Card.Link href="#">Lire Plus</Card.Link>
        </Card.Body>
    </Card>
    <Card className="col col-lg-3 mr-2">
        <Card.Body>
          <Card.Title> Agriculture innovante et durabe orientée vers les fertilisants verts </Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>
          <p>Nous exploitons les enseignements d’un brevet intitulé :<i> «  Biofertilizer composition and uses  thereof  »</i>.   
          Cette   technologie  essentiellement   basée   sur   les   techniques  de   recolonisation,   
          de régénération et de fertilisation des sols arides, semi-fertiles et fertiles va permettre la production d'une variété de biofertilisants
          à base de zéolite (argile) qui sera proposée aux entreprises en agroforesterie, agriculture biologique (grandes cultures et maraichage…).</p>
          </Card.Text>
          <Card.Link href="services/#service-2">Lire Plus</Card.Link>
        </Card.Body>
    </Card>
      <Card className="col col-lg-3 mr-2">
        <Card.Body>
          <Card.Title> Une solution souple et efficace </Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <Card.Text>
            <p>Le bureau de représentation est une solution souple et efficace. Structure flexible et légère, le bureau de liaison ou 
            de représentation ne dispose pas, à l'inverse d'une filiale, d'entité juridique et fiscale propre.</p>
            <p>Une fois votre décision clairement prise, Dakar Biodiversité peut vous accompagner dans les démarches administratives pour donner naissance à votre bureau de représentation commerciale.</p>
          </Card.Text>
          <Card.Link href="services/#service-1">Lire Plus</Card.Link>
        </Card.Body>
      </Card>
      
   
    </div>
   );
}
 
export default CardsHome;