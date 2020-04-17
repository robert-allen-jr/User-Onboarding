import React from 'react';
import * as Yup from 'yup';
import { useState } from 'react';
import { useEffect } from 'react';
import { Formik, Field, Form } from 'formik'
import axios from 'axios';


export default function ValidForm() {
const sentData = { data: "Hello World!" };


  const [post, setPost] = useState([]);


const formSubmit = e => {
    e.preventDefault();
    console.log("submitted");
    axios
  .post("https://reqres.in/api/users", sentData)
  .then(res => {
    console.log(res.data); // Data was created successfully and logs to console
  })
  .catch(err => {
    console.log(err); // There was an error creating the data and logs to console
  });
  };
  

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    terms: ""
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    website: "",
    password: ""
  });

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  });

  // useEffect(() => {
  //   formSchema.isValid(formState).then(valid => {
  //     setButtonDisabled(!valid);
  //   });
  // }, [formState]);

    return (
        <div>
            <Formik
      initialValues={{
        firstName: '',
        password: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div>{errors.firstName}</div>
          ) : null}
          <Field name="password" />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <Field name="email" type="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
        </div>
    )
}
