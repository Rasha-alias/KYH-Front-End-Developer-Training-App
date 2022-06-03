import React from 'react'
import HomeImage from "../Images/HomeImage.png";


/**
 * A function for Home Page
 * @return Texts of information about Front-End developer in Kyh and 
 *          header with title and button that links to Courses Page.
 */

const Home = () => {

  //link to courses page
  const link ="./CoursesPage"

  return (
    
    <div className="pages-Style">
       
        <div className="home-image">
            <img src={HomeImage} alt = "koding image for the header" className="home-image-style"/>
            <div className="home-header-word">Front-End Developer på KYH yrkeshögskola </div>
            <div className="home-header-paragraph">
                  Den smarta vägen till ett nytt och meningsfullt yrkesliv. 
                  Vi erbjuder ett antal olika kurser inom programmering.
            </div>
            <div><button className="home-header-button"><a href={link}>Se Våra Kurser</a></button></div>
        </div> 
        
        
        <div className="pages-title">Vad gör en Front-End Developer?</div>
       
        <div className="paragraph-template">
       
        <p className="home-paragraph1">En front end utvecklare gör verklighet av idéer genom att utveckla webbapplikationer, individuellt såväl som i grupp.
           Yrkesrollen har vuxit fram ur det som tidigare generellt kallades webbutvecklare och idag efterfrågas främst kunskaper 
           inom språken JavaScript, HTML5, CSS3.
        </p>
        <p className="home-paragraph2"> Under utbildningen rustas du med gedigna kunskaper i att utveckla mot CMS-verktyg och interaktion med databaser. 
           Du lär dig att programmera i JavaScript och strukturera JavaScript-projekt. Det är en roll som kräver att du arbetar
           i projektteam och du får bland annat testa på hur det är att vara SCRUM-master. Du lär dig även React, ett bibliotek
           för webbapplikationer som det just nu är hög efterfrågan på ute hos företag.
        </p>
        
        </div>
    </div>
)
}
export default Home