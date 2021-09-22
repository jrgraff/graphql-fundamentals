export type PaymentMethod = {
  id: string
  userId: string
  last4: string
  expMonth: number
  expYear: number
}

export type User = {
  id: string
  name: string
  email: string
  age: number
  paymentMethods?: PaymentMethod[]
}