function convertStringToNumber(input) {
	if (typeof input == "string") {
		return +input;
	}
	return { value: input, type: typeof input };
}

const checkNan = (value) => {
	return Number.isNaN(value);
};

function isEmptyValue(value) {
	if (typeof value == "undefined" || null === value || value === "")
		return true;
	return false;
}

function compareObjects(input1, input2) {
	if (
		typeof input1 !== "object" ||
		typeof input2 !== "object" ||
		input1 === null ||
		input2 === null
	)
		return [input1, input2];
	let k1 = Object.keys(input1);
	let k2 = Object.keys(input2);
	if (k1.length != k2.length) return false;
	for (const key in k1) {
		if (input1[key] != input2[key]) return false;
	}
	return true;
}
// console.log();

const complexCoercion = (input) => {
	switch (typeof input) {
		case "string":
			return true;
		case "number":
			input = toString(input);
			return true;
		case "object" && input === null:
		case "undefined":
			return false;
		default:
			return input;
		// break;
	}
};
