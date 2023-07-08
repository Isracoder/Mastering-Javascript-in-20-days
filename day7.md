
# Day 7 🥸 : 

## Summary of what I learned 📢:
 #### No courses today 😴
   

### Coding exercises 💻
- [functions , callbacks , and recursion](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day1-tasks/tasks.md)
- ```javascript
  async function mapAsync(arr, callbackFunc) {
	let anotherArr = [];
	for (let i = 0; i < arr.length; i++) {
		anotherArr[i] = await callbackFunc(arr[i]);
	}
	return new Promise((resolve, reject) => {
		resolve(anotherArr);
	});
  }
  ```
 - ```javascript
   
    const calcSum = (leftRange, rightRange, arr) => {
    	if (leftRange > rightRange || leftRange < 0 || rightRange > arr.length - 1)
    		return 0;
    	if (leftRange == rightRange) return arr[leftRange];
    	let ans =
    		calcSum(leftRange + 1, rightRange - 1, arr) +
    		arr[leftRange] +
    		arr[rightRange];
    	return ans;
    };
    let testSumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
     console.log(calcSum(4, 5, testSumArr));
     console.log(calcSum(2, 9, testSumArr));
     console.log(calcSum(4, 7, testSumArr));
    ```
- [closure exercises](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day2-tasks/tasks.md)
- ```javascript
  function createCounter(start) {
	  let initialValue = start;
  	function returnedFunc() {
  		initialValue++;
  		return initialValue;
  	}
	  return returnedFunc;
  }
  ```
  
- ```javascript
   function calculateAverage(nums) {
    	function returnedFunc() {
    		const avg =
    			nums.reduce((prev, curNum) => prev + curNum, 0) / nums.length;
    		return avg;
    	}
  	return returnedFunc;
  }
  ```
- ```javascript
   function powerOf(base) {
    	function returnedFunc(exp) {
    		return Math.pow(base, exp);
    	}
    	return returnedFunc;
    }
  ```
- ```javascript
    function compose(func1, func2) {
      	function returnedFunc() {
      		return func2(func1);
      	}
      	return returnedFunc;
    }
   ```
##### Tests of the above
```javascript
    const counterFunc = createCounter(0);
    const avgFunc = calculateAverage([1, 2, 5]);
    const powFunc = powerOf(2);
    counterFunc();
    counterFunc();
    counterFunc();
    console.log(counterFunc()); // the fourth time
    console.log(powFunc(3)); // 2 pow 3
    const composeFuncs = compose(counterFunc, powFunc); // 2 pow counterFunc which will be 5
    console.log(composeFuncs());
```
