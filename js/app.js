console.log("Linked.");

// Dramatis Personae
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  'The-Shire',
  'Rivendell',
  'Mordor'
];

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
  console.log("1: makeMiddleEarth");
  const sectionTag = document.createElement("section");
  for (let k = 0; k < lands.length; k++) {
    const articleTag = document.createElement("article");
    articleTag.setAttribute("id", `${lands[k]}`);
    const h1Tag = document.createElement("h1");
    h1Tag.innerText = `${lands[k]}`;
    articleTag.appendChild(h1Tag);
    sectionTag.appendChild(articleTag);
  }
  const bodyTag = document.querySelector("body");
  bodyTag.appendChild(sectionTag);
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
  console.log("2: makeHobbits");
  const shire = document.querySelector("#The-Shire");
  const uList = document.createElement("ul");
  uList.setAttribute("id", "getHobbits");
  for (let k = 0; k < hobbits.length; k++) {
    const lItem = document.createElement("li");
    lItem.innerHTML = hobbits[k];
    lItem.setAttribute("class", "hobbit");
    uList.appendChild(lItem);
  }
  shire.appendChild(uList);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".


// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
  console.log("3: keepItSecretKeepItSafe");
  const theRingDiv = document.createElement("div");
  theRingDiv.setAttribute("id", "the-ring");
  theRingDiv.setAttribute("class", "magic-imbued-jewelry");
  const firstHobbit = document.querySelector(".hobbit");
  firstHobbit.setAttribute("id", "frodo");
  firstHobbit.appendChild(theRingDiv);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".


// ============
// Chapter 4
// ============

function makeBaddies() {
  console.log("4: makeBaddies");
  const mordor = document.querySelector("#Mordor");
  const uList = document.createElement("ul");
  uList.setAttribute("id", "baddy")
  for (let k = 0; k < baddies.length; k++) {
    const lItem = document.createElement("li");
    lItem.setAttribute("class", `baddy`);
    lItem.innerHTML = baddies[k];
    uList.appendChild(lItem);
  }
  mordor.appendChild(uList);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..


// ============
// Chapter 5
// ============

function makeBuddies() {
  console.log("5: makeBuddies");
  const rivendell = document.querySelector("#Rivendell");
  const aside = document.createElement("aside");
  const uList = document.createElement("ul");
  uList.setAttribute("id", "buddy");
  for (let k = 0; k < buddies.length; k++) {
    const lItem = document.createElement("li");
    lItem.setAttribute("class", `buddy`);
    lItem.innerHTML = buddies[k];
    uList.appendChild(lItem);
  }
  aside.appendChild(uList);
  rivendell.appendChild(aside);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".


// ============
// Chapter 6
// ============

function leaveTheShire() {
  console.log("6: leaveTheShire");
  const assembledHobbits = document.querySelector("#getHobbits");
  assembledHobbits.remove();
  const rivendell = document.querySelector("#Rivendell");
  rivendell.appendChild(assembledHobbits);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"


// ============
// Chapter 7
// ============

function beautifulStranger() {
  console.log("7: beautifulStranger");
  const buddyList = document.querySelectorAll(".buddy");
  const strider = buddyList.item(3);
  strider.innerHTML = `Aragorn`;
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"


// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
  console.log("8: forgeTheFellowShip");
  const theFellowshipDiv = document.createElement("div");
  theFellowshipDiv.setAttribute("id", "the-fellowship");
  theFellowshipDiv.setAttribute("class", "the-fellowship");
  const rivendell = document.querySelector("#Rivendell");
  rivendell.appendChild(theFellowshipDiv);
  const hobbitsJoinFellowship = document.querySelectorAll(".hobbit");
  const buddiesJoinFellowship = document.querySelectorAll(".buddy");
  const buddies = document.querySelector("#buddy");
  buddies.remove();
  const hobbits = document.querySelector("#getHobbits");
  hobbits.remove();
  for (let buddy of buddiesJoinFellowship) {
    theFellowshipDiv.appendChild(buddy);
    alert(`${buddy.textContent} has joined the Fellowship!`);
  }
  for (let hobbit of hobbitsJoinFellowship) {
    theFellowshipDiv.appendChild(hobbit);
    alert(`${hobbit.textContent} has joined the Fellowship!`);
  }
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
  console.log("9: theBalrog");
  const buddyList = document.querySelectorAll(".buddy");
  const gandalf = buddyList.item(0);
  gandalf.innerHTML = `Gandalf the White`;
  gandalf.setAttribute("style", "background: white; border: 1px solid grey;")
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"


// ============
// Chapter 10
// ============

function hornOfGondor() {
  console.log("10: hornOfGondor");
  alert(`The Horn of Gondor has been blown!`);
  alert(`Boromir has been killed by the Uruk-hai!`);
  const buddyList = document.querySelectorAll(".buddy");
  const boromir = buddyList.item(4);
  boromir.remove();
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"


// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
  console.log("11: itsDangerousToGoAlone");
  const hobbitList = document.querySelectorAll(".hobbit");
  const frodo = hobbitList.item(0);
  const sam = hobbitList.item(1);
  const merry = hobbitList.item(2);
  const pippin = hobbitList.item(3);
  sam.setAttribute("id", "sam");
  merry.setAttribute("id", "merry");
  pippin.setAttribute("id", "pippin");
  frodo.remove();
  sam.remove();
  const mordor = document.querySelector("#Mordor");
  mordor.appendChild(frodo);
  mordor.appendChild(sam);
  const mountDoomDiv = document.createElement("div");
  mountDoomDiv.setAttribute("id", "mount-doom");
  mountDoomDiv.setAttribute("class", "mount-doom");
  mordor.appendChild(mountDoomDiv);
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"


// ============
// Chapter 12
// ============

function weWantsIt() {
  console.log("12: weWantsIt");
  const gollumDiv = document.createElement("div");
  gollumDiv.setAttribute("id", "gollum");
  const mordor = document.querySelector("#Mordor");
  mordor.appendChild(gollumDiv);
  const theRingDiv = document.querySelector("#the-ring");
  theRingDiv.remove();
  gollumDiv.appendChild(theRingDiv);
  gollumDiv.remove();
  const mountDoomDiv = document.querySelector("#mount-doom");
  mountDoomDiv.appendChild(gollumDiv);
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
  console.log("13: thereAndBackAgain");
  const theRingDiv = document.querySelector("#the-ring");
  const gollumDiv = document.querySelector("#gollum");
  const baddies = document.querySelector("#baddy");
  baddies.remove();
  theRingDiv.remove();
  gollumDiv.remove();
  const frodo = document.querySelector("#frodo");
  frodo.remove();
  const sam = document.querySelector("#sam");
  sam.remove();
  const merry = document.querySelector("#merry");
  merry.remove();
  const pippin = document.querySelector("#pippin");
  pippin.remove();
  const shire = document.querySelector("#The-Shire");
  shire.appendChild(frodo);
  shire.appendChild(sam);
  shire.appendChild(merry);
  shire.appendChild(pippin);
  setTimeout(() => {
    alert("I did it!")
  }, 1000);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================


document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth);
document.getElementById('chapter-2').addEventListener('click', makeHobbits);
document.getElementById('chapter-3').addEventListener('click', keepItSecretKeepItSafe);
document.getElementById('chapter-4').addEventListener('click', makeBaddies);
document.getElementById('chapter-5').addEventListener('click', makeBuddies);
document.getElementById('chapter-6').addEventListener('click', leaveTheShire);
document.getElementById('chapter-7').addEventListener('click', beautifulStranger);
document.getElementById('chapter-8').addEventListener('click', forgeTheFellowShip);
document.getElementById('chapter-9').addEventListener('click', theBalrog);
document.getElementById('chapter-10').addEventListener('click', hornOfGondor);
document.getElementById('chapter-11').addEventListener('click', itsDangerousToGoAlone);
document.getElementById('chapter-12').addEventListener('click', weWantsIt);
document.getElementById('chapter-13').addEventListener('click', thereAndBackAgain);
document.getElementById('all-chapters').addEventListener('click', () => {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBaddies();
  makeBuddies();
  leaveTheShire();
  beautifulStranger();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});