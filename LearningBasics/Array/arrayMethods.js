let arrayCompanies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]

console.log(arrayCompanies.toString());

arrayCompanies.pop();
arrayCompanies.push("SpaceX");

console.log(arrayCompanies.slice(1,2));

let removedElements2 = arrayCompanies.splice(0,1);

arrayCompanies.unshift("Bloomberg");

let removedElements = arrayCompanies.splice(2,1,"ola");

console.log(arrayCompanies.toString());
console.log(removedElements);
console.log(removedElements2);

arrayCompanies.push("Amazon");
console.log(arrayCompanies.toString());

