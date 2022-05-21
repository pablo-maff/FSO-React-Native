import { gql } from '@apollo/client'
import { REPOSITORY_DETAILS } from './fragments'

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_DETAILS}
  query {
    repositories {
      ...RepositoryDetails
    }
  }
`
export const LOGGED_IN_USER = gql`
  query {
    me {
      id
      username
    }
  }
`
