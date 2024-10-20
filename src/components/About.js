import InnerBanner from './InnerBanner'
const About = () => {
  return ( 
  <>
     
   <InnerBanner />
    <section className="presentation pt-5">
      <div class="container">
        <img src={require('../assets/images/about.jpg').default}
        className=" float-left w-50 mr-4" alt="Dakar bio" />
        <p>
        Dakar Biodiversité (abr. DakBio) est une société à responsabilité limitée (S.A.R.L) régie 
        par la loi sur les sociétés privées au Sénégal. Elle est constituée depuis Janvier 2019. Malgré cette deuxième constitution légale récente, elle existait comme société unipersonnelle depuis 2013. Elle est représentée par Monsieur Ouessou Cherif Aidara, son fondateur et directeur général. Les activités de la Société sont principalement orientées vers quatre (4) secteurs:
        </p>
        <ul className='content-match'>
						<li> Amélioration des chaînes de valeur dans les secteurs de l’agriculture, de l’agroalimentaire et des produits agroindustriels;</li>
						<li>Valorisation des biomasses agricoles et marines dans une perspective alimentaire et d’amélioration du bien-être des populations - Valorisation des écosystèmes terrestres et marins.</li>
						<li>Protection et Gestion de la Propriété Intellectuelle;</li>
						<li>Representation de marques.</li>
        </ul>
        <h3 class="mt-sm-3">Vision</h3>
        <p>La vision de Dakar Biodiversité est de devenir un acteur important dans le secteur de l’Agriculture et 
						de l’Agroalimentaire au Sénégal et en Afrique. Son domaine d’intervention concerne à la fois l’appui technique et le support légal aux professionnels de ces secteurs. </p>
            <p>L’expertise existante au sein de Dakar Biodiversité a permis à la Société de développer un large éventail d’activités tels 1) 
						le support technique aux agriculteurs/organisations de producteurs à travers l’utilisation de biofertilisants verts pour accroître 
						leur rendement de production et 2) l’appui-conseil aux acteurs de l’agroalimentaire dans le processus de protection et de commercialisation de leurs inventions (créations, innovations, découvertes…).
					</p>
          <h3 class="mt-sm-3">Partenaires stratégiques</h3>
          <p>Pour mener ses différents projets à terme, Dakar Biodiversité a établi un réseau de partenariats tant au niveau national (entreprises privées; université et centres de recherches) qu’au niveau international 
						(Université McGill et Centre Hospitalier Universitaire Ste Justine– Canada).  Ce partenariat permet à la Société d’élaborer des projets de recherche conjoints sur le développement de formulations de biofertilisants. 
						D’autres formes de partenariat stratégique plutôt orientées vers la représentation de marques et/ou la distribution des produits sont en développement.</p>
      </div>
    </section>
   
    </>
   );
}
 
export default About;