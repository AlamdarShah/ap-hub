import React from 'react'
import {Form, Field, Formik, ErrorMessage} from "formik"
// import { Button } from 'bootstrap'
//import useSchema from '../schemas/validation';

export default function () {
const usersData={
  name:"",
  Email:"",
  Password:""
}
const handleSubmit=(value)=>{
  console.log(value);
  
}
return(
<div className='Container'>
  <Formik
  initialValues={usersData}
  onSubmit={handleSubmit}
   validationSchema={useSchema}
  >
  <div className="form-class">
  <Form class="row g-3">
  <div class="col-md-6">
  <label for="inputEmail3" class="form-label">Name</label>
    
      <Field type="text" class="form-control" name="name"/>
      <ErrorMessage name="name"/>
    
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Contact</label>
    <Field type="number" class="form-control"  name="contact"/>
    <ErrorMessage name="contact"/>
  </div>
  <div class="col-12">
    <label for="inputPassword4" class="form-label">Email</label>
    <Field type="email" class="form-control"  name="email"/>
    <ErrorMessage name="email"/>
  </div>
  <div class="col-12">
    <label for="inputPassword4" class="form-label">Address</label>
    <Field type="text" class="form-control"  name="Address"/>
    <ErrorMessage name="Address"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">City</label>
    <Field type="text" class="form-control"  name="city"/>
    <ErrorMessage name="city"/>
  </div>
 
  
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Punjab</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputPassword4" class="form-label">Zip</label>
    <Field type="text" class="form-control"  name="Zip"/>
    <ErrorMessage name="Zip"/>
  </div>
  
  <div class="col-12">
    <div class="form-check">
      <Field class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</Form>
</div>
</Formik>
</div>
)

//   const [userData,setuserData]=useState({
//     name:"",
//     Email:"",
//     Password:""


//   });
//   const eventFunction=(e)=>{
//     const{name,value}=e.target;
  
//   setuserData((preVal)=>
//   {
//     console.log(preVal);
//     return {
//         ...preVal,
//         [name]: value,
//     };
//   });
  
// };

// const submitFunction =(e) =>{
//     e.preventDefault();
//     console.log(userData);
// }


//   return (
//     <div>
      
//       <form onSubmit={submitFunction}>
//       <div class="row mb-3">
//     <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
//     <div class="col-sm-10">
//       <input type="name" class="form-control"
//       onChange={eventFunction}
//       name="name"
//       value={userData.name}
//      ></input>
//     </div>
//   </div>
//   <div class="row mb-3">
//     <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
//     <div class="col-sm-10">
//       <input type="email" class="form-control"
//       onChange={eventFunction}
      
//       name="Email"
//       value={userData.Email}
//      ></input>
//     </div>
//   </div>
//   <div class="row mb-3">
//     <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
//     <div class="col-sm-10">
//       <input type="password"
//        class="form-control"
//         onChange={eventFunction}
//         name="Password"
//         value={userData.Password}>

//         </input>
//     </div>
//   </div>
  
 
//   <input type="submit" class="btn btn-primary"
//   value="Submit Form"/>
// </form>
//     </div>
//   );
}
