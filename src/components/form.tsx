import React, { useState } from 'react';
import * as Yup from 'yup'
import {useFormik} from 'formik'
import './App.css'


// or less ideally
import { Card, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';




const SignUpForm = () => {
    

    const initialValues = {
		firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword:'',
		
	}
    
       const passwordRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );

    const validationSchema = Yup.object ({
        firstName: Yup.string().min(3).required('First name is required'),
        lastName: Yup.string().min(3).required('last Name is required'),
        phone: Yup.string().min(3).required('phone number is required'),
        email: Yup.string().email("please valid your email").required('email is required'),
        password: Yup.string().matches(passwordRegex , "please valid your password").required('password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Password do NOT match!")
        .required("Please enter confirm password."),
		
	})

    const onSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
    };
 
    const {values,handleBlur,handleChange, handleSubmit , errors ,touched} = useFormik({
        initialValues,
        validationSchema,
        onSubmit:(values,actions) =>{
            console.log(values);
            actions.resetForm();
        },
    });

    

 
    

    


    return (
        <>
        <form className='signup_form' onSubmit={handleSubmit}>

            <label htmlFor='firstName'>first Name</label>
            <input 
                type='text' 
                name='firstName' 
                value={values.firstName} 
                onChange={handleChange} 
            />
            <div className='error_cont'>
            {errors.firstName &&  touched.firstName && (<p className='form_error'>{errors.firstName}</p> 
            )}

            </div>
            <label htmlFor='lastName' >Last Name</label>
            <input
                type='text'
                name='lastName'
                value={values.lastName}
                onBlur={handleBlur} 
                onChange={handleChange}
            />
            <div className='error_cont'>
            {errors.lastName &&  touched.lastName && (<p className='form_error'>{errors.lastName}</p> 
            )}

            </div>

             <label htmlFor='phone' >Phone</label>
            <input
                type='number'
                name='phone'
                value={values.phone}
                onBlur={handleBlur} 
                onChange={handleChange}
            />
            <div className='error_cont'>
            {errors.phone &&  touched.phone && (<p className='form_error'>{errors.phone}</p> 
            )}

            </div>
            

            <label htmlFor='email'> Email</label>
            <input 
                type='email' 
                name='email' 
                value={values.email} 
                onBlur={handleBlur} 
                onChange={handleChange}
            />
            <div className='error_cont'>
            {errors.email &&  touched.email && (<p className='form_error'>{errors.email}</p> 
            )}

            </div>

            <label htmlFor='password'> Password</label>
            <input 
                type='password' 
                name='password' 
                value={values.password} 
                onBlur={handleBlur} 
                onChange={handleChange}
            />
            <div className='error_cont'>
            {errors.password &&  touched.password && (<p className='form_error'>{errors.password}</p> 
            )}

            </div>

            <label htmlFor='confirmPassword'> Confirm Password</label>
            <input type='password' 
                name='confirmPassword' 
                value={values.confirmPassword} 
                onBlur={handleBlur} 
                onChange={handleChange}
            />
            <div className='error_cont'>
            {errors.confirmPassword &&  touched.confirmPassword && (<p className='form_error'>{errors.confirmPassword}</p> 
            )}

            </div>

            <button type='submit'> Submit</button>


        </form>
        
        </>
    );
};

export default SignUpForm;
