import { CREATE_REVIEW } from '../graphql/mutations'
import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-native'

const useCreateReview = () => {
  const navigate = useNavigate()
  const [mutate, result] = useMutation(CREATE_REVIEW)

  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
    const { data } = await mutate({
      variables: {
        review: {
          repositoryName,
          ownerName,
          rating,
          text,
        },
      },
    })

    const id = data.createReview.repository.id
    navigate(`/${id}`)

    return { data }
  }

  return [createReview, result]
}

export default useCreateReview
