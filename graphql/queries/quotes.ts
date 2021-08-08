import { gql } from 'graphql-tag';

export const getQuotes = gql`
  query getAllQuotes($page: Float!, $rowPerPage: Float!) {
    quotes: getAllQuotes(page: $page, rowPerPage: $rowPerPage) {
      id
      status
      author {
        id
        name
      }
      contents {
        text
        id
        language {
          id
          name
        }
      }
      category {
        id
        name
      }
    }
  }
`;

export const getQuoteById = gql`
  query getQuoteById($id: Float!) {
    quotes: getAllQuotes(id: $id) {
      id
      status
      author {
        id
        name
      }
      contents {
        text
        id
        language {
          id
          name
        }
      }
      category {
        id
        name
      }
    }
  }
`;
