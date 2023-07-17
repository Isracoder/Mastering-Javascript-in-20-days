const task1 = (cb) =>
	setTimeout(() => {
		const message = "Task 1 has executed successfully!";
		cb(message);
	}, 3000);

const task2 = (cb) =>
	setTimeout(() => {
		const message = "Task 2 has executed successfully!";
		cb(message);
	}, 0);

const task3 = (cb) =>
	setTimeout(() => {
		const message = "Task 3 has executed successfully!";
		cb(message);
	}, 1000);

const task4 = (cb) =>
	setTimeout(() => {
		const message = "Task 4 has executed successfully!";
		cb(message);
	}, 2000);

const task5 = (cb) =>
	setTimeout(() => {
		const message = "Task 5 has executed successfully!";
		cb(message);
	}, 4000);

const asyncTasks = [task1, task2, task3, task4, task5];
const print = (message) => {
	console.log(`message : ${message}`);
};
const executeInSequenceWithCBs = (tasks, callback) => {
	return tasks.map((task) => task(callback));
};
executeInSequenceWithCBs(asyncTasks, print);

// console.log("End of question one");

// Question two
const apis2 = [
	{
		apiName: "products",
		apiUrl: "https://dummyjson.com/products",
	},
	{
		apiName: "users",
		apiUrl: "https://dummyjson.com/users",
	},
	{
		apiName: "posts",
		apiUrl: "https://dummyjson.com/posts",
	},
	{
		apiName: "comments",
		apiUrl: "https://dummyjson.com/comments",
	},
];

const executeInParallelWithPromises = async (apis) => {
	const promises = apis.map((api) => {
		return fetch(api.apiUrl)
			.then((res) => res.json())
			.then((data) => {
				return {
					apiName: api.apiName,
					apiUrl: api.apiUrl,
					apiData: data,
				};
			});
	});
	return Promise.all(promises).then((res) => {
		return res;
	});
};

(async () => {
	const res = await executeInParallelWithPromises(apis2);
	console.log(res);
})();

// Question three

//modify and write your code here
const executeInSequenceWithPromises = async (apis) => {
	const results = [];

	for (let api of apis) {
		const response = await fetch(api.apiUrl);
		const data = await response.json();

		results.push({
			apiName: api.apiName,
			apiUrl: api.apiUrl,
			apiData: data,
		});
	}

	return results;
};

executeInSequenceWithPromises(apis2)
	.then((results) => {
		console.log(`Question three results`);
		console.log(results);
	})
	.catch((error) => {
		console.error(`An Error has occurred ${error}`);
	});
