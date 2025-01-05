import React from 'react';
import InnerBanner from './InnerBanner'
import McGill from '../assets/images/mcGill.png'
import ipl from '../assets/images/IPL-Logo-Final.png'
import UNCHK from '../assets/images/Logo_UNCHK.png'
import fafa from '../assets/images/fafa.png'
import Card from 'react-bootstrap/Card';
import PG from '../assets/images/performances-group.jpg'
import Qb from '../assets/images/logoQB1.png'
import image1 from '../assets/images/image-1.jpg'  
import image2 from '../assets/images/image-2.jpg'
import image3 from '../assets/images/image-3.jpg' 
const About = () => {
  return ( 
  <>
     
   <InnerBanner />
    <section className="presentation pt-5">
      <div class="container">
      <h2 className='heading mb-sm-2 mb-2'>À propos</h2>
      <h3 className="mt-sm-3 mb-3">Survol de la Société </h3>
      <div class="lightbox" data-mdb-lightbox-init>
      <div class="row">
    <div class="col">
      <h2 className="heading bg">Découvrir notre parcours, qui sommes-nous !</h2>
    </div>
    <div class="col">
    <div class="row align-items-center">
    <div class="col-lg-6">
      <img
        src={image1}
        alt="Table Full of Spices"
        class="w-100 mb-2 mb-md-4 shadow-1-strong rounded"
      />
      <img
        src={image3}
        alt="Coconut with Strawberries"
        class="w-100 shadow-1-strong rounded"
      />
    </div>
    <div class="col-lg-6">
      <img
        src={image2}
        data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Vertical/1.webp"
        alt="Dark Roast Iced Coffee"
        class="w-100 shadow-1-strong rounded"
      />
    </div>
  </div>
    </div>
   
  </div>
      
      
 
</div>
       
        <p>
        <b>Dakarbiodiversité</b> (abr. DakBio) est une société à responsabilité limitée (S.A.R.L) régie par la loi sur les sociétés 
        privées au Sénégal. Elle est constituée depuis Janvier 2019 (RC:SN DKR 2023 M 12461 ; NINEA 007170765 1C). 
        Malgré cette deuxième constitution légale récente, elle existait comme société unipersonnelle depuis 2013. 
        Elle est représentée par Monsieur Ouessou Cherif Aidara,  son   fondateur   et   directeur  général.   
        Les   activités   de  la   Société   sont   principalement orientées vers quatre (4) secteurs :
        </p>
       
        <div className='row my-3'>
          <div className='col-md-3 same-height'>
          <Card border="Dark" bg="Dark">
          <Card.Body>
          <Card.Text>
          Protection, Gestion et Commercialisation de la Propriété Intellectuelle dans tous les secteurs de la vie humaine.
               </Card.Text>
             </Card.Body>
           </Card>
          </div>
          <div className='col-md-3 same-height'>
           <Card border="Dark" bg="Dark">
            <Card.Body>
             <Card.Text>
              Amélioration   des   chaînes   de   valeur   dans   les   secteurs   de   la   transformation industrielle,   
              (agriculture,   agroalimentaire   et   des   produits   agro-industriels, énergie et mines).
              </Card.Text>
             </Card.Body>
           </Card>
          </div>
          <div className='col-md-3  same-height'>
          <Card border="Dark" bg="Dark">
          <Card.Body>
          <Card.Text>
             Représentation de marques – Renforcement du tissu industriel en Afrique.
             </Card.Text>
             </Card.Body>
           </Card>
          </div>
          <div className='col-md-3 same-height'>
          <Card border="Dark" bg="Dark">
            <Card.Body>
             <Card.Text>
             Valorisation des biomasses agricoles et marines dans une perspective alimentaire et d’amélioration du bien-être des populations - Valorisation des écosystèmes terrestres et marins.
               </Card.Text>
             </Card.Body>
           </Card>
          </div>
    </div>
    <div className="my-3">
        <h3 class="mt-sm-3">Mission </h3>
        <p>Notre mission est d’accompagner les entreprises dans la conception de nouveaux produits et/ou le développement/l'amélioration de produits existants à travers la mise en place d’un plan rigoureux de  recherche et  développement  et d’un  plan  de  protection  et de  commercialisation  de leur propriété intellectuelle. </p>
            <p>Dakarbiodiversité   s’est   également   donnée   comme   mission   d’accompagner   les   structures   de recherche 
            (instituts de recherche, universités…) en leur apportant toute son expertise dans les stratégies   de   protection   et   
            d’optimisation   de   la   valorisation   de   leur   propriété   intellectuelle (brevet, droits d’auteurs…) découlant des 
            travaux de recherche à travers l’octroi de droits de licence d’exploitation à des entreprises tierces ou grâce à la création de spin-offs. 
            </p>
            </div>
            <h3 class="mt-sm-3"> Vision </h3>
            <p>Notre vision est de devenir un acteur important dans le secteur de la transformation industrielle   en   Afrique.   
            Notre   domaine   d’intervention   concerne   à   la   fois   l’appui technique et le soutien légal aux 
            professionnels des secteurs stratégiques de l’énergie des mines, de l’agriculture, l’agroalimentaire et des produits agro-industriels.</p>
            <p>Nous   avons   développé   un   large   éventail   d’activités   tels   1)   le   renforcement   des capacités   des   
            professionnels   des   secteurs   sus-mentionnés   (innovateurs, entrepreneurs…) à travers la formation sur les conditions 
            optimales de valorisation des   innovations   pour   leur   intégration   dans   les   entreprises   africaines   grâce   à   
            une adoption,   implantation   et   généralisation ;   2)   le   transfert   de   technologies   dans   le secteur de l’agroalimentaire 
            avec l’adoption par les producteurs de volailles et de bétail d’une formule de zéolite pour l’amélioration de la santé et la croissance 
            des animaux ;   et   3)   le   développement   de   formules   de   bio   fertilisants   destinés   à l’agriculture.</p>
            <h3 class="mt-sm-3">Nos valeurs </h3> 
            <p>Nos  valeurs   nous unissent et   sont  le secret   de  liens forts au sein de notre  équipe. Elles  orientent  
            nos actions, nos  choix et  nos solutions  devant tous  les défis. Chez Dakarbiodiversité, les leaders à qui nous 
            confions la responsabilité de prendre des décisions stratégiques ont à cœur d’incarner ces valeurs et de favoriser la 
            confiance, la collaboration et l’innovation.</p>
          <h3 class="mt-sm-3">Partenaires stratégiques</h3>
          <p>Pour mener ses différents projets à terme, Dakarbiodiversité a établi un réseau de partenariats tant au niveau national 
          (entreprises privées; université et centres de recherches) qu’au niveau international (Université McGill et Centre Hospitalier 
          Universitaire Ste Justine– Canada). Ce partenariat   permet   à   la   Société   d’élaborer   des   projets   de   recherche   
          conjoints   sur   le développement de formulations de biofertilisants. D’autres formes de partenariat stratégique plutôt   orientées   
          vers   la   représentation   de   marques  et/ou  la   distribution   des   produits   sont   en développement.
          </p>
          <div className="image-gallery">
            <img src={McGill} alt="McGill" className="mr-1" style={{ width: '15%', height: '15%' }} />
            <img src={ipl} alt="ipl" className="mr-1" style={{ width: '10%', height: '10%' }} />
            <img src={UNCHK} alt="UNCHK" className="mr-1" style={{ width: '25%', height: '25%' }} />
            <img src={fafa} alt="Fafa" className="mr-1" style={{ width: '10%', height: '10%' }} />
            <img src={PG} alt="Performances Group" className="mr-1" style={{ width: '15%', height: '15%' }} />
            <img src={Qb} alt="Quebec Biodiversite" style={{ width: '20%', height: '20%' }} />
          </div>

      </div>
    </section>
   
    </>
   );
}
 
export default About;