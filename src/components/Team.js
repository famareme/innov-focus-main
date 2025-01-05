import React from 'react';
import InnerBanner from './InnerBanner'
import Cherif from '../assets/images/cherif.jpg'
import Fatou from '../assets/images/fatou.jpg'
import Guibril from '../assets/images/guibril.jpg'
import Aissatou from '../assets/images/aissatou.jpg'
import Kandji from '../assets/images/kandji.jpg'
const Team = () => {
  return ( 
  <>
     
   <InnerBanner />
    <section className="team pt-5">
      <div class="container px-5">
    <h2 class='heading mb-sm-2 mb-2'>Rencontrer notre équipe</h2>
<p>Expérience, innovation et réussite.</p>
<br/>

<div class="team-content">
      <img src={Cherif} alt="cherif" />
      <div className="header"><h3>Mr. Cherif Aidara </h3>
        <div class="title">Fondateur et Directeur Général</div> </div>
        </div>
        <p><b>Mr. Cherif Aidara Aidara</b> est le fondateur de la Société et un véritable chantre d’une agriculture africaine durable, régénérative et responsable essentiellement basée sur l’utilisation des ressources biologiques saines et fonctionnelles. Ses expériences de travail et de collaboration scientifique en Afrique (Sénégal, Maroc, Mauritanie, Kenya, Malawi…) en Europe (France, aux Pays bas, Danemark) et en Amérique du Nord (Canada) l’ont permis de comprendre les métamorphoses importantes qui se sont opérées dans le domaine de l’agriculture lors des vingt dernières années avec une intégration des technologies de pointe dans ce secteur. </p>
<p>Dans Dakarbiodiversité, Mr. Aidara poursuit la vision d’une société qui contribue au développement d’une agriculture responsable, la culture d’une société basée sur le savoir et son transfert vers les producteurs et la valorisation de la propriété intellectuelle.  
Mr. Aidara est titulaire d’un doctorat en biologie et biotechnologies et œuvre dans le domaine de la valorisation de la recherche et du financement des entreprises canadiennes depuis plus de vingt ans. Il facilite des collaborations stratégiques entre Dakarbiodiversité et les partenaires externes.

</p>
        {/* <p><Button variant="primary">Contact</Button>{' '}</p> */}
       
      <hr/>
   

      <div class="team-content">
      <img src={Guibril} alt="Guibril" />
      <div className="header">
        <h3>Mr. Guibril Diagne </h3>
        <div class="title">Directeur des opérations logistiques - Comptabilité </div>
        </div>
      </div>
        <p><b>Mr. Guibril Diagne</b> a intégré la société Dakarbiodiversité depuis 2016 et s’occupe de l’implémentation des systèmes d’information dans les opérations logistiques, comptables et de gestion des stocks de produits. En sa qualité de directeur des opérations, Mr. Diagne apporte une vingtaine d’années d’expérience acquises respectivement dans les sociétés industrielles au Sénégal, en Côte-d’Ivoire et au Maroc. </p>
        <p>Mr. Diagne détient une Maitrise d’Informatique Appliquée à la Gestion avec une spécialisation en Conception, Audit, Management du Risque, réseaux et système d’information.
        </p>
        {/* <p><Button variant="primary">Contact</Button>{' '}</p> */}
        <hr/>
  
        <div class="team-content">
          <img src={Aissatou} width={100} height={150}  style={{objectFit: 'cover', objectPosition:'top'}}alt="Aissatou" />
          <div className="header">
            <h3>Mme Aissatou Tall </h3>
            <p class="title">Directrice Marketing et Stratégies</p>
          </div>
      </div>
        <p><b>Mme Aissatou Tall</b> a été une collaboratrice très active de Dakarbiodiversité depuis ses débuts. Elle a accompagné la haute direction dans ses orientations stratégiques en matière de « branding et marketing » des formules en agriculture et en produits destinés à l’aviculture. Avant de rejoindre la société en tant que directrice Marketing et Strategies, Mme Tall a été un un élément indispensable dans la mise en place et dans l’encadrement des opérations collectives proposées par les Chambres Commerciales Internationales de Normandie pour accompagner les entreprises Normandes à trouver des débouchés à l’International et particulièrement en Afrique de l’Ouest, Centrale et à Madagascar. Elle a accompagné plusieurs eentreprises à des conventions : Affaires Futurallia en France 2107, Africallia Burkina Faso février 2018, Côte d’Ivoire 2019 ; Entreprendre avec l’Afrique France 2019 et « In Normandy et Salons Industries du Futur » en 2019.</p>   
<p>Mme Tall est titulaire d’une Maitrise ès Sciences Economiques, d’un D.E.S.S (Diplôme d’Etudes Supérieures Spécialisées en Sciences de Gestion à l’I.A. E de l’Université de Rouen, et du Master Grande Ecole à l’Ecole Supérieure de Commerce de Rouen (Rouen Business School) depuis 2011.
</p>
        {/* <p><Button variant="primary">Contact</Button>{' '}</p> */}
        <hr/>

        <div class="team-content">
      <img src={Fatou} alt="Fatou" width={100} height={100}/>
      <div className="header">
        <h3>Mme Fatou M. Seck </h3>
        <div class="title">Directrice Développement des solutions numériques
        </div>
        </div>
      </div>
        <p>En sa qualité de directrice de développement de solutions numériques, <b>Mme Fatou Seck</b> apporte au sein de Dakarbiodiversité une expérience riche d’une quinzaine d’années acquises respectivement dans les compagnies canadiennes (SNC Lavallin Inc. CGI, Logient Inc.) et américaine (CIENA Networks). Son rôle dans la Société est l’élaboration et la mise en œuvre de sites et d’applications web innovantes pour optimiser les paramètres de production en agriculture et en élevage. Sous son leadership, Mme Seck établira une collaboration étroite avec l’équipe de R&D durant tout le processus depuis la conception UX/UI jusqu’au déploiement des applications web en passant par l’analyse, le développement et la validation.<p/>
<p>Mme Seck est titulaire d’un diplôme d’ingénieur technologue en informatique et possède une expérience en analyse, conception et développement de sites et d’application web destinée à une large gamme d’utilisateurs.</p></p>
        {/* <p><Button variant="primary">Contact</Button>{' '}</p> */}
        <hr/>

        <div class="team-content">
      <img src={Kandji} width={100} height={100} alt="Guibril" />
      <div className="header">
        <h3>Mr. Serigne T. Kandji </h3>
        <div class="title">Responsable R&D – Appui conseil agronomique
        </div>
        </div>
      </div>
        <p>
M. Serigne T. Kandji a entamé sa collaboration avec Dakarbiodiversité depuis 2017 comme consultant externe. Il a activement participé à plusieurs notes conceptuelles soumises par la société en réponse à des appels à projets internationaux en collaborations d’autres institutions comme l’Université McGill (Canada) OCP/UM6P (Maroc), CNCR (Sénégal). Sa maitrise de l’agriculture africaine et de ses orientations telles que définies par la Conférence des Chefs d’états constitue un atout majeur pour Dakarbiodiversité dont l’appui conseil aux producteurs représente une pierre angulaire. En tant que responsable R&D et appui-conseil agronomique dans Dakarbiodiversité, Mr. Kandji apporte une expérience de plus d’une vingtaine d’années dans le domaine de l’accompagnement technique des organisations paysannes avec le Programme détaillé de développement de l’agriculture africaine (PDDAA) et l’appui au comite interprofessionnel du riz (CIRIZ) et dans l’exécution de nombreuses études et affectations de l’Université Columbia, de l’Université George Washington et John Hopkins.</p>
<p>Mr. Kandji est titulaire d’un diplôme d’ingénieur agronome et d’un doctorat en agroécologie et est très actif dans le développement des smart-villages au Sénégal. 
</p>
    {/* <p><Button variant="primary">Contact</Button>{' '}</p> */}
  </div>

    </section>
    </>
   );
}
 
export default Team;