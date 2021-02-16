let generate_random_number = () => Math.floor(Math.random() * 10) + 1;

// console.log(random_number);

let GuessCount = 5;
let currentCount = 0;

// while (GuessCount > currentCount) {
//   currentCount++;
//   let user_input = parseInt(prompt("Enter A Number"));
//   if (random_number === user_input) {
//     console.log("You guess the correct Number!");
//     break;
//   } else {
//     console.log("Wrong Number! Guess Left " + (GuessCount - currentCount));
//   }
// }

// if (currentCount > GuessCount) {
//   console.log("Game Over!");
// }

// Ai will guess

let attempts = 1000;
let triesCount = [];

for (let a = 0; a < attempts; a++) {
  let random_number = generate_random_number();

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let AiGussedNumber = (number) => {
    return Math.floor(Math.random() * number);
  };

  let randomAiIndex = AiGussedNumber(numbers.length);

  // console.log(numbers[randomAiIndex]);
  let tries = 0;

  while (numbers.length > 0) {
    tries++;
    console.log(numbers[randomAiIndex] + " " + randomAiIndex);
    if (numbers[randomAiIndex] !== random_number) {
      numbers.splice(randomAiIndex, 1);
      randomAiIndex = AiGussedNumber(numbers.length);
    } else {
      let score = tries;
      console.log("Random Number is: " + random_number);
      console.log("Ai Guessed " + numbers[randomAiIndex]);
      console.log(score);

      triesCount.push(score);
      break;
    }
  }
}
// triesCount = [1, 2, 3, 4, 5];

const sum = triesCount.reduce((q, r) => q + r);

let average = sum / triesCount.length;

console.log("My Bot Tries " + triesCount.length + "times");
console.log("Average Tries " + Math.ceil(average));

// console.log(triesCount);

// let data = [1, 2, 3, 4, 5];

// let sum = data.reduce((p, c, i) => p + c);

// let sum = 0;

// data.forEach(v => {
//     sum += v;
// })
