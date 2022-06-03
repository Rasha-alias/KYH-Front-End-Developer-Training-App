import { Form } from 'react-bootstrap'
import { Button, ButtonGroup } from 'react-bootstrap'

/**
 * A function to add a teacher
 * @param {function} props of(postTeacherData) function that post a new teacher to teachers Data in the JSON-Server                    
 * @returns  calling postSTeacherData function to add a new teacher with values 
 */

const AddTeacherForm = ({postTeacherData}) => {

   
    const handelOnSubmit = (e) =>{
          e.preventDefault();
          /** call postTeacherData and send the values of a teacher that entered by user in the form to add */
          postTeacherData(  
                        e.target.firstName.value,
                        e.target.lastName.value,
                        e.target.description.value,
                        e.target.email.value                                                         
                        );
 // After sending the values (new teacher values), the input fields in the form will be empty from these values
        e.target.firstName.value = "";
        e.target.lastName.value = "";
        e.target.description.value = "";
        e.target.email.value = ""; 
      }

     
  

return (

//Form of (input fields, select and button) to add a teacher    

 //handelOnSubmit willbe run when the user click the button 
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
           type="text"
           name="description"
           placeholder="Beskrivning" 
           required
        />
    </Form.Group>

    <Form.Group>
        <Form.Control
           type="email"
           name="email"
           placeholder="E-post" 
           required
        />
    </Form.Group>


    <ButtonGroup className="d-grid gap-2 mt-3"> 
     <Button   onClick={()=>handelOnSubmit}   variant="success" type="submit">
        Spara
    </Button>
     </ButtonGroup>

</Form>

  )
}

export default AddTeacherForm;