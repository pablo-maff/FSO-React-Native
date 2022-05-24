import { gql } from '@apollo/client'

export const REPOSITORIES_DETAILS = gql`
  fragment RepositoriesDetails on RepositoryConnection {
    edges {
      node {
        id
        ownerAvatarUrl
        fullName
        description
        language
        stargazersCount
        forksCount
        reviewCount
        ratingAverage
      }
    }
  }
`

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    id
    ownerAvatarUrl
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    url
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
`

export const REVIEWS_DETAILS = gql`
  fragment ReviewsDetails on Review {
    id
    text
    rating
    createdAt
    user {
      id
      username
    }
    repository {
      id
    }
  }
`
