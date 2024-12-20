import React from 'react';
import InnerBanner from "./InnerBanner";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Valorisation from '../assets/images/Valorisation.jpg';
import ServicesDakbio from '../assets/images/ServicesDakbio.jpg'
import Agriculture1 from '../assets/images/agriculture.avif'

const Services = () => {
	return ( 
		<>
		<InnerBanner />
		<section id='services' className='container py-sm-5'>
		<div className="container">
          <h2 className='heading mb-sm-2 mb-2'>Découvrir nos services</h2>
          <div id="service-1" className="service-1">
            <h3 className="my-sm-3">Valorisation de la Propriété Intellectuelle</h3>
            <div className="mb-3">
              <img className="float-start me-3" style={{ width: 500, objectFit:' cover' }} src={Valorisation} alt="Intellectual Property" />
              <p>
                Le développement de la recherche et la promotion de l’innovation font partie des leviers du développement économique. 
                Les statistiques mondiales montrent que les pays qui érigent en priorité nationale la recherche scientifique et l’innovation 
				sont également les plus développés (États-Unis, Japon, Israël, etc.). Ces pays comptent, par ailleurs, le plus grand nombre 
				de prix Nobel  et/ou  de   brevets   d'invention.   Les   nouveaux   paradigmes   de   développement,   basés   sur l’économie
				de la connaissance et/ou la quatrième révolution industrielle, contribuent également à accorder à la recherche et à l’innovation
				une importance capitale. Compte tenu de tout ce qui est vient d’être rappelé, il n’est pas étonnant que la valorisation 
				des résultats de la recherche-innovation occupent une place de plus en plus importante dans les politiques de développement 
				et   dans   le   secteur   privé,   un   peu   partout   dans   le   monde   et   en   particulier   en   Afrique. 
                <a href="https://drive.google.com/file/d/1Ss3INPHSSQKkTmArkEToHX1S_Wp5KaUE/view?usp=drive_link" target="_blank" rel="noreferrer">
                  En savoir plus
                </a>
              </p>
            </div>
            <div>
              Nous offrons aux structures publiques et privées des services de protection et de commercialisation de leur propriété intellectuelle :
            </div>
            <ListGroup variant="flush" as="ol">
						<ListGroup.Item as="li" className="my-2">Revue diligente technico économique en prélude de la protection de la forme de PI dans les juridictions stratégiques 
						(OAPI/OMPI, USPTO, CIPO…) ;</ListGroup.Item>
						<ListGroup.Item as="li">Plan de marketing en vue de la commercialisation de la PI protégée.</ListGroup.Item>
						<ListGroup.Item as="li">Négociation   des   droits   d’exploitation   commerciale   de la   PI   (Option   & Licences).</ListGroup.Item>
						<ListGroup.Item as="li">Négociation des contrats industriels de développement technologique.Nous accompagnons les instituts de 
						recherche et les entreprises dans le renforcement de leur capacité en termes de formation continue sur la propriété 
						intellectuelle, sur la mise en place des conditions optimales de valorisation de ladite PI et sur l’adoption des 
						technologies au sein des entreprises pour une exploitation tout en maintenant les collaborations avec les structures de 
						recherche.</ListGroup.Item>
						<ListGroup.Item as="li"><a href="https://learningsystem.one/login/index.php" target="_blank" rel="noreferrer">MOOC sur la Propriété Intellectuelle </a></ListGroup.Item>
						<ListGroup.Item as="li"> <a href="https://learningsystem.one/login/index.php" target="_blank" rel="noreferrer">MOOC Transfert de Technologies et Contrôle de la Qualité</a></ListGroup.Item>
            </ListGroup>
						</div>
						<div id='service-2' className='service-2'>
						<h3 className="my-sm-3">Agriculture Innovante et Durable respectueuse de l’environnement</h3>
						<img className="float-end ms-3"  src={Agriculture1} alt="Agriculture"/>
							<p>
							 Dakarbiodiversité a développé un concept de biofertilisation en trois
							étapes qui vise à apporter une solution durable aux systèmes agricoles
							africains fortement affectés par une dégradation de la qualité des sols
							et par les changements climatiques.
							Les sols, les cultures et l’eau constituent les principales sources de
							revenus et de moyens de subsistance de la majorité de la population des
							pays en développement. Cependant, la dégradation de ces ressources
							naturelles est très préoccupante. Les zones agro-pastorales où
							l'agriculture est pratiquée sont parmi les zones les plus touchées par
							cette dégradation ; ce qui constitue une menace pour la sécurité
							alimentaire des groupes sociétaux les plus vulnérables, notamment les
							enfants, les jeunes filles et les femmes qui ont besoin d'accéder à des
							quantités adéquates d'aliments nutritifs indispensables à leur
							croissance. Cette détérioration menace également à long terme la
							sécurité alimentaire de l’ensemble de la population. Ainsi, dans le
							contexte de lutte pour la sécurité alimentaire et pour la santé
							publique, la qualité des sols et la fertilisation intelligente sont les
							principaux domaines pouvant mener à une agriculture durable.
							</p>
						</div>
			<div  id="service-3" className="service-3">
				<h3 className="mt-sm-3">Représentation   de   marques   et   renforcement   du   secteur industriel</h3>
				<div>
				<p>Nous proposons aux structures privées ou organisations non gouvernementales des services de représentation en leur  
				offrant un bureau  de représentation et autres  services  connexes  pour faciliter leur entrée et leur développement dans le 
				marché sénégalais et dans la sous-région.</p>
				 
				<img className="image-cover my-3" src={ServicesDakbio} alt="Services Dakbio"/>
				 </div>
				 <div>
				 <h4>Une solution souple et efficace :</h4> 
				 <ul className="list-item-service">
				 <li>Le bureau de  représentation  est  une solution souple  et  efficace.  Structure flexible et légère, le bureau de liaison 
				 ou de représentation ne dispose pas, à l'inverse   d'une   filiale,   d'entité   juridique   et   fiscale   propre.   
				 Dans   une   telle configuration, tous les contrats commerciaux doivent être établis au nom de l'entreprise mère. 
				 En revanche, cette forme d'implantation permet d'exercer des   fonctions   de   communication,   de   promotion,   de   
				 commercialisation (marketing),   ainsi   que   des   actions   d'encadrement   et   de   coordination   des partenaires locaux (sites de production ou revendeurs, par exemple).</li>
				 <li>
				 Par ailleurs, le bureau permet, même si l'engagement n'est pas aussi fort que pour une filiale, de jouir d'une présence 
				 directe sur le marché ciblé et de montrer son réel intérêt à s'implanter dans le pays. Un pied-à-terre qui peut rassurer et 
				 instaurer un climat de confiance. Cette démarche peut donc être intéressante pour la structure en question de faire ses premiers pas sur un marché sénégalais et de la CEDEAO. 
				 </li>
				 </ul>
				 </div>
				 <div>
				 <div className="my-3">
				 <h4>Appui   de   Dakarbiodiversité   dans   vos   procédures administratives</h4>
				 <p>
				 Une   fois   votre   décision   clairement   prise,   Dakar   Biodiversité   peut   vous accompagner dans les 
				 démarches administratives pour donner naissance à votre bureau de représentation commerciale.
				 </p>
				 </div>
				 </div>
				 <div>
					<h4>Faites de votre bureau un lieu stratégique et de Dakarbiodiversité un partenaire d’affaires local</h4>
					<p>Quel que soit le profil de la personne qui travaillera pour votre structure à partir du bureau de liaison, 
					vous devez savoir en faire un collaborateur autonome mais rigoureusement fidèle à votre stratégie. En effet, 
					votre collaborateur local sera chargé d’initier les contacts pertinents, de promouvoir vos activités, identifier 
					les opportunités (dans le cas de soumission a des appels d’offres et organiser les rencontres   nécessaires   avec   
					les   agents   officiels   de   l’Etat).   Dakarbiodiversité pourrait selon vos besoins offrir ce service selon des 
					termes de référence à définir et consigner dans un contrat de services (§.Annexe A). Dakarbiodiversité pourra vous aider
					à ajuster votre stratégie commerciale, votre politique tarifaire, mais aussi vos produits et jusqu'à leur emballage 
					(packaging). Cette présence de votre structure est stratégique à plusieurs égards. De manière non exhaustive, 
					elle permettra :</p>
					<div className='row my-3'>
					<div className='col-md-3 same-height'>
					 <Card border="Dark" bg="Dark">
						<Card.Body>
						 <Card.Text>
						 Une meilleure connaissance de la réalité locale ;
						 </Card.Text>
						 </Card.Body>
					 </Card>
					</div>
					<div className='col-md-3  same-height'>
					<Card border="Dark" bg="Dark">
					<Card.Body>
					<Card.Text>
					Positionnement de votre expertise et des technologies à faire connaitre et à commercialiser
					</Card.Text>
						 </Card.Body>
					 </Card>
					</div>
					<div className='col-md-3  same-height'>
					<Card border="Dark" bg="Dark">
					<Card.Body>
					<Card.Text>
					Identification   des partenaires   locaux   ayant   des   expertises complémentaires pour développer une masse critique
						qui pourrait faire la différence   dans   les   appels   d’offres   (gouvernement   sénégalais, Banque   Mondiale,   
						autres   représentations   internationales :   FMI, BAD…)
					</Card.Text>
						 </Card.Body>
					 </Card>
					</div>
					<div className='col-md-3  same-height'>
					<Card border="Dark" bg="Dark">
					<Card.Body>
					<Card.Text>
					Accroissement   de   votre   visibilité (vitrine   technologique)   pour   le Sénégal et pour la sous-région
					</Card.Text>
						 </Card.Body>
					 </Card>
					</div>
					</div>
					
					{/* <ul className="list-item-service">
						<li>une meilleure connaissance de la réalité locale ;</li>
						<li>positionnement de votre expertise et des technologies à faire connaitre et à commercialiser</li>
						<li>identification   des partenaires   locaux   ayant   des   expertises complémentaires pour développer une masse critique
						qui pourrait faire la différence   dans   les   appels   d’offres   (gouvernement   sénégalais, Banque   Mondiale,   
						autres   représentations   internationales :   FMI, BAD…)</li>
						<li> accroissement   de   votre   visibilité (vitrine   technologique)   pour   le Sénégal et pour la sous-région</li>
					</ul> */}
				 </div>
			</div>

			</div>
		 
		</section>
		</>
	 );
}
 
export default Services;