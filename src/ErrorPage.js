import React from 'react';
import error from './Images/error.png';
import {useNavigate} from 'react-router-dom';

/**
 * A function for an Error page. If someone search for a specific page with a wrong spelling.
 * @returns information that the page is wrong and a button that links to the Home Page.
 */

function Error() {
    
  let navigate = useNavigate();
  
    return(

  <div>
      <h1 className="error">Du har sökat för fel sida</h1>
     
      
      <img src={error} alt="image about wrong icon"  className="wrong-image"/>

       <div className=" go-to-homepage">  
          Tillbacka till Hemsida <br/> 
       </div>   

       <button className="error-button" onClick={() => {navigate("/")}}> Hemsida </button>       
     
  </div>

  );
};

export default Error;