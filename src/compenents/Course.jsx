import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText,  Container } from 'reactstrap';
import base_url from '../API/BootApi';
import axios from 'axios';
import { toast } from "react-toastify";
import UpdateCourser from './UpdateCourser';

const Course = ({ course, update }) => {
   const deleteCourse =(id)=>{
     axios.delete(`${base_url}/courses/${id}`).then(
      (response)=>{
        toast.success("course delete success full ");
        update(id);
      }, 
      (error)=>{
        toast.error("course not  deleted !!");
      }
     )
   }

  return (
    <>
     <Card className='text-center'>
        <CardBody>
          <CardText>{course.id}</CardText>
            <CardSubtitle className='fw-bold'>{course.title}</CardSubtitle>
         
         <CardText>{course.date}</CardText>
         <CardText>{course.description}</CardText>
         <Container className='text-center'>
             <Button color='danger' onClick={()=>{
              deleteCourse(course.id);
             }} >deleted</Button>
             <Button color='warning ml-3'
             >update</Button> 
      <UpdateCourser updatecourse={update}/>         
         </Container>
        </CardBody>

     </Card>
    </>
  )
}

export default Course
