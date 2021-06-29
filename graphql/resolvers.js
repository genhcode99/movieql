const nicolas = {
  name: 'nicolas',
  age: 18,
  gender: 'female',
}

const resolvers = {
  Query: {
    person: () => nicolas,
  },
}

export default resolvers
