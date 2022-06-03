import React from 'react'
import { useState } from 'react';
import {Form, ButtonGroup, Button} from "react-bootstrap";


/**
 * A function to edid a specific teacher
 * @param {object} props of  * theTeacher (teacher) is an object that has teacher data 
                             * theUpdataTeacher (updateTeacher) a function that update a specific teacher in teachers Data in JSON Server                        
 * @returns  calling UpdateTeacher function with a new data of a specific teacher 
 */

const EditTeacherForm = ({theTeacher, theUpdateTeacher}) => {
  
// (theCTeacher.id) is the id of the teacher when the user specifies which teacher to update 
const id = theTeacher.id;

//set these Varibles the initial state to the current values. The current values of a specific cteacher will be shown on the form to enable the user to edit them
  const [firstName, setFirstName] = useState(theTeacher.firstName);
  const [lastName, setLastName] = useState(theTeacher.lastName);
  const [description, setDescription] = useState(theTeacher.description);
  const [email, setEmail] = useState(theTeacher.email);
  

return (

//Form of (input fields and button) to edit a student

   // onSubmit the UpdateSteacher function will be called with sending a new data (updated data) of specific teacher with the same teacher id
    <Form onSubmit={theUpdateTeacher(id, firstName, lastName , description, email)}>

    <Form.Group>
        <Form.Control
           type="text"
           name="firstName"
           value={firstName}
           onChange={(e)=>setFirstName(e.target.value)} //set teacher firstName to a new value which entered by the user in this field
           placeholder="Förenamn" 
           required
        />
    </Form.Group>

    <Form.Group>
        <Form.Control
           type="text"
           name="lastName"
           value={lastName}
           onChange={(e)=>setLastName(e.target.value)} //set teacher lastName to a new value which entered by the user in this field
           placeholder="Efternamn" 
           required
        />
    </Form.Group>

    <Form.Group>
    <Form.Control
       type="text"
       name="description"
       value={description}
       onChange={(e)=>setDescription(e.target.value)} //set teacher description to a new value which entered by the user in this field
       placeholder="Beskrivning" 
       required
    />
    </Form.Group>

    <Form.Group>
        <Form.Control
           type="email"
           name="email"
           value={email}
          onChange={(e)=>setEmail(e.target.value)} //set teacher email to a new value which entered by the user in this field
           placeholder="E-post" 
           required
        />
    </Form.Group>
     
    <ButtonGroup className="d-grid gap-2 mt-3" > 
    <Button variant="success" type="submit">
      Uppdatera
    </Button>  
   </ButtonGroup> 

</Form>
    
)
}
export default EditTeacherForm;