//creating the empty array
let fiveRandomNumber = [];
//creating for loop to get different number and assigning it into loop so that we can just loop through the array for getting the output
for (let i = 0; i < 5; i++) {
  let randomNumber = Math.floor(Math.random() * 5);
  fiveRandomNumber.push(randomNumber);
}
console.log(fiveRandomNumber);
