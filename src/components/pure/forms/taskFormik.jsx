import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { LEVELS } from '../../../models/levels.enum.js'
import { Task } from '../../../models/task.class.js'
export default function TaskFormik ({ add, length }) {
  const initialValues = {
    name: '',
    description: '',
    level: ''
  }
  const taskSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'El nombre debe tener al menos 3 caracteres')
      .max(50, 'El nombre debe tener máximo 50 caracteres')
      .required('El nombre es requerido'),
    description: Yup.string()
      .min(3, 'La descripción debe tener al menos 3 caracteres')
      .max(50, 'La descripción debe tener máximo 50 caracteres')
      .required('La descripción es requerida'),
    level: Yup.string()
      .oneOf(
        [LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING],
        'El nivel no es válido'
      )
      .required('El nivel es requerido')
  })

  return (
    <div>
      <h4>Task Formik</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={taskSchema}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 1000))
          console.log('New tasks', values)
          const newTask = new Task(
            values.name,
            values.description,
            false,
            values.level
          )
          add(newTask)
          values.name = ''
          values.description = ''
          values.level = ''
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <div className='form-group'>
              <label htmlFor='name'>Nombre</label>
              <Field
                name='name'
                type='text'
                className={
                  'form-control' +
                  (errors.name && touched.name ? ' is-invalid' : '')
                }
              />
              <ErrorMessage
                name='name'
                component='div'
                className='invalid-feedback'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='description'>Descripción</label>
              <Field
                name='description'
                type='text'
                className={
                  'form-control' +
                  (errors.description && touched.description
                    ? ' is-invalid'
                    : '')
                }
              />
              <ErrorMessage
                name='description'
                component='div'
                className='invalid-feedback'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='level'>Nivel</label>
              <Field
                name='level'
                type='select'
                as={'select'}
                className={
                  'form-control' +
                  (errors.level && touched.level ? ' is-invalid' : '')
                }
              >
                <option value={LEVELS.NORMAL}>Normal</option>
                <option value={LEVELS.URGENT}>Urgente</option>
                <option value={LEVELS.BLOCKING}>Muy Urgente</option>
              </Field>

              <ErrorMessage
                name='level'
                component='div'
                className='invalid-feedback'
              />
            </div>
            <div className='form-group'>
              <button type='submit' className='btn btn-primary mr-2'>
                Crear
              </button>
              <button type='reset' className='btn btn-secondary'>
                Cancelar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
