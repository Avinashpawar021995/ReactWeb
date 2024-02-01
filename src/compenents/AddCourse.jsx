import React, { useEffect, useState } from 'react'
import { Container, Form, FormGroup, Input, Button } from 'reactstrap'
import axios from 'axios'
import base_url from '../API/BootApi';
import { toast } from "react-toastify";
const AddCourse = () => {
   
  useEffect(()=>{
    document.title="all courses";
   },[]);
 const [course, setCourse]=useState({});
  // form handler funcction
   const handleForm =(e)=>
   {
    postDataServer(course);
    e.preventDefault();
   }

//create function to post data on server
 const postDataServer =(data)=>{
  axios.post(`${base_url}/course`,data).then(
    (response)=>{
       console.log(response);
          toast.success(" course added success full! ")
       console.log("success");
       
    }, (error)=>{
         console.log(error);  
              toast.error("Error  ! something  went wrong")
    }
  );

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
           type='text' placeholder='enter the  here' name='userid' id="userid" onChange={(e)=>{
            setCourse({...course, id:e.target.value})
           }}
           />
        </FormGroup>
        <FormGroup>
          <label htmlFor="">Name</label>
          <Input type='text' placeholder='enter the here' id='name'
           onChange={(e)=>setCourse({...course, name:e.target.value})}/>
        </FormGroup>
        <FormGroup>
            <label htmlFor="">course title</label>
          <Input type='text' placeholder='enter the  here' id="title"
           onChange={(e)=>setCourse({...course, title:e.target.value})}/>
        </FormGroup>
        <FormGroup>
           <label htmlFor=''> Start Date</label>
            <Input type='date' placeholder='enter the  here' id="date" 
            onChange={(e)=>setCourse({...course, startDate:e.target.value})} />
        </FormGroup>
        <FormGroup>
            <label htmlFor='description'>course Description</label>
            <Input type='textarea' placeholder='enter the description' id="description"
              style={{height:100}}
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

export default AddCourse
