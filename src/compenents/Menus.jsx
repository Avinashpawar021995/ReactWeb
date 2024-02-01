import React from 'react'
import { ListGroup } from 'reactstrap'
import {Link} from 'react-router-dom'
const Menus = () => {
  return (
    <div>
      <ListGroup>
        <Link tag='a' className='list-group-item list-group-item-action' to='/' action>Home</Link>
      </ListGroup>
      <ListGroup>
        <Link tag="a" className='list-group-item list-group-item-action' to='/addCourse' action>
        Add Course
        </Link>
      </ListGroup>
      <ListGroup>
        <Link tag="a" className='list-group-item list-group-item-action' to='/view-course' action>
           View Course
        </Link>
      </ListGroup>
      <ListGroup>
        <Link tag="a" className='list-group-item list-group-item-action' to='#!' action>
           About
        </Link>
      </ListGroup>
      <ListGroup>
        <Link tag="a" className='list-group-item list-group-item-action' to='#!' action>
           contact
        </Link>
      </ListGroup>
    </div>
  )
}

export default Menus
