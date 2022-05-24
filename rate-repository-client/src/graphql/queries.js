import { gql } from '@apollo/client'
import { REPOSITORIES_DETAILS, REPOSITORY_DETAILS } from './fragments'

export const GET_REPOSITORIES = gql`
  ${REPOSITORIES_DETAILS}
  query {
    repositories {
      ...RepositoriesDetails
    }
  }
`

export const GET_REPOSITORY = gql`
  ${REPOSITORY_DETAILS}
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...RepositoryDetails
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
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
