//Mozda bi bolje bilo da se razdvoji ovo na fieldove za igraca 1 i igraca 2
//Lakse ce bit sto se tice postavljanja redosljeda definitivno
const fields = [
  {
    field: document.getElementById("1_1"),
    rosette: false,
    id: document.getElementById("1_1").id,
  },
  {
    field: document.getElementById("1_2"),
    rosette: false,
    id: document.getElementById("1_2").id,
  },
  {
    field: document.getElementById("1_3"),
    rosette: false,
    id: document.getElementById("1_3").id,
  },
  {
    field: document.getElementById("1_4_rosete"),
    rosette: true,
    id: document.getElementById("1_4_rosete").id,
  },
  {
    field: document.getElementById("2_1"),
    rosette: false,
    id: document.getElementById("2_1").id,
  },
  {
    field: document.getElementById("2_2"),
    rosette: false,
    id: document.getElementById("2_2").id,
  },
  {
    field: document.getElementById("2_3"),
    rosette: false,
    id: document.getElementById("2_3").id,
  },
  {
    field: document.getElementById("2_4_rosete"),
    rosette: true,
    id: document.getElementById("2_4_rosete").id,
  },
  {
    field: document.getElementById("2_5"),
    rosette: false,
    id: document.getElementById("2_5").id,
  },
  {
    field: document.getElementById("2_6"),
    rosette: false,
    id: document.getElementById("2_6").id,
  },
  {
    field: document.getElementById("2_7"),
    rosette: false,
    id: document.getElementById("2_7").id,
  },
  {
    field: document.getElementById("2_8"),
    rosette: false,
    id: document.getElementById("2_8").id,
  },
  {
    field: document.getElementById("1_6_rosete"),
    rosette: true,
    id: document.getElementById("1_6_rosete").id,
  },
  {
    field: document.getElementById("1_5"),
    rosette: false,
    id: document.getElementById("1_5").id,
  },

  {
    field: document.getElementById("blank_1_2"),
    rosette: true,
    id: document.getElementById("blank_1_2").id,
  },
];

const fields_p2 = [
  {
    field: document.getElementById("3_1"),
    rosette: false,
    id: document.getElementById("3_1").id,
  },
  {
    field: document.getElementById("3_2"),
    rosette: false,
    id: document.getElementById("3_2").id,
  },
  {
    field: document.getElementById("3_3"),
    rosette: false,
    id: document.getElementById("3_3").id,
  },
  {
    field: document.getElementById("3_4_rosete"),
    rosette: true,
    id: document.getElementById("3_4_rosete").id,
  },
  {
    field: document.getElementById("2_1"),
    rosette: false,
    id: document.getElementById("2_1").id,
  },
  {
    field: document.getElementById("2_2"),
    rosette: false,
    id: document.getElementById("2_2").id,
  },
  {
    field: document.getElementById("2_3"),
    rosette: false,
    id: document.getElementById("2_3").id,
  },
  {
    field: document.getElementById("2_4_rosete"),
    rosette: true,
    id: document.getElementById("2_4_rosete").id,
  },
  {
    field: document.getElementById("2_5"),
    rosette: false,
    id: document.getElementById("2_5").id,
  },
  {
    field: document.getElementById("2_6"),
    rosette: false,
    id: document.getElementById("2_6").id,
  },
  {
    field: document.getElementById("2_7"),
    rosette: false,
    id: document.getElementById("2_7").id,
  },
  {
    field: document.getElementById("2_8"),
    rosette: false,
    id: document.getElementById("2_8").id,
  },
  {
    field: document.getElementById("3_6_rosete"),
    rosette: true,
    id: document.getElementById("3_6_rosete").id,
  },
  {
    field: document.getElementById("3_5"),
    rosette: false,
    id: document.getElementById("3_5").id,
  },

  {
    field: document.getElementById("blank_3_2"),
    rosette: true,
    id: document.getElementById("blank_3_2").id,
  },
];

//Player 1 setup ovdje, svi tokeni
const beginingField_p1 = document.getElementById("blank_1_1");
const p1_tokens = [
  {
    token: document.createElement("button"),
    isFinished: false,
    isClicked: false,
  },
  {
    token: document.createElement("button"),
    isFinished: false,
    isClicked: false,
  },
  {
    token: document.createElement("button"),
    isFinished: false,
    isClicked: false,
  },
  {
    token: document.createElement("button"),
    isFinished: false,
    isClicked: false,
  },
  {
    token: document.createElement("button"),
    isFinished: false,
    isClicked: false,
  },
  {
    token: document.createElement("button"),
    isFinished: false,
    isClicked: false,
  },
  {
    token: document.createElement("button"),
    isFinished: false,
    isClicked: false,
  },
];
for (let i = 0; i < p1_tokens.length; i++) {
  p1_tokens[i].token.setAttribute("id", `p1_${i}`);
  p1_tokens[i].token.style.height = "50px";
  p1_tokens[i].token.style.width = "50px";
  p1_tokens[i].token.style.borderRadius = "50%";
  p1_tokens[i].token.style.backgroundColor = "black";
  p1_tokens[i].token.style.cursor = "pointer";
  p1_tokens[i].token.style.color = "white";
  p1_tokens[i].token.innerHTML = `p1_${i}`;

  beginingField_p1.appendChild(p1_tokens[i].token);
}

//Player 2 setup ovdje, svi tokeni
const beginingField_p2 = document.getElementById("blank_3_1");
const p2_tokens = [
  {
    token: document.createElement("button"),
    isFinished: false,
    isClicked: false,
  },
  {
    token: document.createElement("button"),
    isFinished: false,
    isClicked: false,
  },
  {
    token: document.createElement("button"),
    isFinished: false,
    isClicked: false,
  },
  {
    token: document.createElement("button"),
    isFinished: false,
    isClicked: false,
  },
  {
    token: document.createElement("button"),
    isFinished: false,
    isClicked: false,
  },
  {
    token: document.createElement("button"),
    isFinished: false,
    isClicked: false,
  },
  {
    token: document.createElement("button"),
    isFinished: false,
    isClicked: false,
  },
];
for (let i = 0; i < p2_tokens.length; i++) {
  p2_tokens[i].token.setAttribute("id", `p2_${i}`);
  p2_tokens[i].token.style.height = "50px";
  p2_tokens[i].token.style.width = "50px";
  p2_tokens[i].token.style.borderRadius = "50%";
  p2_tokens[i].token.style.backgroundColor = "white";
  p2_tokens[i].token.style.cursor = "pointer";
  p2_tokens[i].token.style.color = "black";
  p2_tokens[i].token.innerHTML = `p2_${i}`;

  beginingField_p2.appendChild(p2_tokens[i].token);
}

//Takodje nadji nacin da zapravo mozes da imas tacno 7 ovih cuda i da mogu da izlaze iz kucice (SAMO JOS DA IZLAZE IZ KUCICE SVI)

//Ovdje DOM elementi
const roll_btn = document.getElementById("roll");
const roll_display = document.getElementById("rolled_no");
const whoseTurn = document.getElementById("whoseTurn");

//Ovdje vecina varijabli ide
let isP1sTurn = true;

isP1sTurn
  ? (whoseTurn.innerHTML = "black's")
  : (whoseTurn.innerHTML = "white's");

let rolledNumber = 0;

//Kad se roluje broj, samo moze da se ide do polja na koji pokazuje
//Samim tim, for petlja ne treba, jer ne moze da se krece na vise od jednog polja po rolu
//Medjutim, ako ima vise ovih cuda van "kucice" onda mora da se vidi na kojem polju se nalazi svaki
//Kad se utvrdi koja polja sadrze ovaj kruzic, onda se stavljaju kao pocetne pozicije (recimo ubacuju se u neki niz)
//i onda se za svaku od tih pozicija utvrdjuje koje je sljedece validno polje (znaci da nije zauzeto drugim svojim)

//Ako se nalazi na pocetku, sljedecu poziciju slobodno uzmi kao fileds[rolovanBroj]
//Ako je vec na nekom polju, nadji mu indeks (po IDju vjerovatno), i samo dodaj jos rolovan broj na to

//ZA IGRACA 1
for (let [i, t] of p1_tokens.entries()) {
  t.token.addEventListener("click", () => {
    //console.log(t.token.id);

    t.isClicked = true;
    //console.log(t.isClicked);

    fields[i].field.style.backgroundColor = "#efefef";
    colorAvailableMove(beginingField_p1, t, fields);
  });
}

//ZA IGRACA 2
for (let [i, t] of p2_tokens.entries()) {
  t.token.addEventListener("click", () => {
    //console.log(t.token.id);

    t.isClicked = true;
    //console.log(t.isClicked);

    colorAvailableMove(beginingField_p2, t, fields_p2);
  });
}

//DUGME ZA ROLL (ovdje se generalno zovu funkcije za mrdanje itd itd)
roll_btn.addEventListener("click", () => {
  isP1sTurn
    ? (whoseTurn.innerHTML = "black's")
    : (whoseTurn.innerHTML = "white's");

  rolledNumber = Math.floor(Math.random() * 5);
  roll_display.innerHTML = rolledNumber;

  if (rolledNumber === 0) {
    isP1sTurn ? (isP1sTurn = false) : (isP1sTurn = true);
    return;
  }

  if (isP1sTurn) {
    for (let t of p1_tokens) {
      const index = beginingField_p1.contains(t.token)
        ? rolledNumber - 1
        : findTokenOnTileIndex(fields, t.token) + rolledNumber;

      move(rolledNumber, fields, t, beginingField_p1, index);
      calculateOddOfTaking(fields, t.token, p2_tokens, index);

      isP1sTurn = false;
      t.isClicked = false;
    }
  } else {
    for (let t of p2_tokens) {
      const index = beginingField_p2.contains(t.token)
        ? rolledNumber - 1
        : findTokenOnTileIndex(fields_p2, t.token) + rolledNumber;

      move(rolledNumber, fields_p2, t, beginingField_p2, index);
      calculateOddOfTaking(fields_p2, t.token, p1_tokens, index);

      isP1sTurn = true;
      t.isClicked = false;
    }
  }
});

//FUNKCIJA ZA MRDANJE JELTE (prilagodi je za vise ovih tokena)
function move(rolledNumber, fields, t, beginningField, index) {
  let previous_index = 0;

  if (index >= fields.length) {
    return;
  }

  //takeCheck(fields, t.token, index, beginingField_p2);

  // console.log("FIELDS OF INDEX IN MOVE FUNCTION HERE <--------------");
  // console.log(fields[index]);

  fields[index].field.addEventListener("click", (e) => {
    if (t.isClicked) {
      fields[index].field.style.backgroundColor = "#efefef";
      t.isClicked = false;
      fields[index].field.disabled = true;
      beginningField.contains(t.token)
        ? beginningField.removeChild(t.token)
        : null;
      fields[index].field.appendChild(t.token);
      previous_index = index - rolledNumber;
      previous_index !== -1
        ? (fields[previous_index].field.disabled = false)
        : null;
      //console.log("PREV INDEX: " + previous_index);

      //Je li rozeta
      if (fields[index].rosette) {
        console.log("Jeste rozeta");
        if (isP1sTurn) {
          isP1sTurn = false;
        } else {
          isP1sTurn = true;
        }
      }

      for (let i = 0; i < fields.length; i++) {
        if (i !== fields.length - 1) {
          fields[i].field.style.backgroundColor = "#efefef";
        }
      }
    }
  });
}

//Funkcija za uzimanje kruzica ce gledat ciji je potez i ako je suprotan kruzic na sljedecem polju onda ga pojede
//Radi u svakom slucaju, ne mora se prilagodjavat za vise
function findTokenOnTileIndex(fields, token) {
  for (let i = 0; i < fields.length; i++) {
    if (fields[i].field.contains(token)) {
      return i;
    }
  }
}

function findTokenOnTileId(fields, token) {
  for (let i = 0; i < fields.length; i++) {
    if (fields[i].field.contains(token)) {
      return fields[i].field.getElementsByTagName("*")[0]?.id;
    }
  }
}

function colorAvailableMove(beginningField, t, fields) {
  const index = beginningField.contains(t.token)
    ? rolledNumber - 1
    : findTokenOnTileIndex(fields, t.token) + rolledNumber;

  const tokenOnFieldId = fields[index].field.getElementsByTagName("*")[0]?.id;
  // console.log("COLOR AVAILABLE MOVE FUNCTION");
  // console.log("INDEX: " + index);
  // console.log("TOKEN ON FIELD ID: " + tokenOnFieldId);
  // console.log(
  //   "Sadrzi li token polje: " + fields[index].field.contains(t.token)
  // );
  // console.log("Polje: ");
  // console.log(fields[index].field);

  // console.log("Token: ");
  // console.log(t.token);
  if (fields[index].field.contains(t.token)) {
    console.log("Ima token na ovome");
  }

  fields[index].field.style.backgroundColor = "green";
}

//Ovo pogledaj jos jedno 3, 4 puta
function takeCheck(fields, targetToken, index, beginningField) {
  const tokenOnFieldId = findTokenOnTileId(fields, targetToken);
  console.log("TAKE CHECK FUNCTION");
  console.log(
    "Trazeni token id: " +
      targetToken.id +
      "\nIndex: " +
      index +
      "\nSadrzi li neki token: " +
      fields[index].field.contains(targetToken) +
      "\nId tokena na polju: " +
      tokenOnFieldId
  );

  if (
    fields[index].field.contains(targetToken)
    //tokenOnFieldId === targetToken.id
  ) {
    console.log("POJEO");
    beginningField.appendChild(targetToken);
  }
}

//Utvrdi gdje je trenutni token ✓
//Loopuj kroz sva polja ✓
//Vidi da li postoji token ciji ID sadrzi p${brojSuprotnogIgraca} ✓
//Uzmi indeks tog tokena ✓
//Vidi koliko bi trebalo da se roluje da bi trenutni token pojeo ovog drugog ✓
//Izracunaj vjerovatnocu ✓
//Ispisi je nedje random ✓

//Od pocetnog polja pa do izlazka na nesigurno ces uvijek imat vjerovatnocu da se rolluje i padne na rozetu
//To znaci da ce se rolovat opet pa bi trebao da saberes vjerovatnoce dvije

//Vidi za rozetu sad, sa nule treba 4 do prve rozete, i onda odatle ? do ovog drugog, to sredi
//Imas jos jednu rozetu ova sto je na indeksu 7
//Znaci ako je tokenIndex < indexRozete onda uzmi vjerovatnocu da se dobije ono sto vodi do rozete pa onda oduzmi taj novodobijeni indeks od ovog gdje je drugi token
//i = pozicija target tokena
//tokenIndex = pozicija trenutnog tokena jelte
//Ako target token (tj. index i) nije presao jednu rozetu, ne gledaj je
//Znaci, ako je presao prvu ali nije drugu, samo gledaj vjerovatnocu da tokne koji ga juri stane na prvu rozetu, pa onda dobije broj do njega
//Ovo naravno vazi i pored regularne sanse da ga uzme
//Samim tim bi trebao da saberem sansu za rozetu sa sansom bez rozete
function calculateOddOfTaking(fields, takerToken, targetTokenArray, index) {
  const _0probability = 1 / 16;
  const _1probability = 4 / 16;
  const _2probability = 6 / 16;
  const _3probability = 4 / 16;
  const _4probability = 1 / 16;

  const rosetteIndex_1 = 3;
  const rosetteIndex_2 = 7;

  const tokenIndex =
    typeof findTokenOnTileIndex(fields, takerToken) == "undefined"
      ? -1
      : findTokenOnTileIndex(fields, takerToken);
  const tokenOnFieldId = findTokenOnTileId(fields, takerToken);

  const targetTokenIndexArray = [];

  for (let i = 0; i < targetTokenArray.length; i++) {
    const targetTokenIndex = findTokenOnTileIndex(
      fields,
      targetTokenArray[i].token
    );

    if (typeof targetTokenIndex !== "undefined") {
      targetTokenIndexArray.push(targetTokenIndex);
    }
  }

  for (let i of targetTokenIndexArray) {
    console.log("Target token index: " + i);
    if (tokenIndex > i) {
      return;
    }
    const valueToTake = i - tokenIndex;
    let probabilityToTake = 0;
    switch (valueToTake) {
      case 0:
        probabilityToTake = _0probability;
        break;
      case 1:
        probabilityToTake = _1probability;
        break;
      case 2:
        probabilityToTake = _2probability;
        break;
      case 3:
        probabilityToTake = _3probability;
        break;
      case 4:
        probabilityToTake = _4probability;
        break;

      default:
        {
          if (i > rosetteIndex_1 && i < rosetteIndex_2) {
            if (tokenIndex < rosetteIndex_1) {
              const distanceToRosette = rosetteIndex_1 - tokenIndex;
              const probabilityToRosette = probabilities(distanceToRosette);
              console.log("Distance to rosette: " + distanceToRosette);
              console.log("Probability to rosette: " + probabilityToRosette);

              const distanceFromRosetteToTarget = i - rosetteIndex_1;
              const probabilityFromRosetteToTarget = probabilities(
                distanceFromRosetteToTarget
              );

              console.log(
                "Distance from rosette to target: " +
                  distanceFromRosetteToTarget
              );
              console.log(
                "Distance from rosette to target: " +
                  probabilityFromRosetteToTarget
              );

              console.log(
                "Probability to take: " +
                  probabilityToRosette * probabilityFromRosetteToTarget
              );
            }
          }
        }

        //Ovdje u else if-u stavi slucaj kad je presao drugu rozetu
        //Znaci mora da dobije 2 cetvorke i onda koliko god do samog tokena
        break;
    }
    console.log("Value needeed to take: " + valueToTake);
    console.log("Probability of taking was: " + probabilityToTake * 100 + "%");
  }

  console.log("Index: " + index);
  console.log("Token id: " + tokenOnFieldId);
  console.log("Token index: " + tokenIndex);
  console.log(targetTokenIndexArray);
}

function probabilities(value) {
  const _1probability = 4 / 16;
  const _2probability = 6 / 16;
  const _3probability = 4 / 16;
  const _4probability = 1 / 16;
  switch (value) {
    case 1:
      return _1probability;
    case 2:
      return _2probability;
    case 3:
      return _3probability;
    case 4:
      return _4probability;
  }
}
