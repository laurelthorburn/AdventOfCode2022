const data = ['removed input'];

// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.

const letterScoreDictionary = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52
};

const commonLetterScore = data.map((rucksack) => {
    const half = (rucksack.length/2)
    const firstHalf = rucksack.slice("", half);
    const secondHalf = rucksack.slice(half);

    for (let i = 0; i < firstHalf.length; i++) {
        for (let j = 0; j < secondHalf.length; j++) {
                if (firstHalf[i] === secondHalf[j]) {
                    return letterScoreDictionary[firstHalf[i]];
                } else continue
        }
    }
})

const initialValue = 0;
const totalScore = commonLetterScore.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)

// console.log({totalScore})

// part two
// within each group of three Elves, the badge is the only item type carried by all three Elves. That is, if a group's badge is item type B, then all three Elves will have item type B somewhere in their rucksack, and at most two of the Elves will be carrying any other item type.
// The only way to tell which item type is the right one is by finding the one item type that is common between all three Elves in each group.

const elfGroups = [];
const elfGroupSize = 3;
    for (let i = 0; i < data.length; i += elfGroupSize) {
        elfGroups.push(data.slice(i, i + elfGroupSize));
}

const badges = elfGroups.map((group) => {
    for(let i = 0; i < group[0].length; i++){
        if((group[1].includes(group[0][i])) && (group[2].includes(group[0][i]))){
            return letterScoreDictionary[group[0][i]]
        }
        continue
    }
});

const totalBadgeScore = badges.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)

console.log(totalBadgeScore)
