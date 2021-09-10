import { gql } from "apollo-server-core";

const users = [
  {
    id: "11",
    name: "Jack",
    email: "ex@m.c",
    age: 19,
  },
  {
    id: "12",
    name: "Jack2",
    email: "ex@m.c",
    age: 20,
  },
  {
    id: "13",
    name: "Jack3",
    email: "ex@m.c",
    age: 9,
  },
  {
    id: "14",
    name: "Jack4",
    email: "ex@m.c",
    age: 15,
  },
]

export type UserArgsProps = {
  id: string;
}

export const typeDefs = gql`
  type Query {
    getHello: String
    getUser: User
    getUserById(id: ID!): User
  }
  type User {
    id: ID!
    name: String
    email: String
    age: Int
  }
`;

export const resolvers = {
  Query: {
    getHello: () => 'Hello world!',
    getUser: () => ({
      id: 11,
      name: "Jack",
      email: "ex@m.c",
      age: 19,
    }),
    getUserById: (parent: any, args: UserArgsProps) => {
      const { id } = args;
      return users.find((user) => user.id === id)
    }
  },
}