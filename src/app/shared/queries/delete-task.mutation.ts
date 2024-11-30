import { gql } from 'apollo-angular';

export const DELETE_TASK_MUTATION = gql`
  mutation deleteTask() {
    deleteTask(input:{id: "abc-123"})
  }
`;
