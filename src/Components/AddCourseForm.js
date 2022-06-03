import React from 'react';
import { Form } from 'react-bootstrap'
import { Button, ButtonGroup } from 'react-bootstrap'

/**
 * A function to add a course
 * @param {object} props object of function (postCourseData) and values of teachers objects (teachersValues) 
                         * (postCourseData) a function that post a new course to courses Data in the JSON-Server
                         * (teachersValues) is a state that has the values of all teachers objects
 * @returns calling postCourseData function to add a new course with values
 */
const AddCourses = ({postCourseData, teachersValues}) => {

   
    const handelOnSubmit = (e) =>{
        e.preventDefault();
        /** call postCourseData and send the values of a course that entered by user in the form to add */
       postCourseData( 
                        e.target.courseName.value,
                        e.target.point.value,
                        e.target.startDate.value,
                        e.target.endDate.value,
                        e.target.description.value,
                        e.target.teachersValue.value //send the id of the selected teacher in the form      
                      );

// After sending the values (new course values), the input fields in the form will be empty from these values
        e.target.courseName.value = "";
        e.target.point.value = "";
        e.target.startDate.value = "";
        e.target.endDate.value = "";
        e.target.description.value = "";
        e.target.teachersValue.value ="";
};
  
//this stage is to set firstName and lastName of the teacherValues(teachers) in (list of options) to enable the user to select one of them
let valuesSelectet = teachersValues.length > 0 
                    && teachersValues.map((teachersValue, i) =>{
                      return(
                          <option key={i} value={teachersValue.id} selected={teachersValue === 0}>
                              {teachersValue.firstName + " " + teachersValue.lastName}
                          </option>
                      );                                                                           
}, this);


return (

 //Form of (input fields, select and button) to add a course
 
 <Form onSubmit={handelOnSubmit}>

    <Form.Group>
        <Form.Control
           type="text"
           name="courseName"
           placeholder="Kurs Namn" 
           required
        />
    </Form.Group>

    <Form.Group>
        <Form.Control
           type="number"
           name="point"
           placeholder="Pöeng" 
           required
        />
    </Form.Group>

    <Form.Group>
        <Form.Control
           type="date"
           name="startDate"
           placeholder="StartDate" 
           required
        />
    </Form.Group>

    <Form.Group>
        <Form.Control
           type="date"
           name="endDate"
           placeholder="endDate" 
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

   {/**  The value of this varible is the (option tag) with teachers FirstName and lastName*/}
    <Form.Select name="teachersValue">   
       {valuesSelectet}
    </Form.Select>
 
    
    <ButtonGroup className="d-grid gap-2 mt-3" > 
                     {/*handelOnSubmit willbe run when the user click the button */}
    <Button  onClick={()=>handelOnSubmit} variant="success" type="submit">
        Spara
    </Button>
    
    </ButtonGroup>

</Form>

  )
}

export default AddCourses;