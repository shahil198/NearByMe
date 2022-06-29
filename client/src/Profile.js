import React ,{useState, useEffect} from 'react'
import {Card} from 'react-bootstrap'
import Navbar from './Navbar'
import './css/register.css'
import Footer from './Footer'

const Profile = () => {

    const [user, setUser] = useState('')

    useEffect(()=> {
        getUser();
    },[])

    const getUser = () => {
        var token = localStorage.getItem('token');
        const url = '/api/auth';
    fetch(url, {
      method:"GET",
      headers: {
        'x-auth-token': token,
      }
    }).then(response => response.json())
    .then(data => {
      if(data.success && data.user) {
        setUser(data.user);
        console.log(data.user);
      } else {
        console.log(data.error)
      }
    });
    }

  return (
    <div>
      <Navbar/>
        <div className='container bg-light my-5'>
            {user && 
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
            }
            {!user && "No user profile found."}
        </div>
      <Footer/>
    </div>
  )
}

export default Profile
