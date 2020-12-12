const dots = [
  { userId: "userone", working: 1 },
  { userId: "userone", working: 5 },
  { userId: "usertwo", working: 3 },
  { userId: "usertwo", working: 1 },
  { userId: "userthree", working: 1 },
  { userId: "userthree", working: 4 },
];
const resultArray = [];
let currentArray = [];
let restArray = dots;
// console.log(restArray);
let id = "";
// for (let i = 0; i < 1000; i++) {
id = restArray[0].userId;
// console.log(id);
currentArray = restArray.map((el) => {
  if (el.userId === id) {
    return el;
  }
});
resultArray.push(currentArray);
console.log(resultArray);
restArray = restArray.map((el) => {
  if (el.userId !== id) {
    return el;
  }
});

var result = restArray.filter(function (item) {
  return item !== undefined;
});
console.log(result);
// console.log(restArray);
