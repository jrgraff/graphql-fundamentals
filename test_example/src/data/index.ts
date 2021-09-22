import { PaymentMethod, User } from "../utils/types";

export const users: User[] = [
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

export const paymentMethods: PaymentMethod[] = [
  {
    id: "1",
    userId: "11",
    last4: "1234",
    expMonth: 12,
    expYear: 1889,
  },
  {
    id: "2",
    userId: "12",
    last4: "1222",
    expMonth: 11,
    expYear: 1822,
  },
  {
    id: "3",
    userId: "13",
    last4: "1123",
    expMonth: 8,
    expYear: 2022,
  },
  {
    id: "4",
    userId: "14",
    last4: "2452",
    expMonth: 9,
    expYear: 2020,
  },
  {
    id: "5",
    userId: "11",
    last4: "2052",
    expMonth: 5,
    expYear: 2025,
  },
]