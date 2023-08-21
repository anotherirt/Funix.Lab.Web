"use strict";

// Lab 18.1 //

// const myCountry = {
//   country: "VietNam",
//   capital: "Hanoi",
//   language: "Vietnamese",
//   population: 66,
//   neighbours: ["Laos", "Campuchia", "China"],

//   describe: function () {
//     return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbours countries and a capital called ${this.capital}.`;
//   },

//   checkIsland: function () {
//     this.isIsland = this.neighbours.length === 0 ? true : false;
//     return this.isIsland;
//   },
// };

// Lab 18.2 //

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
// );

// console.log(myCountry.population + 2);

// console.log(myCountry["population"] - 2);

// Lab18.3 //

// console.log(myCountry.describe());

// console.log(myCountry.checkIsland());

// Lab 18.4 //

// for (let rep = 1; rep <= 50; rep++) {
//   console.log(`Voter number ${rep} is currently voting`);
// }

// // Lab 18.5 //

// const populations = [1441, 99, 70, 6];

// const percentage2 = [];

// for (let i = 0; i < populations.length; i++) {
//   percentage2.push((populations[i] / 7900) * 100);
// }

// console.log(percentage2);

// Lab 18.6 //

// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// for (let neighbour = listOfNeighbours.length - 1; neighbour >= 0; neighbour--) {
//   for (let rep = listOfNeighbours[neighbour].length - 1; rep >= 0; rep--) {
//     console.log(`Neighbour: ${listOfNeighbours[neighbour][rep]}`);
//   }
// }

// Lab 18.7 //

// const populations = [1441, 99, 70, 6];

// const percentage3 = [];

// let i = 0;
// while (i < populations.length) {
//   percentage3.push((populations[i] / 7900) * 100);
//   i++;
// }

// console.log(percentage3);

// Lab 18.8.1 //
/*
const bmiMark = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    const bmiOfMark = this.mass / (this.height * this.height);
    return bmiOfMark;
  },
};
console.log(bmiMark.calcBMI());

const bmiJohn = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    const bmiOfJohn = this.mass / (this.height * this.height);
    return bmiOfJohn;
  },
};
console.log(bmiJohn.calcBMI());

if (bmiMark.calcBMI() > bmiJohn.calcBMI()) {
  console.log(
    `${bmiMark.fullname}'s BMI (${bmiMark.calcBMI()}) is higher than ${bmiJohn.fullname}'s (${bmiJohn.calcBMI()})!`
  );
} else {
  console.log(
    `${bmiJohn.fullname}'s BMI (${bmiJohn.calcBMI()}) is higher than ${bmiMark.fullname}'s (${bmiMark.calcBMI()})!`
  );
}
*/

// Lab 18.8.2 //

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// const calcTip = (bill) =>
//   50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2;

// for (let amt = 0; amt < bills.length; amt++) {
//   tips.push(calcTip(bills[amt]));
//   totals.push(calcTip(bills[amt]) + bills[amt]);
// }
// console.log(tips);
// console.log(totals);

const arr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let sum = 0;
// for (let rep = 0; rep < arr.length; rep++) {
//   sum = sum + arr[rep];
// }
// const calcAverage = (total) => sum / arr.length;

// console.log(calcAverage(sum));

// function sumArr(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(sumArr(arr));
