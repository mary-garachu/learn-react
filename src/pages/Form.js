import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'


const Form = () => {

const formik = useFormik ({
  initialValues: {
    firstName: "",
    lastName: "",
    email: ""
  },
  validationSchema : yup.object ({
    firstName:yup.string().max(10, "should not be more than 10 characters").required("required"),
    lastName:yup.string().max(10, "should not be more than 10 characters").required("required"),
    email:yup.string().required("required")
  }), 

  onSubmit : ( values) => {
    console.log(formik.values)
  }
})


  return (
    <div>

         <form  onSubmit={formik.handleSubmit} className='main-class'>
      <div className='form-container'>
        <input
        id="firstName"
        name="firstName"
        type="text"
        placeholder="First Name"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />

      </div>
      {formik.errors.firstName?<p>{formik.errors.firstName}</p> : null}
      

      <div className='form-container'>
        <input
        id="lastName"
        name="lastName"
        type="text"
        placeholder="Last Name"
        value={formik.values.lastName}
        onChange={  formik.handleChange}
        onBlur={formik.handleBlur}
        />

      </div>
      {formik.errors.lastName?<p>{formik.errors.lastName}</p> : null}

      <div className='form-container'>
        <input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />

      </div>
      {formik.touched.email && formik.errors.email?<p>{formik.errors.email}</p> : null}
      <button type='submit'>Submit</button>
    </form>
    </div>
    
  )
}

export default Form
