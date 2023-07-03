const start = 1,
	end = 50;
const generateArrayRange = (start, end) => {
	let arr = [];
	for (let i = start; i <= end; i++) arr.push(i);
	return arr;
};

const main = async () => {
	const arrayRange = generateArrayRange(start, end);
	let myURL = `https://rickandmortyapi.com/api/character/[${arrayRange}]?status=alive`;
	// console.log(myURL);
	let ul = document.getElementById("characterList");
	try {
		let response = await fetch(myURL);
		let data = await response.json();
		console.log("Success!");
		ul.innerHTML = getListItems(data);
	} catch (error) {
		console.log("Error Error Error!");
		console.log(`Oh no a ${error} has occured`);
		let h2 = document.createElement("h2");
		document.querySelector("body").appendChild(h2);
		h2.textContent =
			"Oh No something went wrong! Please try again later and check your Wi-fi or the URL link.";
	}
};

const getListItems = (dataArr) => {
	return (
		`<li class ="characterRow"><ul class ="characterInfo categories">
        <li>Name:</li>
        <li>Image:</li>
        <li>Location:</li>
        <li>Species:</li>
        <li>Gender:</li>
    </ul> </li>` +
		dataArr
			.map((item) => {
				return `<li class="characterRow">
            <ul class ="characterInfo">
            <li class="nameItem"> ${item.name} </li>
            <span class="imgSpan"><img src="${item.image}" alt="${item.name} Image"/></span>
            <li> ${item.location.name} </li>
            <li> ${item.species} </li>
            <li> ${item.gender} </li>
            </ul>
            </li>`;
			})
			.join("")
	);
};
main();
// try {
// 	console.log("Yay , success!");
// } catch (err) {
// 	console.log("Err Err Err");
// 	console.log(`Oh No ! A ${err} has occured`);
// 	console.log("Err err err");
// }
