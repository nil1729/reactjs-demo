const {
    buildSchema
} = require('graphql');
module.exports = buildSchema(`
    input UserInput {
        name: String
        email: String!
        password: String!
    }
    type User {
        name: String!
        email: String!
    }
    type AuthData {
        token: String!
        user: User!
    }
    type RootQuery {
        loadUser: User
    }
    type RootMutation {
        registerUser(userInput: UserInput!): AuthData!
        loginUser(userInput: UserInput!): AuthData!
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)