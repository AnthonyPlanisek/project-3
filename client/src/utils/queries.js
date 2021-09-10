import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query getUsers {
    users {
      _id
      username
      points
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;
