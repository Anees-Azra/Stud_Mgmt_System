import React,{useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Validation from './RegisterValidation';
import axios from 'axios';

//const URL = '/register';



const Register = () => {
    const [values,setValues] = useState({
        'fullname':'',
        'dob':'',
        'emailid':'',
        'password':'',
        'role':'',
        'roleid':'',
        'uin':''
    })
    const[errors,setErrors]=useState({})
    const navigate=useNavigate();
    const handleSubmit = (event) => {
        console.log('in handleSubmit')
        event.preventDefault();
        setErrors(Validation(values)) 
        //if(errors.fullname==='' && errors.dob==='' && errors.emailid==='' &&
       // errors.password==='' && errors.role==='' && errors.roleid==='' && errors.uin==='')
        axios.post('http://localhost:8080/register',values)
        .then(res =>( 
            navigate('/')
        ))
        .catch(err => console.log(err));
    }
console.log({values},'.....values')

    const handleInput = (event) =>{
        setValues(prev => ({...prev,[event.target.name]:event.target.value}))
    }
  return ( 
   
    <div className='d-flex row-lg-12 row justify-content-center align-items-center bg-primary vh-200'>
        <div className='bg-white p-3 rounded w-25'>
            <form action='' onSubmit={handleSubmit}>
                <h3>Register</h3>
                
                <div className='mb-3'>
                    <label htmlFor='name'><strong>Name</strong></label>
                    <input type='name' placeholder='Enter Name'
                             className='form-control rounded-0'
                             onChange={handleInput}
                             name='fullname'/>
                             {errors.fullname && <span className='text-danger'>{errors.fullname}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='dob'><strong>Date of Birth</strong></label>
                    <input type='dob' placeholder='Enter Date of Birth'
                             className='form-control rounded-0'
                             onChange={handleInput}
                             name='dob'/>
                             {errors.dob && <span className='text-danger'>{errors.dob}</span>}
                
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' placeholder='Enter Email'
                             className='form-control rounded-0'
                             onChange={handleInput}
                             name='emailid'/>
                             {errors.emailid && <span className='text-danger'>{errors.emailid}</span>}
                </div>

                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type='password' placeholder='Enter password' 
                            className='form-control rounded-0'
                            onChange={handleInput}
                            name='password'/>
                            {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                {/* <div className='mb-3'>
                    <label htmlFor='role'><strong>Role</strong></label>
                    <input type='role' placeholder='Enter role' 
                            className='form-control rounded-0'
                            onChange={handleInput}
                            name='role'/>
                            {errors.role && <span className='text-danger'>{errors.role}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='roleid'><strong>Roleid</strong></label>
                    <input type='roleid' placeholder='Enter roleid' 
                            className='form-control rounded-0'
                            onChange={handleInput}
                            name='roleid'/>
                            {errors.roleid && <span className='text-danger'>{errors.roleid}</span>}
                </div> */}
                <div className='mb-3'>
                    <label htmlFor='uin'><strong>UIN</strong></label>
                    <input type='uin' placeholder='Enter UIN' 
                            className='form-control rounded-0'
                            onChange={handleInput}
                            name='uin'/>
                            {errors.uin && <span className='text-danger'>{errors.uin}</span>}
                </div>
                <button type = 'submit' className='btn btn-success w-100 rounded-0'>Register</button><br/>
                console.log('submit button working')
                <p>Want to Log In?</p>
                <Link to ='/' className='btn btn-default border w-100 bg-light rounded-0'>Log In</Link>
            </form>
        </div>
    </div>
  )
}

export default Register