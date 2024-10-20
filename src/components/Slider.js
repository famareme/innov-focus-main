import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'

const Slider = () => {
  return ( 
    <Carousel>
      <Carousel.Item>
        <Carousel.Caption>
          <h3 className="b-w3ltxt mt-md-4"> Agriculture <span>innovante et durabe</span></h3> 
          <h4 className="b-w3ltxt mb-md-4">Orientée vers les fertilisants verts</h4>
          <p>Notre vision englobe les futures pratiques agricoles orientées vers l'utilisation des fertilisants verts, 
            l'application des techniques intelligentes de fertilisation et la gestion regénérative des sols dans un contexte de changement climatique.</p>
            <div className="btn-wrapper  mt-md-4">
              <Button variant="outline-secondary mr-2" size="lg">Lire Plus</Button>
              <Button variant="primary" size="lg">Commencer</Button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

        <Carousel.Caption>
       <h3 className="b-w3ltxt mt-md-4">Représentation <span>de marques</span></h3> <h4 className="b-w3ltxt mb-md-4">Une solution souple et efficace</h4>
          <p>Nous proposons aux structures privées, gouvernementales et/ou non gouvernementales des services de représentation 
            en leur offrant un bureau de représentation et autres services connexes pour faciliter leur entrée et leur développement
             dans le marché sénégalais et dans la sous-région.</p>
             <div className="btn-wrapper  mt-md-4">
              <Button variant="outline-secondary mr-2" size="lg">Lire Plus</Button>
              <Button variant="primary" size="lg">Commencer</Button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3 className="b-w3ltxt mt-md-4">
          Gestion de la <span>Propriété Intellectuelle</span></h3>
          <h4 className="b-w3ltxt mb-md-4">Protection et mise en valeur de vos inventions</h4>
          <p>onec consequat sapien ut leo cursus rhoncus. Nullam dui mi, vulputate ac metus semper Nullam dui mi. Vestibulum ante ipsum primis 
            in faucibus orci luctus et ultrices posuere cubiliacurae, Curabitur quis luctus lectus. Morbi at dui nisl.</p>
            <div className="btn-wrapper  mt-md-4">
              <Button variant="outline-secondary mr-2" size="lg">Lire Plus</Button>
              <Button variant="primary" size="lg">Commencer</Button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   );
}
 
export default Slider;