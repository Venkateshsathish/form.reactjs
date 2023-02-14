import React , { useState } from 'react'
import Choice from './Choice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BsPlusLg } from "react-icons/bs";



function Top() {
  const userData = [
   { choice :' This is Choice 1', match : 'This is Match 1'},
   { choice :' This is Choice 2', match : 'This is Match 2'},
   { choice :' This is Choice 3', match : 'This is Match 3'},
   { choice :' This is Choice 4', match : 'This is Match 4'},
  ]
   const[users] = useState(userData)

    return(
        <>
        <Container>
        <div>
      
          <Card className=' m-5 p-5'  border="primary" style={{width: '900px' }}>
          
            <Form>
            
              <div>
            <Row>
              <Col>
              <Form.Label>Prompt Category</Form.Label>
              <Form.Select style={{width:'400px' }}>
                   <option>Without SubPrompt</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
              </Col>
              <Col>
              <Form.Label>Score</Form.Label>
              <Form.Select style={{width:'100px'}}>             
      <option>eg10</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
              </Col>
              </Row>
              </div>
            
            <div className='mt-4 '>
              <Row>

              <Col>            
              <Form.Label>Type</Form.Label>
              <Form.Select style={{width:'400px'}}>
      <option>Select Type</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
              </Col>
              <Col>
               <Form.Check className='mt-5 s-1rem'
        type="switch"
        id="custom-switch"
        label="Mandatory to Attemt"
      />
              </Col>
              </Row>


              <div className='mt-4'>
              <Row>
              <Form.Label>Prompt</Form.Label>
              <Form.Control className=''
              style={{width:'600px'}}
        type="text"
        placeholder="Type pormpt here"
        readOnly
      />
     </Row>
     <Row>
      <Col>
       <Button variant="link"><BsPlusLg/>
       Add instruction/Descrpitionz/attachments
       </Button>
       <Button variant="link"><BsPlusLg/>
       Add Hint
       </Button>
       </Col>
                </Row>
                </div> 
                   
             <Choice  users ={users}/>
             
              </div>
            
            </Form>
            
          </Card>
          </div>
        </Container>
     
      </>
        
    )
}

export default Top;