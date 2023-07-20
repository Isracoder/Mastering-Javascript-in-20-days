
# Day 11 🥇 : 

## Summary of what I learned 📢:
  Today and Yesterday I continued and finished watching the required parts of the third and final course on my list which is Deep Javascript Foundations v3. I learned more about **advanced scope , closures , and modules**  
  
  &emsp;I learned about the difference between lexical and dynamic scoping. If the scope depends on the choices made by the author at the time of defining where the function is and where i call it and accessing the variables based on where it was defined it is lexically scoped. 
  Everything about it is already decided before run-time and the variables that are accessed in the function will always be the same ones. Javascript and most languages that
  we are used to using are lexically scoped. However if the value of the variables I am accessing depends on where i reuse my functions which is determined at run-time 
  this language is dynamically scoped. An example of this is Bash scripts (which for reference I have no knowledge in currently).  
  
  &emsp;Another interesting clarification was about hoisting where previously anyone that explained hoisting in javascript made it seem like the variables are moved to the 
  top of their respective scopes at compile time so that when accessing them before their declaration they return undefined instead of a reference error. However none of this
  actually happens, instead the engine completes the parsing and therefore knows what variables have been declared and in what scope and therefore knows when to return reference error
  and when to return undefined without actually moving the variables. Let also "hoists" but returns a tdz (temporal dead zone) error instead of undefined like var. Hoisting 
  is useful when declaring functions such that it is possible to define them at the bottom and put the executable code at the top.  
  
  &emsp;The last thing I will talk about is modules, which uses the oop idea of encapsulation in a way. Variables and methods should be defined and used according to the rule
  of least exposure since not everyone needs to know or see everything in the code that I've written. Since es6 we can write modules in another file and access them using the
  import/export syntax. If we want to write modules without that way we can use wrapper functions and build on the idea of closure. Another important thing to note is that closure
  provids a link or access to a variable after the scope has ended **not** a snapshot to what the value was at the time that the variable was in-scope and accessible in the closure.
   

### Coding exercises 💻
 ##### [Day 2 of week 3](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day2-tasks/tasks.md)
 STATIC TYPING QUESTIONS:
QUESTION #1
```typescript
interface PromiseResult {
  sayHelloWorld?: string;
  checkBoolean?: boolean;
  returnObj?: object;
}

const sayHelloWorld = new Promise<string>((resolve, reject) => {
  resolve("Hello world!");
});

const checkBoolean = (boolean: boolean) =>
  new Promise<boolean>((resolve, reject) => {
    if (boolean) {
      resolve(boolean);
    } else {
      reject(`Input is false :(`);
    }
  });

const returnObj = new Promise<object>((resolve, reject) => {
  resolve({
    x: "meow",
    y: 45,
  });
});

const promisesArray: (Promise<string> | Promise<boolean> | Promise<object>)[] = [
  sayHelloWorld,
  checkBoolean(true) , 
  returnObj,
];

const convertToObj = (array: (Promise<string> | Promise<boolean> | Promise<object>)[]): any => {
    console.log(`array[0] `)
    let obj : any = {
        sayHelloWorld:array[0] , 
        checkBoolean:array[1] , 
        returnObj:array[2] , 
    }
  

  return obj ;
};

console.log(convertToObj(promisesArray));

```
SCOPE & HOISTING QUESTIONS:
QUESTION #1:
The result is 1 and then reference error since var attaches to the outer function scope and is accessible while let and const are block scoped.

QUESTION #2: The result is undefined since var hoists as undefined and then reference error because of let and const

QUESTION #3: The result is C) [ 36, 100, 45 ] | [ 1, 2, 3 ] | [ 1,100, 45 ] , since var a will change from 36 to 1 after the if statement and let and const will reference the variables outside the if 





##### [Day 3 of week 3](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day3-tasks/tasks.md)
QUESTION #1
```typescript
const arrowHOF = (normalFunc) => {
    return (...functionParams)=>{
        return (repCount)=> {
            
            let i = repCount; 
            if(repCount == undefined) i = 1 ;
            let arr = [] ;
            let res = normalFunc(...functionParams) ;
            while (i--)
                arr.push(res) ;
            return arr ;
            
        }
    }
  
}

const hofNormalFunc1 = arrowHOF(exampleNormalFunc1);
const hofNormalFunc2 = arrowHOF(exampleNormalFunc2);
const hofNormalFunc3 = arrowHOF(exampleNormalFunc3);

// console.log(hofNormalFunc1(3, 4, 5)(2)); // logs 60 twice
console.log(hofNormalFunc1(3, 4, 5)(2)); // logs 60 twice
console.log(hofNormalFunc2(20, 35)(4)); // logs 700 four times
console.log(hofNormalFunc3("Meow")()); // logs "Meow Meow Meow!" once
```
QUESTION #2
```typescript
const preserveThis = (func) => {
  return func.bind(obj) ;
}
```
using the bind method on the object is enough to reference the correct this.

QUESTION #3 code reasoning   

- Part one : 
```javascript
function outer1() {
  var x = 10;
  var inner1 = function() {
    console.log(x);
  };
  inner1();
}
outer1(); // Output: 10
```
The function is invoked and will look for x in itself , when not found it will go up one level and find it with a value of 10.

- Part two : 
```javascript
function outer2() {
  var x = 10;

  var inner2 = function() {
    var x = 20;
    console.log(x);
  };
  inner2();
}
outer2(); // Output: 20
```
The function is invoked and will look for x in itself , since it is found it will output it with it's new value of 20.


##### [Day 4 of week 3](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day4-tasks/tasks.md)
### QUESTION #1

Given the following code snippet and **explain what's happening**.

```javascript
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log("value of [i] is: ", i);
    }, 100);
}
```

The current output is: "value of [i] is: 5" five times.

The output should be: 

"value of [i] is: ", 0 "value of [i] is: ", 1 "value of [i] is: ", 2 "value of
[i] is: ", 3 "value of [i] is: ", 4

Without changing anything in the for loop's code itself, provide a solution to
fix it.
**Answer** : since the for loop is using var the same variable is being captured in the closure each time leading us to output 5 5 times since it is one variable with one 
value of 5 at the end of the for loop . We could change var to let leading to the creation of a new variable on every iteration or we could change the variable inside the function as so
```javascript
for (var i = 0; i < 5; i++) {
    let j = i
    setTimeout(function() {
      console.log("value of [i] is: ", j);
    }, 100);
}
```



### QUESTION #2

```javascript

for (let i = 0; i < 5; i++) {
   let array = [];
   array.push(i);
   console.log("Current array is: ", array)
}

```

The current output is: 

"Current array is: [ 0 ]" "Current array is: [ 1 ]" "Current array is: [ 2 ]"
"Current array is: [ 3 ]" "Current array is: [ 4 ]".

The output should be: "Current array is: [0, 1, 2, 3, 4]".

Provide a solution to fix it. 
**Answer** : since we used let a new array is being created on each iteration we never keep the array from the previous loop to add on to. We should move the array declaration
above the loop and move the console.log line below the loop so we only print the final version of the array with all the numbers.

```javascript
let array = [];
for (let i = 0; i < 5; i++) {
   array.push(i);
}
   console.log("Current array is: ", array)
```

### QUESTION #3
```javascript

let functions = [];

for (var i = 0; i < 5; i++) {
  functions.push(() => {
    console.log("Current value of i is:", i);
  });
}

functions.forEach((func) => func());

```
The current output is: 

"Current value of i is: 5" "Current value of i is: 5" "Current value of i is: 5"
"Current value of i is: 5" "Current value of i is: 5"

The output should be: 

"Current value of i is: 0" "Current value of i is: 1" "Current value of i is: 2"
"Current value of i is: 3" "Current value of i is: 4"

Provide a solution to fix it. 

**Answer**: same as before the issue is with using var and capturing a link to the same variable , when changing to let we get the desired output.

```javascript

let functions = [];

for (let i = 0; i < 5; i++) {
  functions.push(() => {
    console.log("Current value of i is:", i);
  });
}

functions.forEach((func) => func());

```

## Closure : 
### Question 1

```javascript
function privateCounter() {
    let count = 0 ;
    function increment(){
        count++ ;
        // console.log(count) ;
    }
    function getCount(){
        return count ;
    }
    return {
        getCount : getCount , 
        increment : increment
    }
}

let counter = privateCounter() ;
// console.log(counter) ;
counter.increment() ;
counter.increment() ;
console.log(counter.getCount()) ;

```

### Question 2

```javascript
function generateFibonacci(count){
    let firstNum = 1 ;
    let secondNum = 1 ;
    fibo = ()=> {
        let res = firstNum + secondNum ;
        console.log(`next is ${res}`) ;
        firstNum = secondNum ;
        secondNum = res ;
    }
    return another = () => {
            if(count < 1)return ;
            count--;
            fibo() ;
            another() ;
    }
}

let fib = generateFibonacci(4) ;
fib() ;

```

 
