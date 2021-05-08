import React from 'react';

import emailjs from 'emailjs-com';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './styles/styles.css';

const validationSchema = yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string(),
    email: yup.string().email('Enter a valid email').required('Email is required'),
    message: yup.string().required('Message should not be empty')
});

function Form() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_cr7krdf', 'template_5zqeyv9', e.target, 'user_tDDUq3kHd9TRcwdcn2NPS')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values))
        },
        validationSchema: validationSchema
    });

    return (
        <div className='contact-us__form-container'>
            <div className='contact-us__test'>
                <div className='contact-us__input-fields'>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            id='firstName'
                            name='firstName'
                            label='First Name'
                            variant='outlined'
                            className='contact-us__input'
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                        <TextField 
                            id='lastName'
                            name='lastName'
                            label='Last Name'
                            variant='outlined'
                            className='contact-us__input'
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        />
                        <TextField 
                            id='email'
                            name='email'
                            label='Email adress'
                            variant='outlined'
                            className='contact-us__input'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.firstName && formik.errors.email}
                        />
                        <TextField 
                            id='message'
                            name='message'
                            label='Your message'
                            variant='outlined'
                            multiline
                            rows={5}
                            className='contact-us__input'
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            error={formik.touched.message && Boolean(formik.errors.message)}
                            helperText={formik.touched.firstName && formik.errors.message}
                        />
                        <Button 
                            variant='outlined'
                            type='submit'
                            className='contact-us__btn'
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;