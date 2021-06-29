export const people = [
  {
    id: 1,
    name: 'nicolas',
    age: 6,
    gender: 'female',
  },
  {
    id: 2,
    name: 'jewoo',
    age: 13,
    gender: 'male',
  },
  {
    id: 3,
    name: 'mina',
    age: 18,
    gender: 'female',
  },
  {
    id: 4,
    name: 'scal',
    age: 22,
    gender: 'male',
  },
]

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id)
  return filteredPeople[0]
}
