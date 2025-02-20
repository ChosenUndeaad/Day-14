const memory = [75];

const createCells = function (numberOfCells) {
  const numbersSection = document.getElementById("bingo");

  for (let i = 0; i < numberOfCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    const cellValue = document.createElement("h3");
    cellValue.innerText = i + 1;

    cell.appendChild(cellValue);
    numbersSection.appendChild(cell);
  }
};

createCells(76);
