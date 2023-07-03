# Day 3 🚴: 

## Summary of what I learned 📢
\
&emsp;Today I finished watching the javascript first steps course 🙌 and learned about **Array methods , destructuring , async , fetching data , and modules**.
\
&emsp;Continuing on from yesterday I learnt more about arrays and their built-in methods such as map and filter. Map is used to return an array of the same length where I modify each item 
in the original array by running a callback function on it. Filter is used to remove items from an array that meet or don't meet a certain condition that I set.   

&emsp;Destructuring is an easy way to extract values from an object in one line only. Instead of declaring a new variable and initializing its value by accessing the object for each variable that I want, destructuring provides
an easier alternative. In between curly braces I write the name of the object key or attribute that I would like to access and then use the equal signs with the object name after it.This creates new variables with the same name 
and with the value of that attribute that I can then access. For example `const {name , address} = student` will assign the student name to the variable name , and the value of address to the variable address.   
  

   
&emsp;Asynchronous code is code that doesn't run sequentially or synchronously(all at the same time). Instead while a certain function is waiting for some code to resolve that will take a long time , other parts of the program continue to run.
We can use promises or async/await to deal with such cases for example when fetching data from an api or the web. Async/Await however will block execution until the particular line of code with the await keyword finishes running. Async/Await allow us to
write asynchronous code in a way that is similar to synchronous code.   


&emsp; Lastly modules are used when we write a large program and keeping it in one file is impractical.That can make the code hard to read , manage, and understand. Instead what we do is break the 
code into separate files or modules based on our needs and then use import/export to access that code in those files from the main program file. This enables large programs that are still readable and 
relatively easy to understand compared to keeping all the code in one file.


### Coding exercises 💻

[Rick and Morty API Project 👽](https://github.com/Isracoder/Mastering-Javascript-in-20-days/tree/main/RickAndMorty)
