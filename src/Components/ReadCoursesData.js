import React from 'react'
import { useState } from 'react';
import "./ComponentsStyle.css";
import EditCourseForm from "./EditCourseForm";

import { Modal,  Button,  Accordion } from "react-bootstrap";
import {MdDeleteForever} from "react-icons/md";
import {MdEdit} from "react-icons/md";


/**
 * A function to read or (print-out) courses data
 * @param {object} props of 
                            * course is an object that has a course data
                            * (deleteCourse) a function that delete a specific course from courses Data in the JSON-Server
                            * (updateCourse) a function that update a specific course in courses Data in JSON Server
                            * (teachersValues) is a state that has the values of all teachers objects
                            * (teacherName)  represnt teacher's first and last name 
 
* @returns Form of (input fields, select and button) to add a course
 */


const ReadCoursesData = ({course, deleteCourse, updateCourse, teachersValues, teacherName}) => {

 /** set Varible (show) the initial state to false value */
  const [show, setShow] = useState(false); 

  /**A function that update show state by setting true value in show state by function setShow */
  const handelShowForm = () => setShow(true);

  /**A function that update show state by setting false value in show state by function setShow */
  const handelCloseForm = () => setShow(false);

/** set Varible (showTeach) the initial state to true value */
const [showTeach, setShowTeach] = useState(true); 

 /**A function that update showTeach state to false value by function setShowTeach */
const handelShowTeach=()=>{setShowTeach(!showTeach);}


return (

<>

{/* Display courses Data in Accordion, courseName and edit and delete button i accordion header */}
<Accordion.Item eventKey="1" style={{backgroundColor:"rgb(233, 240, 175)"}} >
  
  <Accordion.Header >

      <div className="accordion-header-title" >  

   
         <div className="flex-box">
            
            <div className="left-box">{course.courseName.charAt(0).toUpperCase() + course.courseName.slice(1)}</div>  {/*the first letter of the course name will be capital letter */}
     
            <div className="right-box">
                <MdEdit           onClick={handelShowForm} className="edit-icon" /> {/*showing form when clicking on the edit button */}
                <MdDeleteForever  onClick={()=> deleteCourse(course.id)} className="delete-icon" /> {/*when the user wants to delete a specific course by using delete button, the deleteCourse will be called with sending the course id to delete its data */}
            </div>

         </div>   
      </div>   

   </Accordion.Header>
   

  <Accordion.Body>

     {/* Display course point, course period, description and teacherName in Accordion body*/}
     <div className="course-point"> <span className="p">Pöeng: </span>{course.point}</div>
     <div className="course-period"> <span className="p ">Period: </span> ( {course.startDate} ) - ( {course.endDate} ) </div>
     <div className="description-text"> {course.description.charAt(0).toUpperCase() + course.description.slice(1)}</div> {/*The first letter of description statment will be capital letter */}
   
    
    
     <div className="teach">

     {/*Button to show and hide the teacherName */}
     <button onClick={handelShowTeach} style={{marginBottom:"15px", padding:"10px", border:"none", borderRadius:"5px", backgroundColor:"rgb(70, 130, 100)", fontWeight:"500", color:"beige", marginLeft:"10px", marginRight:"10px"}}> Visa Lärare </button>
     {
     showTeach? null : <span style={{color:"rgb(50, 130, 100)", fontSize:"20px", fontWeight:"500"}}>   {teacherName}  </span>
     }

     </div>

  </Accordion.Body>
</Accordion.Item>



<Modal show={show} onHide={handelCloseForm}>
       
        <Modal.Header  closeButton>
           <Modal.Title>
                Uppdatera Kursen
            </Modal.Title>
        </Modal.Header>


        <Modal.Body>
         
            {/*call (EditCourseForm) component and send (course data), (updateCourse function) and (teachers Values) */}
            <EditCourseForm theCourse={course} theUpdateCourse={updateCourse} theTeachersValues={teachersValues} />
         
         </Modal.Body>


        <Modal.Footer className="justify-content-between">

           <Button variant="secondary" onClick={handelCloseForm} style={{marginLeft:"auto"}}>
               Stäng
            </Button>

         </Modal.Footer>
</Modal>


</>
)
}

export default ReadCoursesData;





