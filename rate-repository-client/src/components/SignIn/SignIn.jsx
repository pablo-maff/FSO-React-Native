import * as yup from 'yup'
import { Formik } from 'formik'
import SignInForm from './SignInForm'

const initialValues = {
  username: '',
  password: '',
}

const validationSchema = yup.object().shape({
  username: yup.string().min(3, 'Too short').required('Username is required!'),
  password: yup.string().min(6, 'Too short').required('Password required!'),
})

const SignIn = ({ onSubmit }) => {
  const handleSubmit = async (values) => {
    await onSubmit(values)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignIn
