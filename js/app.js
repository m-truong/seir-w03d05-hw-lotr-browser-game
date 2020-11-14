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

function makeMiddleEarth () { 
  console.log("1: makeMiddleEarth");

  // 1. create a section tag with an id of middle-earth
    const sectionTag = document.createElement("section");

  // 2. use a for loop to iterate over the lands array that does the following:
  for (let k = 0 ; k < lands.length ; k++) {
  //   2a. creates an article tag (there should be one for each land when the loop is done)
      const articleTag = document.createElement("article"); 
  //   2b. gives each land article an `id` tag of the corresponding land name
      articleTag.setAttribute("id", `${lands[k]}`); 
  //   2c. includes an h1 with the name of the land inside each land article
      const h1Tag = document.createElement("h1"); 

      h1Tag.innerText = `${lands[k]}`;

      articleTag.appendChild(h1Tag); 
  //   2d. appends each land to the middle-earth section
      sectionTag.appendChild(articleTag); 
  }
  // 3. append the section to the body of the DOM.
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

  // dependent on The Lands Array from before
  const shire = document.querySelector("#The-Shire");

  // display an `unordered list` of hobbits in the shire
  const uList = document.createElement("ul"); // create <ul>
  uList.setAttribute("id", "getHobbits");

  // for-loop that needs to make new <li> for hobbits array
  for (let k = 0 ; k < hobbits.length; k++) {

    // add loop that creates listItems 
    const lItem = document.createElement("li"); // create <li>

    // change the innerHTML of  listItem 
    lItem.innerHTML = hobbits[k]; 

    // give each hobbit a class of `hobbit`
    lItem.setAttribute("class", "hobbit");

    // appends to the uList 
    uList.appendChild(lItem);
  }

  shire.appendChild(uList);

  // hint: create a 'ul' outside the loop into which to append the 'li's
  // hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".


// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() { 
  console.log("3: keepItSecretKeepItSafe");

  // create a div with an id of `'the-ring'`
  const theRingDiv = document.createElement("div");
  theRingDiv.setAttribute("id", "the-ring");

  // give the div a class of `'magic-imbued-jewelry'`
  theRingDiv.setAttribute("class", "magic-imbued-jewelry");

  // add the ring as a child of `Frodo`
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

  // display an unordered list of baddies in Mordor
  const uList = document.createElement("ul");
  uList.setAttribute("id", "baddy")

  for (let k = 0 ; k < baddies.length ; k++) {
  
    const lItem = document.createElement("li");

    // give each of the baddies a class of "baddy"
    lItem.setAttribute("class", `baddy`);

    // change the innerHTML of  listItem 
    lItem.innerHTML = baddies[k]; 

    // appends to the uList 
    uList.appendChild(lItem);

  }

  // remember to append them to Mordor
  mordor.appendChild(uList);

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..


// ============
// Chapter 5
// ============

function makeBuddies () { 
  console.log("5: makeBuddies");
  const rivendell = document.querySelector("#Rivendell");

  // create an `aside` tag
  const aside = document.createElement("aside");
  
  const uList = document.createElement("ul");
  uList.setAttribute("id", "buddy");

  for (let k = 0 ; k < buddies.length;  k++) {
  // put an `unordered list` of the `'buddies'` in the aside
    const lItem = document.createElement("li");

        // give each of the baddies a class of "baddy"
        lItem.setAttribute("class", `buddy`);

        // change the innerHTML of  listItem 
        lItem.innerHTML = buddies[k]; 
    
        // appends to the uList 
        uList.appendChild(lItem);
  }
  aside.appendChild(uList);
   // insert your aside as a child element of `rivendell`
   rivendell.appendChild(aside);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".


// ============
// Chapter 6
// ============

function leaveTheShire() { 
  console.log("6: leaveTheShire");
    // assemble the `hobbits` and move them to `rivendell`
    const assembledHobbits = document.querySelector("#getHobbits");

    // call .remove() directly on child-node from Parent-Node
    assembledHobbits.remove();
    // still stored in variable

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

  // change the `'Strider'` text to `'Aragorn'`
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
  // create a new div called `'the-fellowship'` within `rivendell`
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

  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  // after each character is added make an alert that they // have joined your party
  
  // NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() { 
  console.log("9: theBalrog");
   // change the `'Gandalf'` text to `'Gandalf the White'`
   const buddyList = document.querySelectorAll(".buddy");
 
   const gandalf = buddyList.item(0);
   
   gandalf.innerHTML = `Gandalf the White`;
   // apply the following style to the element, make the // background 'white', add a grey border
   gandalf.setAttribute("style", "background: white; border: 1px solid grey;")
  }

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"


// ============
// Chapter 10
// ============

function hornOfGondor() { 
  console.log("10: hornOfGondor");
  // pop up an alert that the horn of gondor has been blown
  alert(`The Horn of Gondor has been blown!`);
  // Boromir's been killed by the Uruk-hai!
  alert(`Boromir has been killed by the Uruk-hai!`);
  // Remove `Boromir` from the Fellowship
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
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
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


  // add a div with an id of `'mount-doom'` to `Mordor`
  const mountDoomDiv = document.createElement("div");
  // mountDoomDiv.innerHTML = `Mount Doom`;
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
  // Create a div with an id of `'gollum'` and add it to Mordor
  const gollumDiv = document.createElement("div");
  gollumDiv.setAttribute("id", "gollum");
  // gollumDiv.innerHTML = `Gollum`;
  const mordor = document.querySelector("#Mordor");

  mordor.appendChild(gollumDiv);
  // Remove `the ring` from `Frodo` and give it to `Gollum`

  const theRingDiv = document.querySelector("#the-ring");
  theRingDiv.remove();
  gollumDiv.appendChild(theRingDiv);

  // Move Gollum into Mount Doom
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
  // remove `Gollum` and `the Ring` from the document
  const theRingDiv = document.querySelector("#the-ring");
  const gollumDiv = document.querySelector("#gollum");
  const baddies = document.querySelector("#baddy");
  baddies.remove();
  theRingDiv.remove();
  gollumDiv.remove();

  // Move all the `hobbits` back to `the shire`
  // const hobbitsGoHome = document.querySelector(".getHobbits");
  // console.log(hobbitsGoHome);
  // hobbitsGoHome.remove();

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
  // shire.appendChild(hobbitsGoHome);

  console.log(shire);

  setTimeout(() => {alert("I did it!")}, 1000);
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
