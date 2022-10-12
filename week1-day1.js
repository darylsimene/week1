//! Problem #1 What should the following evaluations return? 

2 == '2' //========= true
'he' == 'she' //========= false
2 === 2  //========= true
'true' == true //========= false
true === true //========= true
'true' != true //========= true
'true' !== true //========= true


//! Problem #2: What are the three different ways you can declare a variable? And what is the differences between them?

//The three different ways to declare a variable are var, let, and const.
//Var is the legacy way of declaring a variable in your codes. It is now use less often as this could result in your code getting
//bugs as you keep on building it. Let and const are the new ways in declaring your variables. Let lets you declare variable and
//will reassign its value later on.  If you declare a variable using const then it means that you cannot reassign its values.



//! Problem #3: Write a simple function for each type of these functions:
//?  First-Class Function
    // function product(multiplier,multiplicand){
    //     console.log(`The multiplier is ${multiplier}.`);
    //     console.log(`The multiplicand is ${multiplicand}.`);
    //     console.log(`The product is ${multiplier*multiplicand}`)  
    // }
    // product(8,9);
//?  Higher-Order Function
    // const whyAndroid = () => {
    //     console.log("Android has Youtube Vanced"); 
    // }
    // const higherOrderFunction = (whyAndroid) => {
    //     console.log("Why Android?"); 
    //     whyAndroid();
    // }

    // higherOrderFunction(whyAndroid)

//? - Callback Function
    // function isDead(whoTalks, reason, why, callBack){
    //     console.log("****phone ringing****");
    //     console.log(`****${whoTalks} answers the call****`);
    //     console.log("I'm Sorry.....");
    //     return callBack(reason, why);
    // }

    // function answerTheCall(reason, why){
    //     console.log(reason);
    //     console.log("Why? :(");
    //     console.log(why);
    // }

    // const whoTalks = "Taylor"
    // const reason = "The old Taylor can't come through the phone right now";
    // const why = "Cause she's dead!"
    // isDead(whoTalks, reason, why, answerTheCall)



//! Problem #4: What is the value of the console.log of “a”, “b”, and “c” shown in the code below?
// const a = 'hi';
// console.log(c); // C is undefined
// const someFunction = (arg) => {
//     const b = 'bye';
//     if (arg) {
//         const c = 'see ya!';
//         console.log(a);
//         console.log(b);
//     }
// }


//! Problem #5: Given the following data structure, write a for loop using:
// const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//? For Statement
// console.log('PROBLEM 5 - FOR STATEMENT')
// for (let i = 0; i < someArray.length; i++) {
//     console.log(someArray[i]);
// }

//? For.. Of 
// console.log('PROBLEM 5 - FOR OF STATEMENT')
// for (let i of someArray){
//     console.log(i);
// }


//? Problem #6: Given the following data structure:

// const oldArray1 = [1,2,3]
// const oldArray2 = [4,5]

//? Use the concat() method to merge the two arrays to return: [1, 2, 3, 4, 5]
// newArray = oldArray1.concat(oldArray2)
// console.log(newArray)

//? Use the length property to return the length of the array
// console.log(newArray.length)

//? Use the filter() method to filter out the element “3” and return: [1, 2, 4, 5]
// const filter3 = newArray.filter(num => num != 3) 
// console.log(filter3);

//? Use the find() method to find and return the value of 5.
// const find4 = newArray.find(num => num === 5);
// console.log(find4)

//? Use the slice() method to return back this array: [3, 4]
// const splicedArray = newArray.splice(2,2,)
// console.log(splicedArray);

//? Use the includes() method to return back TRUE when I pass in “4” into the includes method.
// const someArray1 = [1, 2, 3, 4, 5];
// console.log(someArray1)
// console.log(someArray1.includes(4))

//? Use the indexOf() method to return back the index of the element “2”
// console.log(someArray1.indexOf(2))

//? Use the isArray() method to return back TRUE when I pass in the array
// console.log(Array.isArray(someArray1))

//? Use the join() method to return back: “1, 2, 3, 4, 5”
// console.log(someArray1.join(","))

//? Use the map() method to return back a new array: [2, 4, 6, 8, 10]
// const mapDouble = someArray1.map(num => {
//     return num * 2
// })
// console.log(mapDouble)

//? Use the pop() method to return back a new array: [1, 2, 3, 4]
// someArray1.pop()
// console.log(someArray1)

//? Use the push() method to return back a new array: [1, 2, 3, 4, 5, 6]
// someArray1.push(5)
// someArray1.push(6)
// console.log(someArray1)

//? Use the shift() method to return back a new array: [2, 3, 4, 5]
// someArray1.shift()
// console.log(someArray1)

//? Use the unshift() method to return back a new array: [0, 1, 2, 3, 4, 5]
// someArray1.unshift(0)
// console.log(someArray1)

//? Sort this array to return [9, 1, 3, 5] using the sort() method
// const someArray2 = [9,1,3,5];
// console.log(someArray2.sort())

//? Use the reduce() method to return back the sum of all numbers in the array 
// const total = someArray1.reduce((previousValue, currentValue) => 
// previousValue + currentValue, 0)
// console.log(total)





//! Problem #7: Given the following data structure: 

// const someObject = {
//     color: 'black'
// }

//? Use the assign() method to add a new key value pair of: name: ‘john doe’
// Object.assign(someObject, {name:'john doe'})
// console.log(someObject)

//? Use the dot notation to add a new key value pair of: age: 22
// someObject.age = 22;
// console.log(someObject)

//? Use the bracket notation to add a new key value pair of: address: ‘123 test address’
// someObject["address"] = "123 address"
// console.log(someObject)

//? Use the keys() method to return a array back of the keys: [“color”, “name”, “age”, “address”]
// console.log(Object.keys(someObject))

//? Use the values() method to return a array back of the values: [“black”, “john doe”, “22”, “123 test address”]
// console.log(Object.values(someObject))

//? Use the for…in loop against this object to console.log each of the keys values.
// for (let i in someObject){
//     console.log(`${someObject[i]}`)
// }

//! Problem #8: Given the following data structure: 
// const numbers = [
// {
//     num: 1
// },
// {
//     num: 2
// },
// {
//     num: 3
// }
// ]

// for (let i of numbers){
//     console.log(i['num']);
// }




//! Problem #9: Create a new Set() object


// const wanted = new Set()

//?Add a new value of: ‘john doe’
// wanted.add('john doe')
// console.log(wanted)

//? Check if the value of ‘john doe’ exists
// console.log(wanted.has('john doe'))

//? Remove the value of ‘john doe’
// wanted.delete('john doe')
// console.log(wanted)



//! Problem #10: Create a new Map() object
// const wantedAgain = new Map()

//? Add a new key-value pair of: name: ‘john doe’
// wantedAgain.set('name', 'john doe'); 
// console.log(wantedAgain)

//? Check if the value ‘john doe’ exists
// console.log([...wantedAgain.keys()].includes('john doe'))

//? Remove the key-value pair of ‘john doe’
// wantedAgain.delete('name')
// console.log(wantedAgain)


//! Problem #11: Explain what asynchronous programming means in 3 sentence
// Asynchronous programming is a better way in making your page more responsive. 
// Unlike synchronous programming, asynchronous programming enables to make task concurrently.
// It further implements the idea that you can do other things rather than waiting for one task
// just like how it is with synchronous programming.

//! Problem #12: Explain what call back hell is. 
// Callback hell happens when you keep nesting if-else statements (or any other). It's called callback because at 
// some point in the code you are going to callback function and passing results/parameters in your code. I 
// believe it's also called hell because as from what I experienced before, I had wrote codes wherein 
// it became like a pyramid, and it became messy to maintain and looking for codes will be hard.
//! Problem #13: Explain what is a promise and describe the possible states of promises. 
// Promises is one way to get better in asynchronous operations. In promises, the object can be pending, 
// fulfilled, or rejected. It's like try-catch function, you construct a function if the task is successful 
// and dealing errors when they fail.

//! Problem #14: What is async/await?
// Async and await are functions for asynchronous activities. Async returns a promise while await waits for the 
// async operations's promise. 

