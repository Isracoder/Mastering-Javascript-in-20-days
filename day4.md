# Day 4 🧑‍🚀🌔: 

## Summary of what I learned 📢:
\
&emsp;Today I started the second course on my list which is Javascript the hard parts V2, and learned about **the execution thread, call stack , closures, event loop, and callback queue**.
\    

&emsp; The execution thread referes to how javascript executes code one line at a time since it is a single-threaded language. The call stack is a way of managing the order in which to call functions and execute where each new function
call encountered during execution is added to the top of the stack. Then the top of the stack is processed and if in that function another function call is encountered the process repeats.
When js is finished with a function and returns , it then pops it off the top of the stack and goes back to what was below it. The call stack always has the global() call on the bottom at the beginning and starts reading line by line from it and removes it when it has done everything else added above it.

&emsp;Closures are a way to make the function remember its previous runnings and executions.Normally when a function is done executing all data related to it is reset and when called again it can't remember its
previous occurence.However things are different with closures.When declaring a function inside another function and returning it all variables related to the returned inner function that were defined in the outer function are returned with it 
as a sort of 'backpack' filled with data for that function.This enables it to remember previous callings and lets programmers add conditions such as making sure it only runs once by adding a counter for example in the closure data.

   
&emsp;The event loop is in short how js keeps track of which events to add to the stack and then execute when there may be events waiting for processing in the callback queue. Whenever I execute a line that takes a long time such as fetching data from the web
(which will run in the browser and js will continue reading the rest of the code therefore not blocking the thread of execution) the callback I want to run upon completion is added to the queue. The event loop makes sure that as soon as the call stack is empty it will take the next item in the queue awaiting processing
and add it to the stack to be run. 

&emsp;


### Coding exercises 💻
##### Nothing today 😴 
