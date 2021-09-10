const { gql } = require('apollo-server-express');

const typeDefs = gql`
    
    type User {
        _id: ID 
        username: String
        email: String
        points: Int
        password: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        me: User
  }

   
  type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
  }

  type Task {
        taskName: String
        taskPoint: Number
        taskDescription: String
        taskDate: Date
    }
    type Query {
        tasks: [Task]
        task(taskPoint: Number!): task
        
    }

`;

module.exports = typeDefs;
