let massOfMark = 95;
heightOfMark = 1.88;
massOfJohn = 85;
heightOfJohn = 1.76;
markHigherBMI = true;

const BMIofMark = massOfMark / (heightOfMark * heightOfMark);
const BMIofJohn = massOfJohn / (heightOfJohn * heightOfJohn);

// if (BMIofMark > BMIofJohn) {
//   console.log(markHigherBMI);
// } else {
//   console.log(markHigherBMI == false);
// }

if (BMIofMark > BMIofJohn) {
  console.log(
    `Mark's BMI(${Math.trunc(BMIofMark)}) is higher than John's(${Math.trunc(
      BMIofJohn
    )})!`
  );
} else {
  console.log(
    `John's BMI(${Math.trunc(BMIofJohn)}) is higher than Mark's(${Math.trunc(
      BMIofMark
    )})!`
  );
}
