import './App.css';
import {Button, Container, Row ,Col} from 'reactstrap';
import Header from './compenents/Header';
import { toastContainer , toast, ToastContainer} from "react-toastify";
import Home from './compenents/Home';
import Course from './compenents/Course';
import AllCourse from './compenents/AllCourse';
import AddCourse from './compenents/AddCourse';
import Menus from './compenents/Menus';
import {BrowserRouter ,  
  Routes,  
  Route, } from 'react-router-dom'
function App() {
  const btnHandler =()=>{
    toast("this is my first massege");
  }
  return (
    <div className="App">
     <>
           <BrowserRouter>
      <ToastContainer/>
        <Container>
          <Header/>
          <Row>
            <Col md={4}>
          <Menus/>

            </Col>
            
            <Col md={8}>
              <Routes>
           <Route path='/' element={<Home/>} exact/>
           <Route path='/addCourse' element={<AddCourse/>} exact/>
           <Route path="/view-course" element={<AllCourse/>} exact/>
           </Routes>
            </Col>
            </Row>
        </Container>
        </BrowserRouter>
 </>
               </div>
 
  );

}

export default App;
