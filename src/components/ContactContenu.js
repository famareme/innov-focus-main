
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookSquare, FaLinkedin, FaGooglePlusSquare, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactContenu = () => {
  return (
    <>
    <div className="col-lg-4 col-md-6 contact-address">
      <h4 className="mb-sm-4 mb-3 w3f_title">Nos coordonnées</h4>
      <ul className="list-w3">
        <li className="d-flex"><span className="fa mt-1 mr-1"><FaMapMarkerAlt /></span>Cité ISRA 2 Route des Hydrocarbures<br/>Suite 150, Dakar – Sénégal</li>
        <li className="my-3"><span className="fa mr-1"><FaPhoneAlt /></span>+221-33 832 5476</li>
        <li className="my-3"><span className="fa mr-1"><FaPhoneAlt /></span>+1-514-953-3356</li>
        <li className=""><span className="fa mr-1 fa-envelope"><FaEnvelope /></span><a href="mailto:dakarbiodiversite@netcourrier.com">info@innovfocus.com</a></li>
      </ul>
      <h4 className="mt-md-5 mt-4 mb-3 w3f_title">Suivez-nous</h4>
      <p>Sed mattis hendrerit dolor sed rhoncus. Praesent arcu quam, sodales ac varius.</p>
      <ul className="list-social">
        <li><Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank" className="facebook"><FaFacebookSquare/></Link></li>
        <li className="my-3"><Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank" className="twitter"><FaTwitterSquare/></Link></li>
        <li className="my-3"><Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank"  className="google"><FaGooglePlusSquare/></Link></li>
        <li className=""><Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }}  className="linkedin"><FaLinkedin/></Link></li>
      </ul>
    </div>
    </>
    );
      
}
 
export default ContactContenu;