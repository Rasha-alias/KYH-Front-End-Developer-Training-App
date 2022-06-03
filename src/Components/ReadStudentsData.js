import React from 'react'
import { useState } from 'react';
import {Modal, Button} from "react-bootstrap"
import {MdDeleteForever} from "react-icons/md";
import {MdEdit} from "react-icons/md";

import EditStudentForm from "./EditStudentForm";


/**
 * A function to read or (print-out) students data
 * @param {object} props of 
                            * student is an object the has a student data
                            * (deleteStudent) a function that delete a specific student from students Data in the JSON-Server
                            * (updateStudent) a function that update a specific student in students Data in JSON Server
                             
 * @returns Form of (input fields, select and button) to add a course
 */

const ReadStudentsData = ({student, deleteStudent, updateStudent}) => {

  /** set Varible (show) the initial state to false value */
  const [show, setShow] = useState(false); 

  /** A function that update show state by setting true value in show state by function setShow */
  const handelShowForm = () => setShow(true);

 /** A function that update show state by setting false value in show state by function setShow */
  const handelCloseForm = () => setShow(false);
 
  
  return (
    <>
    
    {/* Display students Data in a table, display each student in the table row (firstName, lastName, age) and (edit and delete) button */}
    <td className="data">{student.id}</td>
    <td className="data">{student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1)}</td> {/*The first letter of firstName and lastName will be capital letter */}
    <td className="data">{student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1)}</td>
    <td className="data">{student.age}</td>
    <td></td>
    <td></td>
    <td>
         <MdEdit onClick={handelShowForm}  className="table-edit-icon" /> {/*showing form when clicking on the edit button */}
         <MdDeleteForever onClick={()=> deleteStudent(student.id)} className="table-delete-icon"/> {/*when the user wants to delete a specific student by using delete button, the deleteStudent will be called with sending the student id to delete its data */}
     </td>

    
    <Modal show={show} onHide={handelCloseForm}>
        <Modal.Header  closeButton>
           <Modal.Title>
                Uppdatera studenten
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>

               {/*call (EditStudentForm) component and send (student data) and (updateStudent function) */}
              <EditStudentForm theStudent={student} theUpdateStudent={updateStudent} />

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
export default ReadStudentsData;