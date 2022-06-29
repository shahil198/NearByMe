import React ,{useState} from 'react'
import Navbar from './Navbar'
import './css/register.css'
import Footer from './Footer'

// const Signup = () =>{
//   const [user,serUser]=useState({
//     name:"",email:"",password:"",rpassword:"",phone:"",age:"",address:"",pincode:"",aadharno:"",occupation:"",gender:""
//   });
// }






const Register = () => {
  const [user,setUser]=useState({
        name:"",email:"",password:"",phone:"",age:"",address:"",pincode:"",aadhar_no:"",occupation:"",gender:"Male"
      });
  const [rpass, setRpass]=useState('');
  const [error, setError]=useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (user.password !== rpass) {
      alert('Passwords do not match');
      return;
    }
    if(user.phone.length != 10) {
      alert('Input correct phone no.');
      return;
    }
    if(user.pincode.length != 6) {
      alert('Input correct pincode');
      return;
    }
    if(user.aadhar_no.length != 12) {
      alert('Input correct aadhar no.');
      return;
    }
    const url = '/api/users';
    fetch(url, {
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => response.json())
    .then(data => {
      if(data.success && data.token) {
        localStorage.setItem('token', data.token);
        alert('Registration Successful. Logging in Now...');
        window.location.href='/profile';
      } else {
        setError(data.error);
      }
    });
  }


  return (
    <div className='register-uni'>
      <Navbar />
      <div className='register-container'>

        <div className='form-container'>
          <form className='reg-form' onSubmit={onSubmit}>
            <h3 className='register-heading'>Register</h3>
            {error && <h5 className='text-center text-danger'>{error}</h5>}
            <p className='register-p'>Enter your details carefully</p>
            <div className='reg-form-det'>
              <label>Enter your name</label>
              <input type="text" required  
                 value={user.name}
                 onChange={(e) => {setUser({...user, name: e.target.value})}}
              />
            </div>
            <div className='reg-form-det'>
              <label>Enter your Email</label>
              <input type="email" required  
                 value={user.email}
                 onChange={(e) => {setUser({...user, email: e.target.value})}}
              />
            </div>
            <div className='reg-form-det'>
              <label>Enter your password</label>
              <input type="password" required  
                 value={user.paasword}
                 onChange={(e) => {setUser({...user, password: e.target.value})}}
              />
            </div>
            <div className='reg-form-det'>
              <label>Re-Enter your password</label>
              <input type="password" required  
                 value={rpass}
                 onChange={(e) => {setRpass(e.target.value)}}
              />
            </div>

            <div className='reg-form-det'>
              <label>Enter your Phone no.</label>
              <input type="number" required  
                 value={user.phone}
                 onChange={(e) => {setUser({...user, phone: e.target.value})}}
              />
            </div>
            <div className='reg-form-det'>
              <label>Enter your Age</label>
              <input type="number" required  
                 value={user.age}
                 onChange={(e) => {setUser({...user, age: e.target.value})}}
              />
            </div>
            <div className='reg-form-det'>
              <label>Enter address</label>
              <input type="text" required  
                 value={user.address}
                 onChange={(e) => {setUser({...user, address: e.target.value})}}
              />
            </div>
            <div className='reg-form-det'>
              <label>Enter Area Pincode</label>
              <input type="number" required  
                 value={user.pincode}
                 onChange={(e) => {setUser({...user, pincode: e.target.value})}}
              />
            </div>
            <div className='reg-form-det'>
              <label>Enter your aadhar no.</label>
              <input type="number" required  
                 value={user.aadhar_no}
                 onChange={(e) => {setUser({...user, aadhar_no: e.target.value})}}
              />
            </div>
            <div className='reg-form-det'>
              <label>Occupation</label>
              <input type="text" required  
                 value={user.occupation}
                 onChange={(e) => {setUser({...user, occupation: e.target.value})}}
              />
            </div>
            
            <div className='reg-form-det1' >
              <label >Select your Gender</label>
              <input type="radio" value="Male" name="gender"  
              required  checked={user.gender=="Male"} onChange={(e) => {setUser({...user, gender: e.target.value})}} />Male
              <input type="radio" value="Female" name="gender" checked={user.gender=="Female"} onChange={(e) => {setUser({...user, gender: e.target.value})}} /> Female
              <input type="radio" value="Other" name="gender" checked={user.gender=="Other"} onChange={(e) => {setUser({...user, gender: e.target.value})}} /> Other
            </div>
            
            {/* <div className='reg-multiple'>
             <div className="reg-multiple-left">
             <label>Select you occupation</label>
             </div>
             <div className='reg-multiple-right'>
             <div>
                <input type="checkbox" id="task1" name="task" value="task1" /><lable for="task1">Cook &nbsp;&nbsp;</lable>
                <input type="checkbox" id="task2" name="task" value="task2" /><lable for="task1">Driver &nbsp;&nbsp;&nbsp;</lable>
                <input type="checkbox" id="task3" name="task" value="task3" /><lable for="task3">Plumber &nbsp;&nbsp;&nbsp;</lable>
                <input type="checkbox" id="task4" name="task" value="task4" /><lable for="task4">Electrician</lable>
              </div>
              <div>
                <input type="checkbox" id="task5" name="task" value="task5" /><lable for="task5">Maid &nbsp;&nbsp; </lable>
                <input type="checkbox" id="task6" name="task" value="task6" /><lable for="task6">Worker &nbsp;</lable>
                <input type="checkbox" id="task7" name="task" value="task7" /><lable for="task7">Washerman</lable>
                <input type="checkbox" id="task8" name="task" value="task8" /><lable for="task8">Delivery Boy</lable>
              </div>
              <div>
                <input type="checkbox" id="task9" name="task" value="task9" /><lable for="task9">Painter</lable>
                <input type="checkbox" id="task10" name="task0" value="task10" /><lable for="task10">Carpenter</lable>
                <input type="checkbox" id="task11" name="task" value="task11" /><lable for="task11">PetCare &nbsp;&nbsp;</lable>
                <input type="checkbox" id="task12" name="task" value="task12" /><lable for="task12">Other</lable>
              </div>
             </div>
             
            </div> */}
            <div className='reg-btn'>
              <button className='reg-button'>Submit</button>
            </div>


          </form>
        </div>
        <Footer />
      </div>
    
    </div>
  )
}



export default Register