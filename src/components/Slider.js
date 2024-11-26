import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'

const Slider = () => {
  return ( 
    <Carousel>
      <Carousel.Item>
        <Carousel.Caption>
          <h3 className="b-w3ltxt mt-md-4">
           <span>Propriété Intellectuelle</span></h3>
          <h4 className="b-w3ltxt mb-md-4">Protection, gestion et commercialisation</h4>
          <p>Nous accompagnons les structures de recherche (universités, instituts de recherche et centres de développement…) en leur apportant toute 
          notre expertise dans les stratégies de protection et d'optimisation de la valorisation de leur propriété intellectuelle (brevet, droits d'auteurs, marques de commerce…) 
          découlant de leurs travaux de recherche à travers l'octroi de droits de licence d'exploitation à des entreprises tierces ou grâce à la création de spin-offs.</p>
            <div className="btn-wrapper  mt-md-4">
              <Button variant="outline-secondary mr-2" size="lg">Lire Plus</Button>
              <Button variant="primary" size="lg">Commencer</Button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3 className="b-w3ltxt mt-md-4"> Agriculture <span>innovante et durabe</span></h3> 
          <h4 className="b-w3ltxt mb-md-4">Orientée vers les fertilisants verts</h4>
          <p>Notre vision englobe les futures pratiques agricoles orientées vers l'utilisation des fertilisants verts, 
            l'application des techniques intelligentes de fertilisation et la gestion regénérative des sols dans un contexte 
            de changement climatique.</p>
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
    
    </Carousel>
   );
}
 
export default Slider;