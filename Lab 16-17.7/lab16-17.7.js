"use strict";
// Lab 16.2
// const numNeighbours = Number(
//   prompt("How many neighbor countries does your country have?")
// );

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// Lab 16.3

// const language = prompt("Language:");
// const population = Number(prompt("Population:"));
// const isIsland = prompt("Island or Land:");

// const Portugal =
//   language === "english" && population < 50 && isIsland === "land";

// if (Portugal) {
//   console.log("You should live in Portugal :)");
// } else {
//   console.log("Portugal does not meet your criteria :(");
// }

// Lab 16.4

// const language = prompt("Language:...?");

// switch (language) {
//   case "Chinese":
//   case "Mandarin":
//     console.log("MOST number of native speakers!");
//     break;
//   case "Spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "English":
//     console.log("3rd place");
//     break;
//   case "Hindi":
//     console.log("Number 4");
//     break;
//   case "Arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too :D");
// }

// Lab 16.5

// let population = 50;

// console.log(
//   `${
//     population >= 33
//       ? "Portugal's population is above average"
//       : "Portugal's population is below average"
//   }`
// );

// Lab 16.6.1

// let Dolphins, Koalas;

// let dolphinsPoint1 = 97;
// dolphinsPoint2 = 112;
// dolphinsPoint3 = 101;
// koalasPoint1 = 109;
// koalasPoint2 = 95;
// koalasPoint3 = 106;
// const averageDolphinsPoint =
//   (dolphinsPoint1 + dolphinsPoint2 + dolphinsPoint3) / 2;
// const averageKoalasPoint = (koalasPoint1 + koalasPoint2 + koalasPoint3) / 2;

// if (averageDolphinsPoint > averageKoalasPoint) {
//   console.log("Dolphins Win");
// } else if (averageDolphinsPoint < averageKoalasPoint) {
//   console.log("Koalas Win");
// } else {
//   console.log("Same point");
// }

// if (averageDolphinsPoint > averageKoalasPoint && averageDolphinsPoint >= 100) {
//   console.log("Dolphins Win");
// } else if (
//   averageDolphinsPoint < averageKoalasPoint &&
//   averageKoalasPoint >= 100
// ) {
//   console.log("Koalas Win");
// } else {
//   console.log("Same point");
// }

// const samepoint =
//   averageDolphinsPoint === averageKoalasPoint &&
//   averageDolphinsPoint === 100 &&
//   averageKoalasPoint === 100;

// if (averageDolphinsPoint > averageKoalasPoint && averageDolphinsPoint >= 100) {
//   console.log("Dolphins Win");
// } else if (
//   averageDolphinsPoint < averageKoalasPoint &&
//   averageKoalasPoint >= 100
// ) {
//   console.log("Koalas Win");
// } else if (
//   averageDolphinsPoint === averageKoalasPoint &&
//   averageDolphinsPoint >= 100 &&
//   averageKoalasPoint >= 100
// ) {
//   console.log("Same point");
// }

// Lab 16.6.2

// const bill = Number(prompt("How much is this bill?"));

// const tip = 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(
//   `This bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

// Lab 17.1

// function describeCountry(country, population, capitalCity){
//   const thisCountry = `${country} has ${population} million people and it's capital city is ${capitalCity}`;
//   return thisCountry;
// }

// const Finland = describeCountry('Finland', 6, 'Helsinki');
// console.log(Finland);
// const Vietnam = describeCountry('Vietnam', 99, 'Hanoi');
// console.log(Vietnam);
// const Thailand = describeCountry('Thailand', 70, 'Bangkok');
// console.log(Thailand);

// Lab 17.2

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const perentage1 = percentageOfWorld1(1441);
// console.log(perentage1);
// const perentage2 = percentageOfWorld1(99);
// console.log(perentage2);
// const perentage3 = percentageOfWorld1(6);
// console.log(perentage3);

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };
// const perentage4 = percentageOfWorld2(1441);
// console.log(perentage4);
// const perentage5 = percentageOfWorld2(1441);
// console.log(perentage5);
// const perentage6 = percentageOfWorld2(1441);
// console.log(perentage6);

// Lab 17.3

// const percentageOfWorld3 = (population) => (population / 7900) * 100;
// const percentage = percentageOfWorld3(1441);
// const percentage2 = percentageOfWorld3(99);
// const percentage3 = percentageOfWorld3(6);
// console.log(percentage, percentage2, percentage3);

// Lab 17.4

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// function describePopulation(country, population) {
//   const percentage = percentageOfWorld1(population);
//   const thisCountry = `${country} has ${population} million people, which is about ${percentage} of the world`;
//   return thisCountry;
// }

// console.log(describePopulation("VietNam", 99));
// console.log(describePopulation("ThaiLand", 70));
// console.log(describePopulation("Finland", 6));

// Lab 17.5

// const populations = [1441, 99, 70, 6];

// console.log(Boolean(populations.length === 4));

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// const percentages = [
//   percentageOfWorld1(1441),
//   percentageOfWorld1(99),
//   percentageOfWorld1(70),
//   percentageOfWorld1(6),
// ];
// console.log(percentages);

// Lab 17.6

// const neighbours = ["Campuchia", "China", "Laos"];
// console.log(neighbours);
// const newNeighbours = neighbours.push("Utopia");
// console.log(neighbours);
// const popped = neighbours.pop();
// console.log(neighbours);
// if (neighbours.includes("Germany")) {
// } else {
//   console.log("Probably not a SEA country :D");
// }

// console.log(neighbours.indexOf("China"));
// neighbours[neighbours.indexOf("China")] = "People's Republic of China";

// console.log(neighbours);

// Lab 17.7.1

// const calcAverage = (p1, p2, p3) => {
//   const average = (p1 + p2 + p3) / 3;
//   return average;
// };
// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);
// console.log(avgDolphins);
// console.log(avgKoalas);

// function checkWinner(A, B) {
//   const dolphinsWin = A >= 2 * B;
//   const koalasWin = B >= 2 * A;
//   if (dolphinsWin) {
//     console.log(`Dolphins Win (${avgDolphins} vs. ${avgKoalas}) `);
//     return dolphinsWin;
//   } else if (koalasWin) {
//     console.log(`Koalas Win (${avgKoalas} vs. ${avgDolphins}) `);
//     return koalasWin;
//   } else {
//     console.log("No one win!");
//     return -1;
//   }
// }
// checkWinner(avgDolphins, avgKoalas);

// Lab 17.7.2

const calcTip = (bill) =>
  50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(calcTip(100));

const bills = [125, 555, 44];

console.log(`Bill: ${bills}`);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(`Tip: ${tips}`);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(`Total: bill1(${total[0]}) bill2(${total[1]}) bill3(${total[2]})`);
