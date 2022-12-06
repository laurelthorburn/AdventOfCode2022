//     [H]         [H]         [V]
//     [V]         [V] [J]     [F] [F]
//     [S] [L]     [M] [B]     [L] [J]
//     [C] [N] [B] [W] [D]     [D] [M]
// [G] [L] [M] [S] [S] [C]     [T] [V]
// [P] [B] [B] [P] [Q] [S] [L] [H] [B]
// [N] [J] [D] [V] [C] [Q] [Q] [M] [P]
// [R] [T] [T] [R] [G] [W] [F] [W] [L]
//  1   2   3   4   5   6   7   8   9

const data = [
    "move 3 from 3 to 7","move 4 from 1 to 9","move 5 from 6 to 3","move 6 from 9 to 8","move 2 from 9 to 5","move 4 from 3 to 7","move 1 from 3 to 6","move 3 from 5 to 7","move 1 from 2 to 1","move 4 from 7 to 8","move 17 from 8 to 7","move 1 from 6 to 2","move 2 from 6 to 7","move 1 from 8 to 3","move 2 from 4 to 6","move 3 from 9 to 6","move 5 from 6 to 3","move 5 from 2 to 1","move 9 from 3 to 4","move 20 from 7 to 3","move 7 from 5 to 3","move 6 from 3 to 5","move 4 from 1 to 9","move 4 from 5 to 6","move 2 from 1 to 8","move 2 from 7 to 3","move 3 from 6 to 3","move 2 from 5 to 8","move 2 from 9 to 3","move 1 from 9 to 6","move 2 from 2 to 4","move 26 from 3 to 4","move 28 from 4 to 6","move 8 from 6 to 1","move 4 from 8 to 6","move 1 from 9 to 3","move 2 from 3 to 6","move 1 from 3 to 9","move 26 from 6 to 9","move 2 from 7 to 3","move 5 from 1 to 4","move 1 from 1 to 4","move 1 from 6 to 5","move 1 from 2 to 5","move 2 from 3 to 7","move 2 from 5 to 8","move 10 from 4 to 5","move 1 from 6 to 1","move 1 from 8 to 5","move 2 from 7 to 2","move 4 from 4 to 3","move 4 from 7 to 2","move 2 from 1 to 8","move 12 from 9 to 2","move 5 from 2 to 3","move 3 from 3 to 1","move 1 from 1 to 7","move 6 from 3 to 8","move 1 from 5 to 3","move 10 from 9 to 1","move 7 from 8 to 7","move 1 from 3 to 9","move 7 from 7 to 2","move 3 from 2 to 9","move 6 from 2 to 9","move 5 from 9 to 1","move 7 from 2 to 1","move 21 from 1 to 7","move 2 from 1 to 2","move 5 from 2 to 3","move 2 from 4 to 3","move 10 from 5 to 4","move 11 from 4 to 7","move 5 from 3 to 1","move 1 from 4 to 2","move 2 from 8 to 3","move 7 from 9 to 3","move 3 from 9 to 1","move 9 from 7 to 9","move 1 from 3 to 4","move 3 from 9 to 4","move 5 from 9 to 3","move 4 from 3 to 8","move 22 from 7 to 8","move 10 from 3 to 5","move 1 from 9 to 4","move 8 from 1 to 5","move 3 from 4 to 9","move 1 from 3 to 6","move 2 from 1 to 7","move 1 from 4 to 3","move 1 from 4 to 7","move 1 from 2 to 1","move 1 from 6 to 9","move 1 from 3 to 7","move 1 from 1 to 7","move 4 from 9 to 3","move 22 from 8 to 5","move 37 from 5 to 9","move 37 from 9 to 6","move 3 from 7 to 9","move 2 from 8 to 6","move 1 from 9 to 3","move 2 from 5 to 1","move 1 from 2 to 5","move 7 from 6 to 4","move 18 from 6 to 2","move 1 from 3 to 7","move 1 from 5 to 4","move 1 from 8 to 5","move 9 from 2 to 5","move 3 from 4 to 6","move 2 from 2 to 7","move 5 from 2 to 3","move 1 from 8 to 1","move 1 from 9 to 4","move 2 from 7 to 8","move 7 from 3 to 7","move 3 from 1 to 3","move 1 from 9 to 5","move 17 from 6 to 2","move 12 from 7 to 9","move 1 from 4 to 8","move 1 from 8 to 4","move 4 from 5 to 2","move 2 from 8 to 9","move 3 from 4 to 2","move 3 from 3 to 7","move 2 from 4 to 3","move 8 from 9 to 1","move 1 from 4 to 2","move 24 from 2 to 1","move 6 from 5 to 1","move 1 from 7 to 4","move 3 from 2 to 8","move 3 from 3 to 7","move 1 from 4 to 6","move 2 from 8 to 5","move 3 from 9 to 4","move 1 from 5 to 3","move 1 from 3 to 5","move 3 from 9 to 8","move 1 from 5 to 7","move 5 from 7 to 9","move 2 from 8 to 4","move 1 from 3 to 2","move 1 from 7 to 3","move 1 from 8 to 5","move 1 from 2 to 9","move 1 from 6 to 2","move 2 from 9 to 8","move 1 from 3 to 7","move 24 from 1 to 3","move 1 from 7 to 6","move 3 from 5 to 1","move 1 from 4 to 3","move 1 from 8 to 6","move 1 from 6 to 4","move 1 from 5 to 4","move 1 from 8 to 5","move 1 from 5 to 7","move 1 from 2 to 5","move 1 from 6 to 3","move 1 from 4 to 9","move 1 from 5 to 7","move 2 from 9 to 2","move 3 from 4 to 8","move 2 from 4 to 3","move 11 from 1 to 9","move 7 from 9 to 1","move 9 from 1 to 9","move 1 from 3 to 7","move 3 from 7 to 4","move 2 from 2 to 6","move 2 from 4 to 1","move 1 from 6 to 7","move 22 from 3 to 7","move 1 from 3 to 5","move 1 from 5 to 2","move 1 from 6 to 7","move 5 from 1 to 9","move 1 from 8 to 5","move 1 from 2 to 1","move 15 from 9 to 4","move 6 from 9 to 6","move 14 from 4 to 1","move 5 from 6 to 2","move 1 from 5 to 1","move 9 from 1 to 4","move 5 from 1 to 3","move 3 from 2 to 6","move 2 from 8 to 1","move 5 from 1 to 9","move 10 from 7 to 8","move 3 from 3 to 8","move 2 from 8 to 7","move 5 from 4 to 9","move 3 from 3 to 5","move 1 from 6 to 9","move 1 from 3 to 9","move 1 from 3 to 6","move 1 from 3 to 7","move 2 from 6 to 9","move 2 from 4 to 1","move 13 from 9 to 8","move 2 from 1 to 4","move 6 from 4 to 9","move 1 from 6 to 2","move 1 from 2 to 3","move 3 from 5 to 3","move 4 from 3 to 2","move 7 from 9 to 2","move 1 from 6 to 4","move 4 from 2 to 5","move 2 from 2 to 1","move 4 from 5 to 8","move 1 from 4 to 2","move 6 from 2 to 1","move 2 from 2 to 1","move 22 from 8 to 2","move 16 from 7 to 4","move 14 from 2 to 7","move 7 from 8 to 2","move 4 from 7 to 1","move 14 from 2 to 1","move 10 from 7 to 1","move 1 from 7 to 3","move 1 from 3 to 4","move 1 from 2 to 5","move 25 from 1 to 5","move 1 from 5 to 3","move 4 from 4 to 2","move 13 from 4 to 6","move 4 from 2 to 1","move 3 from 6 to 2","move 9 from 1 to 2","move 22 from 5 to 4","move 1 from 2 to 7","move 8 from 1 to 5","move 1 from 4 to 5","move 15 from 4 to 3","move 11 from 2 to 1","move 1 from 7 to 3","move 2 from 5 to 1","move 13 from 3 to 5","move 10 from 6 to 7","move 1 from 3 to 4","move 1 from 3 to 6","move 1 from 3 to 9","move 1 from 9 to 5","move 1 from 6 to 2","move 6 from 4 to 9","move 1 from 3 to 7","move 1 from 5 to 1","move 3 from 5 to 6","move 1 from 4 to 3","move 12 from 5 to 6","move 1 from 2 to 8","move 4 from 1 to 7","move 1 from 3 to 2","move 1 from 2 to 6","move 9 from 6 to 4","move 1 from 8 to 7","move 3 from 1 to 2","move 2 from 2 to 5","move 5 from 4 to 6","move 1 from 4 to 6","move 6 from 7 to 3","move 6 from 5 to 7","move 12 from 7 to 4","move 1 from 2 to 8","move 6 from 9 to 5","move 1 from 8 to 9","move 1 from 3 to 6","move 4 from 4 to 1","move 1 from 7 to 9","move 4 from 4 to 6","move 2 from 9 to 7","move 7 from 5 to 1","move 3 from 1 to 4","move 4 from 3 to 1","move 10 from 6 to 9","move 1 from 3 to 5","move 8 from 4 to 6","move 2 from 5 to 2","move 4 from 7 to 4","move 1 from 5 to 9","move 5 from 4 to 7","move 1 from 4 to 8","move 2 from 2 to 6","move 1 from 5 to 3","move 4 from 9 to 6","move 11 from 6 to 8","move 1 from 1 to 4","move 1 from 4 to 1","move 1 from 3 to 1","move 10 from 1 to 4","move 3 from 9 to 5","move 1 from 9 to 3","move 2 from 7 to 4","move 3 from 9 to 4","move 3 from 5 to 8","move 1 from 3 to 5","move 15 from 8 to 2","move 8 from 1 to 4","move 2 from 1 to 2","move 10 from 2 to 3","move 1 from 5 to 7","move 3 from 7 to 8","move 10 from 3 to 5","move 4 from 4 to 2","move 7 from 4 to 1","move 2 from 7 to 4","move 1 from 8 to 9","move 5 from 1 to 6","move 13 from 6 to 2","move 2 from 1 to 4","move 15 from 4 to 5","move 1 from 9 to 3","move 1 from 3 to 4","move 2 from 8 to 3","move 20 from 2 to 6","move 3 from 2 to 8","move 2 from 3 to 8","move 9 from 5 to 2","move 6 from 5 to 9","move 2 from 4 to 1","move 8 from 5 to 4","move 2 from 8 to 1","move 5 from 9 to 5","move 3 from 5 to 7","move 1 from 8 to 2","move 2 from 4 to 1","move 14 from 6 to 4","move 2 from 1 to 8","move 5 from 6 to 3","move 3 from 1 to 6","move 5 from 3 to 2","move 1 from 9 to 6","move 8 from 6 to 2","move 2 from 7 to 4","move 1 from 1 to 3","move 2 from 5 to 8","move 5 from 4 to 3","move 2 from 5 to 3","move 1 from 7 to 5","move 4 from 4 to 3","move 2 from 4 to 2","move 1 from 3 to 7","move 5 from 3 to 7","move 1 from 7 to 3","move 3 from 3 to 2","move 1 from 5 to 9","move 2 from 7 to 9","move 1 from 9 to 5","move 1 from 5 to 3","move 10 from 4 to 9","move 3 from 3 to 9","move 27 from 2 to 5","move 3 from 8 to 3","move 2 from 2 to 6","move 4 from 9 to 7","move 5 from 3 to 8","move 5 from 7 to 3","move 25 from 5 to 1","move 3 from 9 to 8","move 1 from 3 to 2","move 1 from 5 to 3","move 2 from 7 to 9","move 10 from 8 to 7","move 1 from 2 to 3","move 13 from 1 to 7","move 3 from 9 to 7","move 3 from 3 to 1","move 1 from 5 to 8","move 2 from 8 to 6","move 4 from 6 to 5","move 4 from 5 to 6","move 1 from 4 to 6","move 23 from 7 to 9","move 2 from 6 to 8","move 28 from 9 to 1","move 1 from 8 to 1","move 3 from 7 to 3","move 1 from 9 to 4","move 3 from 3 to 6","move 3 from 3 to 4","move 6 from 6 to 8","move 12 from 1 to 7","move 9 from 1 to 6","move 3 from 6 to 3","move 2 from 4 to 7","move 4 from 8 to 7","move 1 from 8 to 5","move 1 from 8 to 4","move 8 from 1 to 7","move 1 from 3 to 4","move 1 from 8 to 3","move 3 from 7 to 5","move 9 from 1 to 3","move 3 from 6 to 5","move 3 from 1 to 7","move 4 from 4 to 2","move 3 from 1 to 4","move 4 from 2 to 8","move 1 from 6 to 2","move 3 from 5 to 6","move 4 from 8 to 5","move 9 from 7 to 6","move 12 from 7 to 1","move 5 from 7 to 3","move 1 from 9 to 7","move 1 from 2 to 9","move 1 from 9 to 4","move 7 from 6 to 3","move 5 from 6 to 2","move 1 from 7 to 6","move 3 from 6 to 1","move 2 from 4 to 9","move 7 from 5 to 8","move 2 from 9 to 4","move 1 from 5 to 8","move 4 from 4 to 1","move 11 from 1 to 7","move 8 from 3 to 1","move 8 from 8 to 6","move 3 from 3 to 5","move 5 from 6 to 1","move 2 from 1 to 2","move 6 from 2 to 3","move 2 from 6 to 7","move 3 from 5 to 4","move 7 from 3 to 9","move 5 from 9 to 5","move 3 from 4 to 3","move 4 from 5 to 2","move 2 from 9 to 4","move 6 from 1 to 9","move 1 from 6 to 9","move 7 from 7 to 1","move 1 from 7 to 3","move 2 from 4 to 5","move 1 from 9 to 1","move 4 from 2 to 3","move 2 from 5 to 2","move 9 from 3 to 1","move 3 from 2 to 4","move 28 from 1 to 6","move 2 from 1 to 3","move 17 from 6 to 3","move 2 from 9 to 5","move 2 from 6 to 7","move 1 from 5 to 7","move 1 from 9 to 4","move 5 from 6 to 9","move 14 from 3 to 5","move 15 from 5 to 9","move 1 from 4 to 9","move 1 from 5 to 6","move 1 from 4 to 1","move 11 from 3 to 6","move 1 from 1 to 6","move 12 from 6 to 8","move 4 from 9 to 7","move 20 from 9 to 4","move 18 from 4 to 5","move 6 from 5 to 8","move 12 from 8 to 2","move 2 from 2 to 6","move 1 from 5 to 2","move 4 from 4 to 8","move 5 from 5 to 9","move 4 from 3 to 6","move 1 from 3 to 8","move 7 from 7 to 8","move 10 from 2 to 8","move 1 from 6 to 3","move 10 from 6 to 5","move 10 from 5 to 2","move 2 from 7 to 5","move 9 from 2 to 1","move 27 from 8 to 9","move 2 from 2 to 7","move 9 from 1 to 2","move 1 from 5 to 3","move 9 from 2 to 1","move 1 from 8 to 7","move 2 from 1 to 3","move 19 from 9 to 1","move 5 from 5 to 1","move 3 from 9 to 2","move 2 from 3 to 9","move 1 from 3 to 4","move 5 from 7 to 4","move 1 from 7 to 3","move 17 from 1 to 2","move 1 from 5 to 3","move 9 from 9 to 5","move 2 from 1 to 2","move 1 from 4 to 9","move 2 from 4 to 6","move 1 from 4 to 7","move 6 from 1 to 8"
];


// const data = ["move 3 from 3 to 7","move 4 from 1 to 9","move 5 from 6 to 3"]

const boxesObject = {
    1: ["R", "N", "P", "G"],
    2: ["T", "J", "B", "L", "C", "S", "V", "H"],
    3: ["T", "D", "B", "M", "N", "L"],
    4: ["R", "V", "P", "S", "B"],
    5: ["G", "C", "Q", "S", "W", "M", "V", "H"],
    6: ["W", "Q", "S", "C", "D", "B", "J"],
    7: ["F", "Q", "L"],
    8: ["W", "M", "H", "T", "D", "L", "F", "V"],
    9: ["L", "P", "B", "V", "M", "J", "F"],
}

// const crateArrangement = data.map((instructions) =>{

// const divideInstructions = instructions.split(' ');

// for (let index = 0; index < divideInstructions[1]; index++) {
//     const oldLocation = Object.values(boxesObject[divideInstructions[3]]);
//     const newLocation = Object.values(boxesObject[divideInstructions[5]]);

//     const removedItem = oldLocation.pop();
//     newLocation.push(removedItem)

//     boxesObject[divideInstructions[3]] = oldLocation;
//     boxesObject[divideInstructions[5]] = newLocation;

// }

// return boxesObject
// });


// console.log(boxesObject)

// part two


const crateArrangement = data.map((instructions) =>{

const divideInstructions = instructions.split(' ');

    const oldLocation = Object.values(boxesObject[divideInstructions[3]]);
    const newLocation = Object.values(boxesObject[divideInstructions[5]]);

    const removedItem = oldLocation.slice((oldLocation.length - divideInstructions[1]), (oldLocation.length));
    for (let index = 0; index < removedItem.length; index++) {
        oldLocation.pop();
        newLocation.push(removedItem[index]);
    }
    boxesObject[divideInstructions[3]] = oldLocation;
    boxesObject[divideInstructions[5]] = newLocation;



return boxesObject
});

console.log(boxesObject) //PQTJRSHWS
