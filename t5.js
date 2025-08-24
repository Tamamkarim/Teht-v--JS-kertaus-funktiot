"use strict";
function sortArray(numbers, order) {
  
  const sorted = [...numbers];
  if (order === "asc") {
    sorted.sort((a, b) => a - b);
  } else if (order === "desc") {
    sorted.sort((a, b) => b - a);
  }
  return sorted;
}

const numbers = [5, 2, 8, 1, 9];
console.log(sortArray(numbers, "asc"));  


console.log(sortArray([10, 3, 7], "asc"));  

