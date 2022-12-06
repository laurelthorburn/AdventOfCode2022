//     [H]         [H]         [V]
//     [V]         [V] [J]     [F] [F]
//     [S] [L]     [M] [B]     [L] [J]
//     [C] [N] [B] [W] [D]     [D] [M]
// [G] [L] [M] [S] [S] [C]     [T] [V]
// [P] [B] [B] [P] [Q] [S] [L] [H] [B]
// [N] [J] [D] [V] [C] [Q] [Q] [M] [P]
// [R] [T] [T] [R] [G] [W] [F] [W] [L]
//  1   2   3   4   5   6   7   8   9

const data = ['removed input'];

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
