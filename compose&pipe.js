// These tasks should be performed serially
// 1st : get the name of the user
// 2nd : uppercase it
// 3rd : greet the user with the uppercase name

let user = "rehana"

const getName = (person) => {
    return person
}

const upperCase = (name) => {
    return name.toUpperCase()
}

const greet = (user) => {
    return `Hello ${user}, How are you?`
}

const compose = (greet,upperCase,getName) => (name) => greet(upperCase(getName(name)))
console.log("Output with Compose ==> ",compose(greet,upperCase,getName)(user))
// const compose = (f,g,h) => (args) => f(g(h(args)))  ----> Always parse from right to left

// DEFINATION : The compose function is higher-order function that takes a list of functions and returns a new function. 
// This new function, when called, will pass its input through all the functions from right to left.

// Lets get the same result with pipe
// const pipe = (f,g,h) => (args) => h(g(f(args))) ----> Always parse from left to right
const pipe = (greet,upperCase,getName) => (name) => getName(upperCase(greet(name)))
console.log("Output with Pipe ==> ",pipe(getName,upperCase,greet)(user))
// With compose & pipe,you can now design functions that receive data and operate like manufacturing conveyor belts, 
// passing the data through each of these functions until it reaches the output.

// <---------------------------------------------------------------------------------------------------------------->

// WITH REDUCE FUNCTION //

// 1. COMPOSE : 
// const compose = (...fns) => (args) => fns.reduceRight((acc,currVal)=>{
//     acc = currVal(acc)
//     return acc
//     },args)

// 2. PIPE :
// const pipe = (...fns) => (args) => fns.reduce((acc,currVal)=>{
//     acc = currVal(acc)
//     return acc
//     },args)