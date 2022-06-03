import React from 'react'
import { useState } from 'react';
import {Form, ButtonGroup, Button} from "react-bootstrap";


/**
 * A function to edid a specific student
 * @param {object} props of  * theStudent (student) is an object that has student data  
                             * theUpdataStudent (updateStudent) a function that update a specific student in students Data in JSON Server                        
 * @returns  calling UpdateStudent function with a new data of a specific student
 */

const EditStudentForm = ({theStudent, theUpdateStudent}) => {

// (theStudent.id) is the id of the student when the user specifies which student to update 
  const id = theStudent.id;

  //set these Varibles the initial state to the current values. The current values of a specific student will be shown on the form to enable the user to edit them
  const [firstName, setFirstName] = useState(theStudent.firstName);
  const [lastName, setLastName] = useState(theStudent.lastName);
  const [age, setAge] = useState(theStudent.age);
  

return (

//Form of (input fields and button) to edit a student  
    
   // onSubmit the UpdateStudent function will be called with sending a new data (updated data) of specific student with the same student id
    <Form onSubmit={theUpdateStudent(id, firstName, lastName, age)}>

    <Form.Group>
        <Form.Control
           type="text"
           name="firstName"
           value={firstName}
           onChange={(e)=>setFirstName(e.target.value)} //set student firstName to a new value which entered by the user in this field
           placeholder="Förenamn" 
           required
        />
    </Form.Group>

    <Form.Group>
        <Form.Control
           type="text"
           name="lastName"
           value={lastName}
           onChange={(e)=>setLastName(e.target.value)} //set student lastName to a new value which entered by the user in this field
           placeholder="Efternamn" 
           required
        />
    </Form.Group>

    <Form.Group>
        <Form.Control
           type="number"
           name="age"
           value={age}
          onChange={(e)=>setAge(e.target.value)} //set student age to a new value which entered by the user in this field
           placeholder="Ålder" 
           required
        />
    </Form.Group> 
    
    <ButtonGroup className="d-grid gap-2 mt-3" > 
    <Button  variant="success" type="submit" >
      Uppdatera
    </Button>
    </ButtonGroup>
       
</Form>
    
)
}
export default EditStudentForm