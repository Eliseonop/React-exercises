import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required()
})

function LoginForm ({ loged, onLogin, fetching }) {
  const initialCredentials = {
    email: '',
    password: ''
  }
  return (
    <div>
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        onSubmit={values => {
          onLogin(values)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              name='email'
              type='email'
              placeholder='Email'
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <Field
              name='password'
              type='password'
              placeholder='Password'
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <div>{errors.password}</div>
            )}
            <button type='submit' disabled={isSubmitting}>
              Login
            </button>
            {fetching ? <div>Loading...</div> : null}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default LoginForm
