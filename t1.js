"use strict";

const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

const output = document.getElementById("output");

output.innerHTML += "<b>Hedelmät:</b> " + fruits.join(", ") + "<br>";
output.innerHTML += "<b>Hedelmien määrä:</b> " + fruits.length + "<br>";
output.innerHTML += "<b>Hedelmä indeksissä 2:</b> " + fruits[2] + "<br>";
output.innerHTML += "<b>Viimeinen hedelmä:</b> " + fruits[fruits.length - 1] + "<br>";

const vegetables = [];
for (let i = 0; i < 3; i++) {
    const veg = prompt("Anna vihannes:");
    vegetables.push(veg);
}

output.innerHTML += "<b>Vihannekset:</b> " + vegetables.join(", ") + "<br>";
output.innerHTML += "<b>Vihannesten määrä:</b> " + vegetables.length + "<br>";