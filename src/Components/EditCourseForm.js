import React from 'react'
import { useState } from 'react';
import {Form, ButtonGroup, Button} from "react-bootstrap";

/**
 * A function to edid a specific course
 * @param {object} props of  * theCourse (course) is an object that has course data  
                             * theUpdataCourse(updateCourse) a function that update a specific course in courses Data in JSON Server
                             * theTeachersValues(teachersValues) is a state that has the values of all teachers objects
 * @returns  calling UpdateCourse function with a new data of a specific course
 */

const EditCourseForm = ({theCourse, theUpdateCourse, theTeachersValues}) => {
  
// (theCourse.id) is the id of the course when the user specifies which course to update 
const id = theCourse.id;

//set these Varibles the initial state to the current values. The current values of a specific course will be shown on the form to enable the user to edit them
  const [courseName, setCourseName] = useState(theCourse.courseName);
  const [point, setPoint] = useState(theCourse.point);
  const [startDate, setStartDate] = useState(theCourse.startDate);
  const [endDate, setEndDate] = useState(theCourse.endDate);
  const [description, setDescription] = useState(theCourse.description);
  const [teachId, setTeachId]= useState(theCourse.teachersId);
  

//this stage is to set firstName and lastName of the teacherValues(teachers) in (list of options) to enable the user to select one of them
 let valuesSelectet = theTeachersValues.length > 0 
                    && theTeachersValues.map((theTeachersValue, i) =>{
                   
                      return(
                          <option key={i} value={theTeachersValue.id} selected={theTeachersValue=== 0}>
                              {theTeachersValue.firstName + " " + theTeachersValue.lastName}
                          </option>
                      );                                                                      
}, this);


return (

//Form of (input fields, select and button) to edit a course
   
    // onSubmit the UpdateCourse function will be called with sending a new data (updated data) of specific course with the same course id
    <Form onSubmit={ theUpdateCourse(id, courseName, point, startDate, endDate, description, teachId)} >

    <Form.Group>
        <Form.Control
           type="text"
           name="courseName"
           value={courseName}
           onChange={(e)=>setCourseName(e.target.value)} //set courseName to a new value which entered by the user in this field
           placeholder="Kursen Namn" 
           required
        />
    </Form.Group>

    <Form.Group>
        <Form.Control
           type="number"
           name="point"
           value={point}
           onChange={(e)=>setPoint(e.target.value)} //set course point to a new value which entered by the user in this field
           placeholder="Pöeng" 
           required
        />
    </Form.Group>

    <Form.Group>
        <Form.Control
           type="date"
           name="startDate"
           value={startDate}
           onChange={(e)=>setStartDate(e.target.value)} //set  course startDate to a new value which entered by the user in this field
           placeholder="Startdatum" 
           required
        />
    </Form.Group>

    <Form.Group>
        <Form.Control
           type="date"
           name="endDate"
           value={endDate}
           onChange={(e)=>setEndDate(e.target.value)} //set course endDate to a new value which entered by the user in this field
           placeholder="Slutdatum" 
           required
        />
    </Form.Group>

    <Form.Group>
    <Form.Control
       type="text"
       name="description"
       value={description}  
       onChange={(e)=>setDescription(e.target.value)} //set course description to a new value which entered by the user in this field
       placeholder="Beskrivning" 
       required
    />
    </Form.Group>

    {/*set course teachId  to a new value which selected by the user in the list of options */}
    <Form.Select  name ="teachId" value={teachId} onChange={(e)=>setTeachId(e.target.value)}>   
       {valuesSelectet}
    </Form.Select>

    <ButtonGroup className="d-grid gap-2 mt-3" > 
    <Button  onClick={()=>theCourse()} variant="success" type="submit"  ClassName=" mt-5 justify-content-center" block level button>
      Uppdatera
    </Button>  
    </ButtonGroup>    

</Form>
    
);
}
export default EditCourseForm;