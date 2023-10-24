// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home






import React from 'react';
import axios from 'axios';
import {useState,useEffect} from 'react';

const Home = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:8080/')
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  },[])

  return (
    <div className='d-flex justify-content-center align-items-center bg-dark vh100' >
      <div className='bg-white rounded w-50'>
        <h3>My CRUD App</h3>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Date Of Birth</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {/* {data.map((d ,i) => (
            <tr key={i}>
              <td>{d.fullname}</td>
              <td>{d.emailid}</td>
              <td>{d.dob}</td>
            <td>
              <button className='btn btn-sm btn-primary'>Update</button>
              <button className='btn btn-sm btn-danger'>Delete</button>
            </td>
            </tr>
          ))} */}

            
            {/* {data.map((d,i) =>
            <tr>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.datofbirth}</td>
              <td>
                <button className='btn btn-sm btn-primary'>Update</button>
                <button className='btn btn-sm btn-danger'>Delete</button>
              </td>
            </tr> */}
            
            )}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Home