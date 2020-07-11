
// For loops

// for (let i = 0; i < 5; i++) {
//   bounceBall()
// }


for (let i = 0; i < 5; i++) {
  const ball = i + 1
  console.log('The ball bounce ' + ball)
}

// Logic within for loops


const numbers = [25, 22, 12, 56, 8, 18, 34]

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i]
  if (num < 20) {
    console.log(num + 'is less than 20')
  }

}



const fruits = ['banana', 'strawberry', 'orange']

for (let i = 0; i < fruits.length; i++) {
  console.log('In our basket we have ' + fruits[i])
}


const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]



for (const num of number) {
  console.log(num)
}




const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]

for (const num of numbers) {
  if (num > 5)
    console.log(num)
}

// 12
// 18
// 9
// 7
// 11
// 50
// 6




const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]

let array = []

for (const num of numbers) {
  if (num > 10) {
    array.push(num)
  }
}



const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]

let array = []
for (const num of number) {
  array.push(num * 5)
}

console.log(array)