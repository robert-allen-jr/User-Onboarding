import React from 'react';
import * as Yup from 'yup';
import { useState } from 'react';
import { useEffect } from 'react';




export default function Form() {
const formSubmit = e => {
    e.preventDefault();
    console.log("submitted");
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

  const formSchema = Yup.object().shape({
    email: Yup
      .string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
  });

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

    return (
        <div>
            <form>
                <label htmlFor="name"/>
                    Name
                <input type="email" name="email" placeholder="Email" />
                <br></br>
                <label htmlFor="email"/>
                    Password
                <input type="password" name="password" placeholder="Password" />
                <br></br>
                <label htmlFor="terms"/>
                    Do you agree to the terms and conditions?
                <input type="checkbox"/>
                <br></br>
                <button>Submit!</button>
            </form>
        </div>
    )
}
