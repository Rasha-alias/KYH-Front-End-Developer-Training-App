import React from "react";
import "./PagesStyle.css";
import HeaderImage from "../Images/HeaderImage.jpeg";
import CRUDCoursesData from "../Components/CRUDCoursesData";



/**
 * A function for Courses Page
 * @returns CRUDCoursesData component 
 */
const Courses = () => {
  
  return (
   
    //Header for Courses page with image and word (Kurser)
    <div className="pages-Style">
        <div className="header-image">
            <img src={HeaderImage} alt = "koding Image for the header" className="header-image-style"/>
            <div className="header-word">Kurser</div>
        </div>

              <CRUDCoursesData/> {/** call CRUDCoursesData component */}         
    </div>
);
}
export default Courses;


