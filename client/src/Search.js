import React ,{useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import Navbar from './Navbar'
import './css/register.css'
import Footer from './Footer'
import ProfileCard from './ProfileCard'

const Search = () => {

    const [users, setUsers] = useState('')
    const [pincode, setPincode] = useState('')
    const [allusers, setAllusers] = useState('')

    useEffect(()=> {
        getUsers();
    },[])

    const getUsers = () => {
        // var token = localStorage.getItem('token');
        const url = '/api/users';
    fetch(url).then(response => response.json())
    .then(data => {
      if(data.success && data.users) {
        setUsers(data.users);
        setAllusers(data.users);
      } else {
        console.log(data.error);
      }
    });
    }

    const search = (e) => {
        setPincode(e.target.value);
        if(e.target.value.length < 1){
            setAllusers(users);
            return;
        }
        let users = allusers.filter(user => {
            if(user.pincode == pincode)
                return user
        });
        console.log(users);
        
        setAllusers(users);
    }

  return (
    <div>
      <Navbar/>
      <div className='container' >
      <Row>
        <Col xs={12}>
        <div className='text-center mt-3'>
            <h2>Workers list </h2>
            {/* <input type='number' className='bg-dark' value={pincode} onChange={search}/> */}
        </div>
        </Col>
        </Row>
      </div>
        <div className='container bg-light my-5'>
            {allusers && users.map(user => <ProfileCard user={user} key={user._id} />) }
        </div>
      <Footer/>
    </div>
  )
}

export default Search
