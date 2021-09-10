import { gql } from "apollo-server-core";

import { users, paymentMethods } from "../data";
import { User } from "../utils/types";

export type UserArgsProps = {
  id: string;
}

export const typeDefs = gql`
  type Query {
    getUser: User
    getUserById(id: ID!): User
  }
  type User {
    id: ID!
    name: String
    email: String
    age: Int
    paymentMethods: [PaymentMethod]
  }
  type PaymentMethod {
    id: ID!
    last4: String
    expMonth: Int
    expYear: Int
  }
`;

export const resolvers = {
  Query: {
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
  User: {
    paymentMethods: (parent: User) => {
      return paymentMethods.filter((payment) => payment.userId === parent.id)
    }
  }
}