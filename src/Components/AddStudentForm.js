import { Form } from 'react-bootstrap'
import { Button, ButtonGroup } from 'react-bootstrap'


/**
 * A function to add a student
 * @param {function} props of (postStudentData) function that post a new student to students Data in the JSON-Server 
 * @returns calling postStudentData function to add a new student with values 
 */

const AddStudentForm = ({postStudentData}) => {

    const handelOnSubmit = (e) =>{
        e.preventDefault();

        /** call postStudentData and send the values of a student that entered by user in the form to add */
       postStudentData(e.target.firstName.value,
                        e.target.lastName.value,
                        e.target.age.value);
    
      }
  
return (
   
// Form of (input fields and button) to add a student   
   
      //handelOnSubmit will be run when the user click the button 
    <Form onSubmit={handelOnSubmit}>

        <Form.Group>
            <Form.Control
               type="text"
               name="firstName"
               placeholder="Förenamn" 
               required
            />
        </Form.Group>

        <Form.Group>
            <Form.Control
               type="text"
               name="lastName"
               placeholder="Efternamn" 
               required
            />
        </Form.Group>

        <Form.Group>
            <Form.Control
               type="number"
               name="age"
               placeholder="Ålder" 
               required
            />
        </Form.Group>
        
        <ButtonGroup className="d-grid gap-2 mt-3"> 
        
        <Button variant="success" type="submit">
            Spara
        </Button>
        
        </ButtonGroup>

    </Form>
   
  )
}

export default AddStudentForm;