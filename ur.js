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
    field: document.getElementById("1_5"),
    rosette: false,
    id: document.getElementById("1_5").id,
  },
  {
    field: document.getElementById("1_6_rosete"),
    rosette: true,
    id: document.getElementById("1_6_rosete").id,
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
    field: document.getElementById("3_5"),
    rosette: false,
    id: document.getElementById("3_5").id,
  },
  {
    field: document.getElementById("3_6_rosete"),
    rosette: true,
    id: document.getElementById("3_6_rosete").id,
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
    console.log(t.token.id);

    t.isClicked = true;
    console.log(t.isClicked);

    colorAvailableMove(beginingField_p1, t, fields);
  });
}

//ZA IGRACA 2
for (let [i, t] of p2_tokens.entries()) {
  t.token.addEventListener("click", () => {
    console.log(t.token.id);
    t.isClicked = true;
    console.log(t.isClicked);

    fields[i].field.style.backgroundColor = "#efefef";
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
    move(rolledNumber, fields, p1_tokens, beginingField_p1);
    isP1sTurn = false;
  } else {
    move(rolledNumber, fields_p2, p2_tokens, beginingField_p2);
    isP1sTurn = true;
  }
});

//FUNKCIJA ZA MRDANJE JELTE (prilagodi je za vise ovih tokena)
function move(rolledNumber, fields, tokens, beginningField) {
  for (let t of tokens) {
    let previous_index = 0;
    const index = beginningField.contains(t.token)
      ? rolledNumber - 1
      : findTileIndex(fields, t.token) + rolledNumber;
    console.log("INDEX: " + index);

    //provjeri je li p1 u pitanju pa ako jeste, trazi p2 token i obrnuto

    takeCheck(fields, t.token, index, beginingField_p2);

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
        console.log("PREV INDEX: " + previous_index);

        for (let i = 0; i < fields.length; i++) {
          if (i !== fields.length - 1) {
            fields[i].field.style.backgroundColor = "#efefef";
          }
        }
      }
    });
  }
}

//Funkcija za uzimanje kruzica ce gledat ciji je potez i ako je suprotan kruzic na sljedecem polju onda ga pojede
//Radi u svakom slucaju, ne mora se prilagodjavat za vise
function findTileIndex(fields, token) {
  for (let i = 0; i < fields.length; i++) {
    if (fields[i].field.contains(token)) {
      return i;
    }
  }
}

function colorAvailableMove(beginningField, t, fields) {
  const index = beginningField.contains(t.token)
    ? rolledNumber - 1
    : findTileIndex(fields, t.token) + rolledNumber;

  const tokenOnFieldId = fields[index].field.getElementsByTagName("*")[0]?.id;
  console.log("INDEX: " + index);
  console.log("TOKEN ON FIELD ID: " + tokenOnFieldId);
  console.log(
    "Sadrzi li token polje: " + fields[index].field.contains(t.token)
  );
  console.log("Polje: ");
  console.log(fields[index].field);

  console.log("Token: ");
  console.log(t.token);
  if (fields[index].field.contains(t.token)) {
    console.log("Ima token na ovome");
  }

  fields[index].field.style.backgroundColor = "green";
}

//Ovo pogledaj jos jedno 3, 4 puta
function takeCheck(fields, targetToken, index, beginningField) {
  const tokenOnFieldId = fields[index].field.getElementsByTagName("*")[0]?.id;
  console.log("TAKE CHECK");
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
