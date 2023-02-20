import React, { useEffect } from 'react';
import { Formik, FormikValues, FormikHelpers } from 'formik';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const validate = (values: FormValues) => {
  const errors: Partial<FormValues> = {};

  if (!values.firstName) {
    errors.firstName = 'First Name cannot be empty';
  }

  if (!values.lastName) {
    errors.lastName = 'Last Name cannot be empty';
  }

  if (!values.email) {
    errors.email = 'Email cannot be empty';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Looks like this is not an email';
  }

  if (!values.password) {
    errors.password = 'Password cannot be empty';
  } else if (values.password.length <= 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  return errors;
};

const SignUpForm: React.FC = () => {
  const onSubmit = (
    values: FormikValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    alert('Form submitted!');
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form
          onSubmit={handleSubmit}
          className='desk:max-w-lg bg-white rounded-lg desk:m-5 desk:p-10 p-6 m-5 shadow-2xl'
        >
          <div className='mb-4'>
            <input
              type='text'
              name='firstName'
              id='firstName'
              placeholder='First Name'
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-c-dark-blue h-14 focus:shadow-outline ${
                touched.firstName && errors.firstName ? 'border-c-red' : ''
              }`}
            />
            {touched.firstName && errors.firstName && (
              <p className='text-c-red text-xs italic'>{errors.firstName}</p>
            )}
          </div>
          <div className='mb-4'>
            <input
              type='text'
              name='lastName'
              id='lastName'
              placeholder='Last Name'
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-c-dark-blue h-14 focus:shadow-outline ${
                touched.lastName && errors.lastName ? 'border-c-red' : ''
              }`}
            />
            {touched.lastName && errors.lastName && (
              <p className='text-c-red text-xs italic'>{errors.lastName}</p>
            )}
          </div>
          <div className='mb-4'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Email Address'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-c-dark-blue h-14 focus:shadow-outline ${
                touched.email && errors.email ? 'border-c-red' : ''
              }`}
            />
            {touched.email && errors.email && (
              <p className='text-c-red text-xs italic'>{errors.email}</p>
            )}
          </div>
          <div className='mb-4'>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-c-dark-blue h-14 focus:shadow-outline ${
                touched.password && errors.password ? 'border-c-red' : ''
              }`}
            />
            {touched.password && errors.password && (
              <p className='text-c-red text-xs italic'>{errors.password}</p>
            )}
          </div>
          <div className='mb-4'>
            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full mb-2 bg-c-green hover:bg-c-green-light text-white font-bold py-2 px-4 rounded shadow-xl
              focus:outline-none focus:border-c-dark-blue h-14 focus:shadow-outline'
            >
              CLAIM YOUR FREE TRIAL
            </button>
            <p className='text-c-grayish-blue text-center text-xs leading-7 mx-3'>
              By clicking the button, you are agreeing to our{' '}
              <span className='text-c-red font-bold'>Terms ans Services</span>
            </p>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default SignUpForm;
