


const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]

const multiplied5 = numbers.map(num => {
  return num * 5
})

console.log(multiplied5)
// [5, 60, 20, 90, 45, 35, 55, 15, 250, 25, 30]




//  Short way
const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]

const multipliedBy5 = numbers.map(num => num * 5)


//!==================================================




// Modifying an array value

const todos = ['buy eggs', 'feed my cat', 'water plants']

const todoString = todos.map(todo => `I need to ${todo}`)

console.log(todoString)


// I need to buy eggs
// I need to feed my cat
// I need to water plants



//!===================================================


// Simplifying arrays with map

const people = [{

  firstName: 'Ali',
  lastName: 'Hasan'

}, {
  firstName: 'Tom',
  lastName: 'Bill'
}]



const firstName = people.map(person => person.firstName)

console.log(firstName)
// ['Ali', 'Tom']


//!===================================================





// Create an array that contains the firstName, lastName and yearsLived for each person(where yearsLived is the number of years the person lived).


const yearAlive = people.map(person => {
  const yearsLived = person.yearBorn - person.yearOfDeath

  return {
    yearLive: person.firstName,
    lastName: person.lastName,
    yearsLived

  }
})

console.log(yearAlive)

[
  { yearLive: 'Benjamin', lastName: 'Franklin', yearsLived: -84 },
  { yearLive: 'Thomas', lastName: 'Edison', yearsLived: -84 },
  { yearLive: 'Franklin', lastName: 'Roosevelt', yearsLived: -63 },
  { yearLive: 'Napoleon', lastName: 'Bonaparte', yearsLived: -52 },
  { yearLive: 'Abraham', lastName: 'Lincoln', yearsLived: -56 },
  { yearLive: 'Mahatma', lastName: 'Gandhi', yearsLived: -79 },
  { yearLive: 'Winston', lastName: 'Churchill', yearsLived: -91 },
  { yearLive: 'Charles', lastName: 'Darwin', yearsLived: -73 },
  { yearLive: 'Albert', lastName: 'Einstein', yearsLived: -76 },
  { yearLive: 'Pablo', lastName: 'Picasso', yearsLived: -92 },
  { yearLive: 'Ludwig', lastName: 'Beethoven', yearsLived: -57 },
  { yearLive: 'Walt', lastName: 'Disney', yearsLived: -65 },
  { yearLive: 'Henry', lastName: 'Ford', yearsLived: -84 },
  { yearLive: 'Steve', lastName: 'Jobs', yearsLived: -57 }
]






