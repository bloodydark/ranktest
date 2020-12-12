const dots = [
  { userId: "userone", working: 1 },
  { userId: "userone", working: 5 },
  { userId: "usertwo", working: 3 },
  { userId: "usertwo", working: 1 },
  { userId: "userthree", working: 1 },
  { userId: "userthree", working: 4 },
  { userId: "userthree", working: 5 },
  { userId: "userfour", working: 5 },
];
let resultArray = [];
let currentArray = [];
let restArray = dots;
let id = "";
const useFigure = dots.length;
for (let i = 0; i < dots.length / ; i++) {
  id = restArray[i].userId;
  //   console.log(id);
  let result = dots.filter((el) => {
    return el.userId === id;
  });
  //   const list = [...new Set(result)];
  if(result)
  console.log(result);
}
// console.log(result);

// console.log(result);
//   currentArray = restArray.filter((el) => {
//   });
//   console.log(currentArray);
//   resultArray.push(currentArray);
//   console.log(resultArray);
//   restArray = restArray.map((el) => {
//     if (el.userId !== id) {
//       return el;
//     }
//   });
//   const final = restArray.filter((el) => {
//     return el !== undefined;
//   });
// }
// console.log(id);
// console.log(resultArray);
// console.log(restArray);
