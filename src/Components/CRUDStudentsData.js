import React from 'react'
import { useState, useEffect } from "react";
import ReadStudentsData from "./ReadStudentsData";
import AddStudentForm from "./AddStudentForm";
import { Modal, Table, Button, Alert,Container, Row, Col, InputGroup, FormControl} from "react-bootstrap";
import {ImSearch} from "react-icons/im";


/*
  * A function (component) that representing all CRUD opration for CStudents in KYH.
  * @return components (ReadStudentsData) and (AddStudentForm) which they are called in this component.
  */

const CRUDStudentData = () => {

   /** URL for JSON Server Studentss and save it in a varaible  */
    const students_url = "http://localhost:5000/students";

    /** set Varible (students) the initial state to an empty array */
    const [students, setStudents] = useState([]);
    
     /** set Varible (show) the initial state to false value */
    const [show, setShow] = useState(false); 

    /**A function that update show state by setting true value in show state by function setShow */
    const handelShowForm = () => setShow(true);
    
    /**A function that update show state by setting false value in show state by function setShow */
    const handelCloseForm = () => setShow(false);

    /** set Varible (showAlert) the initial state to false value */
    const [showAlert, setShowAlert] = useState(false);

    
    /**A function that showing an Alert message by setting showAlert state to true 
      * and then close the Alert message after 2 seconds by setting ShowAlert to false
     */
    const handelShowAlert= () =>{
         
          setShowAlert(true);
          
          setTimeout(()=>{
              setShowAlert(false);
          },2000)
    }

    
      /**
      * UseEffect is dependent on a variable students.
      *  If thestudents variable updates, the effect will run again.
      *  That is mean the (handelCloseForm)and (handelSowAlert) will run.  
      *  when the new student is added to the students array or update a specific student by submit button,
      *  the form will be closed or(hidden) and the Students page will show an Alert message that the process has updated successfully. 
      * */ 
    useEffect(() => {

        handelCloseForm();
      
        return () => {
          handelShowAlert();
          }

        }, [students]);

        

/////////////////////////////////////////////Get Students Data///////////////////////////////////////////

/**
     * An async function to get the students Data from JSON-Server (Server1)
     * @return students data from JSON-Server
    */
    const getStudentsData = async () => {

    /**waiting for the Students URL response */
    const response = await fetch(students_url);

    /**  wating for json data response and convert it to JS objects*/
    const studentsdata = await response.json();

    // updata the state by setting cstudents data in students varible
    setStudents(studentsdata);
    };

    /** The functon getStudentsData Runs only on the first render */
    useEffect(() => {
    getStudentsData();
    }, []);

    /////////////////////////////////////////Post Students//////////////////////////////////

    /**
     * * A function that post a new student to students Data in the JSON-Server 
     * @param {string} firstName  The first name of the student
     * @param {string} lastName   The last name of the student  
     * @param {number} age        The age of the student     
     */
    const postStudentData = async (firstName, lastName, age) => {
    
        await fetch(students_url, {
          method: "POST",
          body: JSON.stringify({

                               firstName: firstName,
                               lastName: lastName,
                               age: parseInt(age), //by parseInt() method the age will be written as number in JSON server
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (res.status !== 201) {
              return;
            } else {
              return res.json();
            }
          })
    
          .then((data) => {
             /** Update the students state by setting the new student on the students data in JSON Server */ 
            setStudents((students) => [...students, data]);
          })
          .catch((err) => {
            console.log(err);
          });
      };
///////////////////////////////////////Update Students////////////////////////////////////////////////

/**
  * A function that update a specific student (by Specific Id) in the students Data in JSON Server
  * The update kan be one or more attribute of a specific student
  * @param {number} objId      The Id of the student when the user specifies which student to update
  * @param {string} firstName  Update the first Name of thestudent
  * @param {string} lastName   Update the last name of the student
  * @param {number} age        updat the student age
  */
  const  updateStudent = async(objId, firstName, lastName, age)=> {

    /**waiting for the Students URL response with a specific Id*/     
    await fetch(`http://localhost:5000/students/${objId}`,
               {
                 method:'PUT',

                //Convert the student object (the updated student) from js to json to be written in the server
                 body: JSON.stringify({
                                       firstName: firstName,
                                       lastName: lastName,
                                       age: parseInt(age)   //by parseInt() method the age will be written as number in JSON server
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
                  // update the students state by setting the updated student on the students data in JSON Server by its Id.  
                   setStudents(data.objId);
                })      
  } 

  /** The functon updateStudent() Runs only on the first render when the effect run */ 
  useEffect(() => {
    updateStudent();
  }, []);


  //////////////////////////////////Delete Students/////////////////////////////////////

/**
 * A function that delete a specific student (by a Specific Id) in the students Data in JSON Server
 * @param {number} objId  The Id of the student when the user specifies which student to delete 
 */
const  deleteStudent = async(objId) =>{

         /**waiting for the Students URL response with a specific Id*/ 
         await fetch(`http://localhost:5000/students/${objId}`,
              {
                method: 'DELETE',
              })

         .then((res)=>{
              if (res.status !== 200) { return }
                
              else {
                    // return the students whose id does not match the id that specified by the user to delete and setting then in students
                     setStudents(students.filter((student) =>{
                      return student.id !== objId;
                    })) 
                   }
           }) 

          .catch((err) =>{
             console.log(err)
           })    
}

////////////////////////////////////////////////////////////

/** set Varible (input) the initial state to an empty string. 
 * This is for to get the value from input field in the form */
const [input, setInput] = useState("");

////////////////////////////////////////////////////////////

return (
  <>
        <div className="table-title">
           
            <div className="row">
                <div className="col-sm-6">
                    <h2 className="table-header">Våra <b>Studenter</b> på Front-End developer</h2>
                </div>
                <div className="col-sm-4"></div>

                <div className="col-sm-2">
                    <Button onClick={handelShowForm}  className="btn btn-primary" data-toggle="modal"> <span>Lägg till en ny student</span></Button>
                </div>
            </div>

            <div className="row mb-5"></div>
            
         </div>

        
         <Alert show={showAlert} variant="success">
           Studenternas lista har uppdaterats
         </Alert>

         


          <Container>
             <Row>
               <Col></Col>
               <Col md={3}>

                 <InputGroup className="mb-3">

                     <FormControl
                         name="input"    
                         //**set the value that the user entered in the input state */
                         onChange={(e)=>setInput(e.target.value)}
                         placeholder="Söka för studenternas list" 
                         required
                     />
          
                     <Button variant="primary" id="button-addon2">
                        <ImSearch/>
                     </Button>
                     
                  </InputGroup> 
               </Col>
             </Row>
          </Container>        


        

         <Table className="table table-striped table-hover mb-3" responsive="sm">
            <thead>
                <tr>
                    <th className="data">ID</th>
                    <th className="data">Förenamn</th>
                    <th className="data">Efternamn</th>
                    <th className="data">Ålder</th>
                    <th></th>
                    <th></th>
                    <th className="data">Operation</th>
                </tr>
            </thead>

            <tbody>
                       {/*
                        * sort the students id from smallest to largest
                        * filter students (firsName, lastName and age) by the value enterd by user  
                        */}
                    {
                       students.sort((a,b)=> (a.id< b.id ? -1 : 1))
                               .filter((student)=>student.firstName.toLowerCase().includes(input) || student.lastName.toLowerCase().includes(input) || student.age.toString().includes(input))
                               .map(student =>(

                          <tr key={student.id}>

                            {/*  call the component  (ReadCStudentsData) and send cstudents (objects) to print-out them one by one  
                              *  send (deleteStudent) and (updateStudent) functions
                            */}
                            <ReadStudentsData student = {student} deleteStudent={deleteStudent} updateStudent={updateStudent} />
                         
                          </tr>  

                        ))
                        
                    }         
            </tbody>
        </Table>

        <Modal show={show} onHide={handelCloseForm}>
            <Modal.Header  closeButton>
                <Modal.Title>
                  Lägg till en ny student
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {/** call (AddStudentForm) component and send (postStudentData) function */}
                <AddStudentForm postStudentData={postStudentData}/>

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

export default CRUDStudentData;