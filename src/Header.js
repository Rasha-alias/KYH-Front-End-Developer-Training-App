import React from "react";
import "./App.css";
import { BrowserRouter as Router,Routes,Route ,Link } from "react-router-dom";

import Students from "./Pages/StudentsPage";
import Teachers from "./Pages/TeachersPage";
import Courses from "./Pages/CoursesPage";
import About from "./Pages/AboutPage";
import Contact from "./Pages/ContactPage";
import Home from "./Pages/HomePage";
import Error from './ErrorPage';

import {Container, Navbar, Nav }from 'react-bootstrap/';

 
/**
 * Class representing a Header (Navbar).
 * @extends React component
 * @return Nav as components (studenter, lärare, kurser, Om oss, kontakt) that links to thier pages
 */

class Header extends React.Component {

render() {
 
return (

<Router>

  <Container className="" fluid={true}>
      <Navbar collapseOnSelect expand="lg" bg="grey" variant="light" className="navbar-border">
            <Container>
                
                <Navbar.Brand href="#home" className="brand">  
                <Link className="nav-link" to ="/">  Front-End Developer </Link>
                </Navbar.Brand>
 
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
   
                    <Nav className="me-auto">
                        <Link className="nav-link" to ="/StudentsPage">Studenter</Link>
                        <Link className="nav-link" to ="/TeachersPage">Lärare</Link>
                        <Link className="nav-link" to ="/CoursesPage">Kurser</Link>
                    </Nav>

                    <Nav className="ml-auto">
                        <Link className="nav-link" to ="/AboutPage"> Om Oss</Link>
                        <Link className="nav-link" to ="/ContactPage"> Kontakt</Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>

       <Routes>
         <Route path="/" element ={<Home/>} />
         <Route path="/StudentsPage" element ={<Students/>} />
         <Route path="/TeachersPage" element ={<Teachers/>} />
         <Route path="/CoursesPage" element ={<Courses/>} />
         <Route path="/AboutPage" element ={<About />} />
         <Route path="/ContactPage" element ={<Contact />} />
         <Route path="*" element ={<Error />} />
       </Routes>
 
   </Container>
 </Router>

);
}
}

export default Header;