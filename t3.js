"use strict";

function sortArray(numbers, order) {
    return [...numbers].sort((a, b) => order === "asc" ? a - b : b - a);
}

function doSort() {
    const nums = document.getElementById("nums").value
        .split(/[\s,]+/)
        .map(Number)
        .filter(n => !isNaN(n));
    const order = document.getElementById("order").value;
    document.getElementById("result").textContent = sortArray(nums, order).join(", ");
}




