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

//Player 2 setup ovdje, svi tokeni
const beginingField_p2 = document.getElementById("blank_3_1");

const p1_token = document.createElement("button");
p1_token.setAttribute("id", "p1");
p1_token.style.height = "50px";
p1_token.style.width = "50px";
p1_token.style.borderRadius = "50%";
p1_token.style.backgroundColor = "black";

const p2_token = document.createElement("button");
p2_token.setAttribute("id", "p2");
p2_token.style.height = "50px";
p2_token.style.width = "50px";
p2_token.style.borderRadius = "50%";
p2_token.style.backgroundColor = "white";

//Takodje nadji nacin da zapravo mozes da imas tacno 7 ovih cuda i da mogu da izlaze iz kucice

beginingField_p1.appendChild(p1_token);
beginingField_p2.appendChild(p2_token);

//Ovdje DOM elementi
const roll_btn = document.getElementById("roll");
const roll_display = document.getElementById("rolled_no");
const whoseTurn = document.getElementById("whoseTurn");

//Ovdje vecina varijabli ide
let p1_is_clicked = false;
let p2_is_clicked = false;

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
p1_token.addEventListener("click", () => {
  p1_is_clicked = true;
});

p2_token.addEventListener("click", () => {
  p2_is_clicked = true;
});

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
    move(rolledNumber, fields, p1_token, beginingField_p1);
    isP1sTurn = false;
  } else {
    move(rolledNumber, fields_p2, p2_token, beginingField_p2);
    isP1sTurn = true;
  }
});

function move(rolledNumber, fields, token, beginningField) {
  let previous_index = 0;
  const index = beginningField.contains(token)
    ? rolledNumber - 1
    : findTileIndex(fields, token) + rolledNumber;
  console.log("INDEX: " + index);

  fields[index].field.style.backgroundColor = "green";

  //provjeri je li p1 u pitanju pa ako jeste, trazi p2 token i obrnuto
  if (token == p1_token) {
    takeCheck(fields, p1_token, p2_token, index, beginingField_p2);
  } else {
    takeCheck(fields, p2_token, p1_token, index, beginingField_p1);
  }

  fields[index].field.addEventListener("click", (e) => {
    if (p1_is_clicked || p2_is_clicked) {
      fields[index].field.style.backgroundColor = "#efefef";
      p1_is_clicked = false;
      p2_is_clicked = false;
      fields[index].field.disabled = true;
      beginningField.contains(token) ? beginningField.removeChild(token) : null;
      fields[index].field.appendChild(token);

      previous_index = index - rolledNumber;
      previous_index !== -1
        ? (fields[previous_index].field.disabled = false)
        : null;
      console.log("PREV INDEX: " + previous_index);
    }
  });
}

//Funkcija za uzimanje kruzica ce gledat ciji je potez i ako je suprotan kruzic na sljedecem polju onda ga pojede

function findTileIndex(fields, token) {
  for (let i = 0; i < fields.length; i++) {
    if (fields[i].field.contains(token)) {
      return i;
    }
  }
}

function takeCheck(fields, takerToken, targetToken, index, beginningField) {
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
    fields[index].field.contains(targetToken) &&
    tokenOnFieldId === targetToken.id
  ) {
    console.log("POJEO");
    beginningField.appendChild(targetToken);
    fields[index].field.appendChild(takerToken);
  }
}
