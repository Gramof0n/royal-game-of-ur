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
    rosette: false,
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
    rosette: false,
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

//Takodje nadji nacin da zapravo mozes da imas tacno 7 ovih cuda i da mogu da izlaze iz kucice (SAMO JOS DA IZLAZE IZ KUCICE SVI (GOTOVO I OVO))

//Ovdje DOM elementi
const roll_btn = document.getElementById("roll");
const roll_display = document.getElementById("rolled_no");
const whoseTurn = document.getElementById("whoseTurn");
const calcButton = document.getElementById("calculate_probability");
const probabilityDisplay = document.getElementById("probability_display");

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
//OVO GORE JE SAD GENERALNO GOTOVO

//Ofarbaj sve u difolt kad se klikne neki drugi i stavi tom proslom kliknutom isClicked na false
//Pamti prethodnog van petlje i trpaj ga u neku varijablu

//ZA IGRACA 1
for (let [i, t] of p1_tokens.entries()) {
  t.token.addEventListener("click", () => {
    clearGreen(fields);
    for (let other of p1_tokens) {
      if (other != t) {
        other.isClicked = false;
      }
    }

    for (let oppponent of p2_tokens) {
      oppponent.token.disabled = true;
    }

    t.isClicked = true;
    console.log(t);
    colorAvailableMove(beginingField_p1, t, fields);
  });
}

//ZA IGRACA 2
for (let [i, t] of p2_tokens.entries()) {
  t.token.addEventListener("click", () => {
    clearGreen(fields_p2);
    for (let other of p2_tokens) {
      if (other != t) {
        other.isClicked = false;
      }
    }

    t.isClicked = true;

    colorAvailableMove(beginingField_p2, t, fields_p2);
  });
}

//DUGME ZA ROLL (ovdje se generalno zovu funkcije za mrdanje itd itd)
function roll() {
  roll_btn.addEventListener("click", async () => {
    roll_display.innerHTML = "";
    isP1sTurn
      ? (whoseTurn.innerHTML = "black's")
      : (whoseTurn.innerHTML = "white's");

    rolledNumber = Math.floor(Math.random() * 5);
    roll_display.innerHTML = rolledNumber;

    if (rolledNumber === 0) {
      isP1sTurn ? (isP1sTurn = false) : (isP1sTurn = true);
      probabilityDisplay.innerHTML = "";
      return;
    }

    // if (isP1sTurn) {
    for (let t of p1_tokens) {
      t.token.disabled = false;
      clearGreen(fields_p2);
      const index = beginingField_p1.contains(t.token)
        ? rolledNumber - 1
        : findTokenOnTileIndex(fields, t.token) + rolledNumber;

      move(
        rolledNumber,
        fields,
        t,
        beginingField_p1,
        index,
        p2_tokens,
        beginingField_p2,
        p1_tokens
      );

      if (index >= fields.length) {
        console.log("Presisalo  ");
        return;
      }
      takeCheck(fields, p2_tokens, index);

      //isP1sTurn = false;
      t.isClicked = false;
    }
    //}
    // else {
    //   for (let t of p2_tokens) {
    //     t.token.disabled = false;
    //     clearGreen(fields);
    //     const index = beginingField_p2.contains(t.token)
    //       ? rolledNumber - 1
    //       : findTokenOnTileIndex(fields_p2, t.token) + rolledNumber;

    //     move(
    //       rolledNumber,
    //       fields_p2,
    //       t,
    //       beginingField_p2,
    //       index,
    //       p1_tokens,
    //       beginingField_p1,
    //       p2_tokens
    //     );

    //     if (index >= fields_p2.length) {
    //       console.log("Presisalo  ");
    //       return;
    //     }
    //     takeCheck(fields, p1_tokens, index);

    //     isP1sTurn = true;
    //     t.isClicked = false;
    //   }
    // }
  });
}
//Dugme za racunanje vjerovatnoce
calcButton.addEventListener("click", () => {
  if (isP1sTurn) {
    calculateOddOfTaking(fields, p1_tokens, p2_tokens);
  } else {
    calculateOddOfTaking(fields_p2, p2_tokens, p1_tokens);
  }
});

//FUNKCIJA ZA MRDANJE JELTE (prilagodi je za vise ovih tokena)
function move(
  rolledNumber,
  fields,
  t,
  beginningField,
  index,
  tokensToTake,
  opponentBeginningField
) {
  try {
    let previous_index = 0;

    if (index >= fields.length) {
      return;
    }

    fields[index].field.addEventListener("click", (e) => {
      console.log(t);
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

        //Vidi da popravis to sto se disableuje kad dodje do kraja
        //Sigurno je zato sto presisa indeks pa ga odma izbaci i ne dodje ovdje da setuje prethodni uopste
        //Popravljeno lmao

        //Je li rozeta
        if (fields[index].rosette) {
          console.log("Jeste rozeta");
          if (isP1sTurn) {
            whoseTurn.innerHTML = "white's";
            isP1sTurn = false;
          } else {
            whoseTurn.innerHTML = "black's";
            isP1sTurn = true;
          }
        }

        //Pozderi protivnika
        const [token, isTaken] = takeCheck(fields, tokensToTake, index);
        if (isTaken) {
          opponentBeginningField.appendChild(token);
        }

        clearGreen(fields);
        isP1sTurn
          ? (whoseTurn.innerHTML = "black's")
          : (whoseTurn.innerHTML = "white's");

        roll_display.innerHTML = "";
        probabilityDisplay.innerHTML = "";

        isP1sTurn = !isP1sTurn;
      }
    });
  } catch (error) {
    reject(error);
    console.error(error);
  }
}

//Funkcija za uzimanje kruzica ce gledat ciji je potez i ako je suprotan kruzic na sljedecem polju onda ga pojede <--sta?
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

function clearGreen(fields) {
  for (let i = 0; i < fields.length; i++) {
    if (i !== fields.length - 1) {
      fields[i].field.style.backgroundColor = "#efefef";
    }
  }
}

function clearDisabled(fields) {
  for (let i = 0; i < fields.length; i++) {
    if (i !== fields.length - 1) {
      fields[i].field.disabled = false;
    }
  }
}

function colorAvailableMove(beginningField, t, fields) {
  try {
    const index = beginningField.contains(t.token)
      ? rolledNumber - 1
      : findTokenOnTileIndex(fields, t.token) + rolledNumber;

    if (fields[index].field.contains(t.token)) {
      console.log("Ima token na ovome");
    }

    fields[index].field.style.backgroundColor = "green";
  } catch (error) {}
}

//Ovo pogledaj jos jedno 3, 4 puta
function takeCheck(fields, tokensToTake, index) {
  for (let t of tokensToTake) {
    if (fields[index].field.contains(t.token)) {
      console.log(t.token.id);
      fields[index].field.disabled = false;
      return [t.token, true];
    }
  }
  return [null, false];
}

//Gledaj poziciju relativnu na token
//Ovo gleda samu globalnu da kazem
function occupiedCheck(fields, t, index, teammates) {
  const tokenIndex =
    typeof findTokenOnTileIndex(fields, t) == "undefined"
      ? -1
      : findTokenOnTileIndex(fields, t);

  for (let other of teammates) {
    if (other != t) {
      if (fields[tokenIndex + rolledNumber].field.contains(other.token)) {
        return true;
      }
    }
  }

  return false;
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

//2497,42 <--Mau broj

//OVA FUNKCIJA NE VALJA NISTA STO SE OPTIMIZACIJE TICE ALI KOGA BRIGA LMAO (popravi ako se bude bilo vremena)
function calculateOddOfTaking(fields, takerTokenArray, targetTokenArray) {
  const _1probability = 4 / 16;
  const _2probability = 6 / 16;
  const _3probability = 4 / 16;
  const _4probability = 1 / 16;

  const rosetteIndex_1 = 3;
  const rosetteIndex_2 = 7;

  for (let t of takerTokenArray) {
    let rosetteProbability = 0;
    let valueToTake = 0;
    let probabilityToTake = 0;
    const tokenIndex =
      typeof findTokenOnTileIndex(fields, t.token) == "undefined"
        ? -1
        : findTokenOnTileIndex(fields, t.token);
    const tokenOnFieldId = findTokenOnTileId(fields, t.token);

    const targetTokenIndexArray = [];
    const targetTokenIDArray = [];

    for (let i = 0; i < targetTokenArray.length; i++) {
      const targetTokenIndex = findTokenOnTileIndex(
        fields,
        targetTokenArray[i].token
      );

      if (typeof targetTokenIndex !== "undefined") {
        targetTokenIndexArray.push(targetTokenIndex);
        targetTokenIDArray.push(
          findTokenOnTileId(fields, targetTokenArray[i].token)
        );
      }
    }

    for (let [position, index] of targetTokenIndexArray.entries()) {
      console.log("Target token index: " + index);
      if (tokenIndex > index) {
        return;
      }
      valueToTake = index - tokenIndex;
      probabilityToTake = 0;
      switch (valueToTake) {
        case 1:
          probabilityToTake = _1probability;
          rosetteProbability = takeViaRosette(
            index,
            tokenIndex,
            rosetteIndex_1,
            rosetteIndex_2
          );
          break;
        case 2:
          probabilityToTake = _2probability;
          rosetteProbability = takeViaRosette(
            index,
            tokenIndex,
            rosetteIndex_1,
            rosetteIndex_2
          );
          break;
        case 3:
          probabilityToTake = _3probability;
          rosetteProbability = takeViaRosette(
            index,
            tokenIndex,
            rosetteIndex_1,
            rosetteIndex_2
          );
          break;
        case 4:
          probabilityToTake = _4probability;
          rosetteProbability = takeViaRosette(
            index,
            tokenIndex,
            rosetteIndex_1,
            rosetteIndex_2
          );
          break;

        default:
          rosetteProbability = takeViaRosette(
            index,
            tokenIndex,
            rosetteIndex_1,
            rosetteIndex_2
          );

          break;
      }
      console.log("Value needeed to take: " + valueToTake);
      console.log(
        "Probability of direct taking: " + probabilityToTake * 100 + "%"
      );
      console.log(
        "Probability to take via rosette: " + rosetteProbability + "%"
      );
      console.log("Taker id: " + tokenOnFieldId);
      console.log("Target id: " + targetTokenIDArray[position]);

      console.log("Token index: " + tokenIndex);

      console.log(targetTokenIDArray);

      console.log(targetTokenIndexArray);

      if (tokenIndex == -1) {
        probabilityDisplay.innerHTML += `Value needeed to take token <strong>${targetTokenIDArray[position]}</strong> for token on start: " ${valueToTake} <br>`;
        probabilityDisplay.innerHTML += `Probability of direct taking token <strong>${
          targetTokenIDArray[position]
        }</strong> for tokens on start: " ${probabilityToTake * 100}% <br>`;
        probabilityDisplay.innerHTML += `Probability of taking token <strong>${targetTokenIDArray[position]}</strong> via rosette for tokens on start: " ${rosetteProbability}%<br><br>`;
      } else {
        probabilityDisplay.innerHTML += `Value needeed to take token <strong>${targetTokenIDArray[position]}</strong> for token with ID <strong>${tokenOnFieldId}</strong>: " ${valueToTake}<br>`;
        probabilityDisplay.innerHTML += `Probability of direct taking token <strong>${
          targetTokenIDArray[position]
        }</strong> for for token with ID <strong>${tokenOnFieldId}</strong>: " ${
          probabilityToTake * 100
        }% <br>`;
        probabilityDisplay.innerHTML += `Probability of taking token <strong>${targetTokenIDArray[position]}</strong> via rosette for token with ID <strong>${tokenOnFieldId}</strong>: " ${rosetteProbability}%<br><br>`;
      }
    }
  }
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

function takeViaRosette(i, tokenIndex, rosetteIndex_1, rosetteIndex_2) {
  if (i >= rosetteIndex_1 && i <= rosetteIndex_2) {
    if (tokenIndex < rosetteIndex_1) {
      const distanceToRosette = rosetteIndex_1 - tokenIndex;
      const probabilityToRosette = probabilities(distanceToRosette);

      const distanceFromRosetteToTarget = i - rosetteIndex_1;
      const probabilityFromRosetteToTarget = probabilities(
        distanceFromRosetteToTarget
      );

      return probabilityToRosette * probabilityFromRosetteToTarget * 100;
    }
  } else if (i >= rosetteIndex_2) {
    if (tokenIndex < rosetteIndex_1) {
      const distanceTo1stRosette = rosetteIndex_1 - tokenIndex;
      const probabilityTo1stRosette = probabilities(distanceTo1stRosette);

      const ProbabilityFrom1stTo2ndRosette = 1 / 16;

      const distanceFrom2ndRosetteToTarget = i - rosetteIndex_2;
      const probabilityFrom2ndRosetteToTarget = probabilities(
        distanceFrom2ndRosetteToTarget
      );

      return (
        probabilityTo1stRosette *
        ProbabilityFrom1stTo2ndRosette *
        probabilityFrom2ndRosetteToTarget *
        100
      );
    } else if (tokenIndex >= rosetteIndex_1) {
      const distanceTo2ndRosette = rosetteIndex_2 - tokenIndex;
      const probabilityTo2ndRosette = probabilities(distanceTo2ndRosette);

      const distanceFrom2ndRosetteToTarget = i - rosetteIndex_2;
      const probabilityFrom2ndRosetteToTarget = probabilities(
        distanceFrom2ndRosetteToTarget
      );

      return probabilityTo2ndRosette * probabilityFrom2ndRosetteToTarget * 100;
    }
  }
}

/*
Sto se tice onog drugog dijela vjezbe, ideja bi bila:

Prva 4 polja imaju vrijednost 1 dok su svi u kuci tokeni

Svako "nesigurno" polje ima vrijednost koja je jednaka vjerovatnoci da najblizi token tom polju stane na njega (ili nesto na tu foru)
pr: ako je crni token na prvom polju kod svoje kuce, znaci da moze da stane na prvo "nesigurno" polje direktno, bez rozete pa je to polje opasnije nego ono pored njega koje zahtjeva
    da stane na rozetu pa onda na njega, i tako za svako

Opet, ako se gleda koje je polje najbolje/najgore za uzimanje protivnickog tokena, onda je bolje da na osnovu pozicije protivnickog gleda gdje treba da se stane da bi se pojeo
(moze se iskoristit ova funkcija za vjerovatnocu, valjda ima sve sta znam lmao (valjalo bi stavit da vraca ove vjerovatnoce u tom slucaju))

Ako nema protivnika na "nesigurnim", onda pici rendom
*/

let counter = 0;
function occupiedResolver(occupied, token, p2_tokens, fields_p2, index) {
  return new Promise((resolve, reject) => {
    console.log("TOKEN DIREKT IZ ULAZNOG PARAMETRA ");
    console.log(token);

    console.log("INDEKS DIREKT IZ ULAZNOG PARAMETRA " + index);
    if (rolledNumber === 0) {
      resolve(false);
      return;
    }

    setTimeout(() => {
      let tokenIndex =
        typeof findTokenOnTileIndex(fields_p2, token) == "undefined"
          ? -1
          : findTokenOnTileIndex(fields_p2, token);
      occupied = occupiedCheck(fields_p2, token, index, p2_tokens);

      if (occupied) {
        token = p2_tokens[counter].token;
        tokenIndex =
          typeof findTokenOnTileIndex(fields_p2, token) == "undefined"
            ? -1
            : findTokenOnTileIndex(fields_p2, token);

        // if (tokenIndex <= index) {
        counter++;
        occupiedResolver(occupied, token, p2_tokens, fields_p2, index);
        return;
        //}
      }
      console.log("Occupied iz loop funkcije: " + occupied);
      console.log("TOKEN INDEX IZ LOOPA " + tokenIndex);
      console.log("INDEKS PLUS ROLOVANI BROJ: " + (tokenIndex + rolledNumber));
      console.log("TOKEN U RESOLVEU LOOPA");
      console.log(token);
      console.log("\n\n\n");
      counter = 0;
      fields_p2[rolledNumber + tokenIndex].field.appendChild(token);
      resolve(token);
    }, 1000);
  });
}

async function aiMove(
  tokens,
  fields,
  beginningField,
  opponentBeginingField,
  opponentTokens
) {
  try {
    roll_btn.click();
    console.log("ROLLED NUMBER " + rolledNumber);

    let token = tokens[Math.floor(Math.random() * tokens.length)].token;

    token.disabled = false;
    clearGreen(fields);
    const index = beginningField.contains(token)
      ? rolledNumber - 1
      : findTokenOnTileIndex(fields, token) + rolledNumber;

    let isOccupied = occupiedCheck(fields, token, index, tokens);

    token = await occupiedResolver(isOccupied, token, tokens, fields, index);

    if (fields[index].rosette) {
      console.log("Jeste rozeta");
      roll_btn.click();
      whoseTurn.innerHTML = "white's";
      //isP1sTurn = false;
    }
    if (index >= fields.length) {
      console.log("Presisalo  ");
      return;
    }

    //console.log(takeCheck(fields, p1_tokens, index));
    const [tkn, isTaken] = takeCheck(fields, opponentTokens, index);

    if (isTaken) {
      opponentBeginingField.appendChild(tkn);
    }

    token.isClicked = false;

    //isP1sTurn = true;
    whoseTurn.innerHTML = "black's";
    roll_display.innerHTML = "";
  } catch (error) {
    console.error(error);
  }
}

function run() {
  if (!isP1sTurn) {
    aiMove(p2_tokens, fields_p2, beginingField_p2, beginingField_p1, p1_tokens);
    isP1sTurn = true;
  } else {
    //aiMove(p1_tokens, fields, beginingField_p1, beginingField_p2, p2_tokens);
    roll();
    //isP1sTurn = false;
  }

  setTimeout(() => {
    requestAnimationFrame(run);
  }, 1000);
}

run();
