const memory = [];

//creo le caselle con i numeri

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

//genero un numero randomico contenuto tra 1 e 76

function genRandomNumber() {
  //eseguo un controllo dei numeri di modo che non superino il 76
  if (memory.length >= 76) return null;

  //genero il numero randomico facendo modo che non superi il numero
  //assegnato alla memoria
  let randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * 76) + 1;
  } while (memory.includes(randomNumber));

  memory.push(randomNumber);
  return randomNumber;
}

//appendo il numero randomico nel suo contenitore così da
//renderlo visibile
let showNumber = function () {
  const extractedNumber = document.getElementById("extractedNumber");
  const randomNumber = genRandomNumber();

  //messaggio in caso dell'estrazione di tutti i numeri
  if (randomNumber === null) {
    extractedNumber.innerText = "All numbers have been drawn!";
    return;
  }

  extractedNumber.innerText = randomNumber;

  if (randomNumber !== "All numbers drawn!") {
    const drawnCell = document.getElementById(`cell-${randomNumber}`);
    if (drawnCell) {
      drawnCell.classList.add("cell-selected");
    }
  }
};

//rendo funzionante il pulsante
document.getElementById("extractButton").addEventListener("click", showNumber);

//creo le celle
createCells(76);
