import * as yup from 'yup'
import { Formik } from 'formik'
import ReviewForm from './ReviewForm'

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
}

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner name is required!'),
  repositoryName: yup.string().required('Repository name is required!'),
  rating: yup
    .number()
    .typeError('Only numbers please')
    .integer("Can't do decimals, only integers please")
    .min(0, 'Minimum value is 0!')
    .max(100, 'Maximum value is 100!')
    .required('You have to rate the repository!'),
  text: yup.string().optional(),
})

const CreateReview = ({ onSubmit }) => {
  const handleSubmit = async (values) => {
    const parsedValues = validationSchema.cast(values)
    await onSubmit(parsedValues)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default CreateReview
