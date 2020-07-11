
//* find the index of tim 2

const people = [
  { name: 'tim' },
  { name: 'tom' },
  { name: 'bob' },
]

const findName = people.findIndex(person => person.name === 'tim')

console.log(findName) // 2


