import React from 'react';
import { useState, useEffect } from "react";
import "./ComponentsStyle.css";

import { Modal, Button, Container, Row, Col, Accordion} from "react-bootstrap";
import AddTeacherForm from './AddTeacherForm';
import ReadTeachersData from './ReadTeachersData';


 /*
  * A function (ccomponent) that representing all CRUD opration for Teachers in KYH.
  * @return components (ReadTeachersData) and (AddTeacherForm) which they are called in this component.
  */

const CRUDTeachersData = () => {

    /** URL for JSON Server Courses and JSON Server Teachers and save then in varaibles  */
    const Teachers_url = "http://localhost:5500/teachers";
    const courses_url = "http://localhost:5600/courses";

    /** set Varible (teachers) the initial state to an empty array */
    const [teachers, setTeachers] = useState([]);

    /** set Varible (show) the initial state to false value */
    const [show, setShow] = useState(false); 

    /**A function that update show state by setting true value in show state by function setShow */
    const handelShowForm = () => setShow(true);

   /**A function that update show state by setting false value in show state by function setShow */
    const handelCloseForm = () => setShow(false);

     
      /**
      * UseEffect is dependent on a variable teachers.
      *  If the teachers variable updates, the effect will run again. That is mean the (handelCloseForm) will run.  
      *  when the new teacher is added to the teachers array or update a specific teacher by submit button, the form will be closed or(hidden). 
      * */ 
      useEffect(() => {
        handelCloseForm();
      }, [teachers]);
    

/////////////////////////////////////////////Get Teachers////////////////////////////////////////

/**
     * An async function to get the teachers Data from JSON-Server (Server2)
     * @return teachers data from JSON-Server
    */
    const getTeachersData = async() =>{

            /**waiting for the teachers URL response */
            const response = await fetch(Teachers_url);

             /**  wating for json data response and convert it to JS objects*/
            const teachersData = await response.json();

            /** updata the state by setting teachers data in teachers varible*/
            setTeachers(teachersData);
    }

    /** The functon getTeachersData Runs only on the first render */
    useEffect(()=>{
        getTeachersData(); 
    }, []);

////////////////////////////////////////////Post teachers///////////////////////////////////////////

/**
 * * A function that post a new teacher to teachers Data in the JSON-Server (Server2)
 * @param {string} firstName    The first name of the teacher
 * @param {string} lastName     The last name of the teacher
 * @param {string} description  Description about the teacher
 * @param {email} email         The Email of the teacher 
 */

    const postTeacherData = async(firstName, lastName, description, email ) =>{
         
     /** waiting for the response of the Teachers URL*/
     await fetch(Teachers_url,
        {
          method:"POST",

          /**Convert the teacher object (new teacher) from js to json to be written in the server*/
          body  : JSON.stringify(
                                  {
                                   firstName  : firstName,
                                   lastName   : lastName,
                                   description:description.split(","), // to split the description in an array by "," 
                                   email      : email                                  
                                  }
                              ),
          headers:{
                    "Content-Type":"application/json",
                  }
        })

     .then((res)=>{
         if (res.status !== 201) {
             return
            }
         else  {
             return res.json(); 
            }
      }) 
    
     .then((data) => {
        /** Update the teachers state by setting the new teacher on the teachers data in JSON Server */  
          setTeachers((teachers) => [...teachers, data]);
         
      })

      .catch((err) =>{
      console.log(err)
      })    
    }

    //////////////////////////////////////////////Update Teachers///////////////////////////////////////////

/**
 * A function that update a specific teacher (by Specific Id) in teachers Data in JSON Server
 * The update kan be one or more attribute of a specific teacher
 * @param {*} objId        The Id of the teacher when the user specifies which teacher to update
 * @param {*} firstName    Update the first name of the teacher
 * @param {*} lastName     Update the flast name of the teacher
 * @param {*} description  Update the teacher description 
 * @param {*} email        Update the teache email
 */
    const  updateTeacher = async(objId, firstName, lastName, description, email) => {

      /**waiting for the Teachers URL response with a specific Id*/    
      await fetch(`http://localhost:5500/teachers/${objId}`,
                 {
                   method:'PUT',

                   //Convert the teacher object (the updated teacher) from js to json to be written in the JSON server
                   body: JSON.stringify({
                                          firstName   : firstName,
                                          lastName    : lastName,
                                          description : description.split(","), // to split the description in an array by "," 
                                          email       : email
                                         
                  }),
  
                  headers: { 
                            "Content-Type": "application/json",
                           },
  
                  })
  
                  .then((res) => {
                    if (res.status !== 201) {
                      return;
                    } 
                    else 
                    {
                      return res.json();
                    }
                  })
  
                  .then((data) => {
                    // update the teachers state by setting the updated teacher on the teachers data in JSON Server by its Id.  
                     setTeachers(data.objId);
                  })     
    } 
  
    /** The functon updateTeacher() Runs only on the first render when the effect run */ 
    useEffect(() => {
      updateTeacher();
   }, []);
  
  ///////////////////////////////////////////Delete Teachers/////////////////////////////////////////

 /**
    * A function that delete a specific teacher (by a Specific Id) in the teachers Data in JSON Server
    * @param {number} objId  The Id of the teacher when the user specifies which teacher to delete 
    */   
  const  deleteTeacher = async(objId) =>{

           /**waiting for the Teachers URL response with a specific Id*/ 
           await fetch(`http://localhost:5500/teachers/${objId}`,
                {
                  method: 'DELETE',
                })
  
           .then((res)=>{
                if (res.status !== 200) { return }
                  
                else {
                   // return the teachers whose id does not match the id that specified by the user to delete and setting then in teachers
                       setTeachers(teachers.filter((teacher) =>{
                        return teacher.id !== objId;
                      })) 
                     }
             }) 
  
            .catch((err) =>{
               console.log(err)
             })    
  }


  ///////////////////////////////////////////Get Courses Values/////////////////////////////////////

  /** set Varible (coursesValues) the initial state to an empty array */
  const [coursesValues, setCoursesValues] = useState([]);

/**
 * a function to get the Courses value
 * @return courses value
 */
const getCoursesValue = async() =>{

  /** waiting for the Courses URL response*/
  await fetch(courses_url)
  .then ((res)=>{
                 return res;
                }
        ) 
   /**  wating for json data response and convert it to JS objects*/    
  .then ((res)=> res.json())

  // set the values in coursesValues
  .then((value)=> setCoursesValues(value))
  .catch((err)=>{
    console.log(err);
  });
};

/** The functon getTCoursesValue() Runs only on the first render when the effect run */ 
useEffect(()=>{
  getCoursesValue();
}, [])
  
///////////////////////////////////////////////////
    
    
  return (
   <>

    <Container className="table-title">
        <Row>
            <Col sm="6">
                <h2 className="table-header"> Här kan vi Se Våra <b>Lärare</b> på Front-End developer </h2>
            </Col>

            <Col sm="4"></Col>
                
            <Col sm="2">
                <Button onClick={handelShowForm}  className="btn btn-success" data-toggle="modal"> <span>Lägg till ny lärare</span></Button>
            </Col>
        </Row>
        <Row className="mb-5"></Row>
    </Container>


    <Container>
        <Row>
            <Col style={{backgroundColor:"rgb(233, 240, 175)"}}>

                {
                  teachers.map(teacher =>(
                    
                    <Accordion defaultActiveKey="0" className=" my-2" key={teacher.id}> 

                      {/*  call the component  (ReadTeachersData) and send teachers (objects) to print-out them one by one  
                       *  send (deleteTeacher) and (updateTeacher) functions + (courses Values) to check 
                       *  if the TeacherId in each course (coursesValue) has the same id in teachers data
                       *  to enable us to return the courses names
                       */}

                     <ReadTeachersData
                      teacher={teacher} 
                      deleteTeacher={deleteTeacher}  
                      updateTeacher={updateTeacher} 
                      coursesValues={coursesValues}
                      
                      courseName={ coursesValues &&  coursesValues.map((coursesValue)=>{  
                               
                             
                                  if( coursesValue.teachersId === teacher.id )

                                    {
                                      console.log( coursesValue.courseName);
                                     return  <div> {coursesValue.courseName} </div> ;                                       
                                    }                                 
                          
                                    })  
                                } 
                      />
                     
                     </Accordion>
                     ))
                }

            </Col>
       </Row>
  </Container>

 
  <Modal show={show} onHide={handelCloseForm}>
      
      <Modal.Header  closeButton>
          <Modal.Title>
              Lägg till en ny Lärare
          </Modal.Title>
      </Modal.Header>

      <Modal.Body>

           {/** call (AddTeacherForm) component and send (postTeacherData) function and coursess Values*/}
          <AddTeacherForm postTeacherData={postTeacherData} />

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

export default CRUDTeachersData;