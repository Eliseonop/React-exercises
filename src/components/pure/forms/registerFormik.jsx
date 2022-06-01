import React from 'react'
// import { User } from '../../../models/user.class'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { ROLES } from '../../../models/roles.enum.js'
export default function RegisterFormik () {
  //   let user = new User()

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirm: '',
    role: ROLES.USER
  }
  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'El nombre debe tener al menos 3 caracteres')
      .max(50, 'El nombre debe tener máximo 50 caracteres')
      .required('El nombre es requerido'),
    email: Yup.string()
      .email('El email no es válido')
      .required('El email es requerido'),
    password: Yup.string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .max(50, 'La contraseña debe tener máximo 50 caracteres')
      .required('La contraseña es requerida'),
    confirm: Yup.string().when('password', {
      is: val => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref('password')],
        'Las contraseñas no coinciden'
      )
    }),
    role: Yup.string()
      .oneOf([ROLES.USER, ROLES.ADMIN], 'El rol no es válido')
      .required('El rol es requerido')
  })

  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 1000))
          console.log('Register user', values)
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
              <label htmlFor='username'>Nombre de usuario</label>
              <Field
                id='username'
                name='username'
                type='text'
                placeholder='Nombre de usuario'
              />
              {errors.username && touched.username && (
                <div className='error'>
                  <ErrorMessage name='username' />
                </div>
              )}
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
              <label htmlFor='confirm'>Confirmar password</label>
              <Field
                id='confirm'
                name='confirm'
                type='password'
                placeholder='Confirmar password'
              />
              {errors.confirm && touched.confirm && (
                <div className='error'>
                  {/* <p>{errors.confirm}</p> */}
                  <ErrorMessage name='confirm' />
                </div>
              )}
              <label htmlFor='role'>Rol</label>
              <Field id='role' name='role' type='select' as='select'>
                <option value={ROLES.USER}>Usuario</option>
                <option value={ROLES.ADMIN}>Administrador</option>
              </Field>

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
