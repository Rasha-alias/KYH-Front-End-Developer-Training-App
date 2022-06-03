
import React from 'react'
import { useState } from 'react';
import "./ComponentsStyle.css";
import EditTeacherForm from "./EditTeacherForm";

import { Modal,  Button,  Accordion } from "react-bootstrap";
import {MdDeleteForever} from "react-icons/md";
import {MdEdit} from "react-icons/md";


/**
 * A function to read or (print-out) teachers data
 * @param {object} props of 
                            * teacher is an object the has teacher data
                            * (deleteTeacher) a function that delete a specific steacher from teachers Data in the JSON-Server
                            * (updateTeacher) a function that update a specific teacher in teachers Data in JSON Server
                            * (courseId)
                             
 * @returns Form of (input fields, select and button) to add a course
 */

const ReadTeachersData = ({teacher, deleteTeacher, updateTeacher, courseName}) => {

  /** set Varible (show) the initial state to false value */
  const [show, setShow] = useState(false); 

  /**A function that update show state by setting true value in show state by function setShow */
  const handelShowForm = () => setShow(true);

  /**A function that update show state by setting false value in show state by function setShow */
  const handelCloseForm = () => setShow(false);

/** set Varible (showCourse) the initial state to true value */
  const [showCourse, setShowCourse] = useState(true); 

   /**A function that update showCouse state to false value by function setShowCourse */
  const handelShowCourse=()=>{setShowCourse(!showCourse)};

  return (
    <>

       {/* Display teachers Data in Accordion, (teacher firstName and lastName) and (edit and delete button) i accordion header */}
      <Accordion.Item eventKey="1" style={{backgroundColor:"rgb(233, 240, 175)"}} >
  
          <Accordion.Header >
 
             <div className="accordion-header-title" >  

          
               <div className="flex-box">
               
                   <div className="left-box">{teacher.firstName.charAt(0).toUpperCase() + teacher.firstName.slice(1) }  {teacher.lastName.charAt(0).toUpperCase() + teacher.lastName.slice(1)}</div> {/*The first letter of firstName and lastName will be capital letter */}

                   <div className="right-box">
                   < MdEdit           onClick={handelShowForm} className="edit-icon" />  {/*showing form when clicking on the edit button */}
                   <MdDeleteForever   onClick={()=> deleteTeacher(teacher.id)} className="delete-icon"/>  {/* when the user wants to delete a specific teacher by using delete button, the deleteTeachere will be called with sending the teacher id to delete its data */}
                  </div>
               </div>   
            </div>   

            
            </Accordion.Header>
           

          <Accordion.Body>
             
              {/* Display teacher description, email and courseName in Accordion body*/}
             <div className="description-text"> <ul> {teacher.description.map(item=>(<li>{item.charAt(0).toUpperCase() + item.slice(1)}</li>))} </ul></div> {/*The first letter of description statment will be capital letter */}
             <div className="teacher-mail"> <span className="p">E-post: </span> {teacher.email} </div>
 

              
     <div className="teach">

     {/*Button to show and hide the courseName */}
     <button onClick={handelShowCourse}  style={{marginBottom:"15px", padding:"5px", border:"none",borderRadius:"5px", backgroundColor:"rgb(70, 130, 100)", fontWeight:"500", color:"beige", marginLeft:"5px"}}> Kurser som lärare undervisar</button>
     {
     showCourse? null 
     : <div  style={{marginLeft:"10px"}}> <span style={{color:"rgb(50, 130, 100)", fontSize:"20px", fontWeight:"500"}}> {courseName} </span> </div>
     }

     </div>
                 
          </Accordion.Body>
      </Accordion.Item>
 



<Modal show={show} onHide={handelCloseForm}>
        <Modal.Header  closeButton>
           <Modal.Title>
                Uppdatera läraren
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>

               {/*call (EditTeacherForm) component and send (teacher data) and (updateTeacher function) */}
              <EditTeacherForm theTeacher={teacher} theUpdateTeacher={updateTeacher} />
        
         </Modal.Body>

        <Modal.Footer className="justify-content-between">
    
            <Button variant="secondary" onClick={handelCloseForm} style={{marginLeft:"auto"}} >
               Stäng
            </Button>
                  
            </Modal.Footer>
    </Modal>
</>

)
}
export default ReadTeachersData; 