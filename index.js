let player = {
    name: "Yan",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ":$" + player.chips

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard > 10) {
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i]
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}








/* let age = 18

if (age < 21) {
  console.log("You can not enter the club!")
}else {
  console.log("Welcome!")
}

let age = 88
if (age < 100) {
  console.log("Not elegible")
}else if (age === 100) {
  console.log("Here is your birthday card from the King!")
}else {
  console.log("Not elegible, you've already gotten one")
} */


/* console.log(4 === 3) // false
console.log(5 > 2) // true
console.log(12 > 12) // false
console.log(3 < 0) // false
console.log(3 >= 3) // true
console.log(11 <= 11) // true
console.log(3 <= 2) // false */


/* Arrays  are 0 indexed , orderd list of items - coposite/ complex data type

let featuredPosts = [
    "A project I've created for fourtunetelling", // 0
    "Handy designing app for permaculture designers", // 1
    "I've relaunched my portfolio" //2
]

console.log(featuredPosts.length) // 3


let myselfIntro = [
    "Yan Jiang", 33, true]


let cards = [7, 4]

cards.push(6) */


/* let messages = [
    "Hey, how's goin?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage)
console.log(messages)

messages.pop()
console.log(messages) */



// @ for loops 

/* //    START       FINISH       STEP SIZE
for (let count = 10; count < 21; count += 1) {
    console.log(count)

}


for (let i = 10; i < 101; i += 10) {
    console.log(i)
}

let cards = [7, 3, 9]

for (let i = 0; i < cards.length; i++) {
    console.log(cards[i])
} */




/* let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
} */

/* // let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

function getTotalRaceTime() {
    return player1Time + player2Time
}

let totalRaceTime = getTotalRaceTime()
console.log(totalRaceTime) */


/* let randomNumber = Math.random() * 6
console.log(randomNumber)

Math.random() generates a random number between 0 and 1 (not inclusive of 1) 0.000~0.999

Math.random() * 6 0.000~5.999

let flooredNumber = Math.floor(3.45632)
console.log(flooredNumber) //Math.floor() removes the decimals.

let randomNumber = Math.floor(Math.random() * 6)
console.log(randomNumber)
// 0 | 1 | 2 | 3 | 4 | 5 */



/* function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    return randomNumber
}

console.log(rollDice()) */



/* let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse === true && givesCertificate === true) {
    generateCertificate()
}

function generateCertificate() {
    console.log("Genertating certificate....")
} */



/* let hasSolvedChallenge = false
let hasHintsLeft = false

if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution()
}

function showSolution() {
    console.log("Showing the solution....")
} */


/* let likesDocumentaries = true
let likesStartups = false

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
} */


// Objects - store data in-depth - composite / complex data type  - key-value pairs


/* let course = {
    title: "Learn CSS Grid for free",
    lessons: 6,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}

console.log( course.tags ) */


/* let castleFeature = {
    title: "Perfect house",
    price: 888,
    electricity: true,
    area: 1000,
    owener: "Yan Jiang",
    images: ["img/castle1.png", "img/castle2.png"]
    tags: ["oceanview", "organic farming"]
}

console.log(castleFeature.area)
console.log(castleFeature.tags) */


/* RECAP
@ Arrays   
    xxx =  [] or [x,x] 以及 xxx.push(y)
@ Objects  
    let xxx = { yy:"string",oo:numbers,ss:[array],ll:booleans}
@ Booleans 
    true or false
@ if else statement 
    if () {} else if () {} else {}
@ comparison operators
    > < >= <= ===
@ logical operators
    && and     || or
@ for loops
    for (let i = 0; i < array.lenth; i++) {
        xxxEl.textContent += array[i]
    }
@ the Math object
    Math.random() * 5
    Math.floor(Math.random()*5)
@ return statement
    if () { return ....}
*/