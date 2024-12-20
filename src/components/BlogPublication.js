import React from 'react';
import InnerBanner from "./InnerBanner";
import IntellectualProperty from '../assets/images/Intellectual-property.jpg';
import propreteIntellectual from '../assets/docs/Descriptif-valorisation-propriete-intellectuelle-simplifiee.pdf';
// import agriculture from '../assets/images/agriculture.jpg';
import zeosen from '../assets/docs/Brochure-zeolite-2-pour-la-volaille.pdf';
import volaille from '../assets/images/volaille.jpg';
import zeolite1 from '../assets/docs/Dossier+Bovin+avec+les+droits+reserves[1].pdf';
import volaille1 from '../assets/images/image-5.jpg';
import zeosen1 from '../assets/docs/Effect-of-long-term-dietary-supplementation-with-clinoptiloliteon-the-poultry.pdf';
import agriculture1 from '../assets/images/image-6.jpg';
import Publication1 from '../assets/images/publication1.JPG';
import Publication2 from '../assets/images/publication2.JPG';
import Publication3 from '../assets/images/publication3.JPG';
import BlogCard from './BlogCard';
import PublicationCard from './PublicationCard';


const blogs = [
  {
    title: 'Descriptif sur la valorisation de la propriété intellectuelle',
    description:
      'Le développement de la recherche et la promotion de l’innovation font partie des leviers du développement économique...',
    link: propreteIntellectual,
    image: IntellectualProperty,
  },
  {
    title: 'ZEOSEN™ : Complément alimentaire pour l’aviculture.',
    description:
      'Apports minéraux garantis à 100 %. Zeosen™ est une poudre d’argile riche en minéraux essentiels...',
    link: zeosen,
    image: volaille,
  },
  {
    title: 'Résumé des recherches scientifiques sur l’utilisation de la Zéolite',
    description:
      'Un certain nombre d’éléments inorganiques sont essentiels à la croissance et à la reproduction chez les animaux...',
    link: zeolite1,
    image: agriculture1,
  },
  {
    title: 'Effects of long-term dietary supplementation with clinoptilolite',
    description:
      'Zeolites are crystalline, hydrated aluminosilicates of alkali and alkaline earth cations which possess three-dimensional crystal structures...',
    link: zeosen1,
    image: volaille1,
  },
];

const publications = [
  {
    title: 'Atelier de capitalisation des resultats issus du Projet VARRIWA - AUF/EU/OEACP-RI',
    text:
      'L’atelier de capitalisation qui s’est tenue à Cotonou du 7 au 11 octobre 2024 avait pour objectifs principaux: 1) de présenter les résultats obtenus pendant les quatre (4) années d’existence du projet VARRIWA, 2) de présenter les travaux de synthèse sur les 14 projets tiers effectués par l’équipe spécialisée en suivi-évaluation 3) de faire une synthèse des acquis tangibles obtenus, des jalons technologiques atteints ; mais aussi des défis rencontrés. Il était aussi question lors de cet atelier d’identifier les problématiques communes aux quatre pays (Benin, Burkina-Faso, Sénégal et Togo) relativement à la propriété intellectuelle et à sa valorisation. Quand bien même, le projet VARRIWA a : 1) permis la création de cinq incubateurs, un spin-off et un Fablab, 2) accompagné des innovateurs (start-ups), 3) soutenu financièrement des projets universitaires avec des niveaux de maturité technologique (NMT/TRL) avancés ; et facilité dans certains pays le renforcement des capacités des agences d’accompagnement, il n’en demeure pas moins que certaines initiatives de valorisation restent encore très timides. Ainsi, l’atelier de capitalisation constituait une opportunité pour regrouper toute la masse critique d’acteurs universitaires, innovateurs, agents d’accompagnement et des partenaires et pour leur apporter les outils nécessaires à une bonne valorisation de la propriété intellectuelle.',
    image: Publication1,
  },
  {
    title: 'Session de partage sur la monétisation des brevets',
    text:
      'La session a été animée par deux experts en valorisation, M. Souleymane KAMARA et M. Cherif AIDARA, qui ont chacun présenté avec brio des stratégies efficaces pour optimiser la rentabilité des brevets et exploiter pleinement les avantages associés. Les échanges qui ont suivi la présentation ont mis en lumière la nécessité de créer d\'autres espaces de discussion permettant aux parties prenantes de débattre de sujets aussi cruciaux. Par ailleurs, il a été proposé de réexaminer la législation en vue de l’élaboration d’une loi sur le statut du chercheur, afin de clarifier les mécanismes de valorisation des résultats de recherche.',
    image: Publication2,
  },
  {
    title: 'Participants à l\'atelier',
    text:
      'L\'atelier a réuni plus de 90 participants, parmi lesquels des décideurs politiques, des représentants des collectivités locales, des chercheurs, des innovateurs, les agences de valorisation de la recherche-innovation des quatre pays partenaires (Bénin, Burkina Faso, Sénégal, Togo), ainsi que des représentants des Chambres de Commerce et d\'Industrie de ces pays. Étaient également présents des représentants de l\'Agence Universitaire de la Francophonie, de l’OEACP et de la Commission de l’Union Européenne, des tiers bénéficiaires, des recteurs d’universités, des bénéficiaires finaux, ainsi que des participants venant d’autres pays tels que la Côte d’Ivoire, le Canada, le Cameroun et la France.',
    image: Publication3,
  },
  {
    title: 'Visite du Laboratoire National de Recherches sur les Productions Végétales - ISRA - Dakar (Sénégal)',
    text:
      'Dans sa stratégie de développement de nouvelles générations de biofertilisants sains et fonctionnels pour l\'accroissement de la productivité des spéculations (en agriculture, horticulture, cultures en serres et en maraîchage), l\'équipe technico-économique de Dakarbiodiversité a rencontre les membres du Laboratoire National de Recherches sur les Productions Végétales et en l\'occurrence la Dre. Hassna Founoune-Mboup spécialiste en microbiologie des sols. Cette rencontre visait à établir une collaboration de recherches qui tienne compte des enseignements du brevet américain exploite par Dakarbiodiversité. L\'avènement de telles formulations de biofertilisants va contribuer au développement d\'une agriculture régénérative et respectueuse de l\'environnement.',
    image: './images/ISRA.jpg',
  },
  {
    title: 'Perspectives de collaboration',
    text:
      'Á l\'issue de la rencontre technico-économique, les deux structures comptent établir une convention de partenariat suivie d\'une feuille de route  pour des tests en serres avant un déploiement à grande échelle sur des périmètres plus larges (bassins expérimentaux pour la validation). L\'intégration des paramètres écophysiologiques et des caractéristiques édaphiques y compris les organismes mycorhiziens (AMF) ont été bien considérées lors des discussions.',
    image: './images/ISRA2.jpg',
  },
];
const BlogPublication  = () => {

  return ( 
    <>
     <InnerBanner />
     
     <section id="publications" className="container">
      <h2 className="heading  mb-2 pt-3">Nos dernières publications</h2>
      <div className='row mb-3 video-presentation text-center'>
        <h5 className='mb-3'>Actif intangible (brevet) dans l'évaluation intrinsèque de la valeur de l'entreprise  & Stratégie adoptée par les 
        entreprises pour accroitre leurs revenus tout en investissant dans le développement de la technologie protégée par brevet.</h5>
        <div className='col-md-6'>
          <video
            width="75%"
            height="100%"
            controls
            src="/presentation.mp4"
            preload="metadata"
            allowfullscreen
            >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='col-md-6'>
          <video
            width="75%"
            height="100%"
            controls
            src="/presentation2.mp4"
            preload="metadata"
            allowfullscreen
            >
            Your browser does not support the video tag.
          </video>
        </div>
       </div>
    <hr/>
      <div className="row mb-2 mt-3">
        {publications.map((publication, index) => (
          <PublicationCard key={index} {...publication} />
        ))}
      </div>
    </section>
     
     <section id="blog" className="container">
      <h2 className="heading mb-sm-5 mb-4 pt-3">Nos derniers articles</h2>
      <div className="row mb-2">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </section>

   
    
    
    </>
   );
}
 
export default BlogPublication;