import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';
import {Container, Button, Form, FormControl, InputGroup, ButtonGroup} from 'react-bootstrap';

   
/**
 * A function(component)that representing Email
 * @returns 
 */
const Email = () => {

 const [toSend, setToSend] = useState({from_name:'', to_name:'', message:'', reply_to:'',});

  
 //onSubmit handle the submission; to send data via emailjs.send
 // To connect the emailJS service with person's Gmail, the service informatiom(service id, templete id and user id) must be written in send method
 const onSubmit = (e) => {
    e.preventDefault();

    send('service_0ofuxvs', 'template_o5veg8u', toSend, 'user_nqjhT5jAMq3FhVgXDTPFx')
      
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })

      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  
  //takes the values from Form and set them in their names in toSend state
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };



  return (

<div className="email-form">
    <Container>
        <h1 className="contact-text">Kontakta Oss</h1>

        <Form className="center-form" onSubmit={onSubmit}> {/*call onsubmit on the form*/}

          <Form.Label className="lable">Från</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              type="text" 
              name='from_name' 
              placeholder="Skriv ditt namn"
              size="60" 
              id="input-1"
              className="input"
              value={toSend.from_name}
              onChange={handleChange}
            />
          </InputGroup>


          <Form.Label className="lable">Till</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              type='text'
              name='to_name'
              placeholder='skriv namnet du skicka mail till'
              size="60"
              id="input-2"
              className="input"
              value={toSend.to_name}
              onChange={handleChange}
             />
          </InputGroup>

  
          <Form.Label className="lable" >E-Post</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
             type='text'
             name='reply_to'
             placeholder=' Skriv din mail'
             size="60"
             id="input-3"
             className="input"
             value={toSend.reply_to}
             onChange={handleChange}
            />
          </InputGroup>


          <Form.Label className="textarea-lable">Medelande </Form.Label>
          <InputGroup> 
            <FormControl as="textarea" aria-label="With textarea"    
              name='message'
              placeholder=" "
              id="input-4"
              maxlength="50" rows="4" cols="50" 
              className="textarea"
              value={toSend.message}
              onChange={handleChange}
            />
         </InputGroup>
         <ButtonGroup className="button-position">
         <Button variant="dark" type="submit" className="submit">
           <h4 className="send">Skicka</h4>
         </Button>
         </ButtonGroup>
       
     </Form>
  </Container>  
</div>



);

};
export default Email;
