import { gql } from '@apollo/client';

export const ADD_TASK = gql`
    mutation addTask($taskName: String!, $taskPoint: Number!,
    $taskDescription: String!, $taskDate: Date!){
        addTask(taskName: $taskName, taskPoint: $taskPoint, taskDescription: $taskDescription, taskDate: $taskDate){
            _id
            taskName
            taskPoint
            taskDescription
            taskDate
        }
    }`
    