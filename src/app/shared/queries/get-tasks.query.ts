import { gql } from 'apollo-angular';

export const GET_TASKS = gql`
  {
    tasks(input: {}) {
      name
      assignee {
        avatar
        fullName
      }
      createdAt
      dueDate
      id
      name
      pointEstimate
      position
      status
      tags
    }
  }
`;
