let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessfield")

const guessSlot = document.querySelector(".guesses")
const remainingchances = document.querySelector(".Lastresult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector("#resultpara")

const p = document.querySelector("p")

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("please enter a Valid Number")
    } else if (guess < 1) {
        alert("please enter a number greater than 1")
    } else if (guess > 100) {
        alert("please enter a number less then 100")
    } else {
        prevGuess.push(guess)
        if (numGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game Over random number was ${randomNumber}`)
            EndGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('You Guessed it right')
        EndGame()
    } else if (guess < randomNumber) {
        displayMessage('You Guess it Tooo Low')
    } else if (guess > randomNumber) {
        displayMessage('You Guess it Too High')
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remainingchances.innerHTML = `${11 - numGuess}`
}

function displayMessage(Message) {
    lowOrHi.innerHTML = `<h2>${Message}</h2>`
}

function EndGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = '<h2 id="newGame">Start new Game</h2>'
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        newGuess = 1
        guessSlot.innerHTML = ''
        remainingchances.innerHTML = `${11 - newGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}


// let randomNumber = parseInt(Math.random() * 100 + 1)

// const submit = document.querySelector('#subt')
// const userInput = document.querySelector('#guessfield')

// const guessSlot = document.querySelector('#guesses')
// const remaining = document.querySelector('.Lastresult')
// const lowOrHi = document.querySelector('.lowOrHi')
// const startOver = document.querySelector('#resultpara')


// let p = document.querySelector('p')

// let prevGuess = []
// let numGuess = 1

// let playGame = true


// if (playGame) {

//     submit.addEventListener('click', function (e) {
//         e.preventDefault()
//         const guess = parseInt(userInput.value)
//         console.log(guess)
//         validateGuess(guess)
//     })
// }

// function validateGuess(guess) {
//     if (isNaN(guess)) {
//         alert(`You Enter Invalid Number`)
//     } else if (guess < 1) {
//         alert(`You Enter number less than 1`)
//     } else if (guess > 100) {
//         alert(`You Enter a Number Greater than 100`)
//     } else {
//         prevGuess.push(guess)
//         if (numGuess === 10) {
//             displayGuess(guess)
//             displayMessage(`Game Over Correct Number is ${randomNumber}`)
//             endGame()
//         } else {
//             displayGuess(guess)
//             checkGuess(guess)
//         }
//     }

// }

// function checkGuess(guess) {
//     if (guess === randomNumber) {
//         displayMessage(`You Guessed it right`)
//     } else if (guess < randomNumber) {
//         displayMessage(`You Guessed it Tooo Low`)
//     } else if (guess > randomNumber) {
//         displayMessage(`You Guessed it Tooo High`)
//     }
// }


// function displayGuess(guess) {
//     userInput.value = ''
//     guessSlot.innerHTML += `${guess}, `
//     numGuess++
//     remaining.innerHTML = `${10 - numGuess}`;
// }


// function displayMessage(message) {
//     lowOrHi.innerHTML = (`<h2>${message}</h2>`)
// }

// function endGame() {
//     userInput.value = ''
//     userInput.setAttribute('disabled', '')
//     p.classList.add('button')
//     p.innerHTML = '<h2 id ="newGame">Start New Game</h2>'
//     startOver.appendChild(p)
//     playGame = false
//     newGame()
// }

// function startGame() {
//     const newGameButton = document.querySelector('#newGame')
//     newGameButton.addEventListener('click', function (e) {
//         randomNumber = parseInt(Math.random() * 100 + 1)
//         prevGuess = []
//         newGuess = 1
//         guessSlot.innerHTML = ''
//         remainingchances.innerHTML = `${11 - newGuess}`
//         userInput.removeAttribute('disabled')
//         startOver.removeChild(p)

//         playGame = true
//     }
//     )
// }