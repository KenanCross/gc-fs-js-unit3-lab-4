let name1 = "Clark Kent";
let name2 = "Bruce Wayne";
let name3 = "Chris";

let nameCompare = (n, n2, n3) => {
	if (n.length > n2.length && n.length > n3.length) {
		console.log(`${n} has the longest name.`);
	} else if (n2.length > n.length && n2.length > n3.length) {
		console.log(`${n2} has the longest name.`);
	} else if (n3.length > n.length && n3.length > n2.length) {
		console.log(`${n3} has the longest name.`);
	} else if (n.length === n2.length && n.length > n3.length) {
		console.log(`${n} and ${n2} tie for the longest name.`);
	} else if (n2.length === n3.length && n2.length > n.length) {
		console.log(`${n2} and ${n3} tie for the longest name.`);
	} else if (n.length === n3.length && n.length > n2.length) {
		console.log(`${n} and ${n3} tie for the longest name.`);
	} else if (n.length === n2.length && n.length === n3.length) {
		console.log(`All three names ${n}, ${n2} and ${n3}, are the same length.`);
	}
};
nameCompare(name1, name2, name3);
