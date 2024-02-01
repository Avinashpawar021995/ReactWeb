import React, { useState } from 'react'
import { Input, Form,FormGroup, Container, Button  } from 'reactstrap'
import axios from 'axios';
import base_url from '../API/BootApi';
import { toast } from "react-toastify";
const UpdateCourser = (course1) => {
      const [course, setCourse]=useState({});
      const handleForm =()=>{
     updateCourses();
      }
      const updateCourses =()=>{
        axios.push(`${base_url}/courses`).then(
         (response)=>{
           toast.success("course is seccess full updated");
           
         },
         (error) =>{
           toast.error("course is not update")
         }
        )
    
       }
      
    return (
    <>
       <div>
      <h1 className='text-center my-md-3'>Fill Course Details</h1>
      </div>
    <Form onSubmit={handleForm}>
        <FormGroup>
   
            <label htmlFor="">Course Id</label>
           <Input 
           type='text' placeholder='enter the  here' name='userid' id="userid" value={course1.id} onChange={(e)=>{
            setCourse({...course, id:e.target.value})
           }}
           />
        </FormGroup>
        <FormGroup>
          <label htmlFor="">Name</label>
          <Input type='text' placeholder='enter the here' id='name' value={course1.name}
           onChange={(e)=>setCourse({...course, name:e.target.value})}/>
        </FormGroup>
        <FormGroup>
            <label htmlFor="">course title</label>
          <Input type='text' placeholder='enter the  here' id="title" value={course1.title}
           onChange={(e)=>setCourse({...course, title:e.target.value})}/>
        </FormGroup>
        <FormGroup>
           <label htmlFor=''> Start Date</label>
            <Input type='date' placeholder='enter the  here' id="date"  value={course1.startdate}
            onChange={(e)=>setCourse({...course, startDate:e.target.value})} />
        </FormGroup>
        <FormGroup>
            <label htmlFor='description'>course Description</label>
            <Input type='textarea' placeholder='enter the description' id="description"
              style={{height:100}}
              value={course1.description}
                onChange={(e)=>{
                  setCourse({...course,description:e.target.value});}}
               />
             
        </FormGroup>
        <Container className='text-center d-flex g-3 p-2'>
            <Button type='submit' color="success me-3" outline>Add Course</Button>
            <Button type='reset' color="warning ml-2" outline >clear</Button>
        </Container>
    </Form>
    
    </>
      )
}

export default UpdateCourser
