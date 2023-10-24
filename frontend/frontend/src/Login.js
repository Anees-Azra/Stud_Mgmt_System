import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Validation from './LoginValidation';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [values,setValues] = useState({
        'emailid':'',
        'password': ''
    })
    const[errors,setErrors]=useState({})
    const[backendError,setBackendError]=useState([])
    const navigate=useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values))
        //if(errors.emailid==='' && errors.password==='')
        axios.post('http://localhost:8080/login',values)
        .then(res =>{
            if(res.data.errors){
                setBackendError(res.data.errors)
            }
            //console.log(res) 
            else{   
            if(res.data === 'Success'){
            navigate('/home')
            }else{
                alert('No record existed')
            }
            }})
        .catch(err => console.log(err));
    }
    

    const handleInput = (event) =>{
        setValues(prev => ({...prev,[event.target.name]:event.target.value}))
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
        <h3>Login</h3>{
                    backendError && backendError.map(e =>(
                        <p className='text-danger'>{e.msg}</p>
                    ))
                }
            <form action='' onSubmit={handleSubmit}>
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
                <button type = 'submit' className='btn btn-success w-100 rounded-0'>Log In</button>
                <p>Not Registered?</p>
                <Link to ='/register' className='btn btn-default border w-100 bg-light rounded-0'>Register</Link>
            </form>
        </div>
    </div>
  )
}

export default Login