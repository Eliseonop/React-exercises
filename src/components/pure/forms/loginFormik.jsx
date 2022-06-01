import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email no válido')
    .required('Email invalid format'),
  password: Yup.string().required('Password is required')
})

export default function LoginFormik () {
  const initialCredentials = {
    email: '',
    password: ''
  }
  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 1000))
          alert(JSON.stringify(values, null, 2))
          localStorage.setItem('credentials', JSON.stringify(values))
        }}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur
          } = props
          return (
            <Form>
              <label htmlFor='email'>Email</label>
              <Field
                id='email'
                name='email'
                type='email'
                placeholder='example@gmail.com'
              />
              {errors.email && touched.email && (
                <div className='error'>
                  {/* <p>{errors.email}</p> */}
                  <ErrorMessage name='email' />
                </div>
              )}

              <label htmlFor='password'>Password</label>
              <Field
                id='password'
                name='password'
                type='password'
                placeholder='password'
              />
              {errors.password && touched.password && (
                <div className='error'>
                  {/* <p>{errors.password}</p> */}
                  <ErrorMessage name='password' />
                </div>
              )}

              {isSubmitting ? (
                <p>Submitting...</p>
              ) : (
                <button type='submit'>Submit</button>
              )}
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
