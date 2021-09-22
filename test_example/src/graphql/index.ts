import { gql } from "apollo-server-core";

import { users, paymentMethods } from "../data";
import { User } from "../utils/types";

export type UserArgsProps = {
  id: string;
  name: string
  email: string
  age: number
}

export type PaymentMethodArgsProps = {
  id: string
  userId: string
  last4: string
  expMonth: number
  expYear: number
}

export const typeDefs = gql`
  type Query {
    getUser: User
    getUserById(id: ID!): User
  }
  type Mutation {
    createUser(id: ID!, name: String, email: String, age: Int): User
    createPaymentMethod(
      id: ID!, 
      userId: ID!,
      last4: String, 
      expMonth: Int, 
      expYear: Int
    ): PaymentMethod
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
    userId: ID!
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
    },
  },
  Mutation: {
    createUser: (parents: any, args: UserArgsProps) => {
      const newUser: User = args
      users.push(newUser);
      return newUser
    },
    createPaymentMethod: (parent: any, args: PaymentMethodArgsProps) => {
      paymentMethods.push(args)
      return args
    },
  },
  User: {
    paymentMethods: (parent: User) => {
      return paymentMethods.filter((payment) => payment.userId === parent.id)
    },
  },
}