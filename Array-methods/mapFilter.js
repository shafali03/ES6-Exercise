//* Chaining array methods


const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]


const multipliedBy5 = numbers.map(num => num * 5)
const between30And40 = multipliedBy5.filter(num => num >= 30 && num <= 40)


//! Short way

const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]

const result = numbers.map(num => num * 5)
  .filter(num => num >= 10 && num <= 30)

console.log(result)