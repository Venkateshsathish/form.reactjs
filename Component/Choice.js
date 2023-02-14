import React from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import { FaGripVertical } from "react-icons/fa";
import {FiPaperclip } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";


function Choice(props) {
  
  
    return(
      <>
        <div>
             <Form.Label class='mt-5'><h5>Choices</h5></Form.Label>
             <div>
                <Row>
                    <Col><Form.Label ><h6>Choices</h6></Form.Label></Col>
                    <Col>  <Form.Label><h6>Match</h6></Form.Label></Col>
                </Row>
                

                {props.users.length > 0? (
                    props.users.map((user) =>(

                    <Row >
                    <Col sm={4}>
                       <InputGroup>
                       <FaGripVertical/>
        <Form.Control  style={{with:'100px'}}/>
        <InputGroup.Text >{user.choice}<Button variant="link"><FiPaperclip/></Button>  </InputGroup.Text>
      </InputGroup>
                    </Col>
                    <Col sm={1}><FaArrowRight style={{color:'green'}}className='mt-3 mr-2'/></Col>
                    <Col sm={4}>
                       <InputGroup >  
        <Form.Control   />
         <InputGroup.Text >{user.match} <Button variant="link"><FiPaperclip/></Button> <Button variant="link"><MdDelete/></Button> </InputGroup.Text>
      </InputGroup>
                    </Col> 
                </Row>
                  ))
                ):(
                  <p></p>
                )
                }
               


                <Row>
                <Col>
               <Form.Check className='mt-4 s-1rem'
        type="switch"
        id="custom-switch"
        label="Randomise Choice"
      />
              </Col>
              <Col>
              <Button variant="link" className='mt-4'><BsPlusLg/>
       Add Another Choice
       </Button>
              </Col>
                </Row>
                
                <Row>
                <Col>
                <Form.Check className='mt-3'
            inline
            label="Incorrect score"
            name="group1"          
          />
                </Col>
                </Row>

                <Row>
                <Col>
                <Form.Control className='mt-2'
              style={{width:'100px'}}
        type="text"
        placeholder="eg-1"
        readOnly
      />
                </Col>
                </Row>
                
                <Card.Footer>
                    <Row>
                        <Col>
                <Button variant="link"><BsPlusLg/>
       Evaluation Tool
       </Button>
       </Col>
       </Row>
       </Card.Footer>         

        </div>
        </div>
        </>
    )
}
export default Choice;