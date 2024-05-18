import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import axios from "axios";
import { gql } from "graphql-tag";

const typeDefs = gql`
  type Todo {
    id: ID!
    todo: String!
    completed: Boolean!
    userId: Int!
    user: User
  }

  type User {
    id: ID!
    firstName: String!
    todos: [Todo]
  }

  type Query {
    getTodos: [Todo]
    getTodoById(id: ID!): Todo
    getTodoByUserId(userId: ID!): [Todo]
    getUsers: [User]
    getUserById(id: ID!): User
  }
`;

const resolvers = {
  Query: {
    getTodos: async () => {
      try {
        const response = await axios.get("https://dummyjson.com/todos");
        return response.data.todos;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch todos ");
      }
    },

    getTodoById: async (_, args) => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/todos/${args.id}`
        );
        return response.data;
      } catch (error) {
        console.error(error);
        throw new Error(`failed to fetch todo with ${args.id}`);
      }
    },

    getTodoByUserId: async (_, { userId }) => {
      try {
        const response = await axios.get("https://dummyjson.com/todos");
        return response.data.todos.filter(
          (todo) => todo.userId === parseInt(userId, 10)
        );
      } catch (error) {
        console.error(error);
        throw new Error(
          `Failed to fetch todos for user with id ${args.userId}`
        );
      }
    },
    getUsers: async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        return response.data.users;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch user");
      }
    },

    getUserById: async (_, args) => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/users/${args.id}`
        );
        return response.data;
      } catch (error) {
        console.error(error);
        throw new Error(`Failed to fetch user with id ${args.id}`);
      }
    },
  },

  User: {
    todos: async (parent) => {
      try {
        const response = await axios.get("https://dummyjson.com/todos");
        return response.data.todos.filter((todo) => todo.userId === parent.id);
      } catch (error) {
        console.error(error);
        throw new Error(`Failed to fech for user with id : ${parent.id}`);
      }
    },
  },

  Todo: {
    user: async (parent) => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/users/${parent.userId}`
        );
        return response.data;
      } catch (error) {
        console.error(error);
        throw new Error(`Failed to fetch user with id ${parent.userId}`); // Corrected the error message
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at ${url}`);
