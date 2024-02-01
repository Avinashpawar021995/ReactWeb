import React from 'react'
import { Card, CardBody } from 'reactstrap'

const Header = ({title,name}) => {
  return (
    <>
     <div className="container">
        <div className="row">
            <div className="col-md-12">

                <h1>{title}</h1>
                <p>{name}</p>
                <Card className='my-2'>
                  <CardBody>
                  <h1 className='text-center mt-5 bg-warning'> Welcome to course Application</h1>
          
                  </CardBody>
                </Card>
            </div>
        </div>
     </div>
    </>
  )
}

export default Header
