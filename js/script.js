// Selecting all the row from each row

const row1Text = document.querySelectorAll(".row-1-text"),
  row2Text = document.querySelectorAll(".row-2-text"),
  row3Text = document.querySelectorAll(".row-3-text"),
  row4Text = document.querySelectorAll(".row-4-text"),
  row5Text = document.querySelectorAll(".row-5-text");

// Selecting row buttons
const rowButton1 = document.querySelector(".button1"),
  rowButton2 = document.querySelector(".button2"),
  rowButton3 = document.querySelector(".button3"),
  rowButton4 = document.querySelector(".button4"),
  rowButton5 = document.querySelector(".button5");
// selecting other buttons like playback surprise reset
const playbackBtn = document.querySelector(".playback"),
  surpriseBtn = document.querySelector(".surprise"),
  resetBtn = document.querySelector(".reset");
//selecting element where We want text that we selected to be display
const displayText = document.querySelector(".displayed-text");

// Making count for each row so that we can reset it with the reset button and navigate through all the text content in each row
let countRow1 = 0,
  countRow2 = 0,
  countRow3 = 0,
  countRow4 = 0,
  countRow5 = 0;

//creating the empty array for getting five random number
let fiveRandomNumber = [];
// This function has been created to update the text ehile clicking th button and also return the count as we have store that for the next click or for displaying the whole sentance.
function displayTextRow(count, rowText, whereToDisplay) {
  // console.log(count);
  if (count === rowText.length) {
    whereToDisplay.innerText = `you have selected the maximum number. So the default selected one is the last value i.e ${rowText[
      count - 1
    ].textContent.trim()} `;

    return count;
  } else {
    whereToDisplay.innerText = rowText[count].textContent.trim();
    count = count + 1;

    return count;
  }
}
//action when row buttons are clicked
/* 
-
-
*/
// button 1
rowButton1.addEventListener("click", (e) => {
  e.preventDefault();

  countRow1 = displayTextRow(countRow1, row1Text, displayText);
});
//button 2
rowButton2.addEventListener("click", (e) => {
  e.preventDefault();

  countRow2 = displayTextRow(countRow2, row2Text, displayText);
});
//button 3
rowButton3.addEventListener("click", (e) => {
  e.preventDefault();

  countRow3 = displayTextRow(countRow3, row3Text, displayText);
});
//button 4
rowButton4.addEventListener("click", (e) => {
  e.preventDefault();

  countRow4 = displayTextRow(countRow4, row4Text, displayText);
});
//button 5
rowButton5.addEventListener("click", (e) => {
  e.preventDefault();

  countRow5 = displayTextRow(countRow5, row5Text, displayText);
});
//clicking the button playback

playbackBtn.addEventListener("click", function () {
  //if you havenot selected the item.
  if (
    countRow1 === 0 ||
    countRow2 === 0 ||
    countRow3 === 0 ||
    countRow4 === 0 ||
    countRow5 === 0
  ) {
    displayText.innerText = `Please choose all the rows or click suprise button to see the complete sentance.`;
    return;
  }
  //countRow is -1 because suppose if you don't click there should be message like you have not clicked and when in the above function (displayTextRow) we have made that if you clicked the row button it will return the increment value but we want to diplay the item that you have chosed recently
  displayText.innerText = `${row1Text[
    countRow1 - 1
  ].innerText.trim()} ${row2Text[countRow2 - 1].innerText.trim()} ${row3Text[
    countRow3 - 1
  ].innerText.trim()} ${row4Text[countRow4 - 1].innerText.trim()} ${row5Text[
    countRow5 - 1
  ].innerText.trim()}.`;
});

//creating for loop to get different number and assigning it into loop so that we can just loop through the array for getting the output
surpriseBtn.addEventListener("click", function () {
  //making five random number clicked as empty array so that whent he button is pressed again it can hold five values
  fiveRandomNumber = [];
  for (let i = 0; i < 5; i++) {
    let randomNumber;

    // selected 0 because in the first row there is 7 items
    if (i === 0) {
      randomNumber = Math.floor(Math.random() * row1Text.length);
      // console.log(randomNumber);
      fiveRandomNumber.push(randomNumber);
    }
    // selected 3 because in the fourth row there is 7 items
    else if (i === 3) {
      randomNumber = Math.floor(Math.random() * row4Text.length);
      // console.log(randomNumber);
      fiveRandomNumber.push(randomNumber);
    } else {
      //selecte row two text in the random number becuse all row 2, 3, 5 has the same number of elements in it so why not
      randomNumber = Math.floor(Math.random() * row2Text.length);
      fiveRandomNumber.push(randomNumber);
    }
  }
  //trim has been use to remove the whitespace
  displayText.innerText = `${row1Text[
    fiveRandomNumber[0]
  ].innerText.trim()} ${row2Text[
    fiveRandomNumber[1]
  ].innerText.trim()} ${row3Text[
    fiveRandomNumber[2]
  ].innerText.trim()} ${row4Text[
    fiveRandomNumber[3]
  ].innerText.trim()} ${row5Text[fiveRandomNumber[4]].innerText.trim()}.`;
});
// when reset button is clicked
resetBtn.addEventListener("click", function () {
  countRow1 = 0;
  countRow2 = 0;
  countRow3 = 0;
  countRow4 = 0;
  countRow5 = 0;
});
