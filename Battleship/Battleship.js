//Aerial Attack

// In the section below is the object containing all the information of player A.

let playerA = {
  name: 'USA',
  fleet: [
    [null, null, null, null, null, null, null, null, null, null],     //  A[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    [null, null, null, null, null, null, null, null, null, null],     //  B[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    [null, null, null, null, null, null, null, null, null, null],     //  C[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    [null, null, null, null, null, null, null, null, null, null],     //  D[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    [null, null, null, null, null, null, null, null, null, null],     //  E[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    [null, null, null, null, null, null, null, null, null, null],     //  F[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    [null, null, null, null, null, null, null, null, null, null],     //  G[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    [null, null, null, null, null, null, null, null, null, null],     //  H[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    [null, null, null, null, null, null, null, null, null, null],     //  I[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    [null, null, null, null, null, null, null, null, null, null],     //  J[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  ],
  boats: [{ name: 'boatA', position: [], points: 1, hits: 1 },
  ],
  patrolboats: [{ name: 'patrolboatA', position: [], points: 2, hits: 2 },
  ],
  submarines: [{ name: 'submarineA', position: [], points: 3, hits: 3 },
  ],
  battleships: [{ name: 'battleshipA', position: [], points: 4, hits: 4 },
  ],
  aircraftcarriers: [{ name: 'aircraftcarrierA', position: [], points: 5, hits: 5 },
  ],
  points: 0,
  chances: 20
};

// In the section below is the object containing all the information of player B.

let playerB = {
  name: 'Russia',
  fleet: [
    [null, 'boat', null, null, null, null, null, null,'patrol', null],     //  A[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    [null, null, null, null, null, null, null, null, 'patrol', null],     //  B[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    ['submarine', 'submarine', 'submarine', null, null, null, null, null, null, null],     //  C[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    [null, null, null, null, null, null, null, null, null, null],     //  D[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    [null, null, 'battleship', null, null, null, null, null, null, null],     //  E[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    [null, null, 'battleship', null, null, null, null, null, null, null],     //  F[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    [null, null, 'battleship', null, null, null, null, null, null, null],     //  G[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    [null, null, 'battleship', null, null, null, null, null, null, null],     //  H[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    [null, null, null, null, null, 'aircraft', 'aircraft', 'aircraft', 'aircraft', 'aircraft'],     //  I[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    [null, null, null, null, null, null, null, null, null, null],     //  J[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  ],
  boats: [{ name: 'boatB', position: [], points: 1, hits: 1 },
  ],
  patrolboats: [{ name: 'patrolboatB', position: [], points: 2, hits: 2 },
  ],
  submarines: [{ name: 'submarineB', position: [], points: 3, hits: 3 },
  ],
  battleships: [{ name: 'battleshipB', position: [], points: 4, hits: 4 },
  ],
  aircraftcarriers: [{ name: 'aircraftcarrierB', position: [], points: 5, hits: 5 },
  ],
  points: 0,
  chances: 20
};

// In the section below are the functions to store the players' names. //"playername" is the name typed by the user and object is "playerA" or "playerB".                                                    typed and obect will be "playerA or playerB" (CHECKED!!!)

function getName(playername, object) {
  return object.name = playername.toUpperCase();
};

fleetHTML = [
  [null, null, null, null, null, null, null, null, null, null],     //  A[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  [null, null, null, null, null, null, null, null, null, null],     //  B[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  [null, null, null, null, null, null, null, null, null, null],     //  C[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  [null, null, null, null, null, null, null, null, null, null],     //  D[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  [null, null, null, null, null, null, null, null, null, null],     //  E[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  [null, null, null, null, null, null, null, null, null, null],     //  F[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  [null, null, null, null, null, null, null, null, null, null],     //  G[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  [null, null, null, null, null, null, null, null, null, null],     //  H[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  [null, null, null, null, null, null, null, null, null, null],     //  I[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  [null, null, null, null, null, null, null, null, null, null],     //  J[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
];

let table1 = document.createElement('table');
const divCenter = document.getElementById('divCenter');

let buttonPoints = document.getElementById("points");
let buttonChances = document.getElementById("chances");

function printBattleField() {
  table1.innerHTML = '';


  divCenter.appendChild(table1);



  for (let i = 0; i < fleetHTML.length; i += 1) {
    const lineTr = document.createElement('tr');
    table1.appendChild(lineTr);
    for (let j = 0; j < fleetHTML[i].length; j += 1) {
      const lineTd = document.createElement("td");
      const button = document.createElement("button")
      let text
      button.addEventListener('click', (e) => checkHit(e));
      button.setAttribute('id', `${i}${j}`);
      if (fleetHTML[i][j] === null) {
        button.setAttribute("class", "blue");
        text = document.createTextNode('');
      }
      if (fleetHTML[i][j] === 'miss') {
        button.setAttribute("class", "white");
        text = document.createTextNode('MISS');
        button.disabled = true;
      }
      if (fleetHTML[i][j] === 'sunk') {
        const lineTd = document.createElement("td");
        button.setAttribute("class", "black");
        text = document.createTextNode('SUNK');
        button.disabled = true;
      }
      if (fleetHTML[i][j] === 'hit') {
        const lineTd = document.createElement("td");
        button.setAttribute("class", "red");
        text = document.createTextNode('HIT');
        button.disabled = true;
      }
      button.appendChild(text)
      lineTd.appendChild(button);
      lineTr.appendChild(lineTd);
    }
  };
}

function shoot(line, column) {
  if (playerB.fleet[line][column] === null) {
    fleetHTML[line][column] = 'miss';
  } if (playerB.fleet[line][column] === 'miss') {
    fleetHTML[line][column] = 'miss';
  } if (playerB.fleet[line][column] === 'sunk') {
    fleetHTML[line][column] = 'sunk';
  } if (playerB.fleet[line][column] === 'boat' || playerB.fleet[line][column] === 'patrol' || playerB.fleet[line][column] === 'submarine' || playerB.fleet[line][column] === 'battleship' || playerB.fleet[line][column] === 'aircraft') {
    fleetHTML[line][column] = 'hit';
  }
  printBattleField()
};
printBattleField()

// function to register players shots:
function getShoot(line, column) {
  if (playerA.chances > 0) {
    playerA.chances -= 1; 
    } if (playerA.points > 29) {
      youWon();
    } if (playerA.chances === 0) {
      gameOver()
    }

  let msg = "You have hit an enemy's vessel!";
  switch (playerB.fleet[line][column]) {
    case 'boat':
      playerB.boats[0].hits === 0;
      playerA.points += 2;
      playerB.fleet[line][column] = 'sunk';
      fleetHTML[line][column] = 'sunk';
      msg = "You have destroyed the enemy's boat!"
      break;
    case 'patrol':
      playerA.points += 1;
      playerB.patrolboats[0].hits -= 1;
      playerB.fleet[line][column] = 'hitPatrol';
      fleetHTML[line][column] = 'hit';
      console.log('fleet', playerB.fleet);
      if (playerB.patrolboats[0].hits === 0) {
        playerA.points += playerB.patrolboats[0].points;
        playerB.fleet.forEach(function (row, i) {
          row.forEach((e, j) => {
            if (e === 'hitPatrol') {
              playerB.fleet[i][j] = 'sunk'
              fleetHTML[i][j] = 'sunk';
            }
          })
        });
        fleetHTML[line][column] = 'sunk';
        msg = "You have destroyed the enemy's patrol boat!"
      }
      break;
    case 'submarine':
      playerA.points += 1;
      playerB.submarines[0].hits -= 1;
      playerB.fleet[line][column] = 'hitSubmarine';
      fleetHTML[line][column] = 'hit';
      if (playerB.submarines[0].hits === 0) {
        playerA.points += playerB.submarines[0].points;
        playerB.fleet.forEach(function (row, i) {
          row.forEach((e, j) => {
            if (e === 'hitSubmarine') {
              playerB.fleet[i][j] = 'sunk'
              fleetHTML[i][j] = 'sunk';
            }
          })
        });
        fleetHTML[line][column] = 'sunk';
        msg = "You have destroyed the enemy's submarine!"
      }
      break;
    case 'battleship':
      playerA.points += 1;
      playerB.battleships[0].hits -= 1;
      playerB.fleet[line][column] = 'hitBattle';
      fleetHTML[line][column] = 'hit';
      if (playerB.battleships[0].hits === 0) {
        playerA.points += playerB.battleships[0].points;
        playerB.fleet.forEach(function (row, i) {
          row.forEach((e, j) => {
            if (e === 'hitBattle') {
              playerB.fleet[i][j] = 'sunk'
              fleetHTML[i][j] = 'sunk';
            }
          })
        });
        fleetHTML[line][column] = 'sunk';
        msg = "You have destroyed the enemy's battleship!"
      }
      break;
    case 'aircraft':
      playerA.points += 1;
      playerB.aircraftcarriers[0].hits -= 1;
      playerB.fleet[line][column] = 'hitAircraft';
      fleetHTML[line][column] = 'hit';
      if (playerB.aircraftcarriers[0].hits === 0) {
        playerA.points += playerB.aircraftcarriers[0].points;
        playerB.fleet.forEach(function (row, i) {
          row.forEach((e, j) => {
            if (e === 'hitAircraft') {
              playerB.fleet[i][j] = 'sunk'
              fleetHTML[i][j] = 'sunk';
            }
          })
        });
        fleetHTML[line][column] = 'sunk';
        msg = "You have destroyed the enemy's aircraft carrier!"
      }
      break;
    default:
      playerB.fleet[line][column] = 'miss';
      fleetHTML[line][column] = 'miss';
      msg = 'Missed shot!'
      break;
  }
  return msg;
};

const checkHit = (e) => {
const id = e.target.id;
const arrId = id.split('');
const x = parseInt(arrId[0]);
const y = parseInt(arrId[1]);;
getShoot(x, y);
shoot(x, y);
buttonPoints.innerHTML = `${playerA.points}`;
buttonChances.innerHTML = `${playerA.chances}`;
};

function gameOver () {
  alert('GAME OVER!')
};

function youWon () {
  alert('YOU WON!!!')

};
