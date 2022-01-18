// Bài 1: Use the map() method to iterate over the array and join the values of firstName and lastName:
const users = [{ firstName: "Susan", lastName: "Steward" },
{ firstName: "Daniel", lastName: "Longbottom" },
{ firstName: "Jacob", lastName: "Black" }
];
let userName = users.map((item) => {
    let fullName = item.firstName + ' ' + item.lastName;
    return fullName;
});
console.log(userName);

// Bài 2: Apply filter() method to return all creatures with a habitat that is equal to Ocean:
const creatures = [{ name: "Shark", habitat: "Ocean" },
{ name: "Whale", habitat: "Ocean" },
{ name: "Lion", habitat: "Savanna" },
{ name: "Monkey", habitat: "Jungle" }
];
let oceanCreatures = creatures.filter((item) => item.habitat === "Ocean");
console.log(oceanCreatures);

// Bài 3: Apply filter() method to return all numbers that are greater than 7:
const array = [1, 3, 6, 8, 11];
let greaterThanSeven = array.filter((item) => {
    if (item > 7) return item;
});
console.log(greaterThanSeven);
