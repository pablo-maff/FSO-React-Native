import { gql } from '@apollo/client'
import { REPOSITORIES_DETAILS, REPOSITORY_DETAILS } from './fragments'

export const GET_REPOSITORIES = gql`
  ${REPOSITORIES_DETAILS}
  query ($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
      ...RepositoriesDetails
    }
  }
`

export const GET_REPOSITORY = gql`
  ${REPOSITORY_DETAILS}
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
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
