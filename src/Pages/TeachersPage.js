import React from "react";
import "./PagesStyle.css";
import CRUDTeachersData from "../Components/CRUDTeachersData";
import HeaderImage from "../Images/HeaderImage.jpeg";


/**
 * A function for Teachers Page
 * @returns CRUDTeachersData component 
 */
const Teachers = () => {
   
  return (
    //Header for Teachers Page with image and word (Lärare)
    <div className="pages-Style">
        <div className="header-image">
            <img src={HeaderImage} alt = "koding image for the header" className="header-image-style"/>
            <div className="header-word">Lärare</div>
        </div>
       
       <CRUDTeachersData/> {/**call CRUDTeachersData component*/}
      
    </div>
);
}
export default Teachers;


