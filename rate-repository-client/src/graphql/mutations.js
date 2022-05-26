import { gql } from '@apollo/client'
import { REVIEWS_DETAILS } from './fragments'

export const SIGN_IN = gql`
  mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`

export const CREATE_REVIEW = gql`
  ${REVIEWS_DETAILS}
  mutation CreateReview($review: CreateReviewInput) {
    createReview(review: $review) {
      ...ReviewsDetails
    }
  }
`

export const SIGN_UP = gql`
  mutation CreateUser($user: CreateUserInput) {
    createUser(user: $user) {
      id
      username
    }
  }
`
