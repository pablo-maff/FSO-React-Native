import { gql } from '@apollo/client'

// This is bad use of fragments, should use them like Details, pageInfo, etc.
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
      cursor
    }
    pageInfo {
      endCursor
      startCursor
      hasNextPage
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
    reviews(first: $first, after: $after) {
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
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
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
