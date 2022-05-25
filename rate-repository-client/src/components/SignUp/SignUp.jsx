import * as yup from 'yup'
import { Formik } from 'formik'
import SignUpForm from './SignUpForm'

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .max(30, 'Maximum username length is 30 characters')
    .required('Username is required!'),
  password: yup
    .string()
    .min(5, 'Too short, must have at least 5 characters')
    .required('Password required!'),
  passwordConfirmation: yup
    .string()
    // .min(6, 'Too short')
    .oneOf([yup.ref('password')], "Passwords don't match")
    .required('Password confirmation required!'),
})

const SignUp = ({ onSubmit }) => {
  const handleSubmit = async (values) => {
    await onSubmit(values)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignUp
