const memory = [];

const createCells = function (numberOfCells) {
  const numbersSection = document.getElementById("bingo");

  for (let i = 0; i < numberOfCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    const cellValue = document.createElement("h3");
    cellValue.innerText = i + 1;

    cell.appendChild(cellValue);
    numbersSection.appendChild(cell);

    cell.appendChild(cellValue);
    cell.id = `cell-${i + 1}`;
  }
};

// random number

function genRandomNumber() {
  let randomNumber;

  if (memory.length >= 76) return "All numbers drawn!";
  else {
    randomNumber = Math.floor(Math.random() * 76) + 1;
  }
  while (memory.includes(randomNumber));

  memory.push(randomNumber);
  return randomNumber;
}

let showNumber = function () {
  const extractedNumber = document.getElementById("extractedNumber");
  const randomNumber = genRandomNumber();

  extractedNumber.innerText = randomNumber;

  if (randomNumber !== "All numbers drawn!") {
    const drawnCell = document.getElementById(`cell-${randomNumber}`);
    if (drawnCell) {
      drawnCell.classList.add("cell-selected");
    }
  }
};

document.getElementById("extractButton").addEventListener("click", showNumber);

createCells(76);
