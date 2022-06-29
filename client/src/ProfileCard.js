import React from 'react'
import {Card, Row, Col} from 'react-bootstrap'

const ProfileCard = ({user}) => {
  return (
    <div>
      {user &&
            <Row  style={{marginBottom:"10px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems: "center",flexWrap:"wrap"}}>
                <Col xs={12} md={4}>
                    <Card body>
                        <div>Name : {user.name}</div>
                        <div>Email : {user.email}</div>
                        <div>Phone : {user.phone}</div>
                        <div>Age : {user.age}</div>
                        <div>Gender : {user.gender}</div>
                        <div>Aadhar No. : {user.aadhar_no}</div>
                        <div>Pin Code : {user.pincode}</div>
                        <div>Address : {user.address}</div>
                        <div>Occupation : {user.occupation}</div>
                    </Card>
              </Col>
              
            </Row>
            
        }
    </div>
  )
}

export default ProfileCard
