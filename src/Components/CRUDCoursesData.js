import React from 'react';
import { useState, useEffect } from "react";
import "./ComponentsStyle.css";

import { Modal, Button, Container, Row, Col, Accordion} from "react-bootstrap";
import AddCourseForm from './AddCourseForm';
import ReadCoursesData from './ReadCoursesData';

  
  /*
  * A function (ccomponent) that representing all CRUD opration for Courses in KYH.
  * @return components (ReadCoursesData) and (AddCourseForm) which they are called in this component.
  */

  const CRUDCoursesData = () => {

 
  /** URL for JSON Server Courses and JSON Server Teachers and save them in varaibles  */
    const courses_url = "http://localhost:5600/courses";
    const Teachers_url = "http://localhost:5500/teachers";

   /** set Varible (courses) the initial state to an empty array */
    const [courses, setCourses] = useState([]);

    /** set Varible (show) the initial state to false value */
    const [show, setShow] = useState(false); 

    /**A function that update show state by setting true value in show state by function setShow */
    const handelShowForm = () => setShow(true);

    /**A function that update show state by setting false value in show state by function setShow */
    const handelCloseForm = () => setShow(false);

     /**
      * UseEffect is dependent on a variable courses.
      *  If the courses variable updates, the effect will run again. That is mean the (handelCloseForm) will run.  
      *  when the new course is added to the courses array by or update a specific course by submit button, the form will be closed or(hidden). 
      * */ 
      useEffect(() => {
        handelCloseForm();
      }, [courses]);  

////////////////////////////////////////Get Courses/////////////////////////////////////////////////

    /**
     * An async function to get the courses Data from JSON-Server (Server3)
     * @return courses data from JSON-Server
    */
    const getCoursesData = async() =>{

            /**waiting for the Courses URL response */
            const response = await fetch(courses_url);
            
            /**  wating for json data response and convert it to JS objects*/
            const coursesData = await response.json();
           
            // updata the state by setting courses data in courses varible
            setCourses(coursesData);

            //call getTeachersValue in this function to get the the teachers values to each teachersId in Courses data
            getTeachersValue();
    }

   /** The functon getCousrsesData Runs only on the first render */
    useEffect(()=>{
        getCoursesData(); 
    }, []);

/////////////////////////////////////////////Post Courses///////////////////////////////////////////////

    /**
     * A function that post a new course to courses Data in the JSON-Server
     * @param {string} courseName   The name of the course
     * @param {number} point        The point that course has. Number as string and by (parseInt method) will be changed to number
     * @param {date} startDate      When the course starts 
     * @param {date} endDate        When the course end
     * @param {string} description  Description about the course
     * @param {number} teachersId   Id number of the teacher in Teachers data. 
     */

    const postCourseData = async(courseName, point, startDate, endDate, description, teachersId ) =>{
      
      /**waiting for the response of the Courses URL*/
     await fetch(courses_url,
        {
          method:"POST",
          
          /**Convert the course object (new course) from js to json to be written in the server*/
          body  : JSON.stringify(
                                  {
                                   courseName  : courseName,
                                   point       : parseInt(point),     // point will be written as number in JSON server
                                   startDate   : startDate,
                                   endDate     : endDate,
                                   description : description,
                                   teachersId  : parseInt(teachersId) // teachersId will be written as number in JSON server
                                  
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
           /** Update the courses state by setting the new course on the courses data in JSON Server */    
          setCourses((courses) => [...courses, data]);
         
      })

      .catch((err) =>{
      console.log(err)
      })    
    }

    ////////////////////////////////////Update Courses//////////////////////////////////////////////

    /**
     * A function that update a specific course (by Specific Id) in the Courses Data in JSON Server
     * The update kan be one or more attribute of a specific course
     * @param {number} objId         The Id of the course when the user specifies which course to update
     * @param {string} courseName    Update the name of the course
     * @param {number} point         Update the point that course has
     * @param {string} startDate     Update the course startdate
     * @param {string} endDate       Update the course enddate
     * @param {string} description   Update the course description 
     * @param {number} teachersId    uppdate Id number of the teacher. 
     */

    const  updateCourse = async(objId, courseName, point, startDate, endDate, description, teachersId)=> {
       
      /**waiting for the Courses URL response with a specific Id*/
      await fetch(`http://localhost:5600/courses/${objId}`,
                 {
                   method:'PUT',

                   //Convert the course object (the updated course) from js to json to be written in the server
                   body: JSON.stringify({
                                          courseName   : courseName,
                                          point        : parseInt(point),   // point will be written as number in JSON server
                                          startDate    : startDate,
                                          endDate      : endDate,
                                          description  : description,
                                          teachersId   : parseInt(teachersId) // teachersId will be written as number in JSON server
                                         
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
                    // update the courses state by setting the updated course on the courses data in JSON Server by its Id.  
                     setCourses(data.objId);  
                  })
         
    } 
  
    /** The functon updateCousrse() Runs only on the first render when the effect run */ 
    useEffect(() => {
      updateCourse();
   }, []);
  
  ////////////////////////////////////////Delete Courses////////////////////////////////////////////////

   /**
    * A function that delete a specific course (by a Specific Id) in the courses Data in JSON Server
    * @param {number} objId  The Id of the course when the user specifies which course to delete 
    */   
  const  deleteCourse = async(objId) =>{

           /**waiting for the Courses URL response with a specific Id*/ 
           await fetch(`http://localhost:5600/courses/${objId}`,
                {
                  method: 'DELETE',
                })
  
           .then((res)=>{
                if (res.status !== 200) { return }
                  
                else {
                  // return the courses whose id does not match the id that specified by the user to delete and setting then in courses
                       setCourses(courses.filter((course) =>{
                        return course.id !== objId;
                      })) 
                     }
             }) 
  
            .catch((err) =>{
               console.log(err)
             })    
  }
 
///////////////////////////////////////////Get teachers Values///////////////////////////

 /** set Varible (teachersValues) the initial state to an empty array */
const [teachersValues, setTeachersValues] = useState([]);


/**
 * a function to get the Teachers value
 * @return teachers value
 */
const getTeachersValue = async() =>{

  /** waiting for the Teachers URL response */
  await fetch(Teachers_url)
  .then ((res)=>{
                 return res;
                }
        )  
  
   /**  wating for json data response and convert it to JS objects*/
  .then ((res)=> res.json())

  // set the values in teachersValues
  .then((value)=> setTeachersValues(value))
  .catch((err)=>{
    console.log(err);
  });
};

/** The functon getTeachersValue() Runs only on the first render when the effect run */ 
useEffect(()=>{
  getTeachersValue();
}, [])

////////////////////////////////


  return (
   <>

    <Container className="table-title">
        <Row>
            <Col sm="6">
                <h2 className="table-header"> <b> Kurser</b> som ingår i front-end developer på KYH </h2>
            </Col>

            <Col sm="4"></Col>
                
            <Col sm="2">
                <Button onClick={handelShowForm}  className="btn btn-success" data-toggle="modal"> <span>Lägg till ny student</span></Button>
            </Col>
        </Row>
        <Row className="mb-5"></Row>
    </Container>



   
    <Container>
        <Row>
            <Col style={{backgroundColor:"rgb(233, 240, 175)"}}>
                {
                  courses.map(course =>(
                    
                    <Accordion defaultActiveKey="0" className=" my-2" key={course.id}> 

                     {/*  call the component  (ReadCoursesData) and send courses (objects) to print-out them one by one  
                       *  send (deleteCourse) and (updateCourse) functions + (teachers Values) to check 
                       *  if the TeacherId in each course has the same id in teachers data
                       *  to enable us to return the teachers firstName and last Name
                       */}

                     <ReadCoursesData 
                     course={course}
                     deleteCourse={deleteCourse}  
                     updateCourse={updateCourse}
                     teachersValues={teachersValues}
                     teacherName={ teachersValues &&  teachersValues.map((teachersValue)=>{   
                            
                                 if(teachersValue.id === course.teachersId)
                                   {
                                    return  teachersValue.firstName + " " + teachersValue.lastName;                                       
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
              Lägg till en ny Kurs
          </Modal.Title>
      </Modal.Header>

      <Modal.Body>

        
        {/** call (AddCourseForm) component and send (postCourseData) function and teachers Values*/}
          <AddCourseForm postCourseData={postCourseData} teachersValues={teachersValues} />
                      
   </Modal.Body>

      <Modal.Footer className="justify-content-between">  

          <Button variant="secondary" onClick={handelCloseForm} style={{marginLeft:"auto"}} >
                Stäng
          </Button>
          
      </Modal.Footer>
  </Modal>

  </>
  );
}

export default CRUDCoursesData;