// 1
const obj = {mother : "Mother India" , age: 25}
const objSib = {age: obj.age-6, ...obj};
console.log(objSib);
// 2
const arr  = ["red" , "blue" , "pink" , "black" , "green"];
const newArr = [...arr , "grey" , "yelow"]
console.log({arr , newArr})

//3

const sumOfAll = (...args)=>{
  let sum = 0;
  for(i of args){
    sum += i;
  }
  return sum;
}
console.log(sumOfAll(1,2,3,4,5,10))

//4

const average = (...args) => {
  let sum =0;
  for (i of args){
    sum+=i;
  }
  return sum/args.length
}

console.log(average(10,20,30))

//5
const birthday =({name , age}) =>{
  return {name , age: age+1}
}
const userInput = {name: "varen" , age:24}
console.log(birthday(userInput))
console.log(userInput)

//6

const addToArr =(arr , element) => {
  return [...arr , element]
}

const arrToAdd  = [1,3,4,5]
console.log(addToArr(arrToAdd , 2))

//7 

const lessThanTen = (num) =>  num<10;
const arrLess = [12,3,33,3, 45,317,7 , 9];
console.log(arrLess.filter(lessThanTen))

// 8
const arrToObj =[3,4,5,6,7,8,9 ];
console.log(arrToObj.map((num) => {return {num}} ))

//9 

const arrSum = [2,3,6,7];
const giveSum = (arrSum) => {
  return arrSum.reduce((accumulator,currentValue) => accumulator + currentValue)
}
console.log(giveSum(arrSum))

// 10
console.log("HereQ10-a")
const  arr10 = [1,2,3,4,5,10]

const giveOddSumm = (inputArray) => {
  const findOdd = (arr) => {
  return arr.filter((num) => {if (num % 2 != 0){
    return num;
  }})
  }
  const sum = (accumulator , currentValue) => {
    return accumulator + currentValue
  }
  
  return findOdd(inputArray).reduce(sum)
}

console.log(giveOddSumm(arr10))

// 10 B

const giveOddIndexSum = (inputArray) => {
  const findOddIndexNumber = (arr) => {
  return arr.filter((num , idx)  => {if (idx % 2 != 0){
    return num;
  }})
  }
  const sum = (accumulator , currentValue) => {
    return accumulator + currentValue
  }
  
  return findOddIndexNumber(inputArray).reduce(sum)
}
console.log(giveOddIndexSum(arr10))

// 10 C

const findDivisibleByTen =  (inputArray) => {
  return inputArray.filter((num) => num%10===0 ? num : null )
}

console.log(findDivisibleByTen([10,30,33,40,44 ,0]))

// 10 D


const giveIncDec = (inputArray) => {
    return inputArray.map((num) => num%2===0 ? num -1 : num +1 )
}
console.log(giveIncDec([1,2,3,4,5,6,7,8,9,10]))

// 10 E

const giveOddEvenSumm = (inputArray) => {
  const findOdd = (arr) => {
  return arr.filter((num) => {if (num % 2 != 0){
    return num;
  }})}

  const findEven = (arr) => {
  return arr.filter((num) => {if (num % 2 === 0){
    return num;
  }})}


  const sum = (accumulator , currentValue) => {
    return accumulator + currentValue
  }
  
  return {odd :findOdd(inputArray).reduce(sum) , even : findEven(inputArray).reduce(sum)}
}

console.log(giveOddEvenSumm(arr10))

// 11 

const fruit = ["apple ","orange", "mango", "papaya"]


const findNumberOfChars = (inputArray) => {
  const result = {}
  for (item of inputArray){
    let temp = item.length;
  }
}