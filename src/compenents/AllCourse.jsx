import React, { useEffect, useState } from 'react'
import Course from './Course'
import axois from 'axios';
import { toast } from "react-toastify";
import base_url from '../API/BootApi';
const AllCourse = () => {
  useEffect(()=>{
    document.title="all courses";
  },[])  

  //function to call server
  const getAllCourser =()=>{
    axois.get(`${base_url}/courses`).then(
      (respone)=>{
        
        console.log(respone);
        toast.success("courses has been loaded" ,{
          position:'bottom-center'
        }
        );
         setCourses(respone.data)
      },(error)=>{
        console.log(error);
        toast.error("something  went worng");
      }
    );
  }
  useEffect(()=>{
    getAllCourser();
  },[]);
  const [courses, setCourses]=useState([]);
    
  const updateCourses = (id) =>{
      setCourses(courses.filter((c)=> c.id !== id));
     };
  
  return (
    <div>
        <h1>All Course</h1>
        <p>List of  courses are as follows</p>
         <div>
         {
            courses.length >  0
            ? courses.map((item)=>
                <Course key={item.id} course={item} update={updateCourses}/>

            ):"No Courses"
         }
         </div>
        {/* <div>
        {
        courses.length>0 ?courses.map((item)=>
        <UpdateCourser key={item.id} course={item} update={updateCourses}/>
        
        ) :"No Course"
 
        }</div> */}
        </div>            
    
  )
}

export default AllCourse
