
import React from "react";
import "./PagesStyle.css";
import Email from "./Email";
import {Container,Row,Col} from 'react-bootstrap/';
import { BsTelephoneInboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {IoLocationSharp} from "react-icons/io5"
import HeaderImage from "../Images/HeaderImage.jpeg";


/**
 * A function that representing Contact page
 * @returns container of contact information and (email component)
 */
const ContactPage = () => {


  return (  
    
<div className="pages-Style">
        <div className="header-image">
            <img src={HeaderImage} alt = "koding Image for the header" className="header-image-style"/>
            <div className="header-word">Kontakt</div>
        </div>
        

      <Container>
      <Row className="" >

       <Col xs={12} className="box-1">
        
          <h1 className=" text-box-1">Vi vill gärna <br/>höra från dig</h1><br/>
          <p className="phone-icon"><BsTelephoneInboundFill/></p>
          <p className="info">019-100 080 </p><br/>
          <p className="phone-icon"><MdEmail/></p>
          <p className="info"> yhansokan@​kyh.se</p><br/>
          <p className="phone-icon"><IoLocationSharp/></p>
          <div className="info">Västra Finnbodavägen 4, 131 30 Nacka </div>
       
        </Col>
                                 
        <Col  xs={12} className=" box-2"> <Email/> </Col>  {/*call email component in the second column*/}
                 
      </Row>
    </Container>
      
</div>
  
);
}
export default ContactPage;
