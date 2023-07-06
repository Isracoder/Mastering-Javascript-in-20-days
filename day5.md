# Day 5 🎠: 

## Summary of what I learned 📢:
\
&emsp;Today I continued watching the second course on my list, and learned about **promises , web APIs , and the microtask queue**.
   

&emsp;Promises are an alternative to callbacks when writing asynchronous javascript code. An example of a web api that we use promises with is fetch. Fetch is used to 
interact with the web and broweser and different methods can be used with it. GET is the default but other methods such as POST are also applicable. We chain a .then after
fetch to deal with the result of it running , and we can pass in 2 functions as parameters. One of these is run on success and the other on failure.  
&emsp;When fetch is done and it is time to execute the functions that were passed in they are added to the microtask queue. The microtask queue is part of the event loop and has 
a higher priority than the normal task queue or callback queue. Therefore the resolve or reject functions are run before anything in the task queue but after executing the
other functions that were on the call stack.
   



### Coding exercises 💻
##### Nothing today 😴 
