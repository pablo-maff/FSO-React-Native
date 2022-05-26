import RepositoryListContainer from '../../../components/RepositoryList/RepositoryListContainer'
import { render, within } from '@testing-library/react-native'
import numToThousands from '../../../utils/numToThousands'

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      }

      const { debug, getAllByLabelText } = render(
        <RepositoryListContainer repositories={repositories} />
      )
      const repositoryItems = getAllByLabelText('repository-item')
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems

      const firstRepoData = repositories.edges[0].node
      const secondRepoData = repositories.edges[1].node

      const evaluate = (data, element, label) => {
        if (typeof element === 'number') {
          element = numToThousands(element).toString()
          const rendered = within(data).getByLabelText(label)

          return expect(rendered).toHaveTextContent(element)
        }
        const rendered = within(data).getByText(element)

        expect(rendered).toHaveTextContent(element)
      }

      evaluate(firstRepositoryItem, firstRepoData.fullName)
      evaluate(secondRepositoryItem, secondRepoData.fullName)
      evaluate(firstRepositoryItem, firstRepoData.description)
      evaluate(secondRepositoryItem, secondRepoData.description)
      evaluate(firstRepositoryItem, firstRepoData.language)
      evaluate(secondRepositoryItem, secondRepoData.language)
      evaluate(firstRepositoryItem, firstRepoData.forksCount, 'forks-count')
      evaluate(secondRepositoryItem, secondRepoData.forksCount, 'forks-count')
      evaluate(
        firstRepositoryItem,
        firstRepoData.stargazersCount,
        'stars-count'
      )
      evaluate(
        secondRepositoryItem,
        secondRepoData.stargazersCount,
        'stars-count'
      )
      evaluate(
        firstRepositoryItem,
        firstRepoData.ratingAverage,
        'rating-average'
      )
      evaluate(
        secondRepositoryItem,
        secondRepoData.ratingAverage,
        'rating-average'
      )
      evaluate(firstRepositoryItem, firstRepoData.reviewCount, 'review-count')
      evaluate(secondRepositoryItem, secondRepoData.reviewCount, 'review-count')
    })
  })
})
