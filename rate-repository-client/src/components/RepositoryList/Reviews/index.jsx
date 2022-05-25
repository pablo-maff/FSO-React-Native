import useCreateReview from '../../../hooks/useCreateReview'
import CreateReview from './CreateReview'

const CreateReviewHandler = () => {
  const [createReview] = useCreateReview()

  return <CreateReview onSubmit={createReview} />
}

export default CreateReviewHandler
