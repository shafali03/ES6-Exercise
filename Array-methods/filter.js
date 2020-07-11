
const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]

const biggerThan10 = numbers.filter(num => {
  if (num > 10) return true
})

console.log(biggerThan10)

[12, 18, 11, 50]


// short way

const biggerThan20 = numbers.filter(num => num > 20)
[50]