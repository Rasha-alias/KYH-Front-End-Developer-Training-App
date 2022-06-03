import React from 'react';
import "./App.css";
import {ImFacebook2} from "react-icons/im";
import {ImLinkedin} from "react-icons/im";
import {FaInstagramSquare} from "react-icons/fa";
import kyh from './Images/kyh.jpg';


/**
 * A function that representing apps Footer 
 * @returns line , social media icons and information about contact
 */
const Footer = () => {
  return (

    <div className="footer">
              
          <div className="content"></div>

          <div className="box">

                 <div className="box-left">
                 <a href="https://www.facebook.com/KYHsverige/"><ImFacebook2  style={{height:"30px", width:"30px", color:"rgb(77, 78, 78)", marginTop:"2px"}}/></a>
                 <a href="https://www.linkedin.com/school/kyh/?originalSubdomain=se"><ImLinkedin  style={{height:"30px", width:"30px", color:"rgb(77, 78, 78)", marginTop:"2px"}}/></a>
                 <a href="https://www.instagram.com/kyh_yrkeshogskola/"><FaInstagramSquare  style={{height:"33px", width:"35px", color:"rgb(77, 78, 78)"}}/></a>
                 </div>

                 <div >
                   <div className="box-center"><img src={kyh} alt= "YH logo" style={{height:"23px", width:"23px", marginBottom:"5px"}}/> YrkeHögskola</div>
                   <div className="box-center">  <strong  style={{marginRight:"4px"}}>KYH </strong> är en del av AcadeMedia.</div>
                 </div>


                 <div>
                     <div className="box-right">E-post: yhansokan@​kyh.se</div>
                     <div className="box-right"> Telefon: 019-100 080 </div>
                 </div>

          </div>   
    </div>

)
}
export default Footer