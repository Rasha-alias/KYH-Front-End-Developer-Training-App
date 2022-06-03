import React from "react";
import "./PagesStyle.css";
import HeaderImage from "../Images/HeaderImage.jpeg";
import CRUDStudentsData from "../Components/CRUDStudentsData";


/**
 * A function for Students Page
 * @returns CRUDStudentssData component 
 */

const Students = () => {
   
  return (

    //Header for Students page with image and word (Studenter) and text about students
    <div className="pages-Style">
       
        <div className="header-image">
           
            <img src={HeaderImage} alt = "koding Image for the header" className="header-image-style"/>
            <div className="header-word">Studenter</div>

      </div>
        
      <p className="student-paragraph">
        Våra studenter har några mycket spännande år tillsammans med denna branchen. 
        De kommer att lära sig ett nytt yrke genom att utveckla framtidens användar 
        vänliga hemsidor och appar i en kreativ och eftertraktad yrkesroll. Under denna
        utbildning kommer studenter ha kunskaper inom språken JavaScript, HTML5, CSS3,
        De lär sig att programera och strukturera projekt. Det kräver också att arbetar
        i projektteam och de får bland annat testa på hur det är att vara SCRUM-master.
        Det som är häftigt med denna utbildning på KYH är att våra studenter i klassen 
        är i blandade i åldrar och kön. Den äldsta är närmre 40 och yngsta är runt 20,
        och De har olika bakgrunder från olika jobb vilket bidrar till olika perspektiv 
        under studierna. Studenter som går på Front-End Develop under period 2021-2023 
        är ungifär 38 studenter. På denna branch kommer våra studenter från olika ställe i Sverige och samt kan de läsa på distans.
       </p> 
     

      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
             <CRUDStudentsData/>  {/**call CRUDStudentsData component*/}
          </div>
        </div>
      </div>         
    </div>
);
}
export default Students;


