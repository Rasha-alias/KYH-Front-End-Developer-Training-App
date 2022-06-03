import React from "react";
import { init } from "ityped";
import{useEffect, useRef} from 'react'
import {Container,Row,Col,Image} from 'react-bootstrap';
import "./PagesStyle.css";
import HeaderImage from "../Images/HeaderImage.jpeg";
import developerPic from '../Images/developerPic.jpg';


/**
 * A function for About Page
 * @returns container of texts, images and a movable welcome message
 */

const AboutPage = () => {

/**
 * textRef variable takes useRef Hook fo showing a movable welcome message with diffrent properites inside (init method)
 * (useRef)It can be used to store a mutable value that does not cause a re-render when updated.
 */
  const textRef = useRef();

        useEffect (() =>{
          init(textRef.current, {
           showCursor:false,
           backDelay:1700,
           backSpeed:100,
           strings: ["Hi There !"],
         });

        },[]);
  

return (  

  <div className="pages-Style">
     
        <div className="header-image">
            <img src={HeaderImage} alt = "koding Image for the header" className="header-image-style"/>
            <div className="about-header-word">Om Oss</div>
         </div>
        
         <div className="pages-title"> </div>

      
         <div className="homestyle"> 
            <Container fluid={true}>
               
               <Row>
                   <Col className="mb-5" md={{ span: 8, offset: 2}}>Vad gör en front end developer?
                         En front end utvecklare gör verklighet av idéer genom att utveckla webbapplikationer,
                          individuellt såväl som i grupp. Yrkesrollen har vuxit fram ur det som tidigare generellt 
                          kallades webbutvecklare och idag efterfrågas främst kunskaper inom språken JavaScript, HTML5, CSS3.

                          Under utbildningen rustas du med gedigna kunskaper i att utveckla mot CMS-verktyg och interaktion med databaser.
                           Du lär dig att programmera i JavaScript och strukturera JavaScript-projekt. Det är en roll som kräver att du arbetar
                            i projektteam och du får bland annat testa på hur det är att vara SCRUM-master. Du lär dig även React, ett bibliotek 
                            för webbapplikationer som det just nu är hög efterfrågan på ute hos företag.
                    </Col>
               </Row>
                <Row>
                  <Col className="img d-flex justify-content-center" md={{ span: 4, offset: 2}} wider>
                      <Image src={developerPic} alt= "Developer (Rasha) profile picture" style={{height:"300px", width:"500px", borderRadius:"20px", margin:"20px"}}/>
                  </Col>

                  <Col  className=" pt-3 style-text" md={{ span: 3, offset: 1}} >
                      
                      <div style={{height:"15px"}}> <b> <span ref={textRef}></span> </b></div>

                      <div className="style-text d-flex justify-content-center">
                       <p >
                       Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum.
                      </p>
                      </div>

                  </Col>
                </Row>
            </Container>
            
        </div>
</div>
  
);
}
export default AboutPage;










   

