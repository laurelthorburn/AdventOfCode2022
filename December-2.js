const rounds = const data = ['removed input'];

const scoreDictionary = {
    "X": 1, // rock
    "Y": 2, // paper
    "Z": 3, // scissors
    WIN: 6,
    DRAW: 3,
    LOSE: 0
}

// "A": rock, "B": paper, "C": scissors
// "A" & "X" || "B" & "Y" || "C" & "Z" = draw
// "A" & "Z" || "B" & "X" || "C" & "Y" = lose
// "A" & "Y" || "B" & "Z" || "C" & "X" = win

const gameResult = (elfChoice, myChoice) => {
    if ((elfChoice === "A" && myChoice === "X") || (elfChoice === "B" && myChoice === "Y") || (elfChoice === "C" && myChoice === "Z")) {
        return "DRAW"
    } else if ((elfChoice === "A" && myChoice === "Z") || (elfChoice === "B" && myChoice === "X") || (elfChoice === "C" && myChoice === "Y")) {
        return "LOSE"
    } else if ((elfChoice === "A" && myChoice === "Y") || (elfChoice === "B" && myChoice === "Z") || (elfChoice === "C" && myChoice === "X")) {
        return "WIN"
    }
    return "error, laurel messed up" // can default to win but wanted to log this to catch my mistakes
}

// const myResults = [];

// rounds.map((round) => {
//     const result = scoreDictionary[gameResult(round[0], round[1])];
//     const myChoice = scoreDictionary[round[1]];

//     myResults.push(result, myChoice);
// });

// const initialValue = 0;
// const totalScore = myResults.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)

// console.log({totalScore})

// part 2, now the game has changed... X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck!"

const updatedDictionary = {
    "X": 0, // lose
    "Y": 3, // draw
    "Z": 6, // win
    "A": 1, // rock
    "B": 2, // paper
    "C": 3 // scissors
}

// "A": rock, "B": paper, "C": scissors
// "A" & "X" || "C" & "Y" || "B" & "Z" = "C"
// "B" & "Y" || "A" & "Z" || "C" & "X" = "B"
// "C" & "Z" || "B" & "X" || "A" & "Y" = "A"

const myPlay = (elfChoice, gameResult) => {
    if ((elfChoice === "A" && gameResult === "X") || (elfChoice === "C" && gameResult === "Y") || (elfChoice === "B" && gameResult === "Z")){
        return "C"
    } else if ((elfChoice === "B" && gameResult === "Y" )|| (elfChoice === "A" && gameResult === "Z") || (elfChoice === "C" && gameResult === "X")){
        return "B"
    }
    else if ((elfChoice === "C" && gameResult === "Z") || (elfChoice === "B" && gameResult === "X") || (elfChoice === "A" && gameResult === "Y") ){
        return "A"
    }
    return "error, laurel messed up" // can default to win but wanted to log this to catch my mistakes
}

const myResults = [];

rounds.map((round) => {
    const result = updatedDictionary[myPlay(round[0], round[1])];
    const myChoice = updatedDictionary[round[1]];

    myResults.push(result, myChoice);
});

const initialValue = 0;
const totalScore = myResults.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)

console.log({totalScore})
